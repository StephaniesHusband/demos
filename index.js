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

   $(".story a").on("click", function() {
      $(this).addClass("done");

      var $story = $(this).parents(".story");

      if ($story.find("a:not(.done)").length === 0) {
         $story.addClass("done");
      }
   });
});
