


const Footer = () => {
  return (
    <footer className="bg-[#1a3b2e] text-white py-12 px-4 sm:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-4">KeenKeeper</h2>
        <p className="text-gray-300 max-w-lg mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-semibold">Social Links</p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1a3b2e] hover:bg-gray-200 transition-colors shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1a3b2e] hover:bg-gray-200 transition-colors shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1a3b2e] hover:bg-gray-200 transition-colors shadow-sm font-bold text-xl">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
