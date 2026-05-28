import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <div className="w-full bg-[#0b1a2e] text-white">

            <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "56px 1.5rem" }}>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_0.75fr] gap-6">

                    {/* LEFT: Brand + Description */}
                    <div className="flex flex-col gap-5">

                        <Image
                            src="https://blog.soundforlife.in/wp-content/uploads/2025/04/cropped-SFL-Trademark-Logo-01-1-scaled-1-2048x751.png"
                            alt="Sound For Life Hearing Solutions"
                            width={220}
                            height={60}
                            className="object-contain"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />

                        <p className="text-gray-400 text-sm leading-6 max-w-xs" style={{ color: "white" }}>
                            India&apos;s largest multi-brand, multi-level chain of hearing aid clinics.
                            PAN India presence with certified audiologists. 10+ years of giving
                            people their lives back — one conversation at a time.
                        </p>

                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="font-bold text-white mb-5" style={{ color: "white", marginBottom: "15px" }}>Quick Links</h4>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <Link href="/" className="hover:text-white transition">Home</Link>
                            <Link href="/how-it-works" className="hover:text-white transition">How It Works</Link>
                            <Link href="/hearing-aids" className="hover:text-white transition">Hearing Aids</Link>
                            <Link href="/hearing-aid-centres" className="hover:text-white transition">Our Centres</Link>
                            <Link href="/hearing-aid-offers" className="hover:text-white transition">Offers</Link>
                            <Link href="/testimonials" className="hover:text-white transition">Testimonials</Link>
                            <Link href="/about" className="hover:text-white transition">About Us</Link>
                            <Link href="/contact" className="hover:text-white transition">Contact</Link>
                            <Link href="/faq" className="hover:text-white transition">FAQs</Link>
                            <Link href="/book-appointment" className="hover:text-white transition">Book Appointment</Link>
                        </div>
                    </div>

                    {/* BRANDS */}
                    <div>
                        <h4 className="font-bold text-white mb-5" style={{ color: "white", marginBottom: "15px" }}>Brands</h4>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <Link href="/phonak-hearing-aids" className="hover:text-white transition">Phonak</Link>
                            <Link href="/signia-hearing-aids" className="hover:text-white transition">Signia</Link>
                            <Link href="/resound-hearing-aids" className="hover:text-white transition">ReSound</Link>
                            <Link href="/unitron-hearing-aids" className="hover:text-white transition">Unitron</Link>
                            <Link href="/sonic-hearing-aids" className="hover:text-white transition">Sonic</Link>
                            <Link href="/am-hearing-aids" className="hover:text-white transition">AM Hearing</Link>
                        </div>
                    </div>

                    {/* LEARN */}
                    <div>
                        <h4 className="font-bold text-white mb-5" style={{ color: "white", marginBottom: "15px" }}>Learn</h4>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <Link href="/hearing-loss" className="hover:text-white transition">Hearing Loss</Link>
                            <Link href="/hearing-aid-centre" className="hover:text-white transition">Hearing Aid Centre</Link>
                            <Link href="/terms-and-conditions" className="hover:text-white transition">Terms &amp; Conditions</Link>
                            <Link href="/imprint" className="hover:text-white transition">Imprint</Link>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-base font-bold text-white mb-5" style={{ color: "white", marginBottom: "15px" }}>Contact</h4>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-gray-300 shrink-0" />
                                <span>+91 9015401540</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageCircle size={16} className="text-gray-300 shrink-0" />
                                <span>WhatsApp Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-gray-300 shrink-0" />
                                <span>50+ Clinics PAN India</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ marginTop: "20px", paddingTop: "20px" }}>
                    <p className="text-gray-500 text-xs">© 2026 SFL Hearing Solutions. All rights reserved.</p>
                    <div className="flex items-center gap-5 text-xs text-gray-500">
                        <Link href="/privacy-policy" className="hover:text-white transition">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition">Terms</Link>
                    </div>
                </div>

            </div>

        </div>
    );
}