const electron = require('electron');
const { Tray } = electron;

class ChronoTray extends Tray {
    constructor(iconPath, mainWindow, contextMenu){
        super(iconPath);
        this.mainWindow = mainWindow;
        this.on('click', this.onClick.bind(this));
        this.setContextMenu(contextMenu);
    }

    onClick(event, bounds){
        const { x, y } = bounds;
        const { width, height } = this.mainWindow.getBounds();
        if(this.mainWindow.isVisible()){
            this.mainWindow.hide();
        }else{
            this.mainWindow.setBounds({
                x: x>= 350? x - width / 2   : x,
                y: y>= 300? y - height :y,
                width, height
            });
            this.mainWindow.show();
        }
    }
}

module.exports = ChronoTray;
