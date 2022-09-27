// var year = document.getElementById("year").value;
// var month = document.getElementById("month").value;
// var day = document.getElementById("day").value;
// var yearActual=document.getElementById("yearActual").value;
// var monthActual=document.getElementById("monthActual").value;
// var dayActual=document.getElementById("dayActual").value;
var boton = document.getElementById("btn");

function calcularEdad(fecha) {
    console.log(document.getElementById("yearActual").value);
    if(document.getElementById("yearActual").value== ""){	
    var hoy = new Date();
    document.getElementById("yearActual").value = hoy.getFullYear();
    document.getElementById("monthActual").value = hoy.getMonth() ;
    document.getElementById("dayActual").value = hoy.getDate();
    }else{
    var hoy = new Date(document.getElementById("yearActual").value,document.getElementById("monthActual").value,document.getElementById("dayActual").value);
    }
    var year=fecha[0] + fecha[1] + fecha[2] + fecha[3];
    var month=fecha[5] + fecha[6];
    var day=fecha[8] + fecha[9];
    
    var edad = hoy.getFullYear() - year;
    console.log(edad);
    var m = hoy.getMonth() - month;
    console.log(m);
    if (m < 0 || (m === 0 && hoy.getDate() < day)) {
        edad--;
    }
    return edad;
}
boton.onclick = function () {
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var edad=calcularEdad(fechaNacimiento);
    alert("La edad calculada es: " + edad);
    document.getElementById("edad").value = edad;
}