import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    className?: string; // Allow custom classes like background colors
    id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
    return (
        <section id={id} className={`${styles.section} ${className}`}>
            {children}
        </section>
    );
}
