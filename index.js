var yes = $(".yesbtn");
var no = $(".nobtn");
var h1 = $("h1");
var img = $(".mainpics");
var window = $(window);
var txtarr= ["What,Why!!! Please say Yes!!!","C'mon!!! Say Yes...","You clicked No again..? Click Yes" , "Don't test my patience Babe, Say Yes...", "Are you kidding me? Say Yes" , "Babe... Say Yes right now..! Dare to say No!!!" , "Say No if you can now...🥺👉👈" ];
var imgarr = ["https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZmM2xxN3Z4NWY5Ym5wcGwxdHExYzM2aW1hODFma21zdDZjdnIwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ffD7lwEGQDKPw2TIdp/giphy.gif" , 
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGE3cHBqNzQ1eTVseHVnc2xndWVtdXo3aHdicGUxZG5kcXUyaXlkbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HD5pOtA7dZ0gnl2TxQ/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3pwbHU5eWZlYWF5cHA5eWQ1c2hwZTBvZ3FybG1pdnlxYXNwaWVxayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UgVz7050FCx7bNksY9/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3pqcGFlZWZqaTdxaW5ldGhlbHVqZjZ5NjNhNHlsN3B4anRnYXJoNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l396JqyezEhgjN6oM/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXNkZW8wdm04eWp0Y2pycWhmOTFzaGQwdnFhandrdWppbG1mbGlncyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8FDe0XbtP3U8BMxdgP/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmk0bGd1ZXFxOWQ3MmJuYzMwcG9jb2E3NGpzeHNoY285aTZzdjcycyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zPXcZshGkzR3rVnLca/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXltOGJ5YnQxaG5wYnB1dzQxeXh3OXVmZzFwaXdiejMxeXhlZDJlNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JQmIPjbKlGopOyRTM6/giphy.gif"
];
var audio = new Audio("/kadhalar_dhinam.mp3");

$("document").ready(()=> {

    yes.click(()=> {
        $("button").css("visibility","hidden");
        img.attr("src" , "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmlzdG5tbGVvZmQ1cHY2Ymg0MHNqdGp3bHZiZWh3MGs3aDY3aHB3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pGjHxHD8LUFMBQGCiL/giphy.gif");
        $(".fireworks").css("visibility","visible");
        h1.text("Happy Valentine's Day My Dear Love");
        h1.addClass("bigsize");
        $("button").css("position","absolute");
        $("footer").css("visibility","visible");
        audio.play();
     });

    var clicks=-1;

    no.click(()=> {
        clicks++;
       if(clicks<=6) {
       if(clicks === 6) { 
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
               no.css("visibility","hidden");
               } else {
            no.mouseover(() => {
                var x = Math.random() * (window.innerWidth - no.outerWidth()) + 'px'; 
                var y = Math.random() * (window.innerHeight - no.outerHeight()) + 'px'; 
                     no.css("position","absolute");
                     no.css("top", y  );
                     no.css("left" , x )
                   });
           }
        }
        img.attr("src",imgarr[clicks]);
        h1.text(txtarr[clicks]);
        h1.css("font-weight", "400");
        yes.addClass("pressed");
        setTimeout(()=>{
          yes.removeClass("pressed");
        } , 350);
       } else {
        alert("Stop breaking No button. Move your cursor a bit... Push your luck now..🤪 ");
       }
    
      
    });
});




