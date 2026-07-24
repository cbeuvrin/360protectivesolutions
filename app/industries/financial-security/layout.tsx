import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Financial Institution Security NYC | WSO",
    description:
        "Bank and financial institution security in New York City. Armed and unarmed officers trained for regulated, high-value environments.",
    alternates: { canonical: "/industries/financial-security" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
