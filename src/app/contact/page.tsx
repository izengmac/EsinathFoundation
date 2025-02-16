import ContactUs from '../components/ContactUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
} 