import { create } from "zustand";

interface ValuesState {
  values: {
    level: string;
    specialization: string;
    softSkills: string;
    salary: number;
    educationCost: number;
  };
  yearSalary: (salary: number) => number;
  total: number;
  setValues: (newValues: ValuesState["values"]) => void;
}
export const useJunior = create<ValuesState>((set) => ({
  values: {
    level: "Junior",
    specialization: "не визначено",
    softSkills: "не визначено",
    salary: 0,
    educationCost: 0,
  },
  yearSalary: (salary: number) => salary * 12,
  total: 0,
  setValues: (newValues) =>
    set((state) => {
      const yearSalary = state.yearSalary(newValues.salary);
      const total = Number(newValues.educationCost) + Number(yearSalary);
      return { values: newValues, total };
    }),
}));

export const useMiddle = create<ValuesState>((set) => ({
  values: {
    level: "Middle",
    specialization: "не визначено",
    softSkills: "не визначено",
    salary: 0,
    educationCost: 0,
  },
  yearSalary: (salary: number) => salary * 12,
  total: 0,
  setValues: (newValues) =>
    set((state) => {
      const yearSalary = state.yearSalary(newValues.salary);
      const total = Number(newValues.educationCost) + Number(yearSalary);
      return { values: newValues, total };
    }),
}));
