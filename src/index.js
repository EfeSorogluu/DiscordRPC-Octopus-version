const { app, BrowserWindow } = require('electron')
const path = require('path')
const ejse = require('ejs-electron')

let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    icon: './src/public/img/octopus.ico'
  })

  mainWindow.loadFile('./src/public/views/index.ejs')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})


//Discord RPC
const rpc = require('discord-rpc');

const client = new rpc.Client({ transport: 'ipc' });

const appId = "937268278877900824"

rpc.register(appId);

client.on('ready', async () => {
  client.setActivity({
    details: "Octopus Tv",
    state: 'Viewing screens',
    largeImageKey: 'octopus',
    largeImageText: 'Octopus Tv Corp.'
  })
});

client.login({ clientId: appId })