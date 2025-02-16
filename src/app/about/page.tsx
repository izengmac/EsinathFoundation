import AboutUs from '../components/AboutUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
} 