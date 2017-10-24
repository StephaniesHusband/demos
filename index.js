$(document).ready(function() {
   $(".story").on("click", function() {
      $(this).toggleClass("done").find("a").toggleClass("done");
   });

   $(".story a, .story li").on("click", function(ev) {
      $(this).addClass("done");

      var $story = $(this).parents(".story");

      if ($story.find("a:not(.done)").length === 0) {
         $story.addClass("done");
      }

      ev.stopPropagation();
   });

   $(".img--yoda").click(function() {
      $(".complete").toggle();
   });
});
