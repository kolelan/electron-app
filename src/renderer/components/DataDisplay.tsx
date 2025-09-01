import React from 'react';
import { FileData, TextData } from '../types';

interface DataDisplayProps {
    textData: TextData[];
    fileData: FileData[];
}

const DataDisplay: React.FC<DataDisplayProps> = ({ textData, fileData }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h3>Текстовые данные:</h3>
            {textData.length === 0 ? (
                <p>Нет текстовых данных</p>
            ) : (
                textData.map((data, index) => (
                    <div key={index} style={{
                        padding: '10px',
                        margin: '5px 0',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '4px'
                    }}>
                        <p>{data.content}</p>
                        <small>{data.timestamp.toLocaleString()}</small>
                    </div>
                ))
            )}

            <h3 style={{ marginTop: '20px' }}>Файлы:</h3>
            {fileData.length === 0 ? (
                <p>Нет файлов</p>
            ) : (
                fileData.map((file, index) => (
                    <div key={index} style={{
                        padding: '10px',
                        margin: '5px 0',
                        backgroundColor: '#e9ecef',
                        borderRadius: '4px'
                    }}>
                        <p><strong>Имя:</strong> {file.name}</p>
                        <p><strong>Размер:</strong> {(file.size / 1024).toFixed(2)} KB</p>
                        <p><strong>Тип:</strong> {file.type}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default DataDisplay;