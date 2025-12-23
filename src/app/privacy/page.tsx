import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Section } from "@/components/Section/Section";

export const metadata = {
    title: "Privacy Policy | Waadi Software",
    description: "Privacy Policy for Waadi Software.",
};

export default function PrivacyPage() {
    return (
        <Section>
            <Container>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Heading level={1} style={{ marginBottom: '2rem', color: 'var(--color-text-primary)' }}>Privacy Policy</Heading>

                    <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p>Last Updated: December 23, 2025</p>

                        <p>
                            At Waadi Software ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
                        </p>

                        <Heading level={3} style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>1. Information We Collect</Heading>
                        <p>
                            We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and company name when you fill out forms on our website (e.g., "Contact Us" or "Book a Consultation"). We also automatically collect non-personal data through cookies and analytics tools to improve our website performance.
                        </p>

                        <Heading level={3} style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>2. How We Use Your Information</Heading>
                        <p>
                            We use your information to:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li>Respond to your inquiries and provide requested services.</li>
                            <li>Send administrative information, such as updates to our terms or policies.</li>
                            <li>Analyze website usage to improve user experience.</li>
                        </ul>

                        <Heading level={3} style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>3. Data Sharing</Heading>
                        <p>
                            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates.
                        </p>

                        <Heading level={3} style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>4. Security</Heading>
                        <p>
                            We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
                        </p>

                        <Heading level={3} style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>5. Contact Us</Heading>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at hello@waadisoften.com.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
