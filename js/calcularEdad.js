// var year = document.getElementById("year").value;
// var month = document.getElementById("month").value;
// var day = document.getElementById("day").value;
// var yearActual=document.getElementById("yearActual").value;
// var monthActual=document.getElementById("monthActual").value;
// var dayActual=document.getElementById("dayActual").value;
var boton = document.getElementById("btn");

function calcularEdad(fecha) {
    if(document.getElementById("yearActual").value== ""){	
    var hoy = new Date();
    document.getElementById("yearActual").value = hoy.getFullYear();
    document.getElementById("monthActual").value = hoy.getMonth()+1 ;
    document.getElementById("dayActual").value = hoy.getDate();
    }else{
    var hoy = new Date(document.getElementById("yearActual").value,document.getElementById("monthActual").value-1,document.getElementById("dayActual").value);
    }
    console.log(hoy);
    var year=Number(fecha[0] + fecha[1] + fecha[2] + fecha[3]);
    var month=Number(fecha[5] + fecha[6]);
    var day=Number(fecha[8] + fecha[9]);
    var edad = hoy.getFullYear() - year;
    var m = hoy.getMonth() - month;
    console.log(m < -1);
    console.log(m);
    console.log(hoy.getDate() < day);
    console.log(edad);
    if (m < -1 || (m == -1 && hoy.getDate() < day)) {
        edad--;
    }
    console.log(edad);
    return edad;
}
boton.onclick = function () {
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var edad=calcularEdad(fechaNacimiento);
    alert("La edad calculada es: " + edad);
    document.getElementById("edad").value = edad;
}