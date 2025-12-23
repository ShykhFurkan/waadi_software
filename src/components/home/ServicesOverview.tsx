import Link from 'next/link';
import { Code, Video, TrendingUp } from 'lucide-react';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { Heading } from '@/components/Heading/Heading';
import styles from './ServicesOverview.module.css';

const SERVICES = [
    {
        icon: Code,
        title: "Web & Software",
        description: "Custom websites and software built for performance, scalability, and business operations.",
        href: "/software"
    },
    {
        icon: Video,
        title: "Waadi Studio",
        description: "Premium video production, photography, and creative content that tells your brand story.",
        href: "/waadi-studio"
    },
    {
        icon: TrendingUp,
        title: "Advertising & Growth",
        description: "Data-driven ad campaigns on Meta & Google designed to generate leads and sales.",
        href: "/advertising"
    }
];

export function ServicesOverview() {
    return (
        <Section className={styles.section}>
            <Container>
                <div className={styles.header}>
                    <Heading level={2}>Core Services</Heading>
                    <p className={styles.subtitle}>Everything you need to grow your digital presence under one roof.</p>
                </div>

                <div className={styles.grid}>
                    {SERVICES.map((service) => (
                        <Link key={service.title} href={service.href} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <service.icon size={32} className={styles.icon} />
                            </div>
                            <Heading level={3} className={styles.cardTitle}>{service.title}</Heading>
                            <p className={styles.cardDesc}>{service.description}</p>
                            <span className={styles.learnMore}>Learn more &rarr;</span>
                        </Link>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
