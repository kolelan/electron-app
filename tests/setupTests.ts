import '@testing-library/jest-dom';

// Mock для CSS модулей
jest.mock('identity-obj-proxy', () => ({
    __esModule: true,
    default: new Proxy({}, {
        get: (target, key) => key
    })
}));

// Mock для Electron
globalThis.electronAPI = {
    processText: jest.fn(),
    processFile: jest.fn()
} as any;

// Mock для FileReader
class MockFileReader {
    result: string | null = null;
    onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null = null;
    onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null = null;

    readAsText() {
        if (this.onload) {
            this.result = 'test file content';
            this.onload(new ProgressEvent('load'));
        }
    }

    readAsDataURL() {
        if (this.onload) {
            this.result = 'data:text/plain;base64,dGVzdA==';
            this.onload(new ProgressEvent('load'));
        }
    }
}

(global as any).FileReader = MockFileReader;

// Mock для URL.createObjectURL
global.URL.createObjectURL = jest.fn(() => 'blob:test-url');