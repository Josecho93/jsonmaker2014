/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {


    var numero = prompt("Introduce un numero");
    var path = "http://localhost:8081/examClientNov2014/control?ob=form&op=get&num=" + numero;
    $.ajax({
        url: path,
        type: "GET",
        async: false,
        dataType: "json",
        success: function (json) {

            var texto = JSON.stringify(json);
            $('#paneljson').append(texto);

            

            mijson = JSON.parse(texto);
            var message = '<form>';
            
            for (var i = 0; i < mijson.json.elements.length; i++) {
                
                if (mijson.json.elements[i].text === undefined) {
                   
                    message += '<' + mijson.json.elements[i].tag;
                    message += ' type="' + mijson.json.elements[i].type + '"';
                    message += ' name="' + mijson.json.elements[i].name + '"';
                    message += ' id="' + mijson.json.elements[i].id + '"' + '>';
                    message += '</' + mijson.json.elements[i].tag + '> <br>';
                    
                } else {
                    
                    message += '<' + mijson.json.elements[i].tag;
                    message += ' for="' + mijson.json.elements[i].labelfor + '">';
                    message +=  mijson.json.elements[i].text;
                    message += '</' + mijson.json.elements[i].tag + '>';
                }
                
                
            }

            message += '</form>';
            
           $('#formulario').append(message);

            /* $('#data').append(source.Control); */

        },
        error: function (dato) {

        }
    });
});   