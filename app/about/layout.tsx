import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About WSO | Veteran-Owned Security Firm in NYC",
    description:
        "Worldwide Security Options is a 100% military and law enforcement veteran-owned protection firm serving New York City. Meet the team and our standards.",
    alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
