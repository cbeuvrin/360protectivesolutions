import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Maritime Anti-Piracy Security Services | WSO",
    description:
        "Armed maritime security teams and anti-piracy protection for vessels and crews in high-risk waters. Veteran-led, internationally deployed.",
    alternates: { canonical: "/services/anti-piracy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
