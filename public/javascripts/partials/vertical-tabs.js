$(document).ready(function(){

	// Refills Component: Vertical Tabs
	if($('.vertical-tabs-container').length){
		$(".js-vertical-tab-content").hide();
		$(".js-vertical-tab-content:first").show();

		/* if in tab mode */

		$(".js-vertical-tab").click(function(event) {
		event.preventDefault();

		$(".js-vertical-tab-content").hide();
		var activeTab = $(this).attr("rel");
		$("#"+activeTab).show();

		$(".js-vertical-tab").removeClass("is-active");
		$(this).addClass("is-active");

		$(".js-vertical-tab-accordion-heading").removeClass("is-active");
		$(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
		});

		/* if in accordion mode */

		$(".js-vertical-tab-accordion-heading").click(function(event) {
			event.preventDefault();

			$(".js-vertical-tab-content").hide();
			var accordionActiveTab = $(this).attr("rel");
			$("#"+accordionActiveTab).show();

			$(".js-vertical-tab-accordion-heading").removeClass("is-active");
			$(this).addClass("is-active");

			$(".js-vertical-tab").removeClass("is-active");
			$(".js-vertical-tab[rel^='"+accordionActiveTab+"']").addClass("is-active");
		});
	}
});