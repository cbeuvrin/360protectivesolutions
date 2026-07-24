import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Federal Contracting | Government Security Services | WSO",
    description:
        "WSO provides security services to federal agencies including the Department of Homeland Security. Veteran-owned, cleared and contract-ready.",
    alternates: { canonical: "/federal-contracting" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
