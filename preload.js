const {contextBridge, ipcMain, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld(
  "api", {
      send: (channel, data) => {
          let validChannels = ["minimize", // For custom titlebar on Windows
                               "maximize", // For custom titlebar on Windows
                               "restore", // For custom titlebar on Windows
                               "close", // For custom titlebar on Windows
                               "openIn", // "openIn" not required
                               "blurToggleOn",
                               "blurToggleOff",
                               "btBH",
                               "btTP",
                               "btAY",
                               "btVB"]; 
          if (validChannels.includes(channel)) {
              ipcRenderer.send(channel, data);
          }
      }
  }
);

