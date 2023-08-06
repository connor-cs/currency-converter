import { useState } from "react";
import "./App.css";
import Select from "./components/Select";

//first make a form
//then make use effect to get pairs only on load
//

const KEY = "fca_live_g8psjoZmt4fMQik3MIkdDyYhsL4glGwRSj9gUz8N";
const URL =
  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_g8psjoZmt4fMQik3MIkdDyYhsL4glGwRSj9gUz8N&base_currency=USD&currencies=CNY";

interface CurrencyProps {
  name: string;
  amount: number;
  flag: string;
}

function App(params: CurrencyProps) {

  const [currencies, setCurrencies] = useState({
    from: params,
    to: params
  });

return (
  <div className="main">
    <Select />
  </div>
);
}

export default App;
