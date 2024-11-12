import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import InputForm from "./components/input_form/InputForm";
import "./App.css";
import ResultJunior from "./components/output_form/ResultJunior";
import ResultMiddle from "./components/output_form/ResultMiddle";
import TotalResult from "./components/result_total/TotalResult";

function App() {
  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <main className="container">
        <InputForm />
        <div className="wrapResult">
          <ResultJunior />
          <ResultMiddle />
          <TotalResult />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
