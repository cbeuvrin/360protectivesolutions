import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Weapons Detection Systems NYC | WSO",
    description:
        "Concealed weapons detection for venues, schools and corporate entrances. Screening that moves people through without turning entry into a checkpoint.",
    alternates: { canonical: "/technology/weapons-detection" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
