# Mini Component Library

A reusable React + TypeScript component library built from scratch to practice modern frontend development, component design, accessibility, testing, and CI/CD.

## 🚀 Live Demo

[View Storybook](https://kishordhamodkar.github.io/mini-component-library/)

## 📦 Components

The library currently includes:

- **Button**
  - Variants: Primary, Secondary, Danger, Ghost
  - Sizes: Small, Medium, Large
  - Loading state
  - Disabled state
  - Polymorphic `as` prop

- **Input**
  - Labels
  - Helper text
  - Error states
  - Disabled state
  - Accessible form relationships

- **Checkbox**
  - Label support
  - Checked state
  - Disabled state
  - Keyboard accessible

- **Switch**
  - Checked state
  - Disabled state
  - Custom visual styling
  - Keyboard accessible

- **Tabs**
  - Compound component API
  - React Context
  - Click navigation
  - Keyboard navigation
  - Arrow key navigation
  - Home / End navigation
  - Focus management
  - ARIA attributes

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Vitest
- React Testing Library
- Testing Library User Event
- Storybook
- Playwright
- GitHub Actions
- GitHub Pages

## 📁 Project Structure

```text
src/
├── components/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   ├── Button.stories.tsx
│   ├── Input.tsx
│   ├── Input.test.tsx
│   ├── Input.stories.tsx
│   ├── Checkbox.tsx
│   ├── Checkbox.test.tsx
│   ├── Checkbox.stories.tsx
│   ├── Switch.tsx
│   ├── Switch.test.tsx
│   ├── Switch.stories.tsx
│   ├── Tabs.tsx
│   ├── Tabs.test.tsx
│   └── Tabs.stories.tsx
│
├── test/
│   └── setup.ts
│
└── App.tsx

.storybook/
├── main.ts
└── preview.ts

.github/
└── workflows/
    ├── ci.yml
    └── deploy-storybook.yml
