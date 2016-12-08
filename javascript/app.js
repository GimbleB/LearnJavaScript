/**
 * Created by davem on 27/11/2016.
 */
'use strict';
var learnjavascript={};

learnjavascript.questionView=function(problemNumber){
    var title='Question #'+problemNumber +' Arriving soon!!!';
    return $('<div class="question-view">').text(title);
};


    learnjavascript.showView = function(hash){
        var routes = {
            '#question-1': learnjavascript.questionView
        };
        var hashParts = hash.split('-');
        var viewFn = routes[hashParts[0]];
        if (viewFn) {
            $('.view-container').empty().append(viewFn(hashParts[1]));
        }
    };
