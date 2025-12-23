import { Building2, Utensils, Stethoscope, ShoppingBag, Briefcase, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { Heading } from '@/components/Heading/Heading';
import styles from './Industries.module.css';

const INDUSTRIES = [
    { icon: Building2, label: "Hotels & Hospitality" },
    { icon: Utensils, label: "Restaurants & Cafes" },
    { icon: Stethoscope, label: "Clinics & Healthcare" },
    { icon: ShoppingBag, label: "Local Brands & Retail" },
    { icon: Briefcase, label: "Service Businesses" },
];

const REASONS = [
    "One integrated team for Design, Tech, & Media",
    "Business-first approach, no fluff",
    "Deep understanding of local markets",
    "Focus on long-term partnerships & reliability"
];

export function Industries() {
    return (
        <Section className={styles.section}>
            <Container>
                <div className={styles.wrapper}>
                    {/* Industries Column */}
                    <div className={styles.column}>
                        <Heading level={3} className={styles.columnTitle}>Industries We Serve</Heading>
                        <div className={styles.industryGrid}>
                            {INDUSTRIES.map((ind) => (
                                <div key={ind.label} className={styles.industryItem}>
                                    <ind.icon size={24} className={styles.icon} />
                                    <span>{ind.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Us Column */}
                    <div className={styles.column}>
                        <Heading level={3} className={styles.columnTitle}>Why Waadi Software?</Heading>
                        <ul className={styles.reasonList}>
                            {REASONS.map((reason) => (
                                <li key={reason} className={styles.reasonItem}>
                                    <CheckCircle2 size={24} className={styles.checkIcon} />
                                    <span>{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
