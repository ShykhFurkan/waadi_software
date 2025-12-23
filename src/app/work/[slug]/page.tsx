import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./project.module.css";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "@/components/Button/Button";
import { projects } from "@/lib/projects";
import { ArrowUpRight, Check, ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Waadi Software Work`,
        description: project.description,
    };
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Helper to determine status style
    const statusClass =
        project.status === "Live" ? styles.statusLive :
            project.status === "Demo" ? styles.statusDemo :
                styles.statusInternal;

    return (
        <Section>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <div className={styles.meta}>
                            <span className={styles.category}>{project.category}</span>
                            <span className={`${styles.status} ${statusClass}`}>{project.status}</span>
                        </div>
                        <Heading level={1} className={styles.title}>{project.title}</Heading>
                        <p className={styles.text} style={{ fontSize: '1.25rem' }}>{project.description}</p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Context</h3>
                        <p className={styles.text}>{project.context}</p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>What We Built</h3>
                        <ul className={styles.list}>
                            {project.built.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <Check size={16} color="var(--color-teal)" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>System Thinking</h3>
                        <p className={styles.text}>{project.thinking}</p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Outcome</h3>
                        <div className={styles.outcomeBox}>
                            <p className={styles.outcomeText}>{project.outcome}</p>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                                <Button size="lg">
                                    View {project.status === "Live" ? "Live" : "Demo"} <ArrowUpRight size={18} />
                                </Button>
                            </a>
                        )}
                        <Link href="/work" className={styles.backLink}>
                            <ArrowLeft size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> Back to Work
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
