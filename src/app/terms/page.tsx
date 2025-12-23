import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Section } from "@/components/Section/Section";

export const metadata = {
    title: "Terms of Service | Waadi Software",
    description: "Terms of Service for Waadi Software.",
};

export default function TermsPage() {
    return (
        <Section>
            <Container>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Heading level={1} style={{ marginBottom: '2rem', color: 'var(--color-text-primary)' }}>Terms of Service</Heading>

                    <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p>Last Updated: December 2025</p>

                        <p>
                            Welcome to Waadi Software. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
                        </p>

                        <Heading level={3} style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>1. Services</Heading>
                        <p>
                            Waadi Software provides digital services including software development, web design, and digital marketing ("Services"). All services are subject to a separate written agreement or proposal which supersedes these website Terms where applicable.
                        </p>

                        <Heading level={3} style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>2. Intellectual Property</Heading>
                        <p>
                            All content on this website, including text, graphics, logos, and code, is the property of Waadi Software and is protected by copyright and other intellectual property laws. You may not reproduce or distribute any content without our prior written permission.
                        </p>

                        <Heading level={3} style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>3. User Conduct</Heading>
                        <p>
                            You agree not to use our website for any unlawful purpose or to transmit any material that is harmful, offensive, or violates the rights of others.
                        </p>

                        <Heading level={3} style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>4. Limitation of Liability</Heading>
                        <p>
                            Waadi Software shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our website or services.
                        </p>

                        <Heading level={3} style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>5. Governing Law</Heading>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Waadi Software operates, without regard to its conflict of law provisions.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
