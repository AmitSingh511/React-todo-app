# React Todo App

A clean and responsive task management app built with React and Vite. The project focuses on a simple, practical todo workflow: add tasks, mark them as complete, edit existing items, delete tasks, and keep progress saved in the browser.

## Features

- Add new todo items with unique IDs
- Mark tasks as complete or active
- Edit task text inline
- Delete tasks from the list
- View live task statistics for total, completed, and remaining items
- Persist todos with `localStorage`
- Responsive interface styled with custom CSS

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- UUID
- ESLint

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed on your machine.

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the app in your browser.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## Project Structure

```text
react-todo-app/
|-- public/
|-- src/
|   |-- Components/
|   |   |-- TodoInput.jsx
|   |   `-- TodoList.jsx
|   |-- assets/
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   |-- TodoInput.css
|   |-- TodoList.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```
<img width="426" height="341" alt="Screenshot 2026-05-25 020108" src="https://github.com/user-attachments/assets/8f8dab94-3b5f-411f-9872-74b0fe4531ed" />
<img width="645" height="807" alt="Screenshot 2026-05-25 020240" src="https://github.com/user-attachments/assets/766922dc-7b4e-44fa-95c4-794d2ad1a5bb" />

## How It Works

The main application state is managed in `App.jsx`. Todos are loaded from `localStorage` when the app starts and saved again whenever the list changes. `TodoInput` handles creating new tasks, while `TodoList` handles completion, editing, saving, cancelling, and deletion.

## Purpose

This project demonstrates core React concepts such as component composition, state management with hooks, event handling, conditional rendering, and persistent browser storage in a small, easy-to-understand application.
