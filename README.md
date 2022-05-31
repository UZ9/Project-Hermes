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

TODO

## `.env` File Configuration

The project utilizes several `.env` files in order to provide the project with critical information, such as API keys, database credentials, and tournament IDs. 

### Client `.env`
To begin, navigate to the `/client` folder and create a new file labelled `.env`. Notice that there isn't any name, only the file extension! 

After creating the file, open it using some sort of text editor (I personally recommend [Visual Studio Code](https://code.visualstudio.com/)) and fill out the following information:

<Note: this segment will be edited to provide better documentation later>
```
REACT_APP_SOCKET_URL=<YOUR IP ADDRESS>:5000
```

Example Data:
```
REACT_APP_SOCKET_URL=244.82.31.209:5000
```


### Server `.env`
Just like for the client folder, navigate to the `/server` directory and create a new file labelled `.env`, and fill out the following information:

```bash
DB_NAME=<MongoDB Database Name> 
DB_USER=<MongoDB Username>
DB_PASS=<MongoDB Password>
SKU=<Tournament SKU ID> 
API_KEY=<RobotEvents API Key>
```

### 

### 

TODO

## :memo: Usage ##

TODO

Made with :heart: by <a href="https://github.com/UZ9" target="_blank">Ryder</a>

&#xa0;

<a href="#top">Back to top</a>



