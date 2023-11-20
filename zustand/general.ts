import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { produce } from "immer";

interface GeneralState {
  modalState: string | null;
  openModal: (newState: string) => void;
  closeModal: () => void;
}

export const useGeneralStore = create<GeneralState>()(
  devtools((set) => ({
    modalState: null,
    openModal: (newState) =>
      set(
        produce((state) => {
          state.modalState = newState;
        }),
      ),
    closeModal: () =>
      set(
        produce((state) => {
          state.modalState = null;
        }),
      ),
  })),
);
