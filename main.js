const { Application } = require('ee-core');
const EE = require('ee-core/ee');
const { app, BrowserWindow, Notification,ipcMain } = require('electron')
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
class Main extends Application {

  constructor() {
    super();
    // this === eeApp;
  }

  /**
   * core app have been loaded
   */
  async ready () {
    // do some things
  }

  /**
   * electron app ready
   */
  async electronAppReady () {
    // do some things
  }


  showNotification (NOTIFICATION_TITLE = 'Basic Notification',NOTIFICATION_BODY = 'Notification from the Main process') {
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
  }

  /**
   * main window have been loaded
   */
  async windowReady () {
    // do some things
    // 延迟加载，无白屏
    const winOpt = this.config.windowsOption;
    if (winOpt.show == false) {
      const win = this.electron.mainWindow;
      win.once('ready-to-show', () => {
        win.maximize();
        win.show();
        win.setTitle(`DCE财讯通`)
        this.showNotification('标题',win)
        win.webContents.openDevTools();
      })
    }
  }

  /**
   * before app close
   */  
  async beforeClose () {
    // do some things
    
  }
}

// Instantiate an app object
EE.app = new Main();
app.on('window-all-closed', () => {
  // Log.info('[addon:tray] will be closed All system');
  app.quit()
})

// 老项目拿过来的
ipcMain.on('window-min', () => {
  if (!win) return
  win.minimize()
})
ipcMain.on('window-max', () => {
  if (!win) return
  if (win.isMaximized()) {
    win.unmaximize()
  } else {
    win.maximize()
  }
})
ipcMain.on('window-close', () => {
  if (!win) return
  win.destroy()
})