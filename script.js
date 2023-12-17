window.onload = iniciar;

function iniciar() {
    var calcular = document.getElementById("calcular")
    calcular.addEventListener("click", clickcalcular);

}

function clickcalcular(){
    var stock = document.getElementById("stock");
    var pesoBruto = parseFloat(stock.value);

    var produ = document.getElementById("produ");
    var pesoNeto = parseFloat(produ.value);

    var ventas = document.getElementById("ventas");
    var ingresos = parseFloat(ventas.value);

    var egreso = document.getElementById("egreso");
    var salidas = parseFloat(egreso.value);

    var saldo = document.getElementById("saldo");
    var stockActual = parseFloat(saldo.value);

    var sCont = (pesoBruto+pesoNeto-ingresos-salidas);
    var merma = (sCont-stockActual);
    var mPorc = ((merma/(pesoBruto+pesoNeto))*100);
    
alert("Saldo contable en kg: " + sCont);
alert("Diferencia de stock en Kg: " + merma);
alert("Porcentaje de merma: " + mPorc + "%");
}
