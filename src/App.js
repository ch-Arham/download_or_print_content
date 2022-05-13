import React, { useRef } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint';
import './App.css';
import jsPDF from 'jspdf';

function App() {
  const componentRef = useRef();
  // React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

 const generatePDF = ()=> {
    let doc = new jsPDF ( "p","pt","a4");
    doc.html(document.querySelector("#content"), {
      callback: function(pdf){
        pdf.save ( "mypdf.pdf");
      }
    })
 }
  

  return (
    <div>
      {/* <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current} */}
      {/* /> */}
      
      <div id="content">
      <ComponentToPrint  ref={componentRef} />
      </div>
      <button onClick={()=>generatePDF()}>Download</button>
      <button onClick={handlePrint}>
        Print
      </button>
    </div>
   
  );
}

export default App;
