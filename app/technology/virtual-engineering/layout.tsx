import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Virtual Engineering & Security Design | WSO",
    description:
        "Security system design and engineering support for buildings in New York City. Camera placement, access control and integration planning.",
    alternates: { canonical: "/technology/virtual-engineering" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
