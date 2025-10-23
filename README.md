## Quick Start

```markdown

# Install dependencies
npm install

# Start development server
npm run dev
```

App runs at `http://localhost:5173`

---

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool & dev server
- **Tailwind CSS 4** - Styling
- **React Router 7** - Routing
- **Socket.io Client** - Real-time updates
- **React Hot Toast** - Notifications
- **Axios** - HTTP client

---

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── landing/      # Landing page components
│   └── order/        # Order-related components
├── pages/            # Page components (routes)
├── contexts/         # React Context providers
├── hooks/            # Custom React hooks
├── services/         # API & external integrations
├── utils/            # Helper functions
├── App.jsx           # Main app component
└── main.jsx          # Entry point
```

---

## Environment Setup

Create `.env` file:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

---

## Available Scripts

```bash
npm run dev         # Start dev server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Check code quality
```

---

## Features

### Authentication
- Login, Signup, Email Verification
- Password Reset
- JWT token management

### Customer Features
- Browse meals & create orders
- Real-time order tracking
- Order history & favorites
- Payment processing (Paystack)
- Profile management

### Admin Dashboard
- Order management
- User management
- Analytics & statistics
- Rider assignment

### Rider Dashboard
- Active deliveries
- Delivery history
- Performance tracking
- Profile management

---

## Architecture

**State Management**: React Context API + Custom Hooks  
**Routing**: Protected & public routes with role-based access  
**Real-time**: Socket.io for live order updates  
**Styling**: Tailwind utility classes, mobile-first responsive  

---

## Development Guidelines

**Component Structure**
- Functional components with hooks
- Named exports preferred
- Props destructuring in parameters

**Naming Conventions**
- Files: `PascalCase.jsx` for components
- Functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`

**Commit Messages**
```bash
feat: add order tracking
fix: resolve payment validation
chore: update dependencies
```

---

## Deployment

### Build

```bash
npm run build
```

Output in `dist/` folder - deploy to any static hosting.

### Recommended Platforms
- Vercel (zero config)
- Netlify
- AWS S3 + CloudFront

---

## Browser Support

Chrome 90+ • Firefox 88+ • Safari 14+ • Edge 90+

---

## Troubleshooting

**Build errors**: `rm -rf node_modules && npm install`  
**API issues**: Check `VITE_API_URL` in `.env`  
**Port conflict**: Change port in `vite.config.js`

---

## License

Copyright © 2025 Swiftmeal. All rights reserved.

---

**Development Timeline**: 3 days (Oct 21-23, 2025) 
