const clickutils = (function () {
    return {
        click: click
    };
    function click(element, button, callback, isLoop = true) {
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
                callback(e);
            }
            element.removeEventListener('mouseup', mouseUp);
            element.removeEventListener('mousedown', mouseDown);
            if (isLoop) {
                click(element, button, callback, isLoop);
            }
        }
        element.addEventListener("mouseup", mouseUp);
        return {
            removeLoop: () => {
                element.removeEventListener('mouseup', mouseUp);
                element.removeEventListener('mousedown', mouseDown);
                isLoop = false;
            },
        }
    }
}());