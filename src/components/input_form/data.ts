import UserIcon from "../icons/UserIcon";
import SkillIcon from "../icons/SkillIcon";
import SalaryIcon from "../icons/SalaryIcon";
import EducationIcon from "../icons/EducationIcon";
import ClockIcon from "../icons/ClockIcon";

export const specialties = [
  "UA/UX Designer",
  "Frontend",
  "QA Manual",
  "Backend",
  "Fullstack",
  "Project Manager",
];
export const levels = ["Junior", "Middle"];
export const skills = ["низький", "середній", "високий"];

export interface Item {
  name: string;
  title: string;
  icon: React.ComponentType;
  text: string;
}

export const itemSpecialization: Item = {
  name: "specialization",
  title: "спеціалізація",
  icon: UserIcon,
  text: "Обрати спеціалізацію для розрахунку",
};
export const itemLevel: Item = {
  name: "level",
  title: "pівень кваліфікації",
  icon: SkillIcon,
  text: "Обрати рівень кваліфікації для розрахунку",
};
export const itemSalary: Item = {
  name: "salary",
  title: "місячна зарплата ($)",
  icon: SalaryIcon,
  text: "Вказати заробітну плату за місяць (у доларах) для відповідного кандидата",
};
export const itemEducation: Item = {
  name: "educationCost",
  title: "вартість адаптації ($)",
  icon: EducationIcon,
  text: "Вказати загальну суму витрат на підготовку та адаптацію відповідного кандидата",
};
export const itemSkills: Item = {
  name: "softSkills",
  title: "оцінка hard skills",
  icon: ClockIcon,
  text: "Обрати рівень Hard Skills відповідного кандидата (оцінка за показниками прийнятими у компанії)",
};

// const skill = "Обрати рівень кваліфікації для розрахунку."
// const specialist = "Обрати спеціалізацію для розрахунку"
// const salary = "Вказати заробітну плату за місяць (у доларах) для відповідного кандидата"
// const cost = "Вказати загальну суму витрат для підготовки та адаптації відповідного кандидата"
// const product = "Вказати початкову продуктивність кандидата (оцінка за показниками компанії). Довідково визначають для Junior - 50%, для Middle - 80%"
// const time = "Обрати відповідний період для досягнення повної продуктивності відповідного кандидата"
