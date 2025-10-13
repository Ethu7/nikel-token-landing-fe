import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import CustomButton from "./custom-button.component";
import CustomHeader2 from "./custom-header-2.component";

export default function CustomModal({
  isOpen,
  title,
  message,
  onClose,
}: {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-container rounded-2xl shadow-lg p-6 mx-lg max-w-sm w-full text-center relative text-onBackground"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-onBackground hover:text-onBackgroundSecondary"
        >
          <X size={30} />
        </button>
        <div className="flex flex-col items-center gap-md">
          <CheckCircle size={48} className="text-primary mx-auto" />
          <CustomHeader2>{title}</CustomHeader2>
          <p className="text-lg text-onBackgroundSecodary">{message}</p>
          <CustomButton onClick={onClose}>OK</CustomButton>
        </div>
      </motion.div>
    </div>
  );
}
