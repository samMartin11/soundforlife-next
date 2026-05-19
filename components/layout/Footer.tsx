import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07142d] text-white">

      <div className="container py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

          {/* LEFT SECTION */}
          <div className="flex flex-col gap-5 text-gray-400">
            <Link href="#" className="hover:text-white transition" >QuickLink1</Link>
            <Link href="#" className="hover:text-white transition" >QuickLink2</Link>
            <Link href="#" className="hover:text-white transition" >QuickLink3</Link>
            {/* Logo */}
           

              {/* <Image
                src="/logo.png"
                alt="sound-for-life-logo"
                width={140}
                height={80}
                priority
               /> */}

              {/* <div>
                <h3 className="text-3xl font-bold text-white">
                  SFL Hearing Solutions
                </h3>

                <p className="text-gray-400 text-sm">
                  Sunne Ki Azaadi
                </p>
              </div> */}

            

            {/* Description */}
            {/* <p className="text-gray-400 leading-8 max-w-md">
              India's largest multi-brand, multi-level chain of
              hearing aid clinics. PAN India presence with certified
              audiologists. 10+ years of giving people their lives
              back, one conversation at a time.
            </p> */}

          </div>

          {/* QUICK LINKS */}
          <div>

            <h4 className="text-2xl font-semibold mb-8">
              Quick Links
            </h4>

            <div className="flex flex-col gap-5 text-gray-400">

              <Link
                href="/hearing-test"
                className="hover:text-white transition"
              >
                Free Hearing Test
              </Link>

              <Link
                href="/how-it-works"
                className="hover:text-white transition"
              >
                How It Works
              </Link>

              <Link
                href="/brands"
                className="hover:text-white transition"
              >
                Our Brands
              </Link>

              <Link
                href="/faq"
                className="hover:text-white transition"
              >
                FAQs
              </Link>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h4 className="text-2xl font-semibold mb-8">
              Contact
            </h4>

            <div className="flex flex-col gap-6 text-gray-400">

              <div className="flex items-start gap-4">
                <Phone
                  size={20}
                  className="mt-1 text-gray-300"
                />

                <span>+91 9015401540</span>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle
                  size={20}
                  className="mt-1 text-gray-300"
                />

                <span>WhatsApp Support</span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin
                  size={20}
                  className="mt-1 text-gray-300"
                />

                <span>50+ Clinics PAN India</span>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 SFL Hearing Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">

            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}