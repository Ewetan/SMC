$(document).ready(function() {
		$("#counselling_section").hide();
		$("#photography_section").hide();
		$("#event_planning_section").hide();
		$("#clothing_section").hide();
		$("#graphics_section").hide();
  	$("#theSelect").change(function() {
    if ($(this).val() === "Counselling") {
      $("#counselling_section").show();
      $("#photography_section").hide();
      $("#event_planning_section").hide();
      $("#clothing_section").hide();
      $("#graphics_section").hide();
    } else if ($(this).val() === "Photography") {
      $("#photography_section").show();
      $("#counselling_section").hide();
      $("#video_coverage_section").hide();
      $("#event_planning_section").hide();
      $("#clothing_section").hide();
      $("#graphics_section").hide();
    } else if ($(this).val() === "Event") {
      $("#event_planning_section").show();
      $("#counselling_section").hide();
      $("#photography_section").hide();
      $("#clothing_section").hide();
      $("#graphics_section").hide();
    } else if ($(this).val() === "Clothings") {
      $("#counselling_section").hide();
      $("#photography_section").hide();
      $("#event_planning_section").hide();
      $("#clothing_section").show();
      $("#graphics_section").hide();
    } else if ($(this).val() === "Graphics") {
      $("#counselling_section").hide();
      $("#photography_section").hide();
      $("#event_planning_section").hide();
      $("#clothing_section").hide();
      $("#graphics_section").show();
    }
  });
  $("#theSelect").trigger("change");
});
