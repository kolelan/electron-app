import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Загрузка HTML файла
  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

  // Открыть DevTools в development режиме
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC обработчики
ipcMain.handle('process-text', (event, text: string) => {
  console.log('Processing text:', text);
  return `Обработанный текст: ${text.toUpperCase()}`;
});

ipcMain.handle('process-file', async (event, filePath: string) => {
  console.log('Processing file:', filePath);
  return `Файл обработан: ${path.basename(filePath)}`;
});