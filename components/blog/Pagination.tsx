import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    current: number;
    total: number;
}

const href = (page: number) => (page <= 1 ? "/blog" : `/blog/page/${page}`);

/**
 * Ventana de paginas alrededor de la actual, siempre con la primera y la
 * ultima visibles. Con 18 paginas, listarlas todas seria ruido.
 */
function pageWindow(current: number, total: number): Array<number | "gap"> {
    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages = new Set<number>([1, total, current]);

    if (current > 1) pages.add(current - 1);
    if (current < total) pages.add(current + 1);
    if (current <= 3) pages.add(2).add(3).add(4);
    if (current >= total - 2) pages.add(total - 1).add(total - 2).add(total - 3);

    const ordered = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

    return ordered.flatMap((page, index) => {
        const previous = ordered[index - 1];
        return previous && page - previous > 1 ? ["gap" as const, page] : [page];
    });
}

export const Pagination = ({ current, total }: PaginationProps) => {
    if (total <= 1) {
        return null;
    }

    const base =
        "min-w-11 h-11 px-3 flex items-center justify-center text-xs font-black tracking-widest rounded-sm transition-all";

    return (
        <nav
            aria-label="Blog pagination"
            className="py-24 bg-gray-50 border-t border-gray-100"
        >
            <div className="flex flex-wrap items-center justify-center gap-2 px-6">
                {current > 1 && (
                    <Link
                        href={href(current - 1)}
                        rel="prev"
                        aria-label="Previous page"
                        className={`${base} gap-2 text-dark-blue hover:bg-dark-blue hover:text-white`}
                    >
                        <ChevronLeft size={14} /> PREV
                    </Link>
                )}

                {pageWindow(current, total).map((page, index) =>
                    page === "gap" ? (
                        <span
                            key={`gap-${index}`}
                            className={`${base} text-dark-blue opacity-30`}
                        >
                            …
                        </span>
                    ) : page === current ? (
                        <span
                            key={page}
                            aria-current="page"
                            className={`${base} bg-primary text-white shadow-md`}
                        >
                            {page}
                        </span>
                    ) : (
                        <Link
                            key={page}
                            href={href(page)}
                            className={`${base} bg-white border border-gray-200 text-dark-blue hover:border-primary hover:text-primary`}
                        >
                            {page}
                        </Link>
                    )
                )}

                {current < total && (
                    <Link
                        href={href(current + 1)}
                        rel="next"
                        aria-label="Next page"
                        className={`${base} gap-2 text-dark-blue hover:bg-dark-blue hover:text-white`}
                    >
                        NEXT <ChevronRight size={14} />
                    </Link>
                )}
            </div>

            <p className="mt-8 text-center text-[10px] font-black tracking-[0.3em] text-dark-blue opacity-40">
                PAGE {current} OF {total}
            </p>
        </nav>
    );
};
