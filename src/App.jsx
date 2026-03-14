import "./App.css";
import jsPDF from "jspdf";

function App() {
  function PDFdowload() {
    let doc = new jsPDF();

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
