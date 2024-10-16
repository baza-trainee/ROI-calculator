import { Formik, Form, useFormikContext } from "formik";
import styles from "./Input.module.css";
import InputText from "./InputText";
import InputRadio from "./InputRadio";
import {
  specialties,
  skills,
  times,
  itemSpecialization,
  itemLevel,
  itemSalary,
  itemEducation,
  itemMentoring,
  itemProductivity,
  itemFullProductivityYears,
  Item,
} from "./data";
import Indicator from "./Indicator";
import InfoField from "./InfoField";
import { useState } from "react";
import { useValues } from "../../stores/useValuesStore";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  specialization: Yup.string().required("Це поле є обов'язковим "),
  level: Yup.string().required("Це поле є обов'язковим "),
  salary: Yup.number()
    .integer("Значення має бути цілим числом")
    .positive("Значення має бути більше нуля")
    .required("Це поле є обов'язковим "),
  educationCost: Yup.number()
    .integer("Значення має бути цілим числом")
    .positive("Значення має бути більше нуля")
    .required("Це поле є обов'язковим "),
  mentorshipCost: Yup.number()
    .integer("Значення має бути цілим числом")
    .positive("Значення має бути більше нуля")
    .required("Це поле є обов'язковим "),
  productivity: Yup.number()
    .integer("Значення має бути цілим числом")
    .positive("Значення має бути більше нуля")
    .required("Це поле є обов'язковим "),
  fullProductivityYears: Yup.string().required("Це поле є обов'язковим "),
});

export interface Values {
  specialization: string;
  level: string;
  salary: number;
  educationCost: number;
  mentorshipCost: number;
  productivity: number;
  fullProductivityYears: string;
}

const initialValues: Values = {
  specialization: "",
  level: "",
  salary: 0,
  educationCost: 0,
  mentorshipCost: 0,
  productivity: 0,
  fullProductivityYears: "",
};

const ErrorSummary = () => {
  const { errors, submitCount } = useFormikContext();
  return (
    submitCount > 0 &&
    Object.keys(errors).length > 0 && (
      <div className={styles.errorMessage}>Будь ласка, заповніть усі поля.</div>
    )
  );
};

export default function InputForm() {
  const { setValues } = useValues();
  const [openFields, setOpenFields] = useState<{ [key: string]: boolean }>({
    specialization: false,
    level: false,
    salary: false,
    educationCost: false,
    mentorshipCost: false,
    productivity: false,
    fullProductivityYears: false,
  });

  const openField = (item: Item) => {
    setOpenFields((prev) => ({
      ...prev,
      [item.name]: !prev[item.name],
    }));
  };

  return (
    <div className={styles.wrapForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: Values, { resetForm }) => {
          setValues(values);
          console.log(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off" className={styles.form}>
            <div className={styles.field}>
              <div className={styles.wrapIndicator}>
                <Indicator
                  item={itemSpecialization}
                  isOpen={openFields.specialization}
                  openField={openField}
                />
                <div
                  style={{
                    display: openFields.specialization ? "block" : "none",
                  }}
                >
                  <ul
                    role="group"
                    aria-labelledby="radio-group"
                    className={styles.wrapper}
                  >
                    {specialties.map((el, i) => (
                      <InputRadio
                        name="specialization"
                        key={i}
                        type="radio"
                        value={el}
                      >
                        {el}
                      </InputRadio>
                    ))}
                  </ul>
                </div>
              </div>
              <InfoField item={itemSpecialization} />
            </div>
            <div className={styles.field}>
              <div className={styles.wrapIndicator}>
                <Indicator
                  item={itemLevel}
                  isOpen={openFields.level}
                  openField={openField}
                />
                <div style={{ display: openFields.level ? "block" : "none" }}>
                  <ul
                    role="group"
                    aria-labelledby="radio-group"
                    className={styles.wrapper}
                  >
                    {skills.map((el, i) => (
                      <InputRadio name="level" key={i} type="radio" value={el}>
                        {el}
                      </InputRadio>
                    ))}
                  </ul>
                </div>
              </div>
              <InfoField item={itemLevel} />
            </div>

            <div className={styles.field}>
              <div className={styles.wrapIndicator}>
                <Indicator
                  item={itemSalary}
                  isOpen={openFields.salary}
                  openField={openField}
                />
                <div style={{ display: openFields.salary ? "block" : "none" }}>
                  <InputText name="salary" />
                </div>
              </div>
              <InfoField item={itemSalary} />
            </div>

            <div className={styles.field}>
              <div className={styles.wrapIndicator}>
                <Indicator
                  item={itemEducation}
                  isOpen={openFields.educationCost}
                  openField={openField}
                />
                <div
                  style={{
                    display: openFields.educationCost ? "block" : "none",
                  }}
                >
                  <InputText name="educationCost" />
                </div>
              </div>
              <InfoField item={itemEducation} />
            </div>

            <div className={styles.field}>
              <div className={styles.wrapIndicator}>
                <Indicator
                  item={itemMentoring}
                  isOpen={openFields.mentorshipCost}
                  openField={openField}
                />
                <div
                  style={{
                    display: openFields.mentorshipCost ? "block" : "none",
                  }}
                >
                  <InputText name="mentorshipCost" />
                </div>
              </div>
              <InfoField item={itemMentoring} />
            </div>

            <div className={styles.field}>
              <div className={styles.wrapIndicator}>
                <Indicator
                  item={itemProductivity}
                  isOpen={openFields.productivity}
                  openField={openField}
                />
                <div
                  style={{
                    display: openFields.productivity ? "block" : "none",
                  }}
                >
                  <InputText name="productivity" />
                </div>
              </div>
              <InfoField item={itemProductivity} />
            </div>

            <div className={styles.field}>
              <div className={styles.wrapIndicator}>
                <Indicator
                  item={itemFullProductivityYears}
                  isOpen={openFields.fullProductivityYears}
                  openField={openField}
                />
                <div
                  style={{
                    display: openFields.fullProductivityYears
                      ? "block"
                      : "none",
                  }}
                >
                  <ul
                    role="group"
                    aria-labelledby="radio-group"
                    className={styles.wrapper}
                  >
                    {times.map((el, i) => (
                      <InputRadio
                        name="fullProductivityYears"
                        key={i}
                        type="radio"
                        value={el}
                      >
                        {el}
                      </InputRadio>
                    ))}
                  </ul>
                </div>
              </div>
              <InfoField item={itemFullProductivityYears} />
            </div>

            <div className={styles.wrapBtnForm}>
              <div className={styles.wrapError}>
                <ErrorSummary />
              </div>
              <button
                type="submit"
                className={styles.btnSubmit}
                disabled={isSubmitting}
              >
                Розрахувати
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
