import Cart from "./Cart";

const Carts = ({ selectedActors, totalCost, remaining }) => {
  return (
    <div className="text-white border-2 border-[#EC1D24] rounded-xl backdrop-blur-[3px] backdrop-brightness-75 space-y-2 p-4">
      <h3 className="text-lg font-semibold">Actors: {selectedActors.length}</h3>
      <div className="border-b-2 border-[#EC1D24] space-y-2 pb-4">
        {selectedActors.map((actor, idx) => (
          <Cart key={idx} actor={actor}></Cart>
        ))}
      </div>
      <h3 className="text-lg font-semibold pt-4">Budget: $40000</h3>
      <h3 className="text-lg font-semibold">Total Cost: ${totalCost}</h3>
      <h3 className="text-lg font-semibold">Remaining Cost: ${remaining}</h3>
    </div>
  );
};

export default Carts;
