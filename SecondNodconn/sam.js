var  Hapi = require('hapi');
var mysql = require('mysql');
var s=50;
var o,tp,a;
var r="";
var i;
var flag='y';
var fans;
var total=0;
var code,name,pric,gst_data,total_price;
var bid,qa;
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
	if(err)
	{
	console.log('Error at the Connection  '+err);
	return;
	}
	
});





server.route({
	method : 'POST',
	path : '/{respo}',
	handler:function(request,reply){
       var a=`${encodeURIComponent(request.params.respo)}`;
		console.log("hi"+" "+a);
		var temp=a.split("~");
	
	code = temp[0];
	qa = temp[1];
	bid = temp[2];
	flag = temp[3];
	if(flag=='y')
		{
			var data = [[code]];
			con.query("SELECT  * from product_details where product_code= ?",[data],function(err,result,fields){
		
			if(err) 
			{
			console.log('error at query   '+err);
			//return;		
			}
			if(result)
			{
			o=result;
			console.log("ok");
			}	

			code = o[0].product_code ;
			name = o[0].product_name ;
			pric = o[0].price;
			gst_data = o[0].gst ;
			total_price = (parseInt(pric * (gst_data / 100)) + parseInt(pric))*parseInt(qa);
		
		
		
				var data = [
				[bid,
				code,
				name,
				pric,
				gst_data,
				qa,
				total_price
				]
				];
			con.query("INSERT INTO bill(b_id,product_code,product_name,price,gst,quantity,product_price) VALUES ?",[data],function(err,result){
				
				if(err) {
					console.log('error at query   '+err);
				return;		
				}
			//	console.log("Product inserted successfully");
			});
				
			console.log(total_price);
				return  " Total Price for ----> "+total_price;
		});
		}
	
									else
									{

										var dat=[[bid]];
										//console.log(dat);
										con.query("SELECT  * from bill where b_id= ?",[dat],function(err,result,fields)
				   					{
										
										if(err) 
										{
										console.log('error at query   '+err);
										return;		
										}
										if(result)
										{
											fans=result;
											console.log(result);
											o = result;
											console.log("ok at else ");	 
										}	
				});

                                       
										r='<table border=\'1\'>'+o[0].b_id;
									for(i=0;o[i];i++)
									{	
									
										r+= '<tr><b><td>'+o[i].product_code+o[i].product_name+o[i].price+o[i].gst+o[i].quantity+o[i].product_price+'</td></b></tr>';
										total=parseInt(total) + parseInt(o[i].product_price);
									}
									r=r+'<tr> <p><b> Total Price </b></p>'+total+'</tr></table>';
									return r;
									//return r;
									}
		
		}
	
});

server.route({
	method : 'GET',
	path : '/',
	handler:function(request,reply){
		return fans;
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



