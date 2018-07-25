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
		console.log('Error at the Connection  '+err);
		return;
		}
	con.query("SELECT * FROM product_details ",function(err,result,fields){
		
		if(err) {
			console.log('error at query   '+err);
			return;
			
		}
		if(result){
			o=result;
			console.log(" ok");
			
		}
	});
});

server.route({
	method : 'GET',
	path : '/',
	handler:function(request,reply){
	// 	r='<table border=\'1\'>';
	// for(var i=0;o[i];i++)
	// {		
	// 	r+= '<tr><b><td>'+o[i].product_code+o[i].product_name+o[i].price+o[i].gst+'</td></b></tr>';
	// }
	// r=r+'</table>';
	
	return o;
		
		
		}
	
});
server.route({
	method:'POST',
	path:'/{namfe}',
	handler:function(request,reply){
		console.log(`${encodeURIComponent(request.params.namfe)}`);
		var a=`${encodeURIComponent(request.params.namfe)}`;
		
		var temp=a.split("~");
		// var qry = ('INSERT INTO product_details (product_code,product_name,price,gst) VALUES (?,?,?,?)',[temp[0]],[temp[1]],[temp[2]],[temp[3]]);
		var data = [
			[ temp[0],
			temp[1],
			temp[2],
			temp[3]
			]
			];
		con.query("INSERT INTO product_details(product_code,product_name,price,gst) VALUES ?",[data],function(err,result)
		{
		
			if(err) {
				console.log('error at query   '+err);
			return;		
			}
			console.log("Product biuhkjdxhgiogzxvbh successfully");
		});
		 return "Sa";
	}
})


const init = async () => {

   await server.start();
   console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

   console.log(err);
   process.exit(1);
});

init();




