const electron = require('electron');
const ChronoTray = require('./app/chronotray');
const { Tray, app, Menu, BrowserWindow} = electron;


const contextMenu = Menu.buildFromTemplate([
    {   label: 'Terceira Aplicação',
        click: () => {
            console.log('você clicoy no menu');
        }
    },
    {   label:'Config'
    },
    {   label:'Ajuda'
    },
    {   label:'Sair',
        click: () => {
            app.quit();
        }
    }
]);

let mainWindow;

app.on('ready', ( ) => {
    mainWindow = new BrowserWindow({
        height:150,
        width:300,
        frame:false,
        resizable:false,
        show:false
    });

    const tray = new ChronoTray(`${__dirname}/robot.png`, mainWindow, contextMenu);
    tray.setToolTip('App Electron');
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});
