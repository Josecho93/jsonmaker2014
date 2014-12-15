/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var path = 'request.getContextPath()';

$(document).ready(function () {
  
  
  $.ajax({
        url: path,
        type: "GET",
        async: false,
        dataType: "json",
        success: function (source) {
             /* res += source.json; */
             $('#data').add(source.Control);
             /* $('#data').append(source.Control); */ 
        }
        
    });
});