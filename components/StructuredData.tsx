/**
 * Datos estructurados de la organizacion.
 *
 * Los datos de contacto son los reales de la empresa (recuperados de la pagina
 * Contact del WordPress). Google los usa para el panel de conocimiento y las
 * busquedas locales.
 */
const ORGANIZATION = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: "Worldwide Security Options",
    alternateName: "WSO",
    url: "https://www.360protectivesolutions.com",
    logo: "https://www.360protectivesolutions.com/images/wso32.webp",
    description:
        "Veteran-owned executive protection, corporate and residential security firm serving New York and New Jersey.",
    email: "corporate@360protectivesolutions.com",
    telephone: "+1-347-450-2021",
    address: {
        "@type": "PostalAddress",
        streetAddress: "42 Broadway, Suite #12-109",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10004",
        addressCountry: "US",
    },
    areaServed: [
        { "@type": "State", name: "New York" },
        { "@type": "State", name: "New Jersey" },
    ],
    sameAs: [
        "https://www.facebook.com/360protectivesolutions",
        "https://www.linkedin.com/company/360-protective-solutions%E2%84%A2/",
        "https://www.instagram.com/360protectivesolutions/",
    ],
    knowsAbout: [
        "Executive Protection",
        "Residential Security",
        "Event Security",
        "Hotel Security",
        "Maritime Security",
        "Weapons Detection",
    ],
};

export function StructuredData() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }}
        />
    );
}
