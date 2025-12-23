import React from "react";
import Link from "next/link";
import styles from "./studio.module.css";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "@/components/Button/Button";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CTA } from "@/components/home/CTA";
import { Video, Film, MousePointerClick, Zap, Camera, Layers } from "lucide-react";

export const metadata = {
    title: "Waadi Studio | Waadi Software",
    description: "The creative and media division of Waadi Software. We produce high-performance video and ad creatives that drive business growth.",
};

const creationServices = [
    {
        icon: <Video size={32} />,
        title: "Video Production",
        description: "High-quality brand stories and commercial assets. We script, shoot, and edit videos that position your business as the market leader.",
        meta: "Used for: Website Headers, Brand Trust"
    },
    {
        icon: <Film size={32} />,
        title: "Short-Form Content",
        description: "Vertical video optimized for attention. We create consistent content for Reels, TikTok, and Shorts to keep your brand top-of-mind.",
        meta: "Used for: Organic Reach, Engagement"
    },
    {
        icon: <MousePointerClick size={32} />,
        title: "Ad Creatives",
        description: "Direct-response visuals designed to convert. We build multiple variations to test what actually drives sales and leads.",
        meta: "Used for: Meta Ads, YouTube Ads"
    },
];

const platforms = [
    "Instagram", "YouTube", "LinkedIn", "Meta Ads", "Google Ads"
];

// Custom steps for Studio process
const studioProcess = [
    {
        icon: Zap,
        title: "Plan",
        description: "We define the objective. Who are we talking to? What action must they take?"
    },
    {
        icon: Camera,
        title: "Shoot",
        description: "Professional production on-location or in-studio. Efficient, high-quality capture."
    },
    {
        icon: Layers,
        title: "Edit",
        description: "Post-production that aligns with the platform. Pacing, sound, and color grade."
    },
    {
        icon: MousePointerClick, // Using existing icon import or a new one
        title: "Distribute & Optimize", // Combined last step
        description: "Launching assets and iterating based on performance data."
    }
];

export default function WaadiStudioPage() {
    return (
        <>
            <Section>
                <Container>
                    <div className={styles.studioIntro}>
                        <span className={styles.studioLabel}>Part of Waadi Software</span>
                        <Heading level={1} className={styles.title}>
                            Creative that Converts.
                        </Heading>
                        <p className={styles.introText}>
                            Waadi Studio is the creative and media division of Waadi Software.
                            We don't make art for galleries. We build visual assets that solve business problems.
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {creationServices.map((service, index) => (
                            <div key={index} className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>{service.icon}</div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDesc}>{service.description}</p>
                                <div className={styles.serviceMeta}>{service.meta}</div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.growthSection}>
                        <Heading level={2} className={styles.growthTitle}>
                            Why Creative Matters
                        </Heading>
                        <p className={styles.growthText}>
                            In a crowded market, the best code can't save a boring brand.
                            Growth happens when <strong>Engineering Stability</strong> meets <strong>High-Performance Media</strong>.
                            This overlap is why Waadi Studio exists.
                        </p>
                    </div>

                    <div className={styles.platformsSection}>
                        <Heading level={3}>Built for Distribution</Heading>
                        <div className={styles.platformsGrid}>
                            {platforms.map(platform => (
                                <span key={platform} className={styles.platformItem}>{platform}</span>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Reuse process component with Studio steps */}
            <ProcessSteps
                title="Our Production Process"
                subtitle="Systems applied to creativity."
                steps={studioProcess}
            />

            {/* Custom text for CTA */}
            <CTA />
        </>
    );
}
