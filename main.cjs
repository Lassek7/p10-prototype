const { app, BrowserWindow, screen, ipcMain } = require('electron')
const path = require('path')


function createWindow () {

  const dpi = screen.getPrimaryDisplay().scaleFactor * 96; // DPI for primary display
  const widthInInches = 19; // Desired width in inches
  const heightInInches = 11 ; // Desired height in inches

  const widthInPixels = Math.round(widthInInches * dpi);
  const heightInPixels = Math.round(heightInInches * dpi);

  const win = new BrowserWindow({
    fullscreen: true,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Add this line
    }
    
  })

  win.loadFile(path.join(__dirname, '/dist/index.html'))

  ipcMain.on('quit-app', () => {
    app.quit();
  });
}

app.whenReady().then(createWindow)