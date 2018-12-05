(function() {
   var vm;
   var FeatureFlags = {
      OtherSprint: false
   };

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

   $.getJSON("./stories.json", function(sprintData) {
      vm = new Vue({
         el: "#app",
         data: $.extend({}, sprintData, {
            FeatureFlags: FeatureFlags
         })
      });

      $("footer").click(function() {
         $(".img-yoda").fadeToggle("slow", function() {
            $(".complete").fadeToggle("slow");
         });
      });

      if (FeatureFlags.OtherSprint) {
         $(".other-sprint").click(function() {
            var $this = $(this);

            if ($this.data("sprint") === 1) {
               $this.data("sprint", 2);
               $this.html("This Sprint");

               $.getJSON("./other_sprint_stories.json", function(sprintData) {
                  vm.release = sprintData.release;
                  vm.stories = sprintData.stories;
               });
            }
            else {
               document.location.reload();
            }
         });
      }
   });
})();
