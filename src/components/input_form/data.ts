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
  path: string;
  down: string;
  up: string;
  info: string;
  text: string;
}

export const itemSpecialist: Item = {
  name: 'specialist',
  title: "спеціалізація",
  path: "/icons/user.svg",
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Оберіть спеціалізацію, для якої проводите розрахунок",
}
export const itemSkill: Item = {
  name: "skill",
  title: "pівень кваліфікації",
  path: "/icons/skill.svg",
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Оберіть рівень кваліфікації, для якого проводите розрахунок",
}
export const itemSalary: Item = {
  name: "salary",
  title: "місячна зарплата ($)",
  path: "/icons/salary.svg",
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Введіть заробітну плату за місяць, в доларах, для відповідного кандидата",
}
export const itemEducation: Item = {
  name: "education",
  title: "вартість навчання ($)",
  path: "/icons/education.svg",
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Параметр “Вартість навчання” включає загальні витрати компанії на підготовку та адаптацію нового співробітника.Витрати на матеріали для навчання",
}
export const itemMentoring: Item = {
  name: "mentoring",
  title: "витрати на менторство ($)",
  path: "/icons/mentor.svg",
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Параметр “Витрати на менторство” включає загальні витрати компанії на підготовку та адаптацію нового співробітника",
}
export const itemProductivity: Item = {
  name: "productivity",
  title: "початкова продуктивність (%)",
  path: "/icons/productiv.svg",
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Параметр “Витрати на менторство” включає загальні витрати компанії на підготовку та адаптацію нового співробітника",
}
export const itemTime: Item = {
  name: "time",
  title: "досягнення повної продуктивності",
  path: "/icons/clock.svg",
  down: "/icons/arrow_down.svg",
  up: "/icons/arrow_up.svg",
  info: "/icons/info.svg",
  text: "Оберіть відповідний рік для розрахунку - час до досягнення повної продуктивності",
}

// const skill = "Обрати рівень кваліфікації для розрахунку."
// const specialist = "Обрати спеціалізацію для розрахунку"
// const salary = "Вказати заробітну плату за місяць (у доларах) для відповідного кандидата"
// const cost = "Вказати загальну суму витрат для підготовки та адаптації відповідного кандидата"
// const product = "Вказати початкову продуктивність кандидата (оцінка за показниками компанії). Довідково визначають для Junior - 50%, для Middle - 80%"
// const time = "Обрати відповідний період для досягнення повної продуктивності відповідного кандидата"