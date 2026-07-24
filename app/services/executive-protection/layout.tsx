import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Executive Protection & Security Drivers NYC | WSO",
    description:
        "Close protection and secure transportation for executives, diplomats and high-profile clients in New York City. Trained, discreet, federally experienced.",
    alternates: { canonical: "/services/executive-protection" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
