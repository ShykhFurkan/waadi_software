import React from "react";
import Link from "next/link";
import styles from "./audit.module.css";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "@/components/Button/Button";
import { Search, FileText, Smartphone, Server } from "lucide-react";

export const metadata = {
    title: "Digital Presence Audit | Waadi Software",
    description: "A comprehensive diagnostic of your digital infrastructure. No commitment, just clarity.",
};

const includes = [
    {
        icon: <Search size={24} />,
        title: "Visibility & SEO Review",
        text: "How are customers finding you? We analyze search rankings, technical SEO health, and local presence."
    },
    {
        icon: <FileText size={24} />,
        title: "Messaging & Conversion",
        text: "Is your offer clear? We evaluate your copy, calls-to-action, and user journey for friction points."
    },
    {
        icon: <Smartphone size={24} />,
        title: "UX & Mobile Check",
        text: "Does it work on every device? We test responsiveness, load times, and usability on key mobile platforms."
    },
    {
        icon: <Server size={24} />,
        title: "Technical Health",
        text: "What's breaking under the hood? We check for security vulnerabilities, broken links, and code bloat."
    }
];

const steps = [
    { title: "Review", desc: "We analyze your current setup." },
    { title: "Identify", desc: "We spot gaps and blockers." },
    { title: "Report", desc: "We present findings clearly." },
    { title: "Decide", desc: "You choose the next step." }
];

export default function AuditPage() {
    return (
        <>
            <Section>
                <Container>
                    <div className={styles.auditIntro}>
                        <Heading level={1} className={styles.title}>
                            Start With Clarity.
                        </Heading>
                        <p className={styles.subtitle}>
                            Before investing in ads or development, understand what is actually holding your business back.
                            We start with diagnosis, not commitment.
                        </p>
                    </div>

                    <div className={styles.problemSection}>
                        <Heading level={2} className={styles.sectionTitle}>Why Audits Matter</Heading>
                        <p className={styles.problemText}>
                            Most businesses struggle online because they apply random fixes to structural problems.
                            An outdated website, weak messaging, or invisible technical errors can silently kill your growth.
                            You cannot fix what you cannot see.
                        </p>
                    </div>

                    <div className={styles.includesSection}>
                        <Heading level={2} className={styles.sectionTitle}>What's Included</Heading>
                        <div className={styles.includesGrid}>
                            {includes.map((item, index) => (
                                <div key={index} className={styles.includeCard}>
                                    <div className={styles.includeTitle}>{item.title}</div>
                                    <p className={styles.includeText}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.stepsSection}>
                        <Heading level={2} className={styles.sectionTitle}>How It Works</Heading>
                        <div className={styles.stepsGrid}>
                            {steps.map((step, index) => (
                                <div key={index} className={styles.stepItem}>
                                    <span className={styles.stepNumber}>{index + 1}</span>
                                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-blue-deep)' }}>{step.title}</h4>
                                    <p style={{ color: 'var(--color-muted-foreground)' }}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.audienceSection}>
                        <div className={`${styles.audienceBox} ${styles.forYou}`}>
                            <Heading level={3} className={styles.audienceTitle}>Who This Is For</Heading>
                            <p>Businesses that are unsure where to start. You know "something is wrong" but can't pinpoint it. You want a professional second opinion before hiring a team.</p>
                        </div>
                        <div className={`${styles.audienceBox} ${styles.notForYou}`}>
                            <Heading level={3} className={styles.audienceTitle}>Who This Is Not For</Heading>
                            <p>Those seeking "hacks" or instant viral growth. This is a technical diagnostic, not a magic marketing button. We deal in facts, not hype.</p>
                        </div>
                    </div>

                    <div className={styles.outcomesSection}>
                        <Heading level={3}>After The Audit</Heading>
                        <div className={styles.outcomesList}>
                            <span className={styles.outcomeItem}>• Fix specific issues yourself</span>
                            <span className={styles.outcomeItem}>• Upgrade to a Growth Scope</span>
                            <span className={styles.outcomeItem}>• Build a new Foundation</span>
                            <span className={styles.outcomeItem}>• Or take no action. The data is yours to keep.</span>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link href="/contact" tabIndex={-1}>
                            <Button size="lg">Request an Audit</Button>
                        </Link>
                    </div>

                </Container>
            </Section>
        </>
    );
}
