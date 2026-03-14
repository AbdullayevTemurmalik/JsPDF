import "./App.css";
import jsPDF from "jspdf";
import logo from "../../vite-project/src/assets/hero.png"

function App() {
  function PDFdowload() {
    let doc = new jsPDF();

    doc.addImage(logo, "png", 10, 10, 50, 50);

    doc.setTextColor(123, 33, 44);
    doc.setFontSize(100);
    doc.text("Abdullayev TemurMalik", 10, 20);

    doc.save("mywork");
  }

  return (
    <>
      <button onClick={PDFdowload}>PDF Yuklash</button>
    </>
  );
}

export default App;
