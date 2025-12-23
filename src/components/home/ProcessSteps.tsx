import { Layout, Clapperboard, Megaphone, Settings2 } from 'lucide-react';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { Heading } from '@/components/Heading/Heading';
import styles from './ProcessSteps.module.css';

const DEFAULT_STEPS = [
    {
        icon: Layout,
        title: "Foundation",
        description: "We build high-speed, conversion-focused websites and software."
    },
    {
        icon: Clapperboard,
        title: "Content & Media",
        description: "We produce professional video and photo assets that build trust."
    },
    {
        icon: Megaphone,
        title: "Ads & Traffic",
        description: "We deploy targeted ad campaigns to drive qualified leads."
    },
    {
        icon: Settings2,
        title: "Systems & Optimization",
        description: "We automate workflows and optimize for long-term growth."
    }
];

interface Step {
    icon: any;
    title: string;
    description: string;
}

interface ProcessStepsProps {
    title?: string;
    subtitle?: string;
    steps?: Step[];
}

export function ProcessSteps({
    title = "How We Help You Grow",
    subtitle = "A proven 4-step framework for digital dominance.",
    steps = DEFAULT_STEPS
}: ProcessStepsProps) {
    return (
        <Section className={styles.section}>
            <Container>
                <div className={styles.header}>
                    <Heading level={2}>{title}</Heading>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>

                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <div key={step.title} className={styles.step}>
                            <div className={styles.iconContainer}>
                                <step.icon size={32} />
                                <span className={styles.stepNumber}>{index + 1}</span>
                            </div>
                            <Heading level={4} className={styles.stepTitle}>{step.title}</Heading>
                            <p className={styles.stepDesc}>{step.description}</p>
                            {index < steps.length - 1 && <div className={styles.connector} />}
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
