var app = angular.module("app",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){ 

	$urlRouterProvider.otherwise("index")

	$stateProvider
	.state('root', {
		url: '',
		abstract: true,
		views: {
			"features-view": { templateUrl: "features-panels" },
			"pricing-view": { templateUrl: "pricing-panels" }
		}
	})

	.state('root.index', {
		url: '/',
		views: {
			"features-view@": { templateUrl: "features-panels" },
			"pricing-view@": { templateUrl: "pricing-panels" }
		}
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
		}
	})

	.state('root.feature-details-01', {
		url: "/feature-01",
		views: {
			"features-view@": { templateUrl: "feature-details-01" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#features', options );
		}
	})

	.state('root.feature-details-02', {
		url: "/feature-02",
		views: {
			"features-view@": { templateUrl: "feature-details-02" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#features', options );
		}
	})

	.state('root.feature-details-03', {
		url: "/feature-03",
		views: {
			"features-view@": { templateUrl: "feature-details-03" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#features', options );
		}
	})

	.state('root.feature-details-04', {
		url: "/feature-04",
		views: {
			"features-view@": { templateUrl: "feature-details-04" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#features', options );
		}
	})

	.state('root.pricing', {
		url: "/pricing",
		views: {
			"pricing-view@": { templateUrl: "pricing-panels" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		}
	})

	.state('root.pricing-details-01', {
		url: "/pricing-01",
		views: {
			"pricing-view@": { templateUrl: "pricing-details-01" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		}
	})

	.state('root.pricing-details-02', {
		url: "/pricing-02",
		views: {
			"pricing-view@": { templateUrl: "pricing-details-02" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		}
	})

	.state('root.pricing-details-03', {
		url: "/pricing-03",
		views: {
			"pricing-view@": { templateUrl: "pricing-details-03" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		}
	})

	.state('root.pricing-details-04', {
		url: "/pricing-04",
		views: {
			"pricing-view@": { templateUrl: "pricing-details-04" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		}
	})

	.state('root.pricing-details-05', {
		url: "/pricing-05",
		views: {
			"pricing-view@": { templateUrl: "pricing-details-05" }
		},
		onEnter: function(){
			var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			smoothScroll.animateScroll( null, '#pricing', options );
		}
	})
});