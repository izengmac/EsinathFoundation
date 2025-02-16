import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
} 