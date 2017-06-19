$(document).ready(function() {
   //$("body").scrollTop(0);

   /*
   var getRandom = function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }; 
   var src = "url('img/rs" + getRandom(1,6) + ".jpg')"

   $(".theFrame").css("background-image", src);
   */

   $(".story").one("click", function() {
      $(this).addClass("done");
   });
});
