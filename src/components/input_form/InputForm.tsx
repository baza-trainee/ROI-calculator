import { Formik, Form, useFormikContext } from "formik";
import styles from "./Input.module.css";
import InputText from "./InputText";
import InputRadio from "./InputRadio";
import {
  specialties,
  skills,
  levels,
  itemSpecialization,
  itemLevel,
  itemSalary,
  itemEducation,
  itemSkills,
} from "./data";
import Indicator from "./Indicator";
import * as Yup from "yup";
import { useJunior, useMiddle } from "../../stores/useValuesStore";

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
  softSkills: Yup.string().required("Це поле є обов'язковим "),
});

export interface Values {
  level: string;
  specialization: string;
  softSkills: string;
  salary: number;
  educationCost: number;
}

const initialValues: Values = {
  specialization: "",
  level: "",
  salary: 0,
  educationCost: 0,
  softSkills: "",
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
  const juniorState = useJunior();
  const middleState = useMiddle();

  return (
    <div className={styles.wrapForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: Values, { resetForm }) => {
          if (values.level === "Junior") {
            juniorState.setValues(values);
          } else {
            middleState.setValues(values);
          }
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off" className={styles.form}>
            <div className={styles.wrapIndicator}>
              <Indicator item={itemLevel} />
              <ul
                role="group"
                aria-labelledby="radio-group"
                className={styles.wrapper}
              >
                {levels.map((el, i) => (
                  <InputRadio name="level" key={i} type="radio" value={el}>
                    {el}
                  </InputRadio>
                ))}
              </ul>
            </div>

            <div className={styles.wrapIndicator}>
              <Indicator item={itemSpecialization} />
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

            <div className={styles.wrapIndicator}>
              <Indicator item={itemSalary} />
              <InputText name="salary" />
            </div>
            <div className={styles.wrapIndicator}>
              <Indicator item={itemEducation} />
              <InputText name="educationCost" />
            </div>

            <div className={styles.wrapIndicator}>
              <Indicator item={itemSkills} />
              <ul
                role="group"
                aria-labelledby="radio-group"
                className={styles.wrapper}
              >
                {skills.map((el, i) => (
                  <InputRadio name="softSkills" key={i} type="radio" value={el}>
                    {el}
                  </InputRadio>
                ))}
              </ul>
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
