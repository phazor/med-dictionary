/*var someDiv = document.createElement('div');
someDiv.id = 'hoverText';
document.body.appendChild(someDiv);
var $someDiv = $('#hoverText');
$someDiv.text('TEST DIV');*/
var medDefs = {
	aaa: 'apply to affected area',
	iv: 'intravenous',
	mg: 'milligram',
	tds: 'three times a day',
	ts: 'tincture',
	troche: 'lozenge',
	sos: 'if there is a need',
	qqh: 'every four hours',
	qs: 'a sufficient quantity',
	sa: 'use your judgement',
	qad: 'every other day',
	qam: 'every day before noon',
	qds: 'four times a day',
	qpm: 'every day after noon or every evening',
	qu: 'every hour',
	qhs: 'every night at bedtime',
	prn: 'as required',
	aa: 'of each',
	AAA: 'apply to affected area',
	agit: 'stir/shake',
	amp: 'ampule',
	amt: 'amount',
	aq: 'water'
};

$('body').attr('ng-app', 'plunker');
$('body').attr('ng-controller', 'MainCtrl');
var $someDiv = $('<div click-anywhere-but-here="clickedHere()" dbl-click-anywhere-but-here="clickedSomewhereElse()" class="modalWindow" ng-app>' + 
						//'<input ng-model="testInput" placeholder="input text here">' +
						'<div id="abbrevName">A</div>' +
						'<div>' +
							'<ul class="remove-list-styling">' +
								'<li ng-repeat="abbrev in currentAbbrev" class="remove-list-styling">' +
									'<span>{{abbrev.aValue}}</span>' +
								'</li>' +
							'</ul>' +
						'</div>' +
				'</div>');
$('body').append($someDiv);
$someDiv.hide();

var $abbrevName = $('#abbrevName');

// $('body').on('dblclick', '*', function(event) {
	// checkSelectionChanged();
	// event.stopPropagation();
// });

// $('body').after('click', '*', function(event) {
	// checkselectionchanged();
	// event.stoppropagation();
// });

// $('body').on('click', '*', function(event) {
	// checkselectionchanged();
	// event.stoppropagation();
// });

var mousePos;
$(document).mousemove(function (e) {
    mousePos = {left: e.pageX + 20, top: e.pageY + 20};
});

var selectedText = '';
function getSelectedText(){ 
    if(window.getSelection){ 
        return window.getSelection().toString(); 
    } 
    else if(document.getSelection){ 
        return document.getSelection(); 
    } 
    else if(document.selection){ 
        return document.selection.createRange().text; 
    } 
}

function checkSelectionChanged() {
    var current = $.trim(getSelectedText());
    if(current != selectedText) {
        selectedText = current;
        if(selectedText != '' && (selectedText in medDefs)) {
			$abbrevName.text(selectedText + '  :    ' + medDefs[selectedText]);
			$someDiv.show();
			$someDiv.offset(mousePos);
        } else {
			$someDiv.hide();
        }
    }
}

