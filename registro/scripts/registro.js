function verInformacion(){
    let i;
    let ocupacion = "";
    let pasatiempos = "";
    const nombre = document.querySelector('input[name="txt_nombre"]');
    const edad = document.querySelector('input[name="nmbr_edad"]');
    const estado = document.querySelector('select[name="slct_estado"]');
    const aOcupacion = document.querySelectorAll('input[name="rd_ocupacion"]');
    const aPasatiempos = document.querySelectorAll('input[name="chk_pasatiempo"]');
    for (i = 0; i < aOcupacion.length; i++) {
        if (aOcupacion[i].checked) {
            ocupacion = aOcupacion[i].value;
            i = aOcupacion.length;
        }
    }
    for (i = 0; i < aPasatiempos.length; i++) {
        if (aPasatiempos[i].checked) {
            pasatiempos += aPasatiempos[i].value + " ";
        }
    }
    let ventana = window.open("","vtnInformacion","width=300,height=200");
    ventana.document.open();
    ventana.document.writeln("<html><head><title>Datos capturados</title></head><body>");
    ventana.document.writeln("Nombre: " + nombre.value.toUpperCase() + "<br>");
    ventana.document.writeln("Edad: " + edad.value + "<br>");
    ventana.document.writeln("Estado civil: "+ estado.options[estado.selectedIndex].text + "<br>");
    ventana.document.writeln("Ocupacion: " + ocupacion + "<br>");
    ventana.document.writeln("Pasatiempos: " + pasatiempos + "<br>");
    ventana.document.writeln("</body></html>");
    ventana.document.close();
    ventana.focus();
}
window.addEventListener('load', function(){
    document.getElementById('btn_enviar').addEventListener('click', verInformacion);
});
