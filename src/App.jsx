import { useState } from "react";
import Navbar from "./components/Navbar";
import NetBalance from "./components/NetBalance.jsx";
import TrackerInput from "./components/TrackerInput";
import TransactionList from "./components/TransactionList";

export default function App() {
  const [inputData, setInputData] = useState(null);
  function handleFormData(formValue) {
    setInputData(formValue);
  }
  return (
    <>
      <Navbar />
      <div className="relative mx-auto mt-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TrackerInput handleData={handleFormData} />
          <div className="lg:col-span-2">
            <NetBalance />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <TransactionList cardType="Income" />
              <TransactionList cardType="Expense" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
