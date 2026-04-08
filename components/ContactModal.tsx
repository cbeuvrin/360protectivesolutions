"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ContactForm } from "./ContactForm";

export function ContactModal() {
  const { isOpen, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-2xl rounded-sm shadow-2xl relative pointer-events-auto overflow-hidden"
            >
              {/* Header */}
              <div className="bg-dark-blue p-6 md:p-8 text-white relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">
                  Confidential Request
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-heading">
                  Get Started with 360
                </h2>
                <p className="text-gray-400 text-sm mt-2 font-light">
                  Submit this confidential form and our specialists will contact you within 24 hours.
                </p>
              </div>

              {/* Form Body */}
              <div className="p-6 md:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
                <ContactForm />
              </div>

              {/* Footer / Badge */}
              <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-center items-center gap-4 grayscale opacity-50">
                <img src="/images/logo.png" alt="360" className="h-6 w-auto" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-dark-blue">
                  Elite Protection Group
                </span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
