var robot = require("robotjs");
const express = require('express');
var web = express();
var morgan = require('morgan')
var bodyParser = require('body-parser')
var cors = require('cors')

web.use(bodyParser.urlencoded({ extended: false }))

// parse weblication/json
web.use(bodyParser.json())
web.use(cors());
web.use(morgan('dev'))
web.use(express.static('./'));

web.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

web.post('/', cors(), function (req, res, next) {
  robot.moveMouse(req.body.X, req.body.Y);
  console.log(req.body)
  res.send('POST request to the homepage');
});

var server = web.listen(3000);


// const electron = require('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
//
// var mainWindow = null;
//
// app.on('window-all-closed', function() {
//   app.quit();
// });
//
// app.on('ready', function() {
//   mainWindow = new BrowserWindow({fullscreen: true});
//   mainWindow.loadURL('file://' + __dirname + '/index.html');
//   mainWindow.webContents.openDevTools();
//   mainWindow.on('closed', function() {
//     mainWindow = null;
//   });
// });
