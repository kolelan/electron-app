import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    processText: (text: string) => ipcRenderer.invoke('process-text', text),
    processFile: (filePath: string) => ipcRenderer.invoke('process-file', filePath)
});