import { useMiddle } from "../../stores/useValuesStore";
import ResultForm from "./ResultForm";

const ResultMiddle = () => {
  const { values, yearSalary, total } = useMiddle();
  const salary = yearSalary(values.salary);
  return (
    <>
      <ResultForm values={values} total={total} yearSalary={salary} />
    </>
  );
};
export default ResultMiddle;
