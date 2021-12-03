$(document).ready(function () {
    c = 2;
    var html = "";
    for (let i = 1; i < 43; i++) {
        $.ajax({
            type: "GET",
            url: "https://rickandmortyapi.com/api/character/?page=" + i,
            dataType: "json",
            async: true,
            success: function (data) {
                for (let j = 0; j < data.results.length; j += 2) {
                    html += "<div class='row'>";
                    html += "<div class='card col'>";
                    html += "<span class='zoom' id='ex" + (c - 1) + "'>";
                    html += "<img src='" + data.results[j].image + "' class='card-img-top' alt='" + data.results[j].name + "'>";
                    html += "</span>";
                    html += "<div class='card-body'>";
                    html += "<h5 class='card-title'><b>" + data.results[j].name + "</b></h5>";
                    html += "<p><b>Estado: </b>" + data.results[j].status + "<br><b>Especie: </b>" + data.results[j].species + "<br>";
                    html += "<b>Tipo: </b>"+ data.results[j].type +"<br><b>Género: </b>" + data.results[j].gender + "<br>";
                    html += "<b>Origen: </b>" + data.results[j].origin.name + "</p>";
                    html += "</div></div>"; 
                    html += "<div class='card col'>";
                    html += "<span class='zoom' id='ex" + (c) + "'>";
                    html += "<img src='" + data.results[j + 1].image + "' class='card-img-top' alt='" + data.results[j + 1].name + "'>";
                    html += "</span>";
                    html += "<div class='card-body'>";
                    html += "<h5 class='card-title'><b>" + data.results[j + 1].name + "</b></h5>";
                    html += "<p><b>Estado: </b>" + data.results[j + 1].status + "<br><b>Especie: </b>" + data.results[j + 1].species + "<br>";
                    html += "<b>Tipo: </b>"+ data.results[j].type +"<br><b>Género: </b>" + data.results[j].gender + "<br>";
                    html += "<b>Origen: </b>" + data.results[j].origin.name + "</p>";
                    html += "</div></div></div>";
                    $("#container").html(html);
                    $('#estadoCarga').html("Cargando elementos... " + (c - 1) + " de 826.");
                    $('#estadoCarga').html("Cargando elementos... " + (c) + " de 826.");
                    if (c == 826) {
                        for (let i = 1; i <= 826; i++) {
                            $("#ex" + i).zoom();
                        }
                        $(".card").hover(function(){
                            $(this).css({"background-color" : "#3c3e44", "transition" : "1s", "color" : "white"});
                        }, function(){
                            $(this).css({"background-color" : "white", "transition" : "1s", "color" : "black"});
                        });
                    }
                    c += 2;
                }
            }
        });
    }
});
$(document).ready(function () {
    $("#buttonBuscar").click(function () {
        $('#estadoCarga').empty();
        let valBuscar = $("#busqueda").val();
        var c = 0;
        var html = "";
        for (let i = 1; i < 43; i++) {
            $.ajax({
                type: "GET",
                url: "https://rickandmortyapi.com/api/character/?page=" + i,
                dataType: "json",
                async: true,
                success: function (data) {
                    for (let j = 0; j < data.results.length; j++) {
                        if (data.results[j].name.toLowerCase().indexOf(valBuscar.toLowerCase()) >= 0) {
                            c += 1;
                            $("#estadoCarga").html(c + " resultados.");
                            html += "<div class='row'>";
                            html += "<div class='card col'>";
                            html += "<span class='zoom' id='ex" + c + "'>";
                            html += "<img src='" + data.results[j].image + "' class='card-img-top' alt='" + data.results[j].name + "'>";
                            html += "</span>";
                            html += "<div class='card-body'>";
                            html += "<h5 class='card-title'><b>" + data.results[j].name + "</b></h5>";
                            html += "<p><b>Estado: </b>" + data.results[j].status + "<br><b>Especie: </b>" + data.results[j].species + "<br>";
                            html += "<b>Tipo: </b>" + data.results[j].type + "<br><b>Género: </b>" + data.results[j].gender + "<br>";
                            html += "<b>Origen: </b>" + data.results[j].origin.name + "</p>";
                            html += "</div></div></div>";
                            $("#container").html(html);
                        }
                        if (c == 0) {
                            $("#estadoCarga").html(c + " resultados.");
                        }
                    }
                    for (let e = 1; e <= c; e++) {
                        $("#ex" + e).zoom();
                        console.log(e);
                    }
                    $(".card").hover(function () {
                        $(this).css({ "background-color": "#3c3e44", "transition": "1s", "color": "white" });
                    }, function () {
                        $(this).css({ "background-color": "white", "transition": "1s", "color": "black" });
                    });
                }
            });
        }
    });
});

