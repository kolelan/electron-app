import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DataDisplay from './components/DataDisplay';
import { FileData, TextData } from './types';

const App: React.FC = () => {
    const [textInput, setTextInput] = useState('');
    const [textData, setTextData] = useState<TextData[]>([]);
    const [fileData, setFileData] = useState<FileData[]>([]);

    const handleTextSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (textInput.trim()) {
            setTextData(prev => [...prev, {
                content: textInput,
                timestamp: new Date()
            }]);
            setTextInput('');
        }
    };

    const handleFileSelect = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileDataItem: FileData = {
                name: file.name,
                size: file.size,
                type: file.type,
                content: e.target?.result as string
            };
            setFileData(prev => [...prev, fileDataItem]);
        };
        reader.readAsText(file);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Electron React TypeScript App</h1>

            <form onSubmit={handleTextSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Введите текст..."
                    style={{
                        padding: '10px',
                        marginRight: '10px',
                        width: '300px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Отправить текст
                </button>
            </form>

            <FileUpload onFileSelect={handleFileSelect} />

            <DataDisplay textData={textData} fileData={fileData} />
        </div>
    );
};

export default App;