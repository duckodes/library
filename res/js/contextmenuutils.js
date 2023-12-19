var contextmenuutils = (function () {
    return {
        init: init,
        addItem: addItem,
        remove: remove
    };
    var atv = false;
    /** @param fc ( b, c ) */
    function init(p, fc) {
        if (!atv) {
            var b = document.createElement("div");
            b.id = "ins-contextmenu-base";

            var c = document.createElement("div");
            c.id = "ins-contextmenu";
            c.style.left = (e.clientX) + "px";
            c.style.top = (e.clientY) + "px";

            p.appendChild(b);
            p.appendChild(c);

            fc(b, c);

            window.onclick = function (e) {
                if (e.target === b) {
                    remove();
                }
            }

            atv = true;
        }
        else {
            remove();
        }
    }
    /** @param fc ( c ) */
    function addItem(t, fc) {
        if (atv) {
            var contextmenu = document.getElementById("ins-contextmenu");
            var c = document.createElement("div");
            c.innerText = t;
            contextmenu.appendChild(c);

            fc(c);
        }
    }
    function remove() {
        var b = document.getElementById("ins-contextmenu-base");
        var c = document.getElementById("ins-contextmenu");
        b.remove();
        c.remove();
        atv = false;
    }
}());