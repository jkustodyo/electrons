module.exports.index = function(application, req, res){
/****
 * 
 if(req.session.autorizado !== true){
	 res.send('Usuário precisa fazer login');
	 return;	
	}
	
	*/
	
	res.render('index/padrao');
}




