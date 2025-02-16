import GetHelp from '../components/GetHelp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GetHelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <GetHelp />
      </main>
      <Footer />
    </div>
  );
} 