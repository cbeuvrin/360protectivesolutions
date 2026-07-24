import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Virtual Greeting & Reception Security | WSO",
    description:
        "Remote reception and visitor verification for lobbies and entrances. A professional first point of contact with security built in.",
    alternates: { canonical: "/technology/virtual-greeting" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
