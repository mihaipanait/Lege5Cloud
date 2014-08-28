var app = angular.module("app",['ui.router', 'ct.ui.router.extras']);

app.config(function($stateProvider, $urlRouterProvider, $stickyStateProvider){ 
	$stickyStateProvider.enableDebug(true);

	$urlRouterProvider.otherwise("/")

	$stateProvider
	.state('root', {
		url: "/",
		views: {
			"features-view@": { templateUrl: "features-panels" },
			"pricing-view@": { templateUrl: "pricing-panels" }
		},
		//deepStateRedirect: true,
    	//sticky: true
	})

	.state('root.features', {
		url: "/features",
		views: {
			"features-view@": { 
				templateUrl: "features-panels"
			}
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#features', options );
		},
		sticky: true
	})

	.state('root.feature-details-01', {
		url: "/feature-01",
		views: {
			"features-details-view@": { templateUrl: "feature-details-01" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#features', options );
		},
		sticky: true
	})

	.state('root.feature-details-02', {
		url: "/feature-02",
		views: {
			"features-details-view@": { templateUrl: "feature-details-02" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#features', options );
		},
		sticky: true
	})

	.state('root.feature-details-03', {
		url: "/feature-03",
		views: {
			"features-details-view@": { templateUrl: "feature-details-03" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#features', options );
		},
		sticky: true
	})

	.state('root.feature-details-04', {
		url: "/feature-04",
		views: {
			"features-details-view@": { templateUrl: "feature-details-04" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#features', options );
		},
		sticky: true
	})

	.state('root.pricing', {
		url: "/pricing",
		views: {
			"pricing-view@": { templateUrl: "pricing-panels" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		},
		sticky: true
	})

	.state('root.pricing-details-01', {
		url: "/pricing-01",
		views: {
			"pricing-details-view@": { templateUrl: "pricing-details-01" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		},
		sticky: true
	})

	.state('root.pricing-details-02', {
		url: "/pricing-02",
		views: {
			"pricing-details-view@": { templateUrl: "pricing-details-02" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		},
		sticky: true
	})

	.state('root.pricing-details-03', {
		url: "/pricing-03",
		views: {
			"pricing-details-view@": { templateUrl: "pricing-details-03" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		},
		sticky: true
	})

	.state('root.pricing-details-04', {
		url: "/pricing-04",
		views: {
			"pricing-details-view@": { templateUrl: "pricing-details-04" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		},
		sticky: true
	})

	.state('root.pricing-details-05', {
		url: "/pricing-05",
		views: {
			"pricing-details-view@": { templateUrl: "pricing-details-05" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		},
		sticky: true
	})
});