<h1 align="center">REACT FLUKSOS TEMPLATE</h1>

<p align="center">
  <em>The Ultimate Senior Boilerplate for Modern React Applications</em>
</p>

<p align="center">
  <em>Built with the tools and technologies:</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript_6-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind v4">
  <img src="https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="Shadcn UI">
  <img src="https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white" alt="Biome">
  <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack Query">
  <img src="https://img.shields.io/badge/TanStack_Router-FF4154?style=for-the-badge&logo=reactrouter&logoColor=white" alt="TanStack Router">
  <img src="https://img.shields.io/badge/Zustand-EA4335?style=for-the-badge&logo=react&logoColor=white" alt="Zustand">
  <img src="https://img.shields.io/badge/Husky-42b983?style=for-the-badge&logo=git&logoColor=white" alt="Husky">
</p>

---

## 📖 Table of Contents
- [Overview](#-overview)
- [Why React Fluksos?](#-why-react-fluksos)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Scripts & Commands](#-scripts--commands)
- [License](#-license)

---

## 🚀 Overview
**React Fluksos** is a meticulously crafted, enterprise-grade React template engineered for performance, type safety, and impeccable Developer Experience (DX). 

Designed as a definitive starting point for modern Single Page Applications (SPAs) and fast landing pages, it completely abandons legacy tools like ESLint and Prettier in favor of the blazing-fast Rust-based Biome toolchain.

## 🤔 Why React Fluksos?
This project aims to eliminate the painful configuration phase of modern frontend development. It enforces strict architectural boundaries, utilizes the latest major versions of all core tools, and includes a pre-configured, battle-tested `pre-commit` hook pipeline. 

It is the ultimate "Blank Canvas" for Senior Developers.

---

## 🎯 Features

- **Blazing Fast Builds**: Powered by Vite 8 and the official `@vitejs/plugin-react` (Rolldown-ready).
- **Absolute Type Safety**: TypeScript 6.0 in Strict Mode, combined with `@tanstack/react-router` for 100% type-safe file-based routing.
- **Modern Styling Engine**: Fully integrated with Tailwind CSS v4 (no PostCSS required) and Shadcn/ui CLI.
- **State & Data Management**: Pre-configured `AppQueryProvider` (TanStack Query) with optimized caching strategies, plus a pre-wired `Axios` instance for API consumption.
- **Rock-Solid DX**: Replaces ESLint/Prettier with Biome for instant formatting and linting. Enforces code quality via Husky `pre-commit` hooks and `lint-staged`.
- **Built-in Theme Provider**: Elegant Dark/Light mode switching using pure Context API and Tailwind v4 variables.
- **Robust Error Handling**: Global Error Boundaries and 404 Pages pre-configured at the routing root.

---

## 🏁 Getting Started

### Prerequisites
This project demands modern tooling to run locally:
- **Node.js**: v20 or higher.
- **Package Manager**: Strictly `pnpm` (v9 or v10). NPM and Yarn will be rejected by engine locking.

### Installation

Clone the repository and set it up as your own:
```bash
git clone https://github.com/pasqualinigui/reactfluksos.git my-new-project
cd my-new-project
```

Install the dependencies:
```bash
pnpm install
```

Configure environment variables:
```bash
cp .env.example .env
```

### Usage
Run the project locally in development mode:
```bash
pnpm run dev
```

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/       # Global layout wrappers
│   ├── providers/    # Context providers (Theme, Query)
│   └── ui/           # Shadcn/ui raw components
├── features/         # Domain-driven modules
├── lib/              # Utility functions and API instances (Axios)
├── routes/           # TanStack file-based routes
├── services/         # API integration layers
└── store/            # Global state (Zustand)
```

---

## 💻 Scripts & Commands

- `pnpm run dev`: Starts the Vite development server.
- `pnpm run build`: Compiles the application for production (dist/).
- `pnpm run typecheck`: Runs strict TypeScript validation without emitting files.
- `pnpm run lint`: Analyzes the codebase using Biome.
- `pnpm run lint:fix`: Automatically fixes linting errors and formats the code.
- `pnpm run test`: Runs the Vitest test suite.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="left">
  <a href="#top">⬆️ Return to Top</a>
</p>
