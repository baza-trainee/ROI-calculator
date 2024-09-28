import { create } from "zustand";

interface ValuesState {
  values: string;
}

export const useValues = create<ValuesState>((set) => ({
  values: "",
  setValues: () => set({ values: "hi" }),
}));
