// Ensure 'cart' is received as a prop
function Cart({ cart }) {
  return (
    <ul>
      {cart && cart.map(item => ( // Adding 'cart &&' prevents crashing if it's empty
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ProductCard
