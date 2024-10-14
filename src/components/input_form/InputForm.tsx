import { Formik, Form } from "formik";
import styles from "./Input.module.css";
import InputText from "./InputText";
import InputRadio from "./InputRadio";
import {
  specialties,
  skills,
  times,
  itemSpecialist,
  itemSkill,
  itemSalary,
  itemEducation,
  itemMentoring,
  itemProductivity,
  itemTime,
  Item,
} from "./data";
import Indicator from "./Indicator";
import InfoField from "./InfoField";
import { useState } from "react";

export interface Values {
  specialist: string;
  skill: string;
  salary: number;
  education: number;
  mentoring: number;
  productivity: number;
  time: string;
}

const initialValues: Values = {
  specialist: "",
  skill: "",
  salary: 0,
  education: 0,
  mentoring: 0,
  productivity: 0,
  time: "",
};

export default function InputForm() {
  const [openFields, setOpenFields] = useState<{ [key: string]: boolean }>({
    specialist: false,
    skill: false,
    salary: false,
    education: false,
    mentoring: false,
    productivity: false,
    time: false,
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
        onSubmit={(values: Values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
          }, 1000);
          setSubmitting(true);
          resetForm();
        }}
      >
        {(props) => (
          <Form autoComplete="off" className={styles.form}>
            <div className={styles.field}>
              <div className={styles.wrapIndicator}>
                <Indicator
                  item={itemSpecialist}
                  isOpen={openFields.specialist}
                  openField={openField}
                />
                <div
                  style={{ display: openFields.specialist ? "block" : "none" }}
                >
                  <ul
                    role="group"
                    aria-labelledby="radio-group"
                    className={styles.wrapper}
                  >
                    {specialties.map((el, i) => (
                      <InputRadio
                        name="specialist"
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
              <InfoField item={itemSpecialist} />
            </div>
            <div className={styles.field}>
              <div className={styles.wrapIndicator}>
                <Indicator
                  item={itemSkill}
                  isOpen={openFields.skill}
                  openField={openField}
                />
                <div style={{ display: openFields.skill ? "block" : "none" }}>
                  <ul
                    role="group"
                    aria-labelledby="radio-group"
                    className={styles.wrapper}
                  >
                    {skills.map((el, i) => (
                      <InputRadio name="skill" key={i} type="radio" value={el}>
                        {el}
                      </InputRadio>
                    ))}
                  </ul>
                </div>
              </div>
              <InfoField item={itemSkill} />
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
                  isOpen={openFields.education}
                  openField={openField}
                />
                <div
                  style={{ display: openFields.education ? "block" : "none" }}
                >
                  <InputText name="education" />
                </div>
              </div>
              <InfoField item={itemEducation} />
            </div>

            <div className={styles.field}>
              <div className={styles.wrapIndicator}>
                <Indicator
                  item={itemMentoring}
                  isOpen={openFields.mentoring}
                  openField={openField}
                />
                <div
                  style={{ display: openFields.mentoring ? "block" : "none" }}
                >
                  <InputText name="mentoring" />
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
                  item={itemTime}
                  isOpen={openFields.time}
                  openField={openField}
                />
                <div style={{ display: openFields.time ? "block" : "none" }}>
                  <ul
                    role="group"
                    aria-labelledby="radio-group"
                    className={styles.wrapper}
                  >
                    {times.map((el, i) => (
                      <InputRadio name="time" key={i} type="radio" value={el}>
                        {el}
                      </InputRadio>
                    ))}
                  </ul>
                </div>
              </div>
              <InfoField item={itemTime} />
            </div>

            <div className={styles.wrapBtnForm}>
              <button
                type="submit"
                className={styles.btnSubmit}
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Submitting..." : "Розрахувати"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
