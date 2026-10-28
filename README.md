# Единое окно

Внутренний веб-портал для сотрудников. В одном месте собраны:

- ссылки на государственные информационные системы (ОДО, е-Обращения, ЭПС, ИИС ЦОН, Адресный регистр и др.);
- установщики необходимого ПО (NCALayer, Tumar/Cryptosocket, KAZTOKEN, CERTEX VPN, браузеры);
- формы заявок на доступ к системам;
- контакты служб поддержки.

Раньше эта информация была разрознена, теперь сотрудник находит нужную ссылку, программу или форму за пару кликов.

## Стек

| Слой | Технологии |
|---|---|
| Frontend | Angular 21 (standalone-компоненты, signals, новый control flow `@if` / `@for`), SCSS, Vitest |
| Backend | NestJS 11, TypeScript |
| База данных | PostgreSQL 17 (Docker), Prisma ORM 7 с адаптером `@prisma/adapter-pg` |
| Инфраструктура | Монорепозиторий, `concurrently` для одновременного запуска фронта и бэка, Docker Compose |

## Архитектура

```
portal/
├── frontend/            # Angular-приложение
│   └── src/app/
│       ├── core/        # сервисы API, интерфейсы, enum'ы, HTTP-интерцептор
│       ├── layout/      # header, footer
│       ├── pages/       # страницы: home, softwares, applications, contacts
│       └── shared/      # переиспользуемые компоненты: карточки, лоадер, тост
├── backend/             # NestJS API
│   ├── prisma/          # schema.prisma, миграции, seed
│   └── src/             # модули systems, software, applications, contacts, prisma
├── storage/downloads/   # файлы для скачивания (не хранятся в git)
└── docker-compose.yml   # PostgreSQL
```

**Поток данных:** Angular → `/api/*` (proxy в dev-режиме) → NestJS controller → service → Prisma → PostgreSQL.
Файлы (`.exe`, `.docx`) раздаются бэкендом как статика по пути `/downloads/*` через `ServeStaticModule`.

## Что сделано

### Backend
- Проект на NestJS с глобальным префиксом `/api`.
- Подключён Prisma ORM к PostgreSQL. `PrismaService` вынесен в отдельный `PrismaModule` и переиспользуется в остальных модулях через DI.
- Спроектирована схема БД из 4 моделей, создано 4 миграции:
  - `System`: название, логотип, ссылка;
  - `Software`: название, логотип, имя файла установщика;
  - `Application`: название формы, имя файла;
  - `Contact`: название группы, массивы email и телефонов (типы `String[]` в PostgreSQL).
- На каждую сущность сделан отдельный модуль (controller + service) и REST-эндпоинт:

  | Метод | URL | Описание |
  |---|---|---|
  | GET | `/api/systems` | список информационных систем |
  | GET | `/api/softwares` | список программ для скачивания |
  | GET | `/api/applications` | список форм заявок |
  | GET | `/api/contacts` | контакты служб поддержки |

- Seed-скрипт (`prisma/seed.ts`) заполняет БД начальными данными.
- Раздача файлов из `storage/downloads` по пути `/downloads`.

### Frontend
- Приложение на standalone-компонентах Angular 21 без NgModule.
- Роутинг по 4 страницам: «Главная» (системы), «Программные обеспечения», «Формы заявок», «Контакты».
- Данные приходят с бэкенда через сервисы в `core/services` и превращаются в сигналы через `toSignal()`.
- Пока данные загружаются, показывается компонент-лоадер (`@if` / `@else`).
- Переиспользуемые компоненты-карточки (`system-card`, `software-card`, `application-card`, `contact-card`) получают данные через `input.required()`.
- **Система уведомлений (toast):**
  - `ToastService` хранит состояние на сигналах;
  - 4 типа уведомлений (успех, ошибка, предупреждение, информация);
  - уведомление закрывается автоматически через 3 секунды или вручную.
- **Глобальная обработка ошибок:** функциональный HTTP-интерцептор `errorInterceptor` перехватывает ошибки запросов и показывает понятное пользователю сообщение в зависимости от статуса (0, 401, 403, 404, 5xx).
- Вёрстка: шапка с навигацией и подсветкой активного пункта (`routerLinkActive`), футер, глобальные стили, normalize, шрифт Nunito Sans.
- Proxy-конфиг для разработки перенаправляет `/api` и `/downloads` на бэкенд.

### Процесс разработки
- Каждая фича делается в своей ветке `feat/*` и вливается в `main` через Pull Request.

## Запуск

Требуется Node.js и Docker.

1. Создать `.env` в корне (для Docker) и в `backend/` (для Prisma и Nest):
   ```env
   # .env
   POSTGRES_USER=...
   POSTGRES_PASSWORD=...
   POSTGRES_DB=...

   # backend/.env
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5433/DB
   ```
2. Поднять базу:
   ```bash
   docker compose up -d
   ```
3. Установить зависимости:
   ```bash
   npm install
   npm install --prefix backend
   npm install --prefix frontend
   ```
4. Сгенерировать Prisma-клиент, применить миграции и заполнить БД:
   ```bash
   cd backend
   npx prisma generate
   npx prisma migrate dev
   npx prisma db seed
   ```
5. Положить файлы для скачивания в `storage/downloads/`.
6. Запустить фронт и бэк одновременно из корня:
   ```bash
   npm run dev
   ```
   Frontend: http://localhost:4200, Backend: http://localhost:3000/api

## Планы

- Страница «Календарь»
- Авторизация (кнопка «Войти»)
- Переключение языка (RU / KZ)
