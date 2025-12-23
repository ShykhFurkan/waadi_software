
export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    status: "Live" | "Demo" | "Internal" | "Concept";
    liveUrl?: string; // Optional external link
    context: string;
    built: string[]; // List of tech/features
    thinking: string;
    outcome: string;
}

export const projects: Project[] = [
    {
        slug: "kaali-edge",
        title: "Kaali Edge",
        category: "Consultancy Website",
        description: "A structured, professional service presentation for a consultancy firm.",
        status: "Live",
        liveUrl: "https://www.kaaliedge.com",
        context: "The business needed a professional digital face to convert high-ticket clients. The challenge was to organize complex service offerings into a clear, navigable hierarchy without overwhelming the user.",
        built: ["Next.js Architecture", "Responsive Design System", "Content hierarchy optimization", "Performance-focused deployment"],
        thinking: "We prioritized information architecture over visual noise. By using a strict typographic scale and whitespace-heavy layout, we ensured that the 'Authority' of the brand was communicated instantly. Speed was a non-negotiable metric.",
        outcome: "A high-performance asset that serves as the central validation point for new leads. The site loads in under 1 second and provides a clear path to consultation."
    },
    {
        slug: "the-paradise-hotel",
        title: "The Paradise",
        category: "Hotel Booking System",
        description: "A complete booking flow and room management demo.",
        status: "Demo",
        liveUrl: "https://hotel-booking-six-gamma.vercel.app/",
        context: "Demonstrating a complex transactional flow. The goal was to build a user-friendly booking engine that handles dates, room types, and confirmation steps seamlessly.",
        built: ["React State Management", "Custom Booking Logic", "Admin-ready Data Structure", "Interactive UI Components"],
        thinking: "A booking system succeeds or fails on friction. We designed the flow to be linear and forgiving. State management handles the complex date selection logic, ensuring users cannot book invalid ranges.",
        outcome: "A fully functional frontend prototype demonstrating valid booking logic, immediate feedback, and a seamless user journey from discovery to confirmation."
    },
    {
        slug: "consultancy-dashboards",
        title: "Internal Dashboards",
        category: "Management Systems",
        description: "Operational tools for data visualization and workflow management.",
        status: "Internal",
        context: "Internal operations require clarity. We demonstrated a system for visualizing key metrics, managing role-based access, and handling complex datasets for warehouse and hotel management scenarios.",
        built: ["Data Visualization", "Role-Based Access Control Pattern", "Complex Data Tables", "Admin Layouts"],
        thinking: "Dashboards are not about pretty charts; they are about decision speed. We used a dense, high-contrast layout to maximize data density while maintaining readability. The focus is on 'at-a-glance' status checks.",
        outcome: "A scalable dashboard architecture that can be adapted for any resource-heavy management context, proving our ability to build tools for power users, not just public visitors."
    },
    {
        slug: "personal-blog",
        title: "Content Platform",
        category: "Publishing System",
        description: "A markdown-based content management system for technical writing.",
        status: "Live",
        liveUrl: "https://blog-website-sepia-three-10.vercel.app/",
        context: "A platform for long-form technical content. The requirement was extreme readability and zero CLS (Cumulative Layout Shift).",
        built: ["Markdown Processing", "Static Site Generation", "Typography-first Design", "SEO Optimization"],
        thinking: "Reading on the web is often painful. We stripped away all distractions, focusing purely on line-height, contrast, and font rendering. The underlying code handles markdown parsing efficiently at build time.",
        outcome: "A publishing engine that feels like a native app. Instant navigation and a reading experience that respects the user's attention."
    },
    {
        slug: "personal-portfolio",
        title: "Dev Portfolio",
        category: "Design System",
        description: "An earlier iteration of personal branding and capability showcase.",
        status: "Live",
        liveUrl: "https://newportfolio-seven-nu.vercel.app/",
        context: "Before Waadi Software, this system served as a proving ground for new frontend techniques and animation libraries.",
        built: ["React/Next.js", "Framer Motion", "Component Library", "Grid Systems"],
        thinking: "This project served as a sandbox for testing interactions that were too experimental for client work. It demonstrates a mastery of frontend polish and detail.",
        outcome: "A visual proof of engineering capability, showing that we can handle complex creative requirements when the project calls for it."
    }
];
