import React, { useMemo, useRef, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";

//Zustand
import { useGeneralStore } from "../../../zustand/general";

//Modals
const AboutModal = dynamic(() => import("./modals/about"), { ssr: false });
const ContactModal = dynamic(() => import("./modals/contact"), { ssr: false });

const Modal = () => {
  // Zustand
  const { modalState, closeModal } = useGeneralStore((state) => ({
    modalState: state.modalState,
    closeModal: state.closeModal,
  }));

  //Ref
  const modalRef = useRef<HTMLDivElement>();

  // Callback
  const handleClickOutside = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    },
    [closeModal, modalRef],
  );

  // Memos
  const ModalContent = useMemo(() => {
    switch (modalState) {
      case "about":
        return AboutModal;
      case "contact":
        return ContactModal;
      default:
        return null;
    }
  }, [modalState, AboutModal]);

  useEffect(() => {
    if (modalState) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, modalState]);

  if (ModalContent === null) {
    return null;
  }

  return (
    <div
      className={`absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-gray-800 bg-opacity-90 ${
        !ModalContent && "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="container relative flex h-fit max-w-3xl rounded-lg bg-neutral-100 px-5 py-8"
      >
        <button
          className="absolute right-2 top-2 h-fit w-fit text-3xl font-bold"
          onClick={() => closeModal()}
        >
          X
        </button>
        <ModalContent />
      </div>
    </div>
  );
};

export default Modal;
