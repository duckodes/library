const contextmenuutils = (function () {
    return {
        init: init,
        addItem: addItem,
        remove: remove
    };
    var active = false;
    function init(parent, callback, toClickPoint = false, target = null) {
        if (!active) {
            const base = document.createElement("div");
            base.id = "ins-contextmenu-base";

            const contextmenu = document.createElement("div");
            contextmenu.id = "ins-contextmenu";

            parent.appendChild(base);
            parent.appendChild(contextmenu);

            callback(base, contextmenu);

            window.onclick = function (e) {
                if (e.target === base) {
                    remove();
                }
                if (toClickPoint) {
                    contextmenu.style.left = (e.clientX) + "px";
                    contextmenu.style.top = (e.clientY) + "px";
                }
            }
            if (target && !toClickPoint) {
                contextmenu.style.left = target.getBoundingClientRect().x + "px";
                contextmenu.style.top = (target.clientHeight) + target.getBoundingClientRect().y + "px";
            }

            active = true;
        }
        else {
            remove();
        }
    }
    function addItem(content, callback) {
        if (active) {
            const contextmenu = document.getElementById("ins-contextmenu");
            const item = document.createElement("div");
            item.textContent = content;
            contextmenu.appendChild(item);

            callback(item);
        }
    }
    function remove() {
        const base = document.getElementById("ins-contextmenu-base");
        const menu = document.getElementById("ins-contextmenu");
        if (base) {
            base.remove();
        }
        if (menu) {
            menu.remove();
        }
        active = false;
    }
}());