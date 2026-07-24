import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Event Security Services NYC | WSO",
    description:
        "Crowd management, access control and executive coverage for events across New York City. From private galas to large public venues.",
    alternates: { canonical: "/industries/event-security" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
