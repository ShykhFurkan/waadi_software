import Link from 'next/link';
import { Container } from '../Container/Container';
import styles from './Footer.module.css';
import { SITE_NAME } from '@/lib/constants';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <span className={styles.logo}>{SITE_NAME}</span>
                        <p className={styles.tagline}>Digital Growth & Systems Studio</p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Services</h4>
                            <Link href="/services">All Services</Link>
                            <Link href="/software">Web & Software</Link>
                            <Link href="/waadi-studio">Waadi Studio</Link>
                            <Link href="/advertising">Advertising</Link>
                        </div>

                        <div className={styles.column}>
                            <h4>Company</h4>
                            <Link href="/about">About</Link>
                            <Link href="/work">Work</Link>
                            <Link href="/contact">Contact</Link>
                        </div>

                        <div className={styles.column}>
                            <h4>Legal</h4>
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
