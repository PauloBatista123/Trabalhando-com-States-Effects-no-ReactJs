function Counter () {

    var numero = 0;

    const somarNumero = () => {
        numero++;
        document.getElementById("counter").innerHTML = numero;
    }

    return (
        <div>
            <h1 id="counter">{numero}</h1>
            <button onClick={somarNumero}>Aumentar</button>
        </div>
    );
}

export default Counter;