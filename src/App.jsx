import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99.99",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$129.99",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/400x300",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$79.99",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      productImageUrl: "https://via.placeholder.com/400x300",
    },
  ];

  const cards = products.map((product) => {
    return (
      <div key={product.id} className="card-wrapper col-md-4 mb-5">
        <div className="card">
          <img
            className="card-img-top"
            src={product.productImageUrl}
            style={{ objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p>{product.description}</p>
            <Link
              to={`/products/${product.id}`}
              className="btn btn-primary"
            >
              View Product
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />
      <main className="container">
        <h1 className=" display-4 my-3">Featured Products</h1>
        <div className="row">{cards}</div>
      </main>
      <Footer />
    </>
  );
}
