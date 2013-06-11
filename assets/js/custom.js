var col = 0;
var selectedCat = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var show = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var catstories = [[0,1,8],[3,7,9],[4,10,11],[2,6,12],[1,13,14]];

var newsarticle = [];
var view = 0;

function addCat(num){
	if(selectedCat[num-1] == false){
		txt = $('#cats'+num+' .catstext h4').html();
		$('#leftpan div').prepend('<span id="selectedCat'+num+'">'+txt+'<h1 title="Remove" onclick="removeCat('+num+');">X</h1></span>');
		selectedCat[num-1]=true;
		if(view == 2){
		getdashboard();
	} 	
	}
}

function removeCat(id){
	$('#selectedCat'+id).hide();
	selectedCat[id-1]=false;
	if(view == 2){
		getdashboard();
	}
}

function showstory(art){
	col++;
	if(col==4){
		col=1;
	}
	$('#col'+col).append(newsarticle[art]);
}

function showstories(){
	for(var k=0; k<selectedCat.length; k++){
		if(show[k]){
			showstory(k);
		}
	}
}

function getdashboard(){
	view = 2;
	$('#holdcats.container').html('<div id="one"></div><div id="col1"></div><div id="col2"></div><div id="col3"></div>');
	for(var i=0;i<selectedCat.length;i++){
		if(selectedCat[i]){
			for(var j=0; j<3; j++){
				show[catstories[i][j]]=true;
			}
		}
	}
	showstories();
}

function onedetail(myint){
	$('#holdcats.container #one').html('<div id="one"></div><div id="col1"></div><div id="col2"></div><div id="col3"></div>');
}

/*http://www.ghanaweb.com/GhanaHomePage/diaspora/artikel.php?ID=276141*/
newsarticle[0] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/art0.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Cape Verde President honors Ghanaian</div>'+
						'<div class="articlesource">Ghana Web, Ghana</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">5 minutes ago</div>'+
					'</div>'+
					'<div class="articletext">Cape Verde President honors leading citizen of the Ghanaian community in Cape Verde...</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
/*http://www.news24.com/SouthAfrica/News/Zuma-We-created-a-better-life-for-all-20130606*/
newsarticle[1] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/art1.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Zuma: We created a better life for all</div>'+
						'<div class="articlesource">News24, South Africa</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">Pretoria - South Africans\' quality of life has improved immensely since the advent of democracy, President Jacob Zuma told foreign diplomats on Thursday.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
newsarticle[2] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/samsung_galaxy_note___phone___tablet-wallpaper-1366x768.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Elections are Here</div>'+
						'<div class="articlesource">Capital FM, Kenya</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">people insist they want to see news text, finish reading this before they realise I said nothing. By they I mean you.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';

newsarticle[3] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/samsung_galaxy_note___phone___tablet-wallpaper-1366x768.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Elections are Here</div>'+
						'<div class="articlesource">Capital FM, Kenya</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">people insist they want to see news text, finish reading this before they realise I said nothing. By they I mean you.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
/*http://www.ghanaweb.com/GhanaHomePage/diaspora/artikel.php?ID=276141*/
newsarticle[4] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/art0.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Cape Verde President honors Ghanaian</div>'+
						'<div class="articlesource">Ghana Web, Ghana</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">5 minutes ago</div>'+
					'</div>'+
					'<div class="articletext">Cape Verde President honors leading citizen of the Ghanaian community in Cape Verde...</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
/*http://www.news24.com/SouthAfrica/News/Zuma-We-created-a-better-life-for-all-20130606*/
newsarticle[5] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/art1.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Zuma: We created a better life for all</div>'+
						'<div class="articlesource">News24, South Africa</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">Pretoria - South Africans\' quality of life has improved immensely since the advent of democracy, President Jacob Zuma told foreign diplomats on Thursday.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
newsarticle[6] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/samsung_galaxy_note___phone___tablet-wallpaper-1366x768.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Elections are Here</div>'+
						'<div class="articlesource">Capital FM, Kenya</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">people insist they want to see news text, finish reading this before they realise I said nothing. By they I mean you.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';

newsarticle[7] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/samsung_galaxy_note___phone___tablet-wallpaper-1366x768.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Elections are Here</div>'+
						'<div class="articlesource">Capital FM, Kenya</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">people insist they want to see news text, finish reading this before they realise I said nothing. By they I mean you.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
