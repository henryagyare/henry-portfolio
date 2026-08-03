import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiX } from "react-icons/fi";
import { site } from "../content.js";

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS configuration loaded from Vite environment variables (VITE_ prefixed)
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function EmailModal({ isOpen, onClose }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset form when modal closes
      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus("idle");
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      to_email: site.email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-zinc-950/50 dark:bg-zinc-950/80 backdrop-blur-sm animate-fade-in" />

      {/* Modal panel */}
      <div className="relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800/80 dark:bg-zinc-900 shadow-2xl animate-slide-up overflow-hidden transition-all duration-300">
        {/* Top accent bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20">
              <FiMail className="h-4.5 w-4.5 text-indigo-650 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-zinc-900 dark:text-white">Send a Message</h2>
              <p className="text-xs text-zinc-500">I'll get back to you quickly.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50/50 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-400 dark:hover:text-white dark:hover:border-zinc-700 transition-all"
            aria-label="Close"
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        {status === "success" ? (
          <div className="px-6 pb-8 pt-4 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30">
              <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2">Message Sent!</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              Thanks for reaching out, <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{form.name}</span>! I'll get back to you at <span className="text-indigo-650 dark:text-indigo-300 font-medium">{form.email}</span> soon.
            </p>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 px-6 py-2.5 text-sm font-semibold transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
            {/* Name + Email row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label htmlFor="modal-name" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-550/60 focus:ring-1 focus:ring-indigo-550/10 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder:text-zinc-650 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/30 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="modal-email" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="modal-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-550/60 focus:ring-1 focus:ring-indigo-550/10 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder:text-zinc-650 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/30 transition-all"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label htmlFor="modal-subject" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Subject
              </label>
              <input
                id="modal-subject"
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-550/60 focus:ring-1 focus:ring-indigo-550/10 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder:text-zinc-650 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/30 transition-all"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="modal-message" className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="modal-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me what's on your mind..."
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-indigo-550/60 focus:ring-1 focus:ring-indigo-550/10 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100 dark:placeholder:text-zinc-650 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/30 transition-all resize-none"
              />
            </div>

            {/* Error message */}
            {status === "error" && (
              <p className="text-xs text-red-700 bg-red-50 border border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/20 rounded-lg px-3 py-2">
                Something went wrong. Please try emailing me directly at{" "}
                <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 text-white hover:bg-zinc-850 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 px-6 py-3 text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiMail className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
