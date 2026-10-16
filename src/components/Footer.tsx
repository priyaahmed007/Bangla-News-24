"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "হোম", href: "/" },
    { name: "রাজনীতি", href: "/category/politics" },
    { name: "বিশ্ব", href: "/category/world" },
    { name: "অর্থনীতি", href: "/category/economy" },
    { name: "স্বাস্থ্য", href: "/category/health" },
    { name: "খেলা", href: "/category/sports" },
    { name: "প্রযুক্তি", href: "/category/technology" },
  ];

  return (
    <footer className="mt-12 border-t-4 border-red-700 bg-white text-neutral-700">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="Bangla News 24"
                width={42}
                height={42}
              />
              <span className="text-2xl font-bold text-red-700">
                Bangla News 24
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-neutral-600">
              দেশ ও বিশ্বের সর্বশেষ সংবাদ, রাজনীতি, অর্থনীতি, খেলাধুলা
              ও প্রযুক্তির নির্ভরযোগ্য আপডেট পেতে আমাদের সাথেই থাকুন।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 border-b border-neutral-200 pb-2 text-lg font-bold text-neutral-900">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <nav className="grid grid-cols-2 gap-x-4 gap-y-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm transition-colors hover:text-red-700"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 border-b border-neutral-200 pb-2 text-lg font-bold text-neutral-900">
              আমাদের সাথে যুক্ত থাকুন
            </h3>

            <p className="mb-4 text-sm text-neutral-600">
              সর্বশেষ খবর ও আপডেটের জন্য আমাদের সোশ্যাল মিডিয়ায় ফলো করুন।
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-700 transition hover:bg-red-700 hover:text-white"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-700 transition hover:bg-red-700 hover:text-white"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-700 transition hover:bg-red-700 hover:text-white"
              >
                <FaInstagram size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-5 text-center text-sm text-neutral-500 sm:flex-row">
          <p>
            © {currentYear} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
          </p>

          <Link
            href="/"
            className="font-medium text-red-700 transition hover:text-red-900"
          >
            Bangla News 24
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;