// ¿En tu páis de origen es normal dejar propina?

// 1 - Asociar un evento al botón "Calculate"
const button = document.querySelector('#calculate');
console.log("🚀 ~ file: app.js:5 ~ button:", button)

button.addEventListener('click', function () {
    // 2 - Obtener el valor que pone el usuario en el campo Bill Amount (id="bill-amount")
    const billAmount = parseFloat(document.querySelector("#bill-amount").value); 
    console.log('You clicked on calculate');
    // 3 - Obtener el valor que pone el usuario en el campo Percentage Tip (id="percentage-tip")
    // SUPER IMPORTANTE EL PARSEFLOAT PARA CONVERTIR LOS VALORES DE STRING A NUMEROS.
    const percentageTip = parseFloat(document.querySelector("#percentage-tip").value);
    console.log("Bill Amount: ", billAmount);  

    // 4 - Calcular el total de la propina en Tip Amount (id="tip-amount")
    let tipAmount = billAmount * (percentageTip/100);
    console.log("Tip Amount: ", tipAmount);

    // 5 - Calcular el total de la cuenta en el campo Total (id ="total")
    let totalAmount = billAmount + tipAmount;
    console.log("Percentage tip: ", percentageTip);

    // 6 - Para poder tener los valores en los campos correctos. (toFixed es para establecer que ponga solo 2 decimales.)
    document.querySelector("#tip-amount").value = tipAmount.toFixed(2);
    document.querySelector("#total").value = totalAmount.toFixed(2);
    console.log("Total Amount: ", totalAmount);

});



