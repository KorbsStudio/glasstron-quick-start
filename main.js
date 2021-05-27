const {app, BrowserWindow, contentTracing} = require('electron');
const glasstron = require('glasstron');
const path = require('path');

function createWindow () {
  const mainWindow = new glasstron.BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    frame: false, // Transpancy won't work on Windows if frame is set true. I can confirm it works on Linux with frame is set to true.
		blur: true,
		blurType: "acrylic",
     // Use "blurbehind" on Linux
     // Use "vibrancy" on macOS.
     // "blurbehind" does work on all platform (Windows, macOS, and Linux)
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Used for Window controls
      enableRemoteModule: true, // For custom titlebar to work, therefore not required for Glasstron by itself
      nodeIntegration: true, // Not required
      contextIsolation: false // Not required
    }
  })
  mainWindow.loadFile('index.html');
}
app.whenReady().then(() => {createWindow()})