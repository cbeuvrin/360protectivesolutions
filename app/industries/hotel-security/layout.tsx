import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hotel & Resort Security Services NYC | WSO",
    description:
        "Guest safety, lobby security and event coverage for hotels and resorts in New York City. Trained for high-volume, public-facing environments.",
    alternates: { canonical: "/industries/hotel-security" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
