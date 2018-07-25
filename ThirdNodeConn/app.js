


var  Hapi = require('hapi');
var mysql = require('mysql');
var s=50;
var o,tp,a;
var r="";
var i,flag=0;
var total=0;


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

con.connect(function(err)
{
	

			//var dat=[['1']];
		    con.query("SELECT * FROM bill ORDER BY bill.b_id ASC",function(err,result,fields)
			{
																		
				if(err) 
				{
					console.log('error at query   '+err);
					return;		
				}
				if(result)
				{
					o = result;
					console.log("ok");	 
				}	
			});
												
});








server.route({
	method : 'GET',
	path : '/',
	handler:function(request,reply){
	
			
									r='<h1><b><center>BILL HISTORY</center></b></h1><table border=\'1\' id=\'t\'><b>BILL ID: '+o[0].b_id+'</b>';
									r=r+'<tr><th>PRODUCT ID</th><th>PRODUCT NAME</th><th>PRICE</th><td>GST</th><th>QUANTITY</th><th>PRODUCT PRICE</th></tr>';
									for(i=0;o[i+1];i++)
									{	
									
										r+= '<tr><b><td>'+o[i].product_code+'</td><td>'+o[i].product_name+'</td><td>'+o[i].price+'</td><td>'+o[i].gst+'</td><td>'+o[i].quantity+'</td><td>'+o[i].product_price;
										total=parseInt(total) + parseInt(o[i].product_price);
										if(o[i].b_id!=o[i+1].b_id)
										{
										r=r+'</td></tr><tr><td colspan=\'6\'><b>TOTAL PRICE:</B>'+total+'</td></tr></table><br><table border=\'1\'>BILL ID: '+o[i+1].b_id;
										r=r+'<tr><th>PRODUCT ID</th><th>PRODUCT NAME</th><th>PRICE</th><td>GST</th><th>QUANTITY</th><th>PRODUCT PRICE</th></tr>';
										total=0;
										}
										else
										{
											r=r+'</td></tr>'
										}						
										// r=r+'</td></tr><tr><td><b>TOTAL PRICE:</B>'+total+'</td></tr>';
										// else
										// r=r+'</td></tr>';
									
									}
								//	r=r+'</table>';
									total=parseInt(total)+parseInt(o[i].product_price);
									r=r+'<tr><td>'+o[i].product_code+'</td><td>'+o[i].product_name+'</td><td>'+o[i].price+'</td><td>'+o[i].gst+'</td><td>'+o[i].quantity+'</td><td>'+o[i].product_price+'</td></tr>';
									r=r+'<tr><td colspan=\'6\'><b>TOTAL PRICE:</b>'+total+'</td></tr></table>';
									
									
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



