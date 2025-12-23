import React from "react";
import Link from "next/link";
import styles from "./pricing.module.css";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "@/components/Button/Button";
import { CTA } from "@/components/home/CTA";
import { Check } from "lucide-react";

export const metadata = {
    title: "Pricing & Engagement | Waadi Software",
    description: "Transparent engagement models for serious businesses. We prioritize long-term value and structural integrity.",
};

const tiers = [
    {
        name: "Digital Presence Setup",
        description: "For businesses that need a high-performance foundation. Code-first build, no templates.",
        price: "Custom",
        priceSub: "Project-based fee",
        features: [
            "Custom Next.js Website",
            "Core SEO Infrastructure",
            "Mobile Optimization",
            "CMS Integration",
            "3-Week Delivery (Avg)"
        ],
        buttonText: "Discuss Project"
    },
    {
        name: "Growth Engine",
        description: "For businesses ready to acquire customers systematically. Ongoing management.",
        price: "$2k - $5k",
        priceSub: "/ month + ad spend",
        features: [
            "Meta & Google Ads Management",
            "Landing Page Optimization",
            "Weekly Performance Reports",
            "Creative Iteration (Studio)",
            "Tracking & Analytics"
        ],
        buttonText: "Start Growth"
    },
    {
        name: "Performance Partner",
        description: "Full-scale digital department. We become your engineering & growth team.",
        price: "Custom",
        priceSub: "Retainer or RevShare",
        features: [
            "Full Stack Development",
            "Advanced Web Apps / SaaS",
            "Priority Studio Access",
            "Fractional CTO / CMO Support",
            "24/7 Monitoring"
        ],
        buttonText: "Partner With Us"
    }
];

export default function PricingPage() {
    return (
        <>
            <Section>
                <Container>
                    <div className={styles.pricingIntro}>
                        <Heading level={1} className={styles.title}>
                            Engagement Models
                        </Heading>
                        <p className={styles.introText}>
                            We don't sell isolated services. We build systems. <br />
                            Pricing reflects scope, responsibility, and long-term involvement.
                        </p>
                    </div>

                    <div className={styles.pricingGrid}>
                        {tiers.map((tier, index) => (
                            <div key={index} className={styles.pricingCard}>
                                <div className={styles.tierName}>{tier.name}</div>
                                <p className={styles.tierDesc}>{tier.description}</p>
                                <div className={styles.tierPrice}>
                                    {tier.price} <span>{tier.priceSub}</span>
                                </div>
                                <ul className={styles.featureList}>
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className={styles.featureItem}>
                                            <Check size={18} className={styles.featureIcon} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" tabIndex={-1}>
                                    <Button variant="outline" fullWidth>
                                        {tier.buttonText}
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className={styles.notesSection}>
                        <Heading level={2} className={styles.notesTitle}>Important Considerations</Heading>
                        <div className={styles.notesGrid}>
                            <div className={styles.noteItem}>
                                <h4>Ad Spend is Separate</h4>
                                <p>Management fees do not include the budget paid directly to ad platforms (Meta/Google). You retain full ownership of ad accounts.</p>
                            </div>
                            <div className={styles.noteItem}>
                                <h4>Timelines Matter</h4>
                                <p>Quality engineering takes time. We do not rush builds. A typical foundation project takes 3-4 weeks to execute correctly.</p>
                            </div>
                            <div className={styles.noteItem}>
                                <h4>No "Instant" Results</h4>
                                <p>Growth systems require a learning phase. Advertising typically takes 30-60 days to stabilize and become profitable.</p>
                            </div>
                            <div className={styles.noteItem}>
                                <h4>Scope Integrity</h4>
                                <p>We scope strictly to avoid "feature creep." Additional requests during a sprint are scoped separately to protect the timeline.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <CTA />
        </>
    );
}
