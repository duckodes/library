const clickutils = (function () {
    return {
        click: click,
        nClick: nClick,
        touch: touch,
        nTouch: nTouch
    };
    function click(element, button, func) {
        let start = false;
        function mouseDown(e) {
            if (e.button === button) {
                start = true;
            } else {
                start = false;
            }
            function mouseUp() {
                start = false;
                window.removeEventListener('mouseup', mouseUp);
            }
            window.addEventListener('mouseup', mouseUp);
        }
        element.addEventListener("mousedown", mouseDown);
        function mouseUp(e) {
            if (start) {
                func(e);
            }
            element.removeEventListener('mouseup', mouseUp);
            element.removeEventListener('mousedown', mouseDown);
        }
        element.addEventListener("mouseup", mouseUp);
    }
    function nClick(element, button) {
        return new Promise((resolve) => {
            let start = false;
            function mouseDown(e) {
                if (e.button === button) {
                    start = true;
                } else {
                    start = false;
                }
                function mouseUp() {
                    start = false;
                    window.removeEventListener('mouseup', mouseUp);
                }
                window.addEventListener('mouseup', mouseUp);
            }
            element.addEventListener("mousedown", mouseDown);
            function mouseUp(e) {
                if (start) {
                    resolve(e);
                }
                element.removeEventListener('mouseup', mouseUp);
                element.removeEventListener('mousedown', mouseDown);
            }
            element.addEventListener("mouseup", mouseUp);
        });
    }
    function touch(element, func) {
        let start = false;
        function touchStart() {
            start = true;
            function touchEnd() {
                start = false;
                window.removeEventListener('touchmove', touchEnd);
            }
            window.addEventListener('touchmove', touchEnd);
        }
        element.addEventListener("touchstart", touchStart);
        function touchEnd(e) {
            if (start) {
                func(e);
            }
            element.removeEventListener('touchend', touchEnd);
            element.removeEventListener("touchstart", touchStart);
        }
        element.addEventListener("touchend", touchEnd);
    }
    function nTouch(element) {
        return new Promise((resolve) => {
            let start = false;
            function touchStart() {
                start = true;
                function touchEnd() {
                    start = false;
                    window.removeEventListener('touchmove', touchEnd);
                }
                window.addEventListener('touchmove', touchEnd);
            }
            element.addEventListener("touchstart", touchStart);
            function touchEnd(e) {
                if (start) {
                    resolve(e);
                }
                element.removeEventListener('touchend', touchEnd);
                element.removeEventListener('touchstart', touchStart);
            }
            element.addEventListener("touchend", touchEnd);
        });
    }
}());