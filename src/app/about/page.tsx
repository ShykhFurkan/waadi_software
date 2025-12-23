import React from "react";
import Link from "next/link";
import styles from "./about.module.css";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "@/components/Button/Button";
import { Check, X } from "lucide-react";

export const metadata = {
    title: "About Us | Waadi Software",
    description: "We are an engineering and growth firm that builds digital systems for serious businesses.",
};

export default function AboutPage() {
    return (
        <Section>
            <Container>
                <div className={styles.aboutIntro}>
                    <Heading level={1} className={styles.title}>
                        Systems Over Noise.
                    </Heading>
                    <p className={styles.introText}>
                        We built Waadi Software to solve a specific problem: <br />
                        Most digital work is fragmented, fragile, and disconnected from revenue.
                        We replace that chaos with engineered reliability.
                    </p>
                </div>

                <div className={styles.thinkingSection}>
                    <Heading level={2} style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-blue-deep)' }}>How We Think</Heading>
                    <div className={styles.thinkingGrid}>
                        <div className={styles.thinkingCard}>
                            <div className={styles.thinkingTitle}>Business First</div>
                            <p className={styles.thinkingText}>Technology is a tool, not the goal. If a feature does not improve efficiency or revenue, we don't build it.</p>
                        </div>
                        <div className={styles.thinkingCard}>
                            <div className={styles.thinkingTitle}>Structure &gt; Trends</div>
                            <p className={styles.thinkingText}>We ignore hype cycles. We rely on proven frameworks, stable codebases, and sustainable growth strategies.</p>
                        </div>
                        <div className={styles.thinkingCard}>
                            <div className={styles.thinkingTitle}>Partnership</div>
                            <p className={styles.thinkingText}>We are not a transactional vendor. We operate as your technical department, accountable for long-term uptime.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.filterSection}>
                    <div className={styles.filterGrid}>
                        <div className={`${styles.filterColumn} ${styles.positive}`}>
                            <h3>What We Are</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Technical Partners</li>
                                <li className={styles.listItem}>Systems Architects</li>
                                <li className={styles.listItem}>Revenue-Focused</li>
                                <li className={styles.listItem}>Long-Term Oriented</li>
                            </ul>
                        </div>
                        <div className={`${styles.filterColumn} ${styles.negative}`}>
                            <h3>What We Are Not</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>A "Cheap" Outsourcing House</li>
                                <li className={styles.listItem}>A Trend-Chasing Agency</li>
                                <li className={styles.listItem}>A WordPress Template Shop</li>
                                <li className={styles.listItem}>Yes-Men who agree to bad ideas</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.workSection}>
                    <Heading level={2} style={{ color: 'var(--color-beige)' }}>Expectations</Heading>
                    <p className={styles.workText}>
                        We collaborate with founders who value clarity.
                        You will always know where your project stands, what we are building, and why.
                        No black boxes. No jargon.
                    </p>
                    <Link href="/contact" tabIndex={-1}>
                        <Button variant="secondary" size="lg">Work With Us</Button>
                    </Link>
                </div>

            </Container>
        </Section>
    );
}
