import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "temp/data";

export default function Invoice() {
    
    let navigate = useNavigate();
    let params = useParams();
    // url 매개변수는 항상 String이므로 parseInt 를 사용함.
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    return (
        <main style={{ padding: "1rem" }}>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
          <p>
                <button
                    onClick={
                        () => {
                            deleteInvoice(invoice.number);
                            navigate("/invoices");
                        }
                    }
                >
                    Delete
                </button>
          </p>
        </main>
      );
}