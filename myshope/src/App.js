
import "./App.css"
import cakes from "./shop";
import style from "./style";
import cakeimage from "./images/cake.jpg"

function App() {
  


  const cakeslist = cakes.map((cake) => (
    <ul >
      <il><img src={cake.image}  style={{width: "20%"}} alt="cakeindex"/></il>
      <div>
      <il>{cake.name}</il>
    </div>
      <div>
      <il>Price:{cake.price}</il>
      </div>
     
    </ul>
    
  ));
 

  return (
   
    
    <div className="s">
    <h2>Sweet cake</h2>
    
    
    <p className="cake">
    There are many different types of cake. Coman to try it </p>
    
    <img  style= {style} src={cakeimage}  alt="shop" />


  <div>{cakeslist}</div>

    </div>

  );
}

export default App;
