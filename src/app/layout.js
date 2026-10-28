import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css';
import '../assets/css/color-1.css';
import '../assets/css/color-2.css';
import '../assets/css/color-3.css';
import '../assets/css/color-4.css';
import '../assets/css/color-5.css';
import '../assets/css/style.css';
import '../assets/css/styleswitcher.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Styleswitcher from '../components/Styleswitcher';

export const metadata = {
  title: 'Mazhar Ali | Software Engineer',
  description: 'Mazhar Ali – WordPress & web developer portfolio',
};

// Root layout shared by every page
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Header component at the top */}
        <Header />

        {/* Styleswitcher component (if separate) */}
        <Styleswitcher />

        {/* Main content area with minimum height and padding */}
        <main style={{ minHeight: '50vh', padding: '20px' }}>
          {children}
        </main>

        {/* Footer component at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
