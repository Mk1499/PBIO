// control carousel sliding time
$(document).ready(function()
{
    
    $('.carousel').carousel(
        {
        interval : 3000 
    });
    


//show color option div when click to the gear 

$(".gear-check").click(function()
                            
        {
    $(".color-option").fadeToggle();
        
     });
    
    // change theme color on click 
    
    var ColorLi =  $(".color-option ul li") ;
   ColorLi
    .eq(0).css("backgroundColor","#c9302c").end()
    .eq(1).css("backgroundColor","#b1c92c").end()
    .eq(2).css("backgroundColor","#2a73ce").end()
    .eq(3).css("backgroundColor","#ce2aab").end()
    
    
    ColorLi.click(function(){
        //console.log($(this).attr("data-value")) ;
    $("link[href*='theme']").attr("href",$(this).attr("data-value")) ; /* star "*" for search for 'theme' in attr href in all link tags */ 
        }
    
    );
    
    //start scroll top btn 
    
    
    var scroll_btn = $("#scroll-top") ;
    
    $(window).scroll(
        
        function(){
        
        //console.log($(this).scrollTop())
    
            if($(this).scrollTop() >=700){
       
                scroll_btn.show() ;}
        else {
            scroll_btn.hide() ;
        }
      }) ;
    
    
    //click on btn to scroll top
    
    scroll_btn.click(function(){
     
        $("html,body").animate({scrollTop:0},1000) ;
    });
    
});
// Loading Elements


$(window).on('load', function() { 
 $("body").css("overflow","auto");
$(".loading-overlay .sk-folding-cube").fadeOut(2000, 

function(){

    $(this).parent().fadeOut(2000, 
                         function(){
      $(this).remove() ;  
    }
                         )
}
                             ) ;
   

$(".loading-overlay h1").fadeOut(2000);

});



