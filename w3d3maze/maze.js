$(function() {
    let start=false;
    let lost=false;
    $("#start").click(function(){
      start=true;
      lost=false;
      $(".boundary").removeClass("youlose");
      $(".boundary").mouseenter(function(){
            lost=true;
            $(".boundary").addClass("youlose");
      })
      $("#maze").mouseleave(function(){
          $(".boundary").addClass("youlose");    
      })
      $("#end").mouseover(function(){
          if(start && !lost){
          alert("you won the game!");
          location.reload(true);
          preventDefault(); 
          }
    })
    })   
})
