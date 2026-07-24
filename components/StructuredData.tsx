/**
 * Datos estructurados de la organizacion.
 *
 * Solo se declara informacion verificable en el propio sitio. Telefono y
 * direccion se han dejado fuera a proposito: los que figuran hoy son marcadores
 * de posicion (+1 555..., "123 Security Avenue") y publicarlos como datos
 * estructurados le diria a Google que son reales.
 */
const ORGANIZATION = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: "Worldwide Security Options",
    alternateName: "WSO",
    url: "https://www.360protectivesolutions.com",
    logo: "https://www.360protectivesolutions.com/images/wso32.webp",
    description:
        "Veteran-owned executive protection, corporate and residential security firm serving New York City.",
    email: "info@360protectivesolutions.com",
    areaServed: {
        "@type": "City",
        name: "New York City",
        containedInPlace: { "@type": "State", name: "New York" },
    },
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
