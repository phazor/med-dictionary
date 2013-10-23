var clicker = angular.module('plunker', []);

function hideDictionary() {
	$someDiv.hide();
}

clicker.controller('MainCtrl', function($scope) {
	$scope.clickedHere = function(){
		if ($someDiv.is(':visible')) {
			var _scope = $scope;
			setTimeout(function() {
				//hideDictionary();
				_scope.$emit('hideDictionary');
			}, 0);
		}
	};
	$scope.clickedSomewhereElse = function(){
		var selectedText = $.trim(getSelectedText());
		if(selectedText != '' && (selectedText in medDefs)) {
			$scope.currentAbbrev = [];
			angular.forEach($scope.abbrevs, function(abbrev) {
				if (abbrev.key === selectedText) {
					$scope.currentAbbrev.push(abbrev);
				}
			});
			
			$abbrevName.text(selectedText + '  :');
			$someDiv.show();
			$someDiv.offset(mousePos);
		} else {
			$someDiv.hide();
		}
	};
  
	$scope.abbrevs = [
		{key:'AAA', aValue:'apply to affected area'},
		{key:'AAA', aValue:'Abdominal Aortic Aneurysm'}];
		
	$scope.currentAbbrev = [];
	
	$scope.$on('hideDictionary', function() {
		$someDiv.hide();
	});
	
	$scope.updateAbbrevs = function() {
	}
});

clicker.directive('dblClickAnywhereButHere', function($document){
  return {
    restrict: 'A',
    link: function(scope, elem, attr, ctrl) {
      elem.bind('dblclick', function(e) {
        e.stopPropagation();
      });
      $document.bind('dblclick', function() {
        scope.$apply(attr.dblClickAnywhereButHere);
      })
    }
  }
})

clicker.directive('clickAnywhereButHere', function($document){
  return {
    restrict: 'A',
    link: function(scope, elem, attr, ctrl) {
      elem.bind('click', function(e) {
        e.stopPropagation();
      });
      $document.bind('click', function() {
        scope.$apply(attr.clickAnywhereButHere);
      })
    }
  }
})