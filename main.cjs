const { app, BrowserWindow, screen } = require('electron')
const path = require('path')




function createWindow () {
  const dpi = screen.getPrimaryDisplay().scaleFactor * 96; // DPI for primary display
  const widthInInches = 16; // Desired width in inches
  const heightInInches = 9; // Desired height in inches

  const widthInPixels = Math.round(widthInInches * dpi);
  const heightInPixels = Math.round(heightInInches * dpi);

  const win = new BrowserWindow({
    width: widthInPixels,
    height: heightInPixels,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Add this line
    }
    
  })

  win.loadFile(path.join(__dirname, '/dist/index.html'))
}




app.whenReady().then(createWindow)