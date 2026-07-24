import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Warehouse & Logistics Security NYC | WSO",
    description:
        "Warehouse, distribution and logistics security in New York City. Loss prevention, access control and patrol for supply chain facilities.",
    alternates: { canonical: "/industries/warehouse-security" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
