import { useEffect, useState } from "react";

function IFoodCounter(){

    const [counter, setCounter] = useState(1);

    const aumentarValor = () => { setCounter(counter + 1) }
    const diminuirValor = () => { 
        if(counter > 0) setCounter(counter - 1) 
    }

    useEffect(() => {
        document.getElementById("valor").innerHTML = counter * 2;
    },[counter]);

    return(
        <div>
            <button onClick={diminuirValor}> - </button>
            <label>{counter}</label>
            <button onClick={aumentarValor}> + </button>
            <p id="valor"></p>
        </div>
    );
}

export default IFoodCounter;