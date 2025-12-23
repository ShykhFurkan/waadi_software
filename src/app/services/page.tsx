import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "@/components/Button/Button";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Services | Waadi Software",
    description: "Comprehensive digital growth services: Software Development, Waadi Studio, and Advertising.",
};

const services = [
    {
        id: "software",
        title: "Web & Software",
        description: "High-performance websites, custom web applications, and digital infrastructure built for stability and scale. We replace chaotic systems with engineered reliability.",
        link: "/software",
        image: "/images/service-software.png",
    },
    {
        id: "studio",
        title: "Waadi Studio",
        description: "Business-focused creative media. From video production to brand identity, we create assets that don't just look good—they work to build trust and drive conversions.",
        link: "/waadi-studio",
        image: "/images/service-studio.png",
    },
    {
        id: "advertising",
        title: "Advertising & Growth",
        description: "Scientific customer acquisition. We manage paid campaigns across Meta and Google that turn your new digital assets into revenue-generating engines.",
        link: "/advertising",
        image: "/images/service-ads.png",
    },
];

export default function ServicesPage() {
    return (
        <Section className={styles.section}>
            <Container>
                <div className={styles.pageHeader}>
                    <Heading level={1} className={styles.title}>
                        Our Services
                    </Heading>
                    <p className={styles.subtitle}>
                        A complete ecosystem for business growth. We combine engineering, creativity, and performance marketing.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.serviceCard}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className={styles.content}>
                                <h2 className={styles.cardTitle}>{service.title}</h2>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <Link href={service.link} tabIndex={-1}>
                                    <Button variant="outline" size="md">
                                        Explore {service.title} <ArrowRight size={16} style={{ marginLeft: 8 }} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
