import { useEffect } from "react";
import { useState } from "react";

export function Irodaszerek() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/Irodaszerek")
      .then((res) => res.json())
      .then((product) => setProducts(product))
  }, [])

  return (
    <div>
      <div className="p-5  m-auto text-center content bg-ivory" >
        <h2 className="mb-5"><strong>Irodaszereink:</strong></h2>
        {products.map((element) =>
        (<div className="card col-sm-3 d-inline-block m-2 p-5 shadow mb-5 bg-white rounded" key={element._id}>
          <h3 className="mb-4"><strong>{element.name}</strong></h3>
          <h4>Márkája:{element.brand}</h4>
          <h5>Ára: {element.price} ft -</h5>
        </div>
        ))}
      </div>
    </div>
  );
}