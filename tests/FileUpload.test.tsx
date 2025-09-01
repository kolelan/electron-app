import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileUpload from '../src/renderer/components/FileUpload';

describe('FileUpload Component', () => {
    test('renders file upload button', () => {
        const mockOnFileSelect = jest.fn();
        render(<FileUpload onFileSelect={mockOnFileSelect} />);

        expect(screen.getByText('Выбрать файл')).toBeInTheDocument();
        expect(screen.getByText('Перетащите файл сюда или нажмите кнопку')).toBeInTheDocument();
    });

    test('calls onFileSelect when file is selected', () => {
        const mockOnFileSelect = jest.fn();
        render(<FileUpload onFileSelect={mockOnFileSelect} />);

        // Используем роль для поиска input file
        const fileInput = screen.getByLabelText('file-input');
        const file = new File(['test content'], 'test.txt', { type: 'text/plain' });

        fireEvent.change(fileInput, { target: { files: [file] } });

        expect(mockOnFileSelect).toHaveBeenCalledWith(file);
    });
});