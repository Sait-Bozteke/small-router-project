import {useEffect,useState} from 'react'
import styles from "./Product.module.css"

const Products = () => {
  const [products, setproducts] = useState([])
  useEffect(() => {
   fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setproducts(json))
  }, [])
  
  
  return (
    <div><h2>Product Page</h2>
    <div className={styles.products}>
      {products.map(each=>(
      <Link to={`/details/${each.id}`}>
      <div key={each.id} className={styles.product}>
<h6>{each.category}</h6>
<p>{each.title}</p>
<img src={each.image} style={{width:"100px"}} alt="" />
        </div>
        </Link>  
      ))}
    </div>
    
    </div>
  )
}

export default Products