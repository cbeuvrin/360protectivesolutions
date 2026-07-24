import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Port & Maritime Security Services | WSO",
    description:
        "Port facility and maritime security operations. Vessel protection, terminal access control and cargo security by veteran-led teams.",
    alternates: { canonical: "/industries/port-maritime-security" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
