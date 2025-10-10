# Bradford Informed Guidance

> Professional insurance broker website built with React, TypeScript, and Vite

[![License](https://img.shields.io/badge/license-Private-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18.17-brightgreen.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue.svg)](https://www.typescriptlang.org/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Mobile Styling Policy](#mobile-styling-policy)
- [Contributing](#contributing)

## 🎯 Overview

Bradford Informed Guidance is a multi-state licensed insurance broker platform serving clients across FL, GA, SC, TN, AL, and TX. The website features a luxury design system with enterprise-grade React components and comprehensive SEO optimization.

**Key Highlights:**
- 🏆 85/100 Quality Score (comprehensive audit)
- 🎨 Custom Tailwind design system with glass morphism
- 📱 Responsive three-tier breakpoint design (mobile/tablet/desktop)
- ♿ Accessibility-first with Radix UI primitives
- 🚀 Optimized for SEO and performance

## ✨ Features

- **Multi-State Coverage**: Licensed broker services across 6 southeastern states
- **Luxury UX**: Premium design with aurora gradients, glass effects, and smooth animations
- **SEO Optimized**: Comprehensive schema markup, meta tags, and structured data
- **Lead Generation**: Integrated forms with Calendly scheduling
- **Responsive Design**: Component-scoped mobile CSS for pixel-perfect layouts
- **Trust Signals**: Dual verification (TrustMyProducer + NIPR), carrier partnerships
- **Interactive Maps**: State coverage visualization with D3.js
- **Performance**: WebP images, lazy loading, code splitting

## 🛠 Tech Stack

### Core
- **React 18.2** - UI library with hooks and Suspense
- **TypeScript 5.4** - Type-safe development
- **Vite 5.4** - Lightning-fast build tool

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 12** - Smooth animations
- **Custom Design System** - Luxury brand theming

### UI Components
- **Radix UI** - Accessible, unstyled component primitives
- **Lucide React** - Icon library
- **React Hook Form** - Form management
- **Embla Carousel** - Touch-friendly carousels

### Data & Visualization
- **D3.js** - Geographic data visualization
- **Recharts** - Chart components

### Testing & Quality
- **Vitest 3.2** - Fast unit testing
- **Testing Library** - React component testing
- **ESLint 9** - Code linting
- **Prettier 3** - Code formatting

### Deployment
- **Vercel** - Hosting and serverless functions
- **GitHub** - Version control

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.17
npm >= 9.0
```

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd git-vault-keeper
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server (port 8080)
npm run dev:vercel       # Start Vercel dev server
npm run live             # Dev server + ngrok tunnel

# Building
npm run build            # Production build
npm run build:dev        # Development build
npm run preview          # Preview production build

# Testing
npm run test             # Run tests in watch mode
npm run test:run         # Run tests once
npm run test:ui          # Open Vitest UI
npm run test:coverage    # Generate coverage report

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format with Prettier
npm run format:check     # Check formatting
npm run type-check       # TypeScript type checking
```

### Development Workflow

1. **Start the dev server**: `npm run dev`
2. **Make changes**: Edit files in `src/`
3. **Run tests**: `npm run test`
4. **Lint code**: `npm run lint`
5. **Format code**: `npm run format`
6. **Build**: `npm run build`

## 🧪 Testing

The project uses Vitest and React Testing Library for testing.

### Running Tests

```bash
# Watch mode
npm run test

# Single run
npm run test:run

# With UI
npm run test:ui

# With coverage
npm run test:coverage
```

### Writing Tests

Place test files next to components:
```
src/components/
  Button.tsx
  __tests__/
    Button.test.tsx
```

Example test:
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

## 🎨 Code Quality

### Linting

ESLint is configured with TypeScript and React rules:

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Formatting

Prettier maintains consistent code style:

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

### Type Checking

```bash
npm run type-check
```

## 🚢 Deployment

The site is deployed on Vercel with automatic deployments from GitHub.

### Production Build

```bash
npm run build
```

Build output goes to `dist/` directory.

### Vercel Deployment

1. **Connect repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Add environment variables** in Vercel dashboard
4. **Deploy** - automatic on push to main

## 📁 Project Structure

```
git-vault-keeper/
├── src/
│   ├── api/              # API integration (Ringy, lead handling)
│   ├── assets/           # Images, logos, backgrounds
│   ├── components/       # React components
│   │   ├── luxury/       # Premium desktop components
│   │   ├── ui/           # Reusable UI components
│   │   ├── about/        # About page components
│   │   ├── carriers/     # Carrier-related components
│   │   └── __tests__/    # Component tests
│   ├── config/           # App configuration
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   ├── pages/            # Page components
│   │   ├── blog/         # Blog posts
│   │   ├── quote/        # Quote pages
│   │   └── states/       # State-specific pages
│   ├── seo/              # SEO utilities
│   ├── styles/           # Global styles
│   ├── test/             # Test setup
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global CSS
├── api/                  # Serverless API routes
├── scripts/              # Build and dev scripts
├── public/               # Static assets
├── .github/              # GitHub Actions (future)
├── vitest.config.ts      # Vitest configuration
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Dependencies and scripts
```

## 📱 Mobile Styling Policy

**Scope:**
This project uses a **component-scoped mobile CSS** approach to ensure mobile changes never break desktop layouts.

**Rules:**
1. All mobile-specific styles live in `*.mobile.module.css` files located next to their corresponding component in `src/components/...`
2. Do **not** modify existing desktop styles or markup
3. Append mobile classes to JSX elements without replacing existing desktop classes
4. All media queries use:
```css
@media (max-width: 767.98px) { … }
```

**Breakpoints:**
- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `≥ 1024px`

## 🤝 Contributing

### Development Guidelines

1. **Follow the code style** - ESLint and Prettier are configured
2. **Write tests** for new components
3. **Update documentation** when adding features
4. **Use conventional commits** for commit messages
5. **Keep mobile styling separate** per mobile policy

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes with tests
3. Run `npm run lint` and `npm run test`
4. Push your branch and create a PR
5. Wait for review and CI checks

## 📄 License

Private and proprietary. All rights reserved.

## 🙋 Support

For questions or issues, contact the development team or create an issue in the repository.

---

**Built with ❤️ for Bradford Informed Guidance**
