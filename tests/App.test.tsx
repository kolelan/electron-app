import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/renderer/App';

describe('App Component', () => {
    test('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText('Electron React TypeScript App')).toBeInTheDocument();
    });

    test('handles text input and submission', () => {
        render(<App />);

        const input = screen.getByPlaceholderText('Введите текст...');
        const submitButton = screen.getByText('Отправить текст');

        // Ввод текста и отправка
        fireEvent.change(input, { target: { value: 'Test text' } });
        fireEvent.click(submitButton);

        // Проверка, что текст отображается
        expect(screen.getByText('Test text')).toBeInTheDocument();
    });

    test('clears input after submission', () => {
        render(<App />);

        const input = screen.getByPlaceholderText('Введите текст...') as HTMLInputElement;
        const submitButton = screen.getByText('Отправить текст');

        fireEvent.change(input, { target: { value: 'Test text' } });
        fireEvent.click(submitButton);

        expect(input.value).toBe('');
    });
});