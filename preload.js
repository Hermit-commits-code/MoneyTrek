const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendDailyPolicies: (data) => ipcRenderer.send('daily-policies', data),
  onPromptForPolicies: (callback) =>
    ipcRenderer.on('prompt-for-policies', callback),
});
