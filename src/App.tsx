import { Provider } from "react-redux";
import { Store } from "./redux/store/store"
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";
import { productData } from "./data/items"; 

function App() {
  return (
    <Provider store={Store}>
      <ProductList>
      {productData.map((item)=>(
        <div key={item.id}>
          <Product {...item}/>
        </div>
      ))}
      </ProductList>
      
    </Provider>
  );
}

export default App;
