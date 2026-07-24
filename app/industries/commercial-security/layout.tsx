import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Commercial Building Security NYC | WSO",
    description:
        "Lobby, concierge and access control security for commercial properties in New York City. Licensed guards trained for corporate environments.",
    alternates: { canonical: "/industries/commercial-security" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
