import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Swal from "sweetalert2";

function App() {
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const handleSelectActor = (actor, id) => {
    const isExist = selectedActors.find((item) => item.id == id);
    let count = actor.salary;

    if (isExist) {
      return Swal.fire({ title: "Already Selected!", icon: "warning" });
    } else {
      selectedActors.forEach((item) => {
        count += item.salary;
      });

      const totalRemaining = 40000 - count;

      if (count > 40000) {
        return Swal.fire({ title: "Budget over", icon: "warning" });
      }
      setRemaining(totalRemaining);

      setTotalCost(count);

      setSelectedActors([...selectedActors, actor]);
    }
  };

  return (
    <>
      <Home
        handleSelectActor={handleSelectActor}
        selectedActors={selectedActors}
        totalCost={totalCost}
        remaining={remaining}
      ></Home>
    </>
  );
}

export default App;
