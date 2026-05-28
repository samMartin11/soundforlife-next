"use client";
import { useState,useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import s from "./CompareModels.module.css";
import {useCallbackModal} from "../BookingModal";

const MODELS = [
  { brand: "signia",  brandLabel: "Signia",  model: "Silk Charge&Go IX",      type: "invisible", typeLabel: "Invisible ITC",    channels: "48", bt: true,  charge: true,  best: "Discreet daily wear" },
  { brand: "signia",  brandLabel: "Signia",  model: "Pure Charge&Go IX",      type: "ric",       typeLabel: "RIC",              channels: "48", bt: true,  charge: true,  best: "Active lifestyle" },
  { brand: "signia",  brandLabel: "Signia",  model: "Styletto IX",            type: "ric",       typeLabel: "Slim RIC",         channels: "48", bt: true,  charge: true,  best: "Style-conscious users" },
  { brand: "phonak",  brandLabel: "Phonak",  model: "Audéo Lumity",           type: "ric",       typeLabel: "RIC",              channels: "20", bt: true,  charge: true,  best: "Water & sweat resistance" },
  { brand: "phonak",  brandLabel: "Phonak",  model: "Naída Lumity",           type: "power",     typeLabel: "BTE Power",        channels: "20", bt: true,  charge: false, best: "Severe–profound loss" },
  { brand: "phonak",  brandLabel: "Phonak",  model: "Virto Paradise",         type: "custom",    typeLabel: "Custom IEM",       channels: "20", bt: true,  charge: false, best: "Tailored fit & comfort" },
  { brand: "resound", brandLabel: "ReSound", model: "OMNIA",                  type: "ric",       typeLabel: "RIC",              channels: "17", bt: true,  charge: true,  best: "360° sound clarity" },
  { brand: "resound", brandLabel: "ReSound", model: "Customs by ReSound",     type: "invisible", typeLabel: "Invisible ITC",    channels: "17", bt: false, charge: false, best: "Ultra-discreet fit" },
  { brand: "resound", brandLabel: "ReSound", model: "Enzo Q",                 type: "power",     typeLabel: "BTE Super Power",  channels: "17", bt: true,  charge: false, best: "Profound hearing loss" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CompareModal({ open, onClose }: Props) {
  const [brandFilter, setBrandFilter] = useState("all");
  const [typeFilter, setTypeFilter]   = useState("all");
  const overlayRef = useRef<HTMLDivElement>(null);
  const { openCallback } = useCallbackModal();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const filtered = MODELS.filter(
    (m) =>
      (brandFilter === "all" || m.brand === brandFilter) &&
      (typeFilter  === "all" || m.type  === typeFilter)
  );

  const modal = (
    <div
      className={s.backdrop}
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className={s.modal} role="dialog" aria-modal="true" aria-label="Compare hearing aid models">

        <div className={s.header}>
          <div>
            <h2 className={s.title}>Compare models</h2>
            <p className={s.sub}>Filter by brand or type to narrow down your choice</p>
          </div>
          <button className={s.closeBtn} onClick={onClose} aria-label="Close modal">&#x2715;</button>
        </div>

        <div className={s.filters}>
          <span className={s.filterLabel}>Brand</span>
          {["all", "signia", "phonak", "resound"].map((v) => (
            <button
              key={v}
              className={`${s.filterBtn} ${brandFilter === v ? s.active : ""}`}
              onClick={() => setBrandFilter(v)}
            >
              {v === "all" ? "All" : v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
          <span className={s.filterLabel} style={{ marginLeft: "12px" }}>Type</span>
          {["all", "invisible", "ric", "power", "custom"].map((v) => (
            <button
              key={v}
              className={`${s.filterBtn} ${typeFilter === v ? s.active : ""}`}
              onClick={() => setTypeFilter(v)}
            >
              {v === "all" ? "All" : v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>

        <div className={s.tableWrap}>
          {filtered.length === 0 ? (
            <p className={s.empty}>No models match this filter.</p>
          ) : (
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Channels</th>
                  <th>Bluetooth</th>
                  <th>Rechargeable</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m, i) => (
                  <tr key={i}>
                    <td>
                      <span className={s.brandMuted}>{m.brandLabel}</span>
                      <span className={`${s.typeTag} ${s[`tag_${m.brand}`]}`}>{m.typeLabel}</span>
                    </td>
                    <td className={s.modelName}>{m.model}</td>
                    <td><span className={s.channelBadge}>{m.channels} ch</span></td>
                    <td>{m.bt  ? <span className={s.yes}>✓</span> : <span className={s.no}>—</span>}</td>
                    <td>{m.charge ? <span className={s.yes}>✓</span> : <span className={s.no}>—</span>}</td>
                    <td className={s.bestFor}>{m.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className={s.cta}>
          <p className={s.ctaCopy}>
            <strong>Not sure which to pick?</strong> Our audiologists match you to
            the right device based on your hearing profile — for free.
          </p>
          <a className={s.ctaBtn} href="tel:18001234567">
            🎧 Talk to an audiologist
          </a>
        </div>

      </div>
    </div>
  );
  return createPortal(modal, document.body);
}