import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Virtual Guard Services NYC | WSO",
    description:
        "Remote guarding that combines live monitoring with real-time voice intervention. Continuous coverage without a full-time on-site post.",
    alternates: { canonical: "/technology/virtual-guard" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
