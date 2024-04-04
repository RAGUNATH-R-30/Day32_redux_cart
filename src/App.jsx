import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Card from "./Card";
import Total_card from "./Total_card";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //fetches data stored in store
  const alldata = useSelector((state) => state.app);
  return (
    <div className="container-fluid" style={{ textAlign: "center" }}>
      <Total_card />
      {alldata.products[0].products.map((item, index) => {
        return <Card data={item} key={index}></Card>;
      })}
    </div>
  );
}

export default App;
