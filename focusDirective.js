angular.module('myApp').directive('focusAble', function () {
    return {
        //add focus-able as attribute to parent element 
        //add focus-toggle='[target-selector]' to focus toggle button 
        restrict: 'A',
        scope: {},
        link: function (scope, element, attrs) {

            var toggleFocusMode = function (e) {
                var target = $($(e.currentTarget).attr('focus-toggle'));
                //collect original height width of focusing element
                var h = target.height();
                var w = target.width();

                if (target.hasClass('focusing-item')) {
                    $(target).removeClass('focusing-item');
                    $(target).css('height', '');
                    $(target).css('width', '');
                    background.removeClass('on');
                }
                else {
                    $(target).addClass('focusing-item');
                    $(target).css('height', h);
                    $(target).css('width', w);
                    background.addClass('on');
                }
                
            }

            //add blank pane to hide other element when focus
            var background = $("<div class='focus-background'></div>");
            $(element).append(background);
            //init bind event to focus-toggle button 
            var focusAbleList = $(element).find('[focus-toggle]');
            for (var i = 0; i < focusAbleList.length; i++) {
                $(focusAbleList[i]).on('click', toggleFocusMode)
            }
        }
    };
});