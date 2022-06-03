<div align="center" id="top"> 
  <img src="https://user-images.githubusercontent.com/36551149/171046103-333710d6-edba-4d59-ad9e-d653e948e83b.png" alt="Project Hermes" />
  &#xa0;
</div>

<h1 align="center">Project Hermes</h1>

<!-- <p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/BWHS-Robotics/pros-grafana-lib?color=56BEB8">
</p> -->


<h4 align="center"> 
	🚧 This project is still in development  🚧
</h4> 

<hr>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-usage">Usage</a> &#xa0; | &#xa0;
  <a href="https://github.com/Yerti" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

This project aims to improve the VEX Robotics tournament process by easily allowing multiple people to simultaneously scout and gather information on teams while also collectively displaying the data in an interactive dashboard.

## :sparkles: Features ##

:heavy_check_mark: Match data automatically fetched from RobotEvents\
:heavy_check_mark: Mobile friendly\
:heavy_check_mark: Realtime socket communication between clients\
:heavy_check_mark: Automatic team performance score indexer\
:heavy_check_mark: Team display dashboard\
:heavy_check_mark: Matches display for any team\
:heavy_check_mark: (WiP) Authentication system

## :rocket: Technologies ##

The following tools were used in this project:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Firebase](https://firebase.google.com/)
- [MongoDB](https://www.mongodb.com/)

## :white_check_mark: Development Requirements ##

- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/)

## :checkered_flag: Development Setup ##
To start, navigate to a folder you wish the project to be located in, and clone the repository:
```bash
git clone https://github.com/BWHS-Robotics/Project-Hermes.git
cd Project-Hermes
```

Once the project has been successfully downloaded, you use the following command to install any dependencies:

```bash
npm run install
```

## MongoDB Setup
The Scouting App stores a variety of match, scouting, skills data for each team in a MongoDB Database. As such, one is needed for develop. The following instructions will guide you on how to setup a free cloud-based MongoDB Server, as well as connecting it to your development workspace. 

In order to utilize MongoDB's free cloud tier, you need to first register an account [here](https://www.mongodb.com/cloud/atlas/register). After you confirm your account via email, you should be brought to a page like this: 

![image](https://user-images.githubusercontent.com/36551149/171782472-ad27d9ae-bfef-4b04-9a78-0a066a2c98d2.png)

### Creating a new Cluster

To begin, click on the giant green `Build a Database` button in the center of the screen. This will bring you to a list of cloud database plans, where you choose the free `Shared` option. 

For the next page, scroll down and write whatever **Cluster Name** you want to provide, and press the `Create Cluster` button in the bottom right of the page:

![image](https://user-images.githubusercontent.com/36551149/171782613-7e4b8066-467f-4a7c-ae0f-0bbfa60bd8ef.png)

This should bring you to the `Security Quickstart` page, in which you should do the following steps:

- For `How would you like to authenticate your connection` create a new user by specifying a **Username** and **Password** and then clicking **Create User**. Make sure you remember these!
- Add your IP Address to the `Where would you like to connect from` header by clicking **Add My Current IP Address**. If you host this on some sort of website (such as Heroku) you'll need to add its IP Address later on. 
- Hit the `Finish and Close` button


### Creating the Project Hermes Database


Now that you have a Cluster to hold the Database, you can create a new Database by selecting the newly created Cluster, and navigating to the **Collections** page:
![image](https://user-images.githubusercontent.com/36551149/171783522-de1e05f1-386d-4312-a462-27149f28a151.png)

Choose the `Add My Own Data` option under **Explore Your Data** and fill in the following information.

<p align="center">
	<img src="https://user-images.githubusercontent.com/36551149/171783623-ff0ab76f-9074-4972-ae93-2b043e43d97a.png">
</p>

<br>

Click on the green `Create` button to create the database.

## RobotEvents API & SKU ID

### RobotEvents API Key

For the program to actively pull data from robotevents, it requires an API key. You can create one by going to https://www.robotevents.com/api/v2 and clicking on `Request Access`. Assuming you're logged in, the website will provide instructions on generating a new key. This will be entered into the project's configuration file later on.

### SKU ID

For the program to know what tournament to pull from, it will need the SKU ID of the tournament. This can be found fairly straightforward by navigating to the tournament on RobotEvents and finding the `Event Code`. This should be in the format `RE-VRC-XX-XXXX`, and will be entered into the project's configuration file in the following step.  

## `.env` File Configuration

The project utilizes several `.env` files in order to provide the project with critical information, such as API keys, database credentials, and tournament IDs. 

### Client `.env`
To begin, navigate to the `/client` folder and create a new file labelled `.env`. Notice that there isn't any name, only the file extension! 

After creating the file, open it using some sort of text editor (I personally recommend [Visual Studio Code](https://code.visualstudio.com/)) and fill out the following information. If this happens to be hosted on a site like Heroku, the web address would be used rather than your IP Address (e.g. `https://<heroku project name>.herokuapp.com/`)

<Note: this segment will be edited to provide better documentation later>
```
REACT_APP_SOCKET_URL=<YOUR IP ADDRESS>:5000
```

Example Data:
```
REACT_APP_SOCKET_URL=244.82.31.209:5000
```


### Server `.env`
Just like for the client folder, navigate to the `/server` directory and create a new file labelled `.env`, and fill out the following information. Note that the MongoDB credentials are from the user you created specifically for the cluster, NOT your Atlas account. 

```bash
DB_NAME=hermes
DB_USER=<MongoDB Username>
DB_PASS=<MongoDB Password>
SKU=<Tournament SKU ID> 
API_KEY=<RobotEvents API Key>
```

###

## Running the project in development 

Now that everything for the project has been configured, you should be able to start the entire project using the following command:
```bash
npm run dev
```

This should start both the server and client for the program. Other commands include:

Run server only:
```bash
npm run server
```

Run client only:
```bash
npm run client
```

## :memo: Usage ##

Made with :heart: by <a href="https://github.com/UZ9" target="_blank">Ryder</a>

&#xa0;

<a href="#top">Back to top</a>



