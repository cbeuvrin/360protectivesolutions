import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "360 TRAX | Real-Time Security Tracking | WSO",
    description:
        "360 TRAX gives clients live visibility of security operations: patrol verification, incident reporting and real-time accountability.",
    alternates: { canonical: "/technology/360-trax" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
