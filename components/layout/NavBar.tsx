import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
      
      {/* Offer Bar */}
      <div className="bg-[#F39200] text-white text-sm py-3 text-center font-medium">
        Monsoon Offer: Free Home Trial + ₹5,000 OFF + 3-Year Warranty
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
            <Link href="/"> 
                <Image
                    src="/logo.png"
                    alt="sound for life logo"
                    width={200}
                    height={80}
                    priority
                />
          </Link>
          
          
          {/* <div>
            <h2 className="font-bold text-lg text-[#0B1724]">
              SFL Hearing
            </h2>

            <p className="text-xs text-gray-500">
              Sunne Ki Azaadi
            </p>
          </div> */}
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[#1E2935] font-medium">
          <a href="/">Free Hearing Test</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/">Brands</a>
          <a href="/hearing-aid-centres">Find Clinic</a>
          <a href="#">Stories</a>
          <a href="/faq">FAQs</a>
        </nav>

        <button className="bg-[#F4A300] text-white px-6 py-3 rounded-xl font-semibold">
          Book Free Trial
        </button>
      </div>
    </header>
  );
}