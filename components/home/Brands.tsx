'use client';
import Link from "next/link";
import Image from "next/image";
import s from "./Brands.module.css";
import { useState } from "react";
import CompareModal from "./CompareModel";

const BRANDS = [
  { 
    name: "Signia",  
    accent: "#E8291C",
    status: "Privileged Partner", 
    href: "/signia-hearing-aids",  
    logo: "/signia-seeklogo.svg", 
    models: [
      { name: "Silk Charge&Go IX", type: "Invisible", channels: "48 Channels" },
      { name: "Pure Charge&Go IX", type: "RIC", channels: "48 Channels" },
      { name: "Styletto IX", type: "Slim", channels: "48 Channels" }
    ]
  },
  { 
    name: "Phonak", 
    accent: "#4A9B37", 
    status: "Authorised",          
    href: "/phonak-hearing-aids",  
    logo: "/Phonak.svg",
    models: [
      { name: "Audéo Lumity", type: "Waterproof", channels: "20 Channels" },
      { name: "Naída Lumity", type: "Power", channels: "20 Channels" },
      { name: "Virto Paradise", type: "Custom", channels: "20 Channels" }
    ]
  },
  { 
    name: "ReSound", 
    accent: "#A50034",
    status: "Authorised",          
    href: "/resound-hearing-aids", 
    logo: "/ReSound-logo.svg",
    models: [
      { name: "OMNIA", type: "RIC", channels: "17 Channels" },
      { name: "Customs by ReSound", type: "Invisible", channels: "17 Channels" },
      { name: "Enzo Q", type: "Super Power", channels: "17 Channels" }
    ]
  },
];

export default function Brands() {

   const [compareOpen, setCompareOpen] = useState(false);
  return (
    <section id="brands" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <h2>
            All top global brands.{" "}
            <span className={s.accent}>Under one roof.</span>
          </h2>
          <p className={s.subtitle}>
            Tap any brand to learn more — we recommend what&apos;s right for YOU.
          </p>
        </div>

        <div className={s.grid}>
          {BRANDS.map((brand) => (
            <div key={brand.name}
              className={s.brandCard}
              style={{ "--brand-accent": brand.accent } as React.CSSProperties}>

              <div className={s.cardTop}>
                <div className={s.iconWrap}>
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={90}
                    height={36}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className={s.brandName}>{brand.name}</h3>
                <span className={s.brandStatus}>{brand.status}</span>
              </div>

              <div className={s.modelContainer}>
                <h4 className={s.modelHeading}>Top Models:</h4>
                <ul className={s.modelList}>
                  {brand.models.map((model, index) => (
                    <li key={index} className={s.modelItem}>
                      <div className={s.modelInfo}>
                        <span className={s.modelName}>{model.name}</span>
                        <span className={s.modelChannels}>{model.channels}</span>
                      </div>
                      <span className={s.pill}>{model.type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={brand.href} className={s.viewDetails}>
                View all {brand.name} &rarr;
              </Link>
              
            </div>
          ))}
        </div>

        <div className={s.compareAction}>
          <button className={s.compareBtn} onClick={() => setCompareOpen(true)}>
            Compare Models
          </button>
        </div>
       <CompareModal open={compareOpen} onClose={() => setCompareOpen(false)} />

      </div>
    </section>
  );
}