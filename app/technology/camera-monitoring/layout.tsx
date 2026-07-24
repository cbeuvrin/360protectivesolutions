import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Remote Camera Monitoring NYC | WSO",
    description:
        "Live camera monitoring with trained operators watching your property in real time. Verified alarms, faster response, lower cost than on-site guards.",
    alternates: { canonical: "/technology/camera-monitoring" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
