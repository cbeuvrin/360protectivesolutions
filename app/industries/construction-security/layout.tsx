import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Construction Site Security NYC | WSO",
    description:
        "Site protection, equipment security and access control for construction projects across New York City. Deterring theft and unauthorized entry.",
    alternates: { canonical: "/industries/construction-security" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
