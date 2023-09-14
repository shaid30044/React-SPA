import { useState } from "react";
import { useEffect } from "react";
import Cards from "./Cards";
import Carts from "./Carts";

const Home = ({ handleSelectActor, selectedActors, totalCost, remaining }) => {
  const [allActors, setAllActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const data = await res.json();
      setAllActors(data);
    };
    fetchData();
  }, []);

  return (
    <div
      className="font bg-fixed bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: 'url("https://i.ibb.co/JB1y0X5/4690.jpg")' }}
    >
      <div className="bg-gradient-to-b from-[#00000060] via-transparent to-[#00000060]">
        <div className="md:flex gap-12 mx-10 lg:mx-20 py-16">
          <div className="md:w-2/3 grid lg:grid-cols-2 gap-6">
            {allActors.map((actor) => (
              <Cards
                key={actor.id}
                actor={actor}
                handleSelectActor={handleSelectActor}
              ></Cards>
            ))}
          </div>
          <div className="md:w-1/3 pt-32 md:pt-0">
            <Carts
              selectedActors={selectedActors}
              totalCost={totalCost}
              remaining={remaining}
            ></Carts>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
