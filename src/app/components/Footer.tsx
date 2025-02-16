const Footer = () => {
    return (
      <footer className="w-full bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title with green underline */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Keep up-to-date</h2>
            <div className="h-1 w-32 bg-emerald-500 mx-auto"></div>
          </div>
  
          {/* Three columns section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            {/* Get in touch */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
              <p className="text-gray-300 mb-4">We&apos;d love to hear from you</p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md transition-colors">
                Contact Us
              </button>
            </div>
  
            {/* Don't miss out */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Don&apos;t miss out</h3>
              <p className="text-gray-300 mb-4">Sign up for updates</p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md transition-colors">
                Updates
              </button>
            </div>
  
            {/* Make a Difference */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Make a Difference</h3>
              <p className="text-gray-300 mb-4">Make a donation</p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md transition-colors">
                Donate
              </button>
            </div>
          </div>
  
          {/* Follow Us section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
            <p className="text-gray-300 mb-6">Keep up with the conversation across social media.</p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-4">
              {/* Twitter/X */}
              <a href="#" className="bg-emerald-500 p-2 rounded-md hover:bg-emerald-600 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="#" className="bg-emerald-500 p-2 rounded-md hover:bg-emerald-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="bg-emerald-500 p-2 rounded-md hover:bg-emerald-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="bg-emerald-500 p-2 rounded-md hover:bg-emerald-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a href="#" className="bg-emerald-500 p-2 rounded-md hover:bg-emerald-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;