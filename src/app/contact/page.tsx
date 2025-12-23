"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./contact.module.css";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "@/components/Button/Button";
import { Mail, MessageCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

// Client component for form handling
export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            e.currentTarget,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
            .then((result) => {
                setStatus("success");
            }, (error) => {
                console.log(error.text);
                setStatus("error");
            });
    };

    return (
        <Section>
            <Container>
                <div className={styles.contactIntro}>
                    <Heading level={1} className={styles.title}>
                        Let's Talk Business.
                    </Heading>
                    <p className={styles.introText}>
                        No pressure. No obligation. <br />
                        Just a conversation about where you are and where you want to go.
                    </p>
                </div>

                <div className={styles.contactContainer}>
                    {status === "success" ? (
                        <div style={{ textAlign: "center", padding: "4rem 2rem", background: "var(--color-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-teal)" }}>
                            <Heading level={2} style={{ color: "var(--color-teal)", marginBottom: "1rem" }}>Message Sent</Heading>
                            <p style={{ color: "var(--color-foreground)", marginBottom: "2rem" }}>
                                Thank you for reaching out. We review every message personally and will get back to you within 24 hours.
                            </p>
                            <Button onClick={() => setStatus("idle")} variant="outline">Send Another</Button>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={sendEmail}>
                            <div className={styles.fieldGroup}>
                                <label htmlFor="user_name" className={styles.label}>Name</label>
                                <input type="text" name="user_name" required className={styles.input} placeholder="Your name" />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label htmlFor="user_email" className={styles.label}>Email</label>
                                <input type="email" name="user_email" required className={styles.input} placeholder="name@company.com" />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label htmlFor="user_business" className={styles.label}>Business / Company</label>
                                <input type="text" name="user_business" className={styles.input} placeholder="Company Name" />
                            </div>

                            <div className={styles.fieldGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea name="message" required className={styles.textarea} placeholder="How can we help?" rows={5}></textarea>
                            </div>

                            <Button fullWidth size="lg" disabled={status === "submitting"}>
                                {status === "submitting" ? "Sending..." : "Send Message"}
                            </Button>

                            <div className={styles.nextSteps}>
                                <strong>What happens next:</strong> We review your message, respond personally, and suggest a calm next step if we're a good fit.
                            </div>
                        </form>
                    )}

                    <div className={styles.secondaryOptions}>
                        <div className={styles.optionsTitle}>Other Ways to Connect</div>
                        <div className={styles.optionsGrid}>
                            <a href="mailto:hello@waadisoften.com" className={styles.optionLink}>
                                <Mail size={20} /> hello@waadisoften.com
                            </a>
                            {/* WhatsApp optional - hypothetical number */}
                            <a href="#" className={styles.optionLink}>
                                <MessageCircle size={20} /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
