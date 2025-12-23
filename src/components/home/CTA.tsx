import Link from 'next/link';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { Heading } from '@/components/Heading/Heading';
import { Button } from '@/components/Button/Button';
import styles from './CTA.module.css';

export function CTA() {
    return (
        <Section className={styles.section}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <Heading level={2} className={styles.heading}>Ready to build your digital future?</Heading>
                    <p className={styles.text}>
                        Schedule a free consultation to discuss your project, systems, or growth strategy. No pressure, just clear answers.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/contact">
                            <Button size="lg" variant="primary" className={styles.btn}>Book a Consultation</Button>
                        </Link>
                        <Link href="/services">
                            <Button size="lg" variant="outline" className={styles.outlineBtn}>Explore Services</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
