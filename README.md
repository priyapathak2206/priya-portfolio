# Portfolio and Development Projects

A collection of my web development projects, practical implementations, and backend development work.

## Projects

### 1. React Learning Hub

A React application built with React, React Router, and Vite.

**Features**
- Home, About, Projects, and Contact pages
- Client-side routing
- Lazy loading for selected pages
- Reusable React components

**Run locally**

```bash
cd frontend
npm ci
npm run dev
```

### 2. Task Manager API

A Node.js and Express application for task management, with authentication, database integration, and AI-assisted task descriptions.

**Features**
- User authentication using JWT
- Task management API
- MongoDB integration
- AI-generated task descriptions using Groq
- Rate limiting for AI generation
- Automated tests using Jest and Supertest
- Docker configuration
- GitHub Actions CI workflow

**Install dependencies**

```bash
cd projects/task-manager-api
npm ci
```

Create a `.env` file using `.env.example` and configure your own MongoDB connection, JWT secret, and Groq API key before running the backend.

**Run tests**

```bash
npm test
```

Check the project's `package.json` for the available application start command.

## Technology Stack

- **Frontend:** React, JavaScript, React Router, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **AI Integration:** Groq API
- **Testing:** Jest, Supertest
- **DevOps:** Docker, GitHub Actions

## Repository Structure

```text
priya-portfolio/
├── frontend/
├── projects/
│   └── task-manager-api/
├── docs/
├── .gitignore
└── README.md
```

## Security

- Do not commit environment files containing secrets.
- Use `.env.example` as a configuration template.
- Keep API keys and database credentials private.

## License

A license can be added when the repository is ready for open-source distribution.
