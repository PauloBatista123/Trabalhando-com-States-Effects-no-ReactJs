import { useState } from "react";

function IFoodCounter(){

    const [counter, setCounter] = useState(1);

    const aumentarValor = () => { setCounter(counter + 1) }
    const diminuirValor = () => { if(counter > 0) setCounter(counter - 1) }

    return(
        <div>
            <button onClick={diminuirValor}> - </button>
            <label>{counter}</label>
            <button onClick={aumentarValor}> + </button>
        </div>
    );
}

export default IFoodCounter;