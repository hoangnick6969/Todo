# TodoX

A full-stack task management application built with Node.js backend and React frontend. Manage your tasks efficiently with features like adding, editing, filtering by date, and more.

## Features

- Add, edit, and delete tasks
- Filter tasks by date and time
- Task statistics and pagination
- Responsive UI with Tailwind CSS
- RESTful API backend with MongoDB

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Other dependencies (see backend/package.json)

### Frontend
- React
- Vite
- Tailwind CSS
- Axios for API calls
- Shadcn/ui components

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- pnpm (for frontend)

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the backend directory with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   pnpm install
   ```
3. Start the development server:
   ```
   pnpm run dev
   ```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

## Usage

1. Open the frontend in your browser.
2. Add new tasks using the "Add Task" component.
3. Filter tasks by date using the DateTimeFilter.
4. View task statistics in the StatsAndFilters component.
5. Navigate through tasks with pagination.

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Project Structure

```
TodoX/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── models/
│   │   └── routes/
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── lib/
    │   └── pages/
    ├── public/
    └── package.json
```

## Screenshots

### Home Page
![Home Page Screenshot](screenshots/home.png)

### Add Task
![Add Task Screenshot](screenshots/add-task.png)

### Task List
![Task List Screenshot](screenshots/task-list.png)

### Filter Tasks
![Filter Tasks Screenshot](screenshots/filter.png)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.