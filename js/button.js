$(document).ready(function(){
  $("#index_article>div").hide();
  $("#index_article>div").slice(0,10).show();
})

var i = 0;

function more(){
  if(i == 0){
  $("#index_article>div").slice(10,20).show();
  $(".index_section").css({'height':'1464.22px'});
  i++;
  }
  else if(i == 1){
    $("#index_article>div").slice(20,30).show();
    $(".index_section").css({'height':'1527.328px'});
    i++;
    }
}