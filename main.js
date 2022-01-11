const {app, BrowserWindow, contextBridge, ipcMain, ipcRenderer} = require('electron');
const glasstron = require('glasstron');
const path = require('path');

if (process.platform == 'darwin') { 
  app.whenReady().then(() => { // macOS
    global.blurType = "vibrancy";
    global.windowFrame = 'false'
})}
else if(process.platform == 'win32'){ 
  app.whenReady().then(() => { // Windows
    global.blurType = "acrylic";
    global.windowFrame = 'false' // The effect won't work properly if the frame is enabled on Windows
})}
else{ 
  app.whenReady().then(() => { // Linux
    global.blurType = "blurbehind";
    global.windowFrame = 'true'
})}

function createWindow () {
  const mainWindow = new glasstron.BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    titlebarStyle: 'hiddenInset',
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
  ipcMain.on("blurToggleOn", async (e, value) => {if(mainWindow !== null){e.sender.send("blurStatus", await mainWindow.setBlur(true))}});
  ipcMain.on("blurToggleOff", async (e, value) => {if(mainWindow !== null){e.sender.send("blurStatus", await mainWindow.setBlur(false))}});
  ipcMain.on("btBH", (e, value) => {const mainWindow = BrowserWindow.fromWebContents(e.sender);if(mainWindow !== null){mainWindow.blurType = 'blurbehind';e.sender.send("blurTypeChanged", mainWindow.blurType);}});
  ipcMain.on("btTP", (e, value) => {const mainWindow = BrowserWindow.fromWebContents(e.sender);if(mainWindow !== null){mainWindow.blurType = 'transparent';e.sender.send("blurTypeChanged", mainWindow.blurType);}});
  ipcMain.on("btAY", (e, value) => {const mainWindow = BrowserWindow.fromWebContents(e.sender);if(mainWindow !== null){mainWindow.blurType = 'acrylic';e.sender.send("blurTypeChanged", mainWindow.blurType);}});
  ipcMain.on("btVB", (e, value) => {const mainWindow = BrowserWindow.fromWebContents(e.sender);if(mainWindow !== null){mainWindow.blurType = 'vibrancy';e.sender.send("blurTypeChanged", mainWindow.blurType);}});
}

app.whenReady().then(() => {setTimeout(() => {createWindow()}, 200)})