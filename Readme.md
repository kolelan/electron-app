# Electron React TypeScript Приложение

Простое desktop приложение, разработанное с использованием Electron, React и TypeScript для обработки текстовых данных и файлов.

## 🚀 Возможности

- 📝 Ввод и обработка текстовых данных
- 📁 Загрузка и отображение файлов
- 🎯 Интерфейс на React с TypeScript
- 🧪 Полное тестовое покрытие
- 🔥 Горячая перезагрузка в development режиме

## 📦 Установка

1. Клонируйте репозиторий:
```bash
git clone <your-repo-url>
cd electron-react-app
```

2. Установите зависимости:
```bash
npm install
```

## 🏃‍♂️ Запуск приложения

### Development режим
```bash
npm run dev
```
Запускает приложение с горячей перезагрузкой.

### Production сборка
```bash
npm run build
npm start
```

### Запуск тестов
```bash
npm test
```

### Тесты с наблюдением
```bash
npm run test:watch
```

## 🏗️ Структура проекта

```
electron-react-app/
├── src/
│   ├── main/           # Electron главный процесс
│   │   ├── index.ts    # Основной процесс Electron
│   │   └── preload.ts
│   ├── renderer/       # React приложение
│   │   ├── main.tsx    # Точка входа React
│   │   ├── App.tsx     # Корневой компонент
│   │   ├── index.html  # HTML шаблон
│   │   ├── components/ # React компоненты
│   │   │   ├── FileUpload.tsx    # Компонент загрузки файлов
│   │   │   └── DataDisplay.tsx   # Компонент отображения данных
│   │   └── types/      # TypeScript типы
│   │       └── index.ts
│   └── shared/         # Общие утилиты
├── tests/              # Тесты
│   ├── App.test.tsx    # Тесты
│   └── FileUpload.test.tsx # Тесты
├── dist/               # Собранные файлы
├── webpack.config.js
├── package.json
├── jest.config.js
├── tsconfig.main.json
├── tsconfig.renderer.json
└── tsconfig.json
```

## 🎯 Использование

1. **Ввод текста**: Введите текст в поле ввода и нажмите "Отправить текст"
2. **Загрузка файлов**: Нажмите "Выбрать файл" или перетащите файл в область загрузки
3. **Просмотр данных**: Все принятые данные отображаются в соответствующих секциях

## 🛠️ Технологии

- **Electron** - Фреймворк для desktop приложений
- **React 18** - Библиотека для пользовательских интерфейсов
- **TypeScript** - Типизированный JavaScript
- **Jest** - Фреймворк для тестирования
- **Webpack** - Сборщик модулей

## 📋 Требования

- Node.js 16+
- npm 7+

## 🐛 Отладка

Приложение автоматически открывает DevTools в development режиме. Для ручной отладки:

1. Нажмите `F12` в приложении
2. Или используйте меню View → Toggle Developer Tools

## 📝 Скрипты package.json

- `npm run build` - Production сборка
- `npm run build:dev` - Development сборка
- `npm start` - Запуск приложения
- `npm run dev` - Development режим с наблюдением
- `npm test` - Запуск тестов
- `npm run test:watch` - Тесты с наблюдением
- `npm run clean` - Очистка папки dist

## 🔧 Конфигурация

- `tsconfig.json` - Настройки TypeScript
- `webpack.config.js` - Конфигурация Webpack
- `jest.config.js` - Конфигурация Jest

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте feature ветку (`git checkout -b feature/amazing-feature`)
3. Закоммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Запушьте ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под MIT License.

## 🆘 Поддержка

Если у вас возникли проблемы:

1. Проверьте версии Node.js и npm
2. Убедитесь, что все зависимости установлены
3. Проверьте консоль на наличие ошибок
4. Создайте issue в репозитории

---

**Приятного использования!** 🎉