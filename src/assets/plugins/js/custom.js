/* SCRIPT SLIDER VIDEOS INSTITUCIONALES 
    jssor_1_slider_init = function () {

        var jssor_1_options = {
            $AutoPlay: 2,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Cols: 4,
                $SpacingX: 4,
                $SpacingY: 4,
                $Orientation: 2,
                $Align: 0,
                $PauseOnHover: 1
            }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

     Código responsivo

        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 1110);
                jssor_1_slider.$ScaleWidth(refSize);
            } else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        Fin Código responsivo
    };

    jssor_1_slider_init();

 FIN SCRIPTS SLIDER VIDEOS INSTITUCIONALES*/

/* Buscador del Directorio */
function doSearch() {
    var tableReg = document.getElementById('datos');
    var searchText = document.getElementById('searchTerm').value.toLowerCase();
    var cellsOfRow = "";
    var found = false;
    var compareWith = "";

    // Recorremos todas las filas con contenido de la tabla
    for (var i = 1; i < tableReg.rows.length; i++) {
        cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        found = false;
        // Recorremos todas las celdas
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            // Buscamos el texto en el contenido de la celda
            if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                found = true;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            // si no ha encontrado ninguna coincidencia, esconde la
            // fila de la tabla
            tableReg.rows[i].style.display = 'none';
        }
    }
}
/* Fin del buscador del directorio */

/* Buscador de noticias */
$(".event-type-select").change(function () {
    var selectedEventType = this.options[this.selectedIndex].value;
    if (selectedEventType == "all") {
        $('.mycontainer div').removeClass('hidden');
    } else {
        $('.mycontainer div').addClass('hidden');
        $('.mycontainer div[data-eventtype="' + selectedEventType + '"]').removeClass('hidden');
    }
});
/* Fin del buscador de noticias */

/* Ventana modal inicio */
$(document).ready(function () {
    $("#mostrarmodal").modal("show");
});
/* Fin Ventana modal inicio */

/* Boton ir arriba */
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('a.scroll-top').fadeIn('slow');

    } else {
        $('a.scroll-top').fadeOut('slow');
    }
});

$('a.scroll-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
});
/* Fin Boton ir arriba */

/* Script para llamar el archivo que cuenta las visitas al sitio web y las guarda en la base de datos. El id #contador 
lo ponemos en la vista de principal */
$(document).ready(function () {
    $('#contador').load('http://www.utsalamanca.edu.mx/assets/contador_visitas/uts/index.php');
});