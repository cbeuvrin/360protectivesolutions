import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Media Center | Worldwide Security Options",
    description:
        "Press resources, company news and media enquiries for Worldwide Security Options, a veteran-owned security firm in New York City.",
    alternates: { canonical: "/resources/media-center" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
