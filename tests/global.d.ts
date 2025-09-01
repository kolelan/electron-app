declare global {
    interface Window {
        electronAPI: {
            processText: (text: string) => Promise<string>;
            processFile: (filePath: string) => Promise<string>;
        };
    }

    interface Global {
        electronAPI: typeof window.electronAPI;
    }

    var electronAPI: typeof window.electronAPI;
}

export {};