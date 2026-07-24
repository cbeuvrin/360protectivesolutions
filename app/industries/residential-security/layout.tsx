import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Residential Security Services NYC | WSO",
    description:
        "Doorman, patrol and estate security for residential buildings and private homes across New York City. Discreet, licensed and continuously trained.",
    alternates: { canonical: "/industries/residential-security" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
