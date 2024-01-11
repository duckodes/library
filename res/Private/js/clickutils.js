const clickutils = (function () {
    return {
        click: click,
        nClick: nClick
    };
    function click(element, button, func) {
        let start = false;
        element.addEventListener("mousedown", (e) => {
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
        });
        function mouseUp(e) {
            if (start) {
                func(e);
            }
            element.removeEventListener('mouseup', mouseUp);
        }
        element.addEventListener("mouseup", mouseUp);
        element.addEventListener("touchstart", (e) => {
            start = true;
            function touchEnd() {
                start = false;
                window.removeEventListener('touchmove', touchEnd);
            }
            window.addEventListener('touchmove', touchEnd);
        });
        function touchEnd(e) {
            if (start) {
                func(e);
            }
            element.removeEventListener('touchend', touchEnd);
        }
        element.addEventListener("touchend", touchEnd);
    }
    function nClick(element, button) {
        return new Promise((resolve) => {
            let start = false;
            element.addEventListener("mousedown", (e) => {
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
            });
            function mouseUp(e) {
                if (start) {
                    resolve(e);
                }
                element.removeEventListener('mouseup', mouseUp);
            }
            element.addEventListener("mouseup", mouseUp);
            element.addEventListener("touchstart", () => {
                start = true;
                function touchEnd() {
                    start = false;
                    window.removeEventListener('touchmove', touchEnd);
                }
                window.addEventListener('touchmove', touchEnd);
            });
            function touchEnd(e) {
                if (start) {
                    resolve(e);
                }
                element.removeEventListener('touchend', touchEnd);
            }
            element.addEventListener("touchend", touchEnd);
        });
    }
}());