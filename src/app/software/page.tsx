import React from "react";
import Link from "next/link";
import styles from "./software.module.css";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "@/components/Button/Button";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CTA } from "@/components/home/CTA";
import { Code2, Database, Globe, Smartphone, Server, ShieldCheck } from "lucide-react";

export const metadata = {
    title: "Web & Software Services | Waadi Software",
    description: "High-performance websites and custom software engineering. We build stable, scalable digital infrastructure for serious businesses.",
};

const buildItems = [
    {
        icon: <Globe size={24} />,
        title: "High-Performance Websites",
        description: "Marketing sites engineered for speed and conversion. NOT templates. We build custom Next.js architectures that rank higher and load instantly."
    },
    {
        icon: <Database size={24} />,
        title: "Custom Web Applications",
        description: "Internal tools, client portals, and SaaS products. We replace spreadsheets and chaotic manual processes with clean, automated software."
    },
    {
        icon: <Smartphone size={24} />,
        title: "Mobile-First Interfaces",
        description: "Responsive designs that work flawlessly on every device. Essential for detailed service businesses like clinics and hotels."
    },
    {
        icon: <Server size={24} />,
        title: "API & Backend Systems",
        description: "Robust server-side logic that connects your tools. We integrate CRMs, payment gateways, and third-party data securely."
    },
    {
        icon: <Code2 size={24} />,
        title: "Legacy System Modernization",
        description: "Refactoring old, slow codebases into modern, maintainable React/Node.js systems without downtime."
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Security & Maintenance",
        description: "Ongoing updates, security patches, and performance monitoring. We generally don't build and leave; we build and sustain."
    }
];

const outcomes = [
    { number: "0.5s", text: "Average Load Time" },
    { number: "90+", text: "Google Pagespeed Score" },
    { number: "100%", text: "Ownership of Code" },
];

export default function SoftwarePage() {
    return (
        <>
            <Section>
                <Container>
                    <div className={styles.introSection}>
                        <Heading level={1} className={styles.title}>
                            Engineering Stability.
                        </Heading>
                        <p className={styles.introText}>
                            We don't just "design websites." We build digital infrastructure.
                            Clean code, scalable architecture, and systems that don't break when your business grows.
                        </p>
                    </div>

                    <div className={styles.buildSection}>
                        <Heading level={2} className={styles.sectionTitle}>
                            What We Build
                        </Heading>
                        <div className={styles.buildGrid}>
                            {buildItems.map((item, index) => (
                                <div key={index} className={styles.buildItem}>
                                    <div className={styles.iconBox}>{item.icon}</div>
                                    <div className={styles.itemContent}>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.outcomesGrid}>
                        {outcomes.map((outcome, index) => (
                            <div key={index} className={styles.outcomeCard}>
                                <span className={styles.outcomeNumber}>{outcome.number}</span>
                                <span className={styles.outcomeText}>{outcome.text}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Reusing Process Component as "Our Engineering Process" */}
            <ProcessSteps />

            <CTA />
        </>
    );
}
