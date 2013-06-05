
var selectedCat = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var selectedCatName = ["What's new", "Most popular", "Business", "Politics", "Arts & Entertainment", "Technology", false, false, false, false, false, false, false, false, false];

function addCat(num){
	if(selectedCat[num-1]==false){
		txt = $('#cats'+num+' .catstext h4').html();
		$('#leftpan div').prepend('<span id="selectedCat'+num+'">'+txt+'<h1 title="Remove" onclick="removeCat('+num+');">X</h1></span>');
		selectedCat[num-1]=true;
	}
	
}

function removeCat(id){
	$('#selectedCat'+id).hide();
	selectedCat[id-1]=false;
}
