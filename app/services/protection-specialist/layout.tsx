import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Protection Specialists NYC | Trained Security Agents | WSO",
    description:
        "WSO protection specialists are certified, continuously trained and drawn from military and law enforcement backgrounds. Serving New York City.",
    alternates: { canonical: "/services/protection-specialist" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
