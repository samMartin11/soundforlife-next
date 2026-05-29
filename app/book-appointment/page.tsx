"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Lock, Edit2, Phone } from "lucide-react";
import "./style.css";

export default function BookAppointmentPage() {
    const [form, setForm] = useState({
        forWhom: "Myself",
        name: "",
        phone: "",
        city: "",
        email: "",
    });

    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSendOTP = (e: SubmitEvent) => {
        e.preventDefault();
        console.log("Sending OTP to:", form.phone);
        setOtpSent(true);
    };

    const handleVerifyOTP = (e: SubmitEvent) => {
        e.preventDefault();
        if (otp.length < 4) {
            alert("Please enter a valid OTP");
            return;
        }
        console.log("Verifying OTP:", otp, "and booking for:", form);
        setSubmitted(true);
    };

    const relations = ["Myself", "Mother", "Father", "Spouse", "Other"];

    return (
        <div className="book-page-wrapper">

            <div className="book-page-inner">

                {/* Left column — trust / benefit panel */}
                <aside className="book-aside">
                    <div className="book-aside-badge">FREE Hearing Test</div>
                    <h1 className="book-aside-heading">
                        Book Your <span className="book-aside-accent">FREE</span> Hearing Test
                    </h1>
                    <p className="book-aside-sub">
                        India's most trusted home-visit audiology service. Our expert audiologist
                        comes to you — no travel, no hassle.
                    </p>

                    <ul className="book-benefit-list">
                        {[
                            "100% Free Pure Tone Audiometry (PTA)",
                            "₹5,000 OFF on hearing aids today",
                            "3-Year extended warranty included",
                            "Audiologist calls within 30 minutes",
                            "Trusted by 50,000+ happy patients",
                        ].map((item) => (
                            <li key={item} className="book-benefit-item">
                                <CheckCircle className="book-benefit-icon" size={18} />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="book-aside-callout">
                        <Phone size={16} />
                        <span>Need help? Call <strong>+91 90 1540 1540</strong></span>
                    </div>
                </aside>

                {/* Right column — form card */}
                <main className="book-form-col">
                    <div className="book-card">

                        {submitted ? (
                            /* SUCCESS STATE */
                            <div className="book-success">
                                <div className="book-success-icon-wrap">
                                    <CheckCircle size={40} />
                                </div>
                                <h2 className="book-success-heading">You're All Set!</h2>
                                <p className="book-success-body">
                                    An audiologist will call you within 30 minutes to confirm your free home visit.
                                </p>
                                <button
                                    className="book-link-btn"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setOtpSent(false);
                                        setForm({ ...form, phone: "", name: "" });
                                        setOtp("");
                                    }}
                                >
                                    Book another appointment →
                                </button>
                            </div>

                        ) : otpSent ? (
                            /* OTP STATE */
                            <div>
                                <div className="book-card-header">
                                    <div className="book-otp-icon-wrap">
                                        <Lock size={22} />
                                    </div>
                                    <h2 className="book-card-title">Verify Your Number</h2>
                                    <p className="book-card-subtitle">
                                        OTP sent to <strong>+91 {form.phone}</strong>{" "}
                                        <button className="book-edit-btn" onClick={() => setOtpSent(false)}>
                                            <Edit2 size={13} /> Edit
                                        </button>
                                    </p>
                                </div>

                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleVerifyOTP;
                                }} className="book-form">
                                    <div className="book-field">
                                        <label htmlFor="otp" className="book-label book-label--center">
                                            Enter 4-digit OTP
                                        </label>
                                        <input
                                            id="otp"
                                            type="text"
                                            required
                                            maxLength={4}
                                            placeholder="• • • •"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                                            className="book-input book-input--otp"
                                        />
                                    </div>

                                    <button type="submit" className="book-btn-primary">
                                        Verify & Book Appointment <ArrowRight size={18} />
                                    </button>

                                    <p className="book-resend-text">
                                        Didn't receive the code?{" "}
                                        <button
                                            type="button"
                                            onClick={() => console.log("Resending OTP...")}
                                            className="book-link-btn"
                                        >
                                            Resend OTP
                                        </button>
                                    </p>
                                </form>
                            </div>

                        ) : (
                            /* INITIAL FORM STATE */
                            <>
                                {/* Bonus banner */}
                                <div className="book-bonus-bar">
                                    🎁 <strong>Today's Bonus:</strong> Free PTA + ₹5,000 OFF + 3-Year Warranty
                                </div>

                                <div className="book-card-header">
                                    <h2 className="book-card-title">Book Your FREE Hearing Test</h2>
                                    <p className="book-card-subtitle">
                                        Our audiologist will call you within 30 minutes to schedule.
                                    </p>
                                </div>

                                <form className="book-form" onSubmit={(e) => handleSendOTP}>

                                    {/* For whom */}
                                    <div className="book-field">
                                        <label className="book-label">
                                            Who is this appointment for? <span className="book-required">*</span>
                                        </label>
                                        <div className="book-pill-group">
                                            {relations.map((relation) => (
                                                <button
                                                    key={relation}
                                                    type="button"
                                                    onClick={() => setForm({ ...form, forWhom: relation })}
                                                    className={`book-pill ${form.forWhom === relation ? "book-pill--active" : ""}`}
                                                >
                                                    {relation}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <div className="book-field">
                                        <label htmlFor="name" className="book-label">
                                            {form.forWhom === "Myself" ? "Your Name" : "Patient's Name"}{" "}
                                            <span className="book-required">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="book-input"
                                            placeholder="Enter full name"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="book-field">
                                        <label htmlFor="phone" className="book-label">
                                            Mobile Number <span className="book-required">*</span>
                                        </label>
                                        <div className="book-input-prefix-wrap">
                                            <span className="book-input-prefix">+91</span>
                                            <input
                                                id="phone"
                                                type="tel"
                                                required
                                                placeholder="10-digit mobile"
                                                pattern="[6-9][0-9]{9}"
                                                title="Must start with 6-9 and be 10 digits"
                                                value={form.phone}
                                                onChange={(e) =>
                                                    setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
                                                }
                                                className="book-input book-input--prefixed"
                                            />
                                        </div>
                                    </div>

                                    {/* City */}
                                    <div className="book-field">
                                        <label htmlFor="city" className="book-label">City</label>
                                        <input
                                            id="city"
                                            type="text"
                                            value={form.city}
                                            onChange={(e) => setForm({ ...form, city: e.target.value })}
                                            className="book-input"
                                            placeholder="E.g., Delhi, Noida"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="book-field">
                                        <label htmlFor="email" className="book-label">
                                            Email <span className="book-optional">(optional)</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="book-input"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <button type="submit" className="book-btn-primary">
                                        Get OTP to Confirm <ArrowRight size={18} />
                                    </button>
                                </form>

                                <p className="book-privacy-note">
                                    By submitting, you authorise our audiologists to contact you. We respect your privacy.
                                </p>
                            </>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

