import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import InputForm from "./components/input_form/InputForm";
import OutputForm from "./components/output_form/OutputForm";
import "./App.css";

function App() {
  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <main className="mainLayout">
        <InputForm />
        <OutputForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
