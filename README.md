# FSD-workshop-1-CSE---11-176

Full Stack Development workshop labs — Amogh Gupta (176).

| Lab | Topic | Location | Run |
|-----|-------|----------|-----|
| 1 | Node events, event loop | `backend/Lab1` | `npm start` / `npm run eventloop` / `npm run dom` |
| 2 | Async file handling, promises | `backend/Lab2` | `npm start` / `npm run json` / `npm run dom` |
| 3 | Core `http` server (CRUD) | `backend/Lab3` | `npm start` / `npm run files` (port 3000) |
| 4 | React app | `Frontend/reactapp` | `npm install && npm run dev` |
| 5 | Express basics | `backend/Lab5` | `npm install && npm start` (port 3000) |
| 6 | Express CRUD + MongoDB setup | `backend/Lab6` | `npm install && npm start` (port 3000, used by the React app) |
| 7 | HR Management System API (Express + MongoDB) | `backend/Lab7` | copy `.env.example` to `.env`, then `npm install && npm start` (port 5000) |

Each lab is its own npm project: run `npm install` inside the lab folder first.
Labs 3, 5 and 6 (`expressserver.js`) all use port 3000, so run one at a time.
The React app (`Frontend/reactapp`) talks to `backend/Lab6` (`npm start`).

`student_management_react_project1/` is a separate project and
`FSD-workshop-1-CSE---11-176/` is an older copy of the React app.
