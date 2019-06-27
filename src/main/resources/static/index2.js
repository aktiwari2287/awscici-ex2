function load(from=40){
    $.ajax({
        url: `https://randomuser.me/api/?results=${from}`,
        dataType: 'json',
        success: function(data) {
         // console.log(data.results);
    
          //localStorage.setItem('users',data.results);
         
          for(var i=0;i<data.results.length;i++){
              let {picture}=data.results[i];
              console.log(picture.large);
    
              var innerDiv=`<div class='grid-item container'>
              <img src=${picture.large} class='profilePic zoom'>
              </img>
            </div>`;   
            document.getElementById('main').innerHTML+=innerDiv;
              
          }
        }
      });
}
load();

function* indexGenerator(){
	let i=20;
	while(true){
		yield i;
		i+=20;
	}
}

  $(window).scroll(function() {
     let it=indexGenerator();
      let index=it.next().value;
    if(Math.ceil($(window).scrollTop() + $(window).height())=== $(document).height()) {
         load(index);
    }
});