import { useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import CheckoutBag from "../assets/CheckoutBag";
import styles from "./Details.module.css"

const Details = () => {
  const [product, setproduct] = useState({});
  const params = useParams();
  const navigate=useNavigate()
  useEffect(() => {
     fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then((res) => res.json())
    .then((json) => console.log(json));
  }, [])
  
  const handleBack=()=>{
navigate(-1)
  }
  const handleCheckout=()=>{
navigate("/checkout")
  }

  return (
    <div>
        <div className={styles.detailsNav}> 
        <BackArrow onClick={handleBack} />
      <h1>Details Page</h1>
      <CheckoutBag onClick={handleCheckout}/>
      </div>
       
      <div className={styles.detailsWrapper}>
          <p>{product?.id}</p>
          <p>{product?.title}</p>
          <p>{product?.description}</p>
          <p>{product?.category}</p>
          <p>{product?.price}</p>
          <img src={product?.image} className={styles.detailsImage} alt={product.title} />

      </div>
    </div>
  );
};

export default Details;
