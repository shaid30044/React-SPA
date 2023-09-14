const Cart = ({ actor }) => {
  const { name, salary } = actor;

  return (
    <div>
      <li className="text-lg font-semibold text-white">{name}</li>
    </div>
  );
};

export default Cart;
