import React from "react";
import Link from "next/link";
import styles from "./work.module.css";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "Selected Work | Waadi Software",
    description: "Systems, software, and digital execution. A selection of projects demonstrating our engineering approach.",
};

export default function WorkPage() {
    return (
        <Section>
            <Container>
                <div className={styles.intro}>
                    <Heading level={1} className={styles.title}>
                        Built Systems.
                    </Heading>
                    <p className={styles.introText}>
                        Measurement of our capability is best found in what we ship. <br />
                        Click a project to see how it was built. Use "Open Project" to view the live system.
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <div key={project.slug} className={styles.card}>
                            {/* Primary Link Overlay - Click anywhere involves this */}
                            <Link href={`/work/${project.slug}`} className={styles.primaryLink} aria-label={`View case study for ${project.title}`}>
                                {/* Visual only, covers card */}
                            </Link>

                            {/* Content - text is selectable but clicks pass through to primaryLink unless z-index issues, 
                  but strictly our CSS puts primaryLink at z=1, content at z=2 with pointer-events: none */}
                            <div className={styles.cardCategory}>{project.category}</div>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDesc}>{project.description}</p>

                            {/* Secondary Action - High Z-Index to catch click */}
                            <div className={styles.cardFooter}>
                                {project.status === "Internal" ? (
                                    <span className={styles.internalLabel}>Internal System</span>
                                ) : (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.openLink}
                                    >
                                        Open Project ↗ {project.status === "Demo" && <span style={{ fontSize: '0.8em', marginLeft: '4px', opacity: 0.8 }}>(Demo)</span>}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <p className={styles.capabilityNote}>
                    Note: Some projects are internal tools or built as system demonstrations. <br />
                    Client data is anonymized where required by NDAs.
                </p>
            </Container>
        </Section>
    );
}
