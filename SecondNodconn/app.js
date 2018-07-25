var  Hapi = require('hapi');
var mysql = require('mysql');
var s=50;
var o="",tp,a;
var r="";
var i,flag=0;
var total=0;
var code,name,pric,gst_data,total_price;

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
		
		var temp=a.split("~");
		
            if(temp[3]=='y')
            {
               // console.log("sd");
                console.log(`${encodeURIComponent(request.params.respo)}`);
                
              var da = [[temp[0]]];
             // console.log(da);
			   con.query("SELECT  * from product_details where product_code= ?",[da],function(err,result,fields){
		console.log(result);
			if(err) 
			{
			console.log('error at query   '+err);
			//return;		
			}
			if(result)
			{
			o=result;
		//	console.log("ok");
			}	
			
		//console.log("Product inserted successfully");
                });
                 
            

			code = o.product_code ;
			name = o.product_name ;
			pric = o.price;
			gst_data = o.gst ;
			total_price = (parseInt(pric) *((parseInt(gst_data)/ 100)) + parseInt(pric))*parseInt(temp[1]);
		
            console.log(total_price);
				var data = [
				[temp[2],
				code,
				name,
				pric,
				gst_data,
				temp[1],
				total_price
				]
				];
			con.query("INSERT INTO bill(b_id,product_code,product_name,price,gst,quantity,product_price) VALUES ?",[data],function(err,result){
				
				if(err) {
					console.log('error at query   '+err);
				return;		
				}
				console.log("Product inserted successfully");
			});
				
				
				
				console.log(total_price);
				return  " Total Price for sinfle prodect----> "+total_price;
		}
	
			                   /*	else if(temp[3]==1)
									{

                                        var dat=[[temp[2]]]; //1  to be billid
                                        con.query("SELECT  * from bill where b_id= ?",[dat],function(err,result,fields)
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


										r='<table border=\'1\'>'+o[0].b_id;
									for(i=0;o[i];i++)
									{	
									
										r+= '<tr><b><td>'+o[i].product_code+o[i].product_name+o[i].price+o[i].gst+o[i].quantity+o[i].product_price+'</td></b></tr>';
										total=parseInt(total) + parseInt(o[i].product_price);
									}
									r=r+'<tr> <p><b> Total Price </b></p>'+total+'</tr></table>';
									
									return r;
									}*/
		
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



