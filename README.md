# Vite + React + Tailwind CSS with Bun

A modern, fast web application setup using **Vite**, **React**, and **Tailwind CSS v4** with **Bun** as the JavaScript runtime and package manager.

![Bun](https://img.shields.io/badge/bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Bun** (version 1.0 or higher)
- **Node.js** (optional, but recommended for compatibility)

---

## 🚀 Quick Start

### Step 1: Install Bun

#### Windows (PowerShell)
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

#### macOS / Linux
```bash
curl -fsSL https://bun.sh/install | bash
```

#### Verify Installation
```bash
bun --version
```

---

### Step 2: Create a New Vite React Project

```bash
bun create vite@latest my-project
```

When prompted, select:
- **Framework**: React
- **Variant**: JavaScript (or TypeScript if preferred)

---

### Step 3: Navigate to Project Directory

```bash
cd my-project
```

---

### Step 4: Install Dependencies

```bash
bun install
```

---

### Step 5: Install Tailwind CSS v4

```bash
bun add tailwindcss @tailwindcss/vite
```

---

### Step 6: Configure Vite

Update your `vite.config.js` file:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

### Step 7: Import Tailwind CSS

Update your `src/index.css` file:

```css
@import "tailwindcss";
```

---

### Step 8: Start Development Server

```bash
bun run dev
```

Your app will be running at **http://localhost:5173**

---

## 📁 Project Structure

```
my-project/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css          # Tailwind CSS import here
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js          # Tailwind plugin configured here
├── bun.lockb               # Bun lock file
└── README.md
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run lint` | Run ESLint |

---

## 📝 Command Comparison: npm vs Bun

| npm Command | Bun Equivalent |
|-------------|----------------|
| `npm install` | `bun install` |
| `npm install <package>` | `bun add <package>` |
| `npm install -D <package>` | `bun add -d <package>` |
| `npm run dev` | `bun run dev` |
| `npm run build` | `bun run build` |
| `npm create vite@latest` | `bun create vite@latest` |
| `npm uninstall <package>` | `bun remove <package>` |
| `npx <command>` | `bunx <command>` |

---

## 🎨 Using Tailwind CSS

### Example Component

Create a new component `src/components/Card.jsx`:

```jsx
function Card({ title, description }) {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-purple-100">{description}</p>
    </div>
  )
}

export default Card
```

### Update App.jsx

```jsx
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        <Card 
          title="Fast Development" 
          description="Bun is incredibly fast for installations and builds."
        />
        <Card 
          title="Modern Styling" 
          description="Tailwind CSS v4 with automatic class detection."
        />
        <Card 
          title="Hot Reload" 
          description="Instant feedback with Vite's blazing-fast HMR."
        />
      </div>
    </div>
  )
}

export default App
```

---

## 🛠️ Troubleshooting

### Bun Not Recognized
If you see `'bun' is not recognized`, try:
1. Restart your terminal/PowerShell
2. Add Bun to your PATH manually
3. Run the install command again

### Tailwind Classes Not Working
1. Ensure `@import "tailwindcss";` is in your `src/index.css`
2. Make sure `@tailwindcss/vite` plugin is added to `vite.config.js`
3. Restart the dev server: `bun run dev`

### Port Already in Use
```bash
bun run dev -- --port 3000
```

---

## 📚 Resources

- [Bun Documentation](https://bun.sh/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)

---

## 📄 License

MIT License - feel free to use this setup for your projects!

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Happy Coding! 🚀**
