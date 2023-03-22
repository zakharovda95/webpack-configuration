# Ручная кофигурация Webpack + Jest + Docker

### посмотреть конфигурацию Webpack: webpack.config.js - в корне проекта
### посмотреть конфигурацию Docker: Dockerfile - в корне проекта

### если вдруг кто то будет разворачивать: 
* npm i, npm run dev - дев npm run build - прод npm run test - тестирование
* docker build -t webpack-conf . - билд докер-имаджа docker run -d -p 4200:4200 webpack-conf

## В данной сборке было настроено:
* Тестирование компонентов на Jest + Jest-Enviroment-JSDOM
* Babel
* TypeScript
* SASS LESS
* Файлы, шрифты
* Копирование статичных файлов
* Алиасы путей
* ESLint + Prettier
* Минификация и оптимизация стилей и ассетсов
* Оптимизация чанков
* Чистка чанков после ребилда
* Дев сервер с хот релоадом
* Анализ размера чанков в прод моде
* Dockerfile

## Так же сделал изи круд тудушку (без смысловой нагрузки) на ванильном TS + Bootstrap для демонстрации сборки
