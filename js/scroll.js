var btt = document.getElementById('top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if(docHeight != 0){
  offset = docHeight / 10 ;
}

window.addEventListener('scroll', function(){
  scrollPos = docElem.scrollTop;
  if(scrollPos > offset){
    btt.className = 'visible';
  }
  else{
    btt.className = ' ';
  }
});

btt.addEventListener('click', function(ev){
  ev.preventDefault();
  scrollToTop();
});

function scrollToTop(){
  var scrollInterval = setInterval(function(){
    if(scrollPos != 0){
      window.scrollBy(0,-30);
    }
    else{
      clearInterval(scrollInterval);
    }
  }, 15);
}