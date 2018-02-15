(function() {
   var vm;

   Vue.component("story-card", {
      template: "#story-card",
      props: [ "story" ],
      data: function() {
         return {
            isDone: false
         };
      },
      methods: {
         markDone: function() {
            this.isDone = !this.isDone;
         }
      }
   });

   $.getJSON("./stories.json", function(storiesData) {
      vm = new Vue({
         el: "#app",
         data: storiesData
      });
   });

   /*
   $(".story a, .story li").on("click", function(ev) {
      $(this).addClass("done");

      var $story = $(this).parents(".story");

      if ($story.find("a:not(.done)").length === 0) {
         $story.addClass("done");
      }

      ev.stopPropagation();
   });

   $(".img-yoda").click(function() {
      $(".complete").toggle();
   });
   */
})();
