/**
 * [Reference]
 * 
 * []()
 * 
 * @version 1.1.0
 */
var scrollviewutils = (function () {
    return {
        ito: ito,
        cto: cto,
        sie: sie,
        win: win
    };
    function ito(id) {
        document.getElementById(id).scrollIntoView();
    }
    function cto(c) {
        document.querySelector(c).scrollIntoView();
    }
    function sie(id) {
        const element = document.querySelector(id);

        if (!element) {
            return false;
        }

        const windowHeight = window.innerHeight;
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top;
        const elementBottom = elementRect.bottom;

        const isPartiallyInView = (elementTop <= windowHeight && elementBottom >= 0);

        return isPartiallyInView;
    }
    function win() {
        var getEventListener = getEventListeners();
        return{
            getEventListener: getEventListener
        };
        function getEventListeners() {
            const scrollListeners = getEventListeners(window).scroll;
    
            if (scrollListeners && scrollListeners.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}());