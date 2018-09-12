(function() {
   var vm;

   Vue.component("story-card", {
      template: "#story-card",
      props: [ "story" ],
      data: function() {
         return {
            isDone: false,
         };
      },
      computed: {
         lowerCaseDescription() {
            return this.story.description.toLowerCase();
         }
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

      $(".img-yoda").click(function() {
         $(".complete").toggle();
      });
   });
})();
