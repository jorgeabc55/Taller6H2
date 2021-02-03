
$("#spp").hide();

$(document).ready(function (){
    $('#si').click(function (){
    	$("#spp").show();
    });
    $('#no').click(function (){
    	$("#spp").hide();
    });
     var dato = new Array();

    $.ajax({
    	url: "https://jsonplaceholder.typicode.com/users",
    	type: "GET",
    	dataType: "json",
    	success: function(datos){
    	for (var i = 0; i < datos.length; i++) {
                     var row = {};
                row["id"] = datos[i].id;
                row["nombre"] = datos[i].name;
                row["usuario"] = datos[i].username;
                row["email"] = datos[i].email;
                row["street"]=datos[i].address.street;
                row["suite"]=datos[i].address.suite;
                row["city"]=datos[i].address.city;
                row["zipcode"]=datos[i].address.zipcode;
                row["phone"] = datos[i].phone;
                row["website"] = datos[i].website;
              
                dato[i]= row;
                
            }
            console.log(datos);
            var source =
            {
                localdata: dato,
                datatype: "array",
                datafields:
                [
                    { name: 'id', type: 'number' },
                    { name: 'nombre', type: 'string' },
                    { name: 'usuario', type: 'string' },
                    { name: 'email', type: 'string' },
                    { name: 'street', type: 'string' },
                    { name: 'suite', type: 'string' },
                    { name: 'city', type: 'string' },
                    { name: 'zipcode', type: 'string'},
                    { name: 'phone', type: 'string'},
                    { name: 'website', type: 'string'}
           
                ]
            };
            console.log(source);
            var dataAdapter = new $.jqx.dataAdapter(source);
       
            $("#jqxgrid").jqxGrid(
            {
                width: 1030,
                source: dataAdapter,
                pageable: true,
                columnsresize: true,
                columns: [
                  { text: 'id', datafield: 'id', width: 120 },
                  { text: 'nombre', datafield: 'nombre', width: 120 },
                  { text: 'usuario', datafield: 'usuario', width: 120 },
                  { text: 'email', datafield: 'email', width: 120 },
                  { text: 'calle', datafield: 'street', width: 120 },
                  { text: 'suite', datafield: 'suite', width: 120 },
                  { text: 'ciudad', datafield: 'city', width: 120 },
                  { text: 'zipcode', datafield: 'zipcode', width: 120 },
                  { text: 'Telefono', datafield: 'phone', width: 120 },
                  { text: 'SitioWeb', datafield: 'website', width: 120 }
                ]
            });
    	}
    });
}); 
			