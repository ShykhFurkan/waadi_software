import Link from 'next/link';
import { ArrowRight, Cpu, Aperture } from 'lucide-react'; // Cpu for Software, Aperture for Studio
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { Heading } from '@/components/Heading/Heading';
import styles from './Divisions.module.css';

export function Divisions() {
    return (
        <Section className={styles.section}>
            <Container>
                <div className={styles.intro}>
                    <Heading level={2}>A Unified Approach</Heading>
                    <p className={styles.introText}>Strategy and creativity working together to build your business.</p>
                </div>

                <div className={styles.grid}>
                    {/* Waadi Software */}
                    <Link href="/software" className={`${styles.card} ${styles.software}`}>
                        <div className={styles.content}>
                            <div className={styles.iconBadge}>
                                <Cpu size={32} />
                            </div>
                            <Heading level={3} className={styles.title}>Waadi Software</Heading>
                            <p className={styles.description}>
                                The digital foundation. We build robust systems, high-converting websites, and data-driven ad structures that power your growth.
                            </p>
                            <span className={styles.link}>Explore Software & Ads <ArrowRight size={18} /></span>
                        </div>
                        <div className={styles.bgDecoration} />
                    </Link>

                    {/* Waadi Studio */}
                    <Link href="/waadi-studio" className={`${styles.card} ${styles.studio}`}>
                        <div className={styles.content}>
                            <div className={styles.iconBadge}>
                                <Aperture size={32} />
                            </div>
                            <Heading level={3} className={styles.title}>Waadi Studio</Heading>
                            <p className={styles.description}>
                                The creative engine. Professional video production, photography, and brand storytelling that connects with your audience.
                            </p>
                            <span className={styles.link}>Visit Studio <ArrowRight size={18} /></span>
                        </div>
                        <div className={styles.bgDecoration} />
                    </Link>
                </div>
            </Container>
        </Section>
    );
}
