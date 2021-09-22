const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld(
  "api", {
      send: (channel, data) => {
          let validChannels = ["minimize",
                               "maximize",
                               "restore",
                               "close",
                               "openIn"]; // "openIn" not required, nor are the other options unless you want to keep the custom titlebar
          if (validChannels.includes(channel)) {
              ipcRenderer.send(channel, data);
          }
      }
  }
);