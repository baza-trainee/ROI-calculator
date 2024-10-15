import UserIcon from "../icons/UserIcon";
import SkillIcon from "../icons/SkillIcon";
import SalaryIcon from "../icons/SalaryIcon";
import EducationIcon from "../icons/EducationIcon";
import MenthorIcon from "../icons/MenthorIcon";
import ProductivityIcon from "../icons/ProductivityIcon";
import ClockIcon from "../icons/ClockIcon";

export const specialties = [
  "UA/UX Designer",
  "Frontend",
  "QA Manual",
  "Backend",
  "Fullstack",
  "Project Manager",
];
export const skills = ["Junior", "Middle"];
export const times = ["1 рік", "2 роки", "3 роки"];

export interface Item {
  name: string;
  title: string;
  icon: React.FC;
  down: string;
  up: string;
  info: string;
  text: string;
}

export const itemSpecialization: Item = {
  name: "specialist",
  title: "спеціалізація",
  icon: UserIcon,
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Оберіть спеціалізацію, для якої проводите розрахунок",
};
export const itemLevel: Item = {
  name: "level",
  title: "pівень кваліфікації",
  icon: SkillIcon,
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Оберіть рівень кваліфікації, для якого проводите розрахунок",
};
export const itemSalary: Item = {
  name: "salary",
  title: "місячна зарплата ($)",
  icon: SalaryIcon,
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Введіть заробітну плату за місяць, в доларах, для відповідного кандидата",
};
export const itemEducation: Item = {
  name: "educationCost",
  title: "вартість навчання ($)",
  icon: EducationIcon,
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Параметр “Вартість навчання” включає загальні витрати компанії на підготовку та адаптацію нового співробітника.Витрати на матеріали для навчання",
};
export const itemMentoring: Item = {
  name: "mentorshipCost",
  title: "витрати на менторство ($)",
  icon: MenthorIcon,
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Параметр “Витрати на менторство” включає загальні витрати компанії на підготовку та адаптацію нового співробітника",
};
export const itemProductivity: Item = {
  name: "productivity",
  title: "початкова продуктивність (%)",
  icon: ProductivityIcon,
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Параметр “Витрати на менторство” включає загальні витрати компанії на підготовку та адаптацію нового співробітника",
};
export const itemFullProductivityYears: Item = {
  name: "fullProductivityYears",
  title: "досягнення повної продуктивності",
  icon: ClockIcon,
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Оберіть відповідний рік для розрахунку - час до досягнення повної продуктивності",
};

// const skill = "Обрати рівень кваліфікації для розрахунку."
// const specialist = "Обрати спеціалізацію для розрахунку"
// const salary = "Вказати заробітну плату за місяць (у доларах) для відповідного кандидата"
// const cost = "Вказати загальну суму витрат для підготовки та адаптації відповідного кандидата"
// const product = "Вказати початкову продуктивність кандидата (оцінка за показниками компанії). Довідково визначають для Junior - 50%, для Middle - 80%"
// const time = "Обрати відповідний період для досягнення повної продуктивності відповідного кандидата"
