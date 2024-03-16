import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99.99",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x300",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$129.99",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x300",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$79.99",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      productImageUrl: "https://via.placeholder.com/300x300",
    },
    {
      id: "4",
      name: "Product 4",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$49.99",
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x300",
    },
  ];

  const productCard = products.map((product) => (
    <div key={product.id} className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <img
            src={product.productImageUrl}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Price: {product.price}
              </small>
            </p>
            <Link to={`/products/${product.id}`} className="btn btn-primary">
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));

  const affordableProducts = products.filter(
    (product) => product.price.slice(1) < 80,
  );
  console.log(affordableProducts);

  const productList = affordableProducts.map((prod) => (
    <div key={prod.id}>
      <h4>{prod.name}</h4>
      <p>{prod.description}</p>
      <small>Price: {prod.price}</small>
      <hr/>
        </div>
    
  ));

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="display-4 my-3">Products</h1>
        {productCard}
        <hr />
        <h2 className="display-4">Affordable Products</h2>
        <hr/>
        {productList}
      </main>
      <Footer />
    </>
  );
};

export default Products;
