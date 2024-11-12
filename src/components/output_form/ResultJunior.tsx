import { useJunior } from "../../stores/useValuesStore";
import ResultForm from "./ResultForm";

const ResultJunior = () => {
  const { values, yearSalary, total } = useJunior();
  const salary = yearSalary(values.salary);
  return (
    <>
      <ResultForm values={values} total={total} yearSalary={salary} />
    </>
  );
};

export default ResultJunior;
