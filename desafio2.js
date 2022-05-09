/*Pagar en cuotas un monto determinado
- Tener monto determinado
- Cantidad de cuotas
- Opciones de cantidad de cuotas
- interes en 9 y 12 cuotas

*/

let opciones = menuCuotas();
let parar = "Cancelar"

/* if(opciones!="Cancelar")
{
    venderProducto(opciones)
}
else
{
    alert("Muchas Gracias!")
} */

while(opciones!==parar)
{
    venderProducto(opciones)
}


function menuCuotas()
{
    return prompt(`El monto a pagar es de $15.000
                    En cuantas cuotas desea abonar:
                    1 cuota
                    3 cuotas
                    6 cuotas
                    9 cuotas
                    12 cuotas
                    Cancelar
                    Recuerde que en 9 y 12 cuotas debera abonar interes
                    (Se calculan si elige esa opcion)`)
}



function venderProducto(opciones)
{
    let precioTotal = 15000

    if(opciones!="3" && opciones!="6" && opciones!="9" && opciones!="12")
    {
        alert("opcion Invalida")
        
    }
    else if(opciones=="1")
    {
        alert("El monto a pagar es $"+precioTotal)
    }
    else if(opciones=="3")
    {
        alert("El monto a pagar es $"+precioTotal/3+"por cuota")
    }
    else if(opciones=="6")
    {
        alert("El monto a pagar es $"+precioTotal/6+"por cuota")
    }
    else if(opciones=="9")
    {
        alert("El monto a pagar es $:"+precioTotal/9+ "por cuota")
    }
    else if(opciones=="12")
    {
        alert("El monto a pagar es $"+precioTotal/12+"por cuota")
    }

}


