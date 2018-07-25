var  Hapi = require('hapi');
var mysql = require('mysql');
var o;
var r="";
var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "product"
});

const server = new Hapi.Server({
	host : 'localhost',
	port : 1337
});

con.connect(function(err){
	
	if(err)
	{
		console.log('Error at Connection  '+err);
		}
	// 	var a,b,c,d;
	// 	a :"SOAP09";
	// 	b : "LIFEBOhgghY";
	// 	c : "12";
	// 	d : "8";
    //  var qry = "INSERT INTO product_details (product_code,product_name,price,gst) VALUES ('15265a','b','c','d')";
    var qry= "select * from product_details"
	con.query(qry, function(err,result){
		
		if(err) {
			console.log('error at query   '+err);
		return;		
		}
		console.log("Product biuhkjdxhgiogzxvbh successfully");
	});
});

server.route({
	method : 'GET',
	path : '/',
	handler:function(request,reply){
		r='<table border=\'1\'>';
	for(var i=0;o[i];i++)
	{		
		r+= '<tr><b><td>'+o[i].product_code+o[i].product_name+o[i].price+o[i].gst+'</td></b></tr>';
	}
	r=r+'</table>';
	return r;
		
		
		}
	
});


const init = async () => {

   await server.start();
   console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

   console.log(err);
   process.exit(1);
});

init();




