import React from "react";
import Link from "next/link";
import styles from "./advertising.module.css";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "@/components/Button/Button";
import { CTA } from "@/components/home/CTA";
import { AlertTriangle, ArrowDown } from "lucide-react";

export const metadata = {
    title: "Advertising & Growth | Waadi Software",
    description: "Data-driven customer acquisition. We build advertising systems that convert traffic into revenue, not just clicks.",
};

const failures = [
    {
        title: "Weak Foundation",
        text: "Sending expensive traffic to a website that doesn't convert is lighting money on fire."
    },
    {
        title: "No Tracking",
        text: "Flying blind without pixel data or server-side events means you cannot optimize."
    },
    {
        title: "Vanity Metrics",
        text: "Likes and views do not pay the bills. We focus only on Leads and ROAS."
    },
    {
        title: "Zero Iteration",
        text: "The first ad is rarely the winner. Success comes from systematic A/B testing."
    }
];

const expectations = [
    {
        title: "Month 1: The Learning Phase",
        text: "We launch initial campaigns, gather data, and identify winning angles. ROI may be lower as algorithms learn."
    },
    {
        title: "Month 2: Optimization",
        text: "We cut losing ads and double down on winners. Cost per acquisition begins to drop."
    },
    {
        title: "Month 3+: Scaling",
        text: "With a proven system, we increase budget to drive volume while maintaining profitability."
    }
];

export default function AdvertisingPage() {
    return (
        <>
            <Section>
                <Container>
                    <div className={styles.adIntro}>
                        <Heading level={1} className={styles.title}>
                            Don't Buy Ads. Build Systems.
                        </Heading>
                        <p className={styles.introText}>
                            Advertising does not create growth on its own.
                            It allows you to pay for attention.
                            <strong>Your system</strong> is what turns that attention into revenue.
                        </p>
                    </div>

                    <div className={styles.problemSection}>
                        <Heading level={2} className={styles.sectionTitle}>Why Most Campaigns Fail</Heading>
                        <div className={styles.failGrid}>
                            {failures.map((fail, index) => (
                                <div key={index} className={styles.failItem}>
                                    <AlertTriangle size={24} color="var(--color-pink)" />
                                    <div>
                                        <div className={styles.failTitle}>{fail.title}</div>
                                        <p className={styles.failText}>{fail.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.systemSection}>
                        <Heading level={2} className={styles.sectionTitle}>The Waadi Growth System</Heading>
                        <div className={styles.systemDiagram}>
                            <div className={styles.systemNode}>High-Performance Website</div>
                            <div className={styles.connector} />
                            <div className={styles.systemNode}>Strategic Content</div>
                            <div className={styles.connector} />
                            <div className={styles.systemNode}>Targeted Ads</div>
                            <div className={styles.connector} />
                            <div className={styles.systemNode}>Tracking & Optimization</div>
                        </div>
                    </div>

                    <div className={styles.expectationsSection}>
                        <Heading level={2} className={styles.sectionTitle}>What To Expect</Heading>
                        <ul className={styles.expectationsList}>
                            {expectations.map((exp, index) => (
                                <li key={index} className={styles.expectationItem}>
                                    <div className={styles.expTitle}>{exp.title}</div>
                                    <p className={styles.expText}>{exp.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.platformsSection}>
                        <Heading level={3}>Platforms We Master</Heading>
                        <div className={styles.platformsList}>
                            <span>Meta Ads (Facebook & Instagram)</span>
                            <span>•</span>
                            <span>Google Search</span>
                            <span>•</span>
                            <span>YouTube Ads</span>
                            <span>•</span>
                            <span>LinkedIn Ads</span>
                        </div>
                    </div>
                </Container>
            </Section>

            <CTA />
        </>
    );
}
