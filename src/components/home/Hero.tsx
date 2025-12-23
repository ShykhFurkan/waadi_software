import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/Container/Container';
import { Button } from '@/components/Button/Button';
import { Heading } from '@/components/Heading/Heading';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Image & Gradient */}
            <div className={styles.bgWrapper}>
                <Image
                    src="/images/hero-bg.png"
                    alt="Abstract landscape representing digital growth"
                    fill
                    priority
                    className={styles.bgImage}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/1nPQAJZAN27/J3OQAAAABJRU5ErkJggg==" // Sage placeholder
                />
                <div className={styles.overlay} />
            </div>

            <Container className={styles.content}>
                <div className={styles.textContent}>
                    <Heading level={1} className={styles.headline}>
                        Digital Systems & Media <br />
                        Engineered for Sustainable Business <span className={styles.highlight}>Growth</span>
                    </Heading>

                    <p className={styles.subheadline}>
                        Waadi Software builds high-performance websites, custom software, and professional media systems that help businesses operate efficiently and grow with consistency.
                    </p>

                    <p className={styles.trustLine}>
                        Engineering-first. Systems-focused. Built for real operations.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/contact">
                            <Button size="lg" variant="primary">Book a Consultation</Button>
                        </Link>
                        <Link href="/services">
                            <Button size="lg" variant="outline" className={styles.secondaryBtn}>View Services</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
