# Naija Cre8

Official website for **Naija Cre8** - Nigeria's biggest gathering of creatives.

## 🎉 Event Details

- **Date**: February 14, 2026
- **Location**: Unilag Indoor Sports Complex, Lagos, Nigeria
- **Website**: [naijacre8.com](https://naijacre8.com)

## 📖 About

Naija Cre8 is an event platform designed to bring together Nigeria's most talented creatives. This website serves as the central hub for event information, including speaker details, sponsors, ticket sales, venue information, and the event agenda.

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/) 18.3.1
- **Build Tool**: [Vite](https://vitejs.dev/) 7.1.2
- **UI Library**: [Chakra UI](https://chakra-ui.com/) 2.8.2
- **Routing**: [React Router](https://reactrouter.com/) 7.9.1
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 10.18.0
- **Maps**: [React Leaflet](https://react-leaflet.js.org/) 4.2.1
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) 5.5.0
- **Styling**: [Emotion](https://emotion.sh/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Kafolabi/naija-cre8.git
cd naija-cre8
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
naija-cre8/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── data/           # Data files and content
│   ├── pages/          # Page components
│   │   ├── HomePage/   # Home page sections
│   │   ├── TicketsPage/ # Tickets page
│   │   ├── VenuePage/  # Venue page with map
│   │   ├── Speakers.jsx
│   │   └── Sponsors.jsx
│   ├── styles/         # Global styles
│   ├── ui/             # Reusable UI components
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global CSS
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── vercel.json         # Vercel deployment configuration
```

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com). The `vercel.json` configuration ensures proper routing for the single-page application.

To deploy your own instance:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## 🎨 Features

- **Responsive Design**: Optimized for all device sizes
- **Interactive Map**: Venue location with Leaflet integration
- **Event Agenda**: Detailed schedule of activities
- **Speaker Profiles**: Information about event speakers
- **Ticket Sales**: Integrated ticketing system
- **Sponsor Showcase**: Recognition for event sponsors
- **Contact Form**: Easy communication channel
- **SEO Optimized**: Meta tags and Open Graph support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 📞 Contact

For inquiries about the Naija Cre8 event, please visit the contact section on the website.
