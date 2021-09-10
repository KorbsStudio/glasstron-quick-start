const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron');
const glasstron = require('glasstron');
const path = require('path');
var osvar = process.platform;

if (osvar == 'darwin') { 
  app.whenReady().then(() => { // macOS
    global.blurType = "vibrancy";
})}
else if(osvar == 'win32'){ 
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
    frame: false, // Transpancy won't work on Windows if frame is set true. I can confirm it works on Linux with frame is set to true.
		blur: true,
		blurType: global.blurType,
    webPreferences: {
      nodeIntegration: true, // Not required
      contextIsolation: false // Not required
    }
  })
  mainWindow.loadFile('index.html');
  ipcMain.on('minimize', () => {mainWindow.minimize()})
  ipcMain.on('maximize', () => {mainWindow.maximize()})
  ipcMain.on('restore', () => {mainWindow.restore()})
  ipcMain.on('close', () => {mainWindow.close()})
}
app.whenReady().then(() => {setTimeout(() => {createWindow()}, 200)}) // setTimeout is used for Linux