/*http://www.ghanaweb.com/GhanaHomePage/diaspora/artikel.php?ID=276141*/
newsarticle[8] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/art0.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Cape Verde President honors Ghanaian</div>'+
						'<div class="articlesource">Ghana Web, Ghana</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">5 minutes ago</div>'+
					'</div>'+
					'<div class="articletext">Cape Verde President honors leading citizen of the Ghanaian community in Cape Verde...</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
/*http://www.news24.com/SouthAfrica/News/Zuma-We-created-a-better-life-for-all-20130606*/
newsarticle[9] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/art1.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Zuma: We created a better life for all</div>'+
						'<div class="articlesource">News24, South Africa</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">Pretoria - South Africans\' quality of life has improved immensely since the advent of democracy, President Jacob Zuma told foreign diplomats on Thursday.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
newsarticle[10] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/samsung_galaxy_note___phone___tablet-wallpaper-1366x768.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Elections are Here</div>'+
						'<div class="articlesource">Capital FM, Kenya</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">people insist they want to see news text, finish reading this before they realise I said nothing. By they I mean you.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';

newsarticle[11] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/samsung_galaxy_note___phone___tablet-wallpaper-1366x768.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Elections are Here</div>'+
						'<div class="articlesource">Capital FM, Kenya</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">people insist they want to see news text, finish reading this before they realise I said nothing. By they I mean you.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
/*http://www.ghanaweb.com/GhanaHomePage/diaspora/artikel.php?ID=276141*/
newsarticle[12] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/art0.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Cape Verde President honors Ghanaian</div>'+
						'<div class="articlesource">Ghana Web, Ghana</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">5 minutes ago</div>'+
					'</div>'+
					'<div class="articletext">Cape Verde President honors leading citizen of the Ghanaian community in Cape Verde...</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
/*http://www.news24.com/SouthAfrica/News/Zuma-We-created-a-better-life-for-all-20130606*/
newsarticle[13] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/art1.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Zuma: We created a better life for all</div>'+
						'<div class="articlesource">News24, South Africa</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">Pretoria - South Africans\' quality of life has improved immensely since the advent of democracy, President Jacob Zuma told foreign diplomats on Thursday.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
newsarticle[14] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/samsung_galaxy_note___phone___tablet-wallpaper-1366x768.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Elections are Here</div>'+
						'<div class="articlesource">Capital FM, Kenya</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">people insist they want to see news text, finish reading this before they realise I said nothing. By they I mean you.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';

newsarticle[15] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/samsung_galaxy_note___phone___tablet-wallpaper-1366x768.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Elections are Here</div>'+
						'<div class="articlesource">Capital FM, Kenya</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">people insist they want to see news text, finish reading this before they realise I said nothing. By they I mean you.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
/*http://www.ghanaweb.com/GhanaHomePage/diaspora/artikel.php?ID=276141*/
newsarticle[16] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/art0.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Cape Verde President honors Ghanaian</div>'+
						'<div class="articlesource">Ghana Web, Ghana</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">5 minutes ago</div>'+
					'</div>'+
					'<div class="articletext">Cape Verde President honors leading citizen of the Ghanaian community in Cape Verde...</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
/*http://www.news24.com/SouthAfrica/News/Zuma-We-created-a-better-life-for-all-20130606*/
newsarticle[17] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/art1.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Zuma: We created a better life for all</div>'+
						'<div class="articlesource">News24, South Africa</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">Pretoria - South Africans\' quality of life has improved immensely since the advent of democracy, President Jacob Zuma told foreign diplomats on Thursday.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
				
newsarticle[18] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/samsung_galaxy_note___phone___tablet-wallpaper-1366x768.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Elections are Here</div>'+
						'<div class="articlesource">Capital FM, Kenya</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">people insist they want to see news text, finish reading this before they realise I said nothing. By they I mean you.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';

newsarticle[19] = '<div class="article">'+
					'<div class="articleimg">'+
						'<img src="assets/img/cats/samsung_galaxy_note___phone___tablet-wallpaper-1366x768.jpg" width="350px" />'+
					'</div>'+
					'<div class="articlehead">'+
						'<div class="articletitle">Elections are Here</div>'+
						'<div class="articlesource">Capital FM, Kenya</div>'+
						'<div class="articlesubscribe">Subscribe</div>'+
						'<div class="articletime">1 hour ago</div>'+
					'</div>'+
					'<div class="articletext">people insist they want to see news text, finish reading this before they realise I said nothing. By they I mean you.</div>'+
					'<div class="articlereadmore">Read more</div>'+
				'</div>';
