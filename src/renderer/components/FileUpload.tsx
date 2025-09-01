import React, { useRef } from 'react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
      // Сброс значения input для возможности выбора того же файла снова
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      style={{ padding: '20px', border: '2px dashed #ccc', borderRadius: '8px' }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        aria-label="file-input"
        data-testid="file-input"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Выбрать файл
      </button>
      <p style={{ marginTop: '10px', color: '#666' }}>
        Перетащите файл сюда или нажмите кнопку
      </p>
    </div>
  );
};

export default FileUpload;