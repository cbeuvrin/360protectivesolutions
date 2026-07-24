import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Force Protection Services NYC | WSO",
    description:
        "Armed and unarmed force protection for high-risk environments in New York City. Threat assessment, deterrence and rapid response.",
    alternates: { canonical: "/services/force-protection" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
