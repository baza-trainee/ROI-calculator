import { create } from "zustand";

interface ValuesState {
  values: {
    specialization: string;
    salary: number;
    educationCost: number;
    mentorshipCost: number;
    productivity: number;
    fullProductivityYears: number;
  };
  setValues: (newValues: ValuesState["values"]) => void;
}

export const useValues = create<ValuesState>((set) => ({
  values: {
    specialization: "",
    salary: 0,
    educationCost: 0,
    mentorshipCost: 0,
    productivity: 0,
    fullProductivityYears: 0,
  },
  setValues: (newValues) => set({ values: newValues }),
}));

