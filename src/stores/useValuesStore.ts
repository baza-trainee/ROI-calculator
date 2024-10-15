import { create } from "zustand";

interface ValuesState {
  values: {
    specialization: string;
    level: string;
    salary: number;
    educationCost: number;
    mentorshipCost: number;
    productivity: number;
    fullProductivityYears: string;
  };
  ROI: string;
  setValues: (newValues: ValuesState["values"]) => void;
}

export const useValues = create<ValuesState>((set) => ({
  values: {
    specialization: "UI/UX designer",
    level: "",
    salary: 0,
    educationCost: 0,
    mentorshipCost: 0,
    productivity: 0,
    fullProductivityYears: "0",
  },
  ROI: "",
  setValues: (newValues) => set({ values: newValues, ROI: "80" }),
}));
