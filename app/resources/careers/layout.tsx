import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security Careers NYC | Join WSO",
    description:
        "Security officer and protection specialist roles at WSO in New York City. Veteran-friendly employer with continuous training and advancement.",
    alternates: { canonical: "/resources/careers" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
