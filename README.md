\# Portfolio and Development Projects



A collection of my web development projects, practical implementations, and backend development work.



\## Projects



\### 1. React Learning Hub



A React application built with React, React Router, and Vite.



\*\*Features\*\*

\- Home, About, Projects, and Contact pages

\- Client-side routing

\- Lazy loading for selected pages

\- Reusable React components



\*\*Run locally\*\*

```bash

cd frontend

npm ci

npm run dev

```



\### 2. Task Manager API



A Node.js and Express task management application with authentication, database integration, and AI-assisted task descriptions.



\*\*Features\*\*

\- User authentication using JWT

\- Task management API

\- MongoDB integration

\- AI-generated task description suggestions using Groq

\- Request rate limiting for AI generation

\- Automated tests using Jest and Supertest

\- Docker configuration

\- GitHub Actions CI workflow



\*\*Run locally\*\*

```bash

cd projects/task-manager-api

npm ci

```



Create a `.env` file using `.env.example` and configure your own MongoDB connection, JWT secret, and Groq API key before running the backend.



Run the tests:

```bash

npm test

```



Start the application using the start command defined in the project's `package.json`.



\## Technology Stack



\- Frontend: React, JavaScript, React Router, Vite

\- Backend: Node.js, Express.js

\- Database: MongoDB

\- Authentication: JSON Web Tokens (JWT)

\- AI integration: Groq API

\- Testing: Jest, Supertest

\- DevOps: Docker, GitHub Actions



\## Repository Structure



```text

priya-portfolio/

├── frontend/

├── projects/

│   └── task-manager-api/

├── docs/

├── .gitignore

└── README.md

```



\## Security



\- Environment files containing secrets must not be committed.

\- Use `.env.example` as a configuration template.

\- Keep API keys and database credentials private.



\## License



Add a license if and when this repository is intended for open-source distribution.



