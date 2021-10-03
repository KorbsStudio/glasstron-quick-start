const {app, BrowserWindow, contextBridge, ipcMain, ipcRenderer, shell} = require('electron'); // "shell" is not required, plus is included for the "goToGlasstronRepo" function
const glasstron = require('glasstron');
const path = require('path');

if (process.platform == 'darwin') { 
  app.whenReady().then(() => { // macOS
    global.blurType = "vibrancy";
})}
else if(process.platform == 'win32'){ 
  app.whenReady().then(() => { // Windows
    global.blurType = "acrylic";
})}
else{ 
  app.whenReady().then(() => { // Linux
    global.blurType = "blurbehind";
})}

function createWindow () {
  const mainWindow = new glasstron.BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    frame: false,
	blur: true,
	blurType: global.blurType,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    }
  })
  mainWindow.loadFile('index.html');
  ipcMain.on('minimize', () => {mainWindow.minimize()})
  ipcMain.on('maximize', () => {mainWindow.maximize()})
  ipcMain.on('restore', () => {mainWindow.restore()})
  ipcMain.on('close', () => {mainWindow.close()})
  ipcMain.on('openIn', () => {goToGlasstronRepo()})
  ipcMain.on("blurToggleOn", async (e, value) => {if(mainWindow !== null){e.sender.send("blurStatus", await mainWindow.setBlur(true))}});
  ipcMain.on("blurToggleOff", async (e, value) => {if(mainWindow !== null){e.sender.send("blurStatus", await mainWindow.setBlur(false))}});
}




function goToGlasstronRepo() {shell.openExternal('https://github.com/AryToNeX/Glasstron')}
app.whenReady().then(() => {setTimeout(() => {createWindow()}, 200)})