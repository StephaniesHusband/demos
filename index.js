$(document).ready(function() {
   $(".story").one("click", function() {
      $(this).addClass("done").find("a").addClass("done");
   });

   $(".story a").on("click", function(ev) {
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
