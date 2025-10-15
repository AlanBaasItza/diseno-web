function mostrar_ventana(imagen,descripcion){
    let ventana = window.open("","ventana","width=500 height=440 scrollbars=true");
    ventana.document.open();
    ventana.document.writeln("<html><head><title>Ampliar...</title><link href=\"estilos.css\" rel=\"stylesheet\" type=\"text/css\"></head><body>");
    ventana.document.writeln("<table align='center'><tr><td><img src=\"" + imagen + "\"></td><td><p class=\"linea\">" + descripcion + "</p></td></tr></table>");
    ventana.document.writeln("</body></html>");
    ventana.document.close();
    ventana.focus();
}

function producto(descripcion, imagen_chica, imagen_grande){
    this.descripcion = descripcion;
    this.imagen_chica = imagen_chica;
    this.imagen_grande = imagen_grande;
    this.mostrar_celda = function(){
        let cuadro_imagen = "";
        const correo="ventas@ajuaresprimor.com";

        if (this.descripcion != ""){
            cuadro_imagen = "<td>";
            cuadro_imagen += "<a href=\"javascript:mostrar_ventana('" + this.imagen_grande + "','" + this.descripcion + "')\">";
            cuadro_imagen += "<img src=\"" + this.imagen_chica + "\" border=\"0\"> </a>";
            cuadro_imagen += "</td>";
            cuadro_imagen += "<td>";
            cuadro_imagen += "<p class=\"pequeno\">" + this.descripcion + "<br>";
            cuadro_imagen += "<b><a href=\"javascript:mostrar_ventana('" + this.imagen_grande + "','" + this.descripcion + "')\" title=\"Ampliar imagen\">[+]</a>";
            cuadro_imagen += "<a href=\"mailto:" + correo + "?subject=solicitud de informaci&oacute;n\" title=\"M&aacute;s informaci&oacute;n\">[?]</a></b>";
            cuadro_imagen += "</p></td>";
        } else {
            cuadro_imagen = "<td>&nbsp;</td><td>&nbsp;</td>";
        }
        return cuadro_imagen;
    }
};

let Bautizo = new Array();
Bautizo[0] = new producto("Ajuar bautizo <br>Modelo 200","miniatura/miniajuar01.jpg","catalogo/ajuar01.jpg");
Bautizo[1] = new producto("Ajuar bautizo <br>Modelo 201","miniatura/miniajuar02.jpg","catalogo/ajuar02.jpg");
Bautizo[2] = new producto("Ajuar bautizo <br>Modelo 202","miniatura/miniajuar03.jpg","catalogo/ajuar03.jpg");
Bautizo[3] = new producto("Ajuar bautizo <br>Modelo 203","miniatura/miniajuar04.jpg","catalogo/ajuar04.jpg");
Bautizo[4] = new producto("Ajuar bautizo <br>Modelo 204","miniatura/miniajuar05.jpg","catalogo/ajuar05.jpg");
Bautizo[5] = new producto("","","");

function listar_catalogo(){
    let tabla_productos = "";

    tabla_productos = "<table align=\"center\" border=\"0\" cellspacing=\"20\">";
    for (i = 0; i < Bautizo.length; i += 2) {
        tabla_productos += "<tr>";
        tabla_productos += Bautizo[i].mostrar_celda();
        tabla_productos += "<td width=\"20\">&nbsp;</td>";
        tabla_productos += Bautizo[i+1].mostrar_celda();
        tabla_productos += "</tr>";
    }
    tabla_productos += "</table>";
    
    return tabla_productos;
}

window.addEventListener('load', function(){
    document.getElementById('catalogo').innerHTML = listar_catalogo();
});