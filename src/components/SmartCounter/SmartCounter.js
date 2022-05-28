import { useState } from "react";

function SmartCounter(){

    var [quantity, setQuantity] = useState(1);

    return (
        <div>
            <h1>{quantity}</h1>
            <button onClick={() => setQuantity(quantity++)}>Aumentar</button>
        </div>
    );

}

export default SmartCounter