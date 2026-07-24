import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact WSO | Security Consultation in New York City",
    description:
        "Speak with a WSO security specialist about executive protection, residential or corporate security in NYC. Confidential consultation at no cost.",
    alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
