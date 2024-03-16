import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const {productId} = useParams();
  console.log(productId);

  const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99.99",
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$129.99",
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$79.99",
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: "4",
      name: "Product 4",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$49.99",
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      productImageUrl: "https://via.placeholder.com/300x200",
    },
  ];

  const productDetails = products.find((product) => product.id == productId)


  
  return (
    <>
      <Header />
      <main className="container">
      <h1 className="display-4 my-3">{productDetails.name}</h1>
        <img src={productDetails.productImageUrl} alt={"product " + productDetails.id}/>
        <br/>
        <p>Price: {productDetails.price}</p>
        <p>Description: {productDetails.description}</p>
        <p>Availabile Colors: {productDetails.availableColors.join(', ')}</p>
        <p>Return Policy: {productDetails.isReturnApplicable ? "Return applicable within 7 days." : "Return policy is not available"}</p>
        
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
