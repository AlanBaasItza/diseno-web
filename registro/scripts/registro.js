function verInformacion(){
let i;
    __________ ocupacion = "";
    __________ pasatiempos = "";
    const nombre = __________.querySelector('__________ [__________="__________"]');
    const edad = __________.querySelector('__________ [__________="__________"]');
    const estado = __________.querySelector('__________ [__________="__________"]');
    const aOcupacion = __________.querySelectorAll('__________ [__________="__________"]');
    const aPasatiempos = __________.querySelectorAll('__________ [__________="__________"]');
    for (i = 0; i < __________.length; i++) {
        if (aOcupacion[i].checked) {
            ocupacion = aOcupacion[i].__________;
            i = aOcupacion.length;
        }
    }
    for (i = __________; i < __________.__________; __________) {
        if (__________.__________) {
            pasatiempos += __________.__________ + " ";
        }
    }
    let ventana = window.open("","vtnInformacion","width=300,height=200");
    ventana.document.open();
    ventana.document.writeln("<html><head><title>Datos capturados</title></head><body>");
    ventana.document.writeln("Nombre: " + nombre.value.toUpperCase() + "<br>");
    ventana.document.writeln("Edad: " + __________.__________ + "<br>");
    ventana.document.writeln("Estado civil: "+ estado.options[__________.__________].text + "<br>");
    ventana.document.writeln("Ocupacion: " + __________ + "<br>");
    ventana.document.writeln("Pasatiempos: " + __________ + "<br>");
    ventana.document.writeln("</body></html>");
    ventana.document.close();
    ventana.focus();
}
window.addEventListener('load', function(){
    document.getElementById('__________').addEventListener('__________', __________);
});
