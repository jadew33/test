"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [expandedBurger, setExpandedBurger] = useState(false);
  const [desktopBurger, setDesktopBurger] = useState(false);

  return (
    <div className="navbar font-book">
      <Link href="/">
        <div
          className="logo-container"
          onClick={() => setExpandedBurger(false)}
        >
          <Image
            src="/logo.svg"
            width="40"
            height="40"
            alt="COMPSA Logo"
            className="compsa-logo"
          />
        </div>
      </Link>

      <div className="desktop-nav">
        <div className="links-container">
          <Link href="/" className="normal-link">
            Home
          </Link>
          <Link href="/about" className="normal-link">
            About
          </Link>
          <Link href="/resources" className="normal-link">
            Resources
          </Link>
          <Link href="/contact" className="normal-link">
            Contact
          </Link>

          <Link
            href="https://merch.compsa.ca/en/"
            target="_blank"
            className="merch_link"
          >
            <Image
              src="/cart.svg"
              className="merch_logo"
              width="20"
              height="20"
              alt="Merch"
            />
            COMPSA Merch
          </Link>

          <button
            onClick={() => setDesktopBurger(!desktopBurger)}
            className="desktop-burger"
          >
            <Image
              src="/burger-menu.svg"
              width="40"
              height="40"
              alt="Desktop Menu"
            />
          </button>
          {desktopBurger && (
            <div className="desktop-link-container">
              <Link href="/events" className="normal-link">
                Events
              </Link>
              <Link href="/internships" className="normal-link">
                Internships
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mobile-nav">
        <button onClick={() => setExpandedBurger(!expandedBurger)}>
          <Image
            src="/burger-menu.svg"
            width="40"
            height="40"
            alt="Mobile Menu"
          />
        </button>

        {expandedBurger && (
          <div className="mobile-links-container">
            <Link
              href="/"
              className="normal-link"
              onClick={() => setExpandedBurger(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="normal-link"
              onClick={() => setExpandedBurger(false)}
            >
              About
            </Link>
            <Link
              href="/resources"
              className="normal-link"
              onClick={() => setExpandedBurger(false)}
            >
              Resources
            </Link>
            <Link
              href="/internships"
              className="normal-link"
              onClick={() => setExpandedBurger(false)}
            >
              Internships
            </Link>
            <Link
              href="https://merch.compsa.ca/en/"
              target="_blank"
              className="normal-link"
              onClick={() => setExpandedBurger(false)}
            >
              Merch
            </Link>
            <Link
              href="/events"
              className="normal-link"
              onClick={() => setExpandedBurger(false)}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="normal-link"
              onClick={() => setExpandedBurger(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
