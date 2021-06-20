const { BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 280,
    height: 320,
    show: false,
    frame: false,
    resizable: false,
    fullscreenable: false,
  });

  win.loadFile("index.html");

  return win;
}
module.exports = createWindow();
