# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Code Structure
FAIRINTERVIEW/
├── public/
│   └── index.html
├── src/
│   ├── assets/                  # Static assets
│   ├── components/              # Reusable components
│   ├── contexts/                # Contexts for global state
│   ├── firebase/                # Firebase configuration and API functions
│   ├── pages/                   # Pages
│   ├── styles/                  # Global styles and theme
│   ├── utils/                   # Utility functions
│   ├── tests/                   # Test files
│   ├── App.jsx                  # Main App component
│   ├── index.jsx                # React entry point
│   └── main.jsx                 # Vite entry point
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.cjs           # PostCSS configuration
├── package.json                 # Project dependencies
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
