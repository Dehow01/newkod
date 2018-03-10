window.onload=function(){
  
    var texts = [
        "1Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку буквоград образ однажды родного вопроса она скатился единственное мир семь. Свой родного своих точках. Необходимыми переписывается но своих ее?",
         "2Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку буквоград образ однажды родного вопроса она скатился единственное мир семь. Свой родного своих точках. Необходимыми переписывается но своих ее?", 
         "3",
        "4"];
    

        var btn1 = document.querySelectorAll('#btn1');
        var plaseText = document.querySelector(".textP");
        var window = document.querySelector(".modalWindow");
        var overplay = document.querySelector("#overlay");
       
        for(var i=0;i<btn1.length;i++){
           
            btn1[i].onclick=btnClick;
        }
        
        var text = document.querySelector(".textP");
      /*  var zagolovok = document.querySelector(".Zagolovok");
        
        var window = document.querySelector(".modalWindow");
        var overplay = document.querySelector("#overlay");
        
        */
        function btnClick(){
            
           var index = parseInt(this.name)-1;
           plaseText.innerHTML=texts[index];
           StylerBlock();


           function StylerBlock(){
            window.style.display = "block";
            overplay.style.display="block";
            document.querySelector("#pClose").style.display="block";
            }

            overplay.onclick=closer;
            function closer(){
            window.style.display = "none";
            overplay.style.display="none";
             }  
        }
       
            
            
        
};
$(document).ready(function(){
    $('#blya').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});



