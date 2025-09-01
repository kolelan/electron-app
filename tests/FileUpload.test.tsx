import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileUpload from '../src/renderer/components/FileUpload';

describe('FileUpload Component', () => {
    test('renders file upload button', () => {
        const mockOnFileSelect = jest.fn();
        render(<FileUpload onFileSelect={mockOnFileSelect} />);

        expect(screen.getByText('Выбрать файл')).toBeInTheDocument();
    });

    // Дополнительные тесты можно добавить здесь
});