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
      var me = this;

      $(this).hide("explode", {
         pieces: 100,
         complete: function() {
            $(me)
               .show("explode", { pieces: 100 })
               .addClass("done");

            // Can't trigger the click event as it will create loop
            window.open($(me).find("a").first().attr("href"), "_blank");
         }
      });
   });
});
