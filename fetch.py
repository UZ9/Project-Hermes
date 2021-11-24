import requests
import json
import time
import yaml
from bs4 import BeautifulSoup

credentials = yaml.safe_load(open('./config.yml'))

authKey = credentials['credentials']['api-key']

# Given as "Event Code" on the page's website
skuId = "RE-VRC-21-5182"

# Season ID
# 154 - 2021 Tipping Point
# (Found using the /seasons API call)
seasonId = "154"

# Robot events api url to pull from
baseApiUrl = "https://www.robotevents.com/api/v2/"

baseHeader = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + authKey
}

# Fetch Event ID using SKU
eventIdResponse = requests.get(
    baseApiUrl + "seasons/" + seasonId + "/events?sku=" + skuId, headers=baseHeader)

# Parse eventId from response
eventId = eventIdResponse.json()['data'][0]['id']

# Fetch list of teams from event
# Adding the per_page parameter stops the API from limiting the results to only 15 teams
teamResponse = requests.get(
    baseApiUrl + "events/" + str(eventId) + "/teams?per_page=100", headers=baseHeader)

currentDivisonRankingsResponse = requests.get(
    baseApiUrl + "events/" + str(eventId) + "/divisions/1/rankings?per_page=100", headers=baseHeader
)

currentDivisionRankings = currentDivisonRankingsResponse.json()['data']


# Parse json to get teamList dict
teamList = teamResponse.json()['data']


teamCount = len(teamList)

output = {}

# Loop through the teams
for teamIndex in range(1, teamCount + 1):
    team = teamList[teamIndex - 1]

    skillsResponse = requests.get(
        baseApiUrl + "teams/" + str(team["id"]) + "/skills?season=" + seasonId, headers=baseHeader)

    teamPage = requests.get(
        "https://robotevents.com/teams/VRC/" + str(team["number"]))

    # Parse HTML using BeautifulSoup
    soup = BeautifulSoup(teamPage.text, "html.parser")

    # Find info table containing skills standings, takes the 5th tr (the World Rank Standing : ... row) and finds the value from splitting \n
    worldsSkillRank = (soup.find("table", {"id": "info"}).findAll("tr")[
                       5].text.split("\n")[2])

    skills = skillsResponse.json()

    topDrivingSkills = 0
    topAutonSkills = 0

    for event in skills["data"]:
        if event["type"] == "driver":
            if event["score"] > topDrivingSkills:
                topDrivingSkills = event["score"]
        if event["type"] == "programming":
            if event["score"] > topAutonSkills:
                topAutonSkills = event["score"]

    output[str(team["number"])] = {
        "name": team["team_name"],
        "organization": team["organization"],
        "skills": {
            "driver": topDrivingSkills,
            "programming": topAutonSkills,
            "world-rank": worldsSkillRank
        }
    }

    time.sleep(0.1)
    print("Processing team (" + str(teamIndex) +
          "/" + str(teamCount) + ")", end="\r")

for ranking in currentDivisionRankings:
    teamName = str(ranking["team"]["name"])

    output[teamName]["division"] = {
        "ranking": ranking["rank"],
        "wins": ranking["wins"],
        "losses": ranking["losses"],
        "ties": ranking["ties"],
        "wp": ranking["wp"],
        "ap": ranking["ap"],
        "sp": ranking["sp"],
        "high_score": ranking["high_score"],
        "average_points": ranking["average_points"],
        "total_points": ranking["total_points"]
    }

print("\n")
print("==============================================")
print("Finished!")

with open("src/teamdata.json", "w") as outFile:
    json.dump(output, outFile)
