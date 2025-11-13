# ⚡ Pokédex - React TypeScript Application

A responsive Pokémon browser application built with React 19, TypeScript, and Tailwind CSS. Browse Pokémon with pagination or infinite scroll, and view detailed information about each Pokémon.

## 🚀 Features

- **Two View Modes:**
  - **Pagination View**: Navigate through Pokémon with page controls
  - **Load More View**: Infinite scroll with "Load More" button
- **Pokémon Detail Page**: Comprehensive information including:
  - Name, Sprite, Height, Weight, Types
  - Base Stats, Abilities, Base Experience
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **Error Handling**: Graceful error handling with retry functionality
- **Loading States**: Skeleton loaders and spinners for better UX
- **Performance Optimized**: React Query caching, lazy loading, and memoization

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **TanStack Query (React Query)** - Data fetching and caching
- **React Suspense** - Code splitting and loading states
- **Error Boundaries** - Runtime error handling

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pokemon
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── api/              # API calls and data fetching
│   └── pokemon.ts    # Pokémon API hooks
├── components/       # Reusable components
│   ├── pokemon/      # Pokémon-specific components
│   ├── ErrorBoundary.tsx
│   └── Loader.tsx
├── constants/        # Application constants
│   └── pokemon.ts
├── hooks/            # Custom React hooks
│   ├── useInfinitePokemon.ts
│   └── usePokemonList.ts
├── pages/            # Page components
│   ├── Home.tsx
│   └── PokemonDetail.tsx
├── utils/            # Utility functions
│   └── pokemon.ts
├── App.tsx           # Main app component
└── main.tsx          # Application entry point
```

## 🌐 API Endpoints

This application uses the [PokéAPI](https://pokeapi.co/):

- **List Pokémon (Paginated):**
  ```
  GET https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
  ```

- **Get Pokémon Details:**
  ```
  GET https://pokeapi.co/api/v2/pokemon/{id}
  ```

## 🎯 Key Features Implementation

### React Query Configuration
- Smart retry logic (skips 404s, retries other errors)
- Exponential backoff for retries
- Automatic refetch on reconnect
- Optimized cache management

### Performance Optimizations
- React.memo for component memoization
- useMemo for expensive computations
- Lazy loading with React Suspense
- Image lazy loading with native `loading="lazy"`

### Accessibility
- ARIA labels and roles
- Semantic HTML elements
- Keyboard navigation support
- Focus management
- Screen reader support

### Error Handling
- Error boundaries for runtime errors
- Specific error messages (404, 500, network errors)
- Retry functionality for failed requests
- Graceful degradation

## 📱 Responsive Breakpoints

- **Mobile**: 2 columns grid
- **Tablet**: 4 columns grid
- **Desktop**: 5 columns grid

## 🚀 Build & Deployment

### Build for Production
```bash
yarn build
# or
npm run build
```

### Preview Production Build
```bash
yarn preview
# or
npm run preview
```

### Deployment

The application can be deployed to:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **Cloudflare Pages**: Connect repository and set build command to `yarn build`

#### Vercel Deployment
1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite settings
4. Deploy!

#### Netlify Deployment
1. Build command: `yarn build`
2. Publish directory: `dist`
3. Deploy!

#### Environment Variables
No environment variables required. The API base URL defaults to `https://pokeapi.co/api/v2`.

To use a custom API endpoint, create a `.env` file:
```
VITE_POKEMON_API=https://your-api-url.com/api/v2
```

## 🧪 Development Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 📝 Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting configured
- **Modular Architecture**: Separation of concerns
- **Clean Code**: Reusable components and hooks
- **Performance Optimized**: Memoization and lazy loading

## 🎨 Styling

The application uses Tailwind CSS for styling. All components are fully responsive and follow a consistent design system.

## 📄 License

This project is created as a frontend interview task.

## 👤 Author

Built as a demonstration of React 19, TypeScript, and modern frontend development practices.

---

**Note**: This is a frontend interview task demonstrating clean code structure, React best practices, and user experience considerations.
