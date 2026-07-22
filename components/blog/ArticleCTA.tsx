"use client";

import { ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

/**
 * Cierre del articulo. Es cliente porque abre el modal global de contacto: el
 * lector que llega hasta aqui ya invirtio varios minutos, y sacarlo de la
 * pagina a un formulario aparte pierde a la mitad.
 */
export const ArticleCTA = () => {
    const { openModal } = useModal();

    return (
        <aside className="mt-20 overflow-hidden rounded-sm bg-dark-blue px-8 py-14 text-center text-white md:px-14">
            <span className="mb-5 block text-[10px] font-black tracking-[0.4em] text-primary">
                WORLDWIDE SECURITY OPTIONS
            </span>

            <h2 className="mx-auto mb-6 max-w-2xl text-2xl font-bold leading-tight tracking-tighter md:text-4xl">
                Have a security concern you would rather not put in writing?
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-sm font-light italic text-gray-400">
                Speak directly with our team. Every conversation is confidential, and
                the first one costs nothing.
            </p>

            <button
                onClick={openModal}
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-10 py-5 text-xs font-black tracking-[0.2em] text-white shadow-xl transition-all hover:bg-white hover:text-dark-blue"
            >
                SEND US A MESSAGE
                <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                />
            </button>
        </aside>
    );
};
