const { app, BrowserWindow, screen } = require('electron')
const path = require('path')




function createWindow () {
  const dpi = screen.getPrimaryDisplay().scaleFactor * 96; // DPI for primary display
  const widthInInches = 8; // Desired width in inches
  const heightInInches = 7; // Desired height in inches

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