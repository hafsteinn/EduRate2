'use strict';


angular.module('EduRateApp').directive('myDir', function() {
	return {
		restrict: 'E',
		scope: {
			title: '@',
			results: '@',
			coursetextquestions: '@'
		},
		template:
			//driective markup
			'<h2>{{title}}</h2>'+
			'<section class="courseTextQuestions">'+
				'<section ng-repeat="question in coursetextquestions">'+
				'<a>question.TitleIS</a>'+
				'</section>'+
			'</section>'
		replace: true,
		transclude: false,
		link: function (scope, element, attrs) {

			// Directive logic
			element.css('background', 'yellow');

		}
	};
});