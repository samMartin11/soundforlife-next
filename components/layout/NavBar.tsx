"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Menu, X, ChevronDown } from "lucide-react";
import s from "./NavBar.module.css";

const NAV_ITEMS = [
  {
    label: "Hearing Solutions",
    href: "/hearing-solutions/",
    items: [
      { label: "Hearing Aids", href: "/hearing-solutions/hearing-aids/" },
      { label: "Types & Styles", href: "/hearing-solutions/types-styles/" },
      { label: "Rechargeable", href: "/hearing-solutions/rechargeable/" },
      { label: "Invisible", href: "/hearing-solutions/invisible/" },
      { label: "Bluetooth", href: "/hearing-solutions/bluetooth/" },
      { label: "Prices", href: "/hearing-solutions/prices/" },
    ],
  },
  {
    label: "Why SoundForLife",
    href: "/why-soundforlife/",
    items: [
      { label: "About Us", href: "/why-soundforlife/about-us/" },
      { label: "Our Audiologists", href: "/why-soundforlife/our-audiologists/" },
      { label: "Free Trial", href: "/why-soundforlife/free-trial/" },
      { label: "Aftercare & Warranty", href: "/why-soundforlife/aftercare-warranty/" },
      { label: "Inside SoundForLife", href: "/why-soundforlife/inside-soundforlife/" },
    ],
  },
  {
    label: "Hearing Health",
    href: "/hearing-health/",
    items: [
      { label: "Signs of Hearing Loss", href: "/hearing-health/signs-of-hearing-loss/" },
      { label: "Tinnitus", href: "/hearing-health/tinnitus/" },
      { label: "FAQ", href: "/hearing-health/faq/" },
    ],
  },
  {
    label: "Offers",
    href: "/offers/",
    items: [
      { label: "Current Deals", href: "/offers/current-deals/" },
      { label: "EMI & Financing", href: "/offers/emi-financing/" },
      { label: "Insurance & Government Schemes", href: "/offers/insurance-help/" },
    ],
  },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const close = () => setOpen(false);

  return (
    <>
      <header className={s.header}>
        <div className={s.offerBar}>
          Monsoon Offer: Free Home Trial + ₹5,000 OFF + 3-Year Warranty
        </div>

        <div className={s.inner}>
          {/* Logo */}
          <Link href="/" onClick={close}>
            <Image src="https://blog.soundforlife.in/wp-content/uploads/2025/04/cropped-SFL-Trademark-Logo-01-1-scaled-1-2048x751.png" alt="SFL Hearing Solutions" width={160} height={59} priority />
          </Link>

          {/* Desktop nav */}
          <nav className={s.links}>
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={s.navItem}
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button type="button" className={s.navTrigger}>
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={activeMenu === item.label ? s.chevronOpen : s.chevron}
                  />
                </button>

                {activeMenu === item.label && (
                  <div className={s.dropdown}>
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={s.dropdownLink}
                        onClick={() => setActiveMenu(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className={s.actions}>
            <Link href="/hearing-aid-centres" className={s.callBtn}>
              <MapPin size={16} />
            </Link>
            <a href="tel:+919015401540" className={s.callBtn}>
              <Phone size={16} />
              <span>Call</span>
            </a>

            <button
              type="button"
              className={s.hamburger}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay + panel */}
      {open && (
        <div className={s.overlay} onClick={close}>
          <div className={s.panel} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={s.closeBtn} aria-label="Close menu" onClick={close}>
              <X size={24} />
            </button>

            <nav className={s.mobileNav}>
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className={s.mobileNavSection}>
                  <button
                    type="button"
                    className={s.mobileNavTrigger}
                    onClick={() =>
                      setExpandedMobile(expandedMobile === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={expandedMobile === item.label ? s.chevronOpen : s.chevron}
                    />
                  </button>

                  {expandedMobile === item.label && (
                    <div className={s.mobileSubNav}>
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={s.mobileSubLink}
                          onClick={close}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
