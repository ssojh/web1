var Links = {
  setColor:function (color){
  var alist =document.querySelectorAll('a');
  var i=0;
  while(i<alist.length){
    alist[i].style.color=color;
    i=i+1;
  }
//$('a').css('color',color); //jquery를 이용한 제어. 반복문 기능을 대신한다.
 }
}
var Body={
  setColor : function (color){
    document.querySelector('body').style.color=color;
    //$('body').css('color', color);
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
function nightDayHandler(self){

  if (self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';
    Links.setColor('powderblue');
    }
  else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';
    Links.setColor('black');
  }
}
