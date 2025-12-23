"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import styles from './Navbar.module.css';
import { useState } from 'react';

export function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Waadi
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {NAV_LINKS.map((link) => {
                        const isExternal = (link as any).external;
                        return (
                            isExternal ? (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.navLink}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                                >
                                    {link.label}
                                </Link>
                            )
                        );
                    })}
                </nav>

                <div className={styles.actions}>
                    <ThemeToggle />
                    <Link href="/contact">
                        <Button size="sm" variant="primary">Book Consultation</Button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.menuToggle}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.hamburger} />
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className={styles.mobileNav}>
                    <nav className={styles.mobileLinks}>
                        {NAV_LINKS.map((link) => {
                            const isExternal = (link as any).external;
                            return (
                                isExternal ? (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.mobileLink}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={styles.mobileLink}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
