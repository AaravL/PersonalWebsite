# 🎴 Personal Website - Playing Cards Theme

A stunning personal portfolio website built with React and styled with an elegant playing card theme. Features interactive card flip animations, card-based project showcase, and a fully responsive design.

## 🌟 Features

- **Interactive Playing Cards**: Click cards to flip and reveal information
- **Playing Card Suit Theme**: Decorative use of card suits (♠ ♥ ♦ ♣) throughout
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Gold accents on dark green background for an elegant look
- **Card-Based Portfolio**: Display projects as interactive playing cards
- **Smooth Animations**: Flip effects, hover animations, and transitions

## 📁 Project Structure

```
PersonalWebsite/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Navigation bar
│   │   ├── Footer.jsx           # Footer component
│   │   └── PlayingCard.jsx      # Reusable card flip component
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── About.jsx            # About page
│   │   ├── Portfolio.jsx        # Portfolio/Projects page
│   │   ├── Skills.jsx           # Skills section
│   │   └── Contact.jsx          # Contact form
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── .gitignore                  # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**

```bash
cd PersonalWebsite
npm install
```

2. **Start the development server:**

```bash
npm run dev
```

3. **Open in browser:**
   The app will automatically open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🎨 Customization Guide

### Update Your Information

1. **Contact Page** (`src/pages/Contact.jsx`)
   - Replace email address with yours
   - Update LinkedIn profile URL
   - Update GitHub profile URL

2. **Footer** (`src/components/Footer.jsx`)
   - Change "Your Name" to your actual name
   - Modify the year if needed

3. **Home Page** (`src/pages/Home.jsx`)
   - Update welcome message and subtitle

4. **About Page** (`src/pages/About.jsx`)
   - Replace biographical information
   - Customize the "What I Value" section

5. **Portfolio Page** (`src/pages/Portfolio.jsx`)
   - Add/remove projects in the projects array
   - Update project titles, descriptions, and technologies
   - Add project links

6. **Skills Page** (`src/pages/Skills.jsx`)
   - Modify skill categories
   - Update individual skills

### Color Customization

Edit `src/index.css` to change colors:

- **Main Gold**: `#d4af37` - Used for accents and borders
- **Dark Green Background**: `#0f3d1f`, `#1a5c2e` - Main background
- **Light Text**: `#f0f0f0`, `#d0d0d0` - Text colors

### Add More Pages

1. Create a new file in `src/pages/`
2. Import it in `src/App.jsx`
3. Add a route in the Routes component
4. Add a navigation link in `src/components/Navigation.jsx`

## 🃏 Playing Card Component

The `PlayingCard` component is reusable throughout the site:

```jsx
<PlayingCard
  suit="♠"
  rank="Ace"
  title="Your Title"
  description="Description that appears when flipped"
/>
```

**Props:**

- `suit`: Card suit symbol (♠ ♥ ♦ ♣)
- `rank`: Card rank display (A, K, Q, J, 2-10)
- `title`: Title shown on back
- `description`: Description shown on back

## 📱 Responsive Breakpoints

- Desktop: Full layout
- Tablet (≤768px): Adjusted grid layouts
- Mobile: Single column layouts and stacked navigation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📦 Dependencies

- **React 18.2**: UI library
- **React Router DOM 6.20**: Routing
- **Vite 5.0**: Build tool and dev server

## 💡 Tips & Tricks

1. **Add Animations**: New animations can be added to `index.css`
2. **Dark/Light Mode**: Could be easily implemented with CSS variables
3. **Contact Form**: Currently logs to console; integrate with Formspree, Netlify Forms, or a backend service
4. **Images**: Add project images to portfolio cards for better showcase
5. **Blog**: The blog section can be added as a new page similarly to existing ones

## 🚀 Deployment

### Deploy to Netlify

1. Push to GitHub
2. Connect your repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel

1. Push to GitHub
2. Import project on Vercel
3. Framework preset: Vite
4. Deploy!

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Next Steps

1. Update all personal information
2. Add your project details and images
3. Customize colors if desired
4. Set up form submission (e.g., Formspree)
5. Deploy to your preferred platform
6. Share with the world! 🌍

---

Made with ♠ ♥ ♦ ♣ and React!
