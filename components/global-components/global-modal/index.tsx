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
  const modalRef = useRef();

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
      className={`absolute top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-90 flex justify-center items-center ${
        !ModalContent && "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="container bg-neutral-100 flex max-w-3xl h-fit rounded-lg px-5 py-8 relative"
      >
        <button
          className="absolute top-2 right-2 w-fit h-fit text-3xl font-bold"
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
