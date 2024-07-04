"use client";

import Link from 'next/link';
import '../../styles/globals.css';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/education">Education</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        nav ul li {
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
}
