import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
  const cart = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
  ];

  const totalOfEachElement = cart.map((product) => ({
    ...product,
    totalPrice: product.quantity * product.price,
  }));

  const detailsCart = totalOfEachElement.map((item) => (
    <div key={item.id} className="list-group-item">
      <div className="d-flex justify-content-between">
      <h6>{item.name}</h6>
      <small className="float-end">Total: ${item.totalPrice.toFixed(2)}</small>
        </div>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  ));

  const totalPrice = totalOfEachElement.reduce((acc, curr) => acc + curr.totalPrice, 0);

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="display-4 my-3">Shopping Cart</h1>
        <div className="list-group">{detailsCart}</div>
        <hr/>
        <h4>Total Price: ${totalPrice}</h4>
        <hr/>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
