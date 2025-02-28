const contextmenuutils = (function () {
    return {
        init: init,
        addItem: addItem,
        remove: remove
    }
    function init(parent, callback, target = null) {
        const base = document.createElement("div");
        base.id = "ins-contextmenu-base";

        const contextmenu = document.createElement("div");
        contextmenu.id = "ins-contextmenu";

        parent.appendChild(base);
        parent.appendChild(contextmenu);

        callback(base, contextmenu);

        window.onclick = (e) => {
            if (e.target === base) {
                remove();
            }
            if (target === null) {
                contextmenu.style.left = (e.clientX) + "px";
                contextmenu.style.top = (e.clientY) + "px";
            }
        }
        if (target && !toClickPoint) {
            contextmenu.style.left = target.getBoundingClientRect().x + "px";
            contextmenu.style.top = (target.clientHeight) + target.getBoundingClientRect().y + "px";
        }
    }
    function addItem(contextmenu, content, callback) {
        const item = document.createElement("div");
        item.textContent = content;
        contextmenu.appendChild(item);

        callback(item);
    }
    function remove(base, menu) {
        if (base) {
            base.remove();
        }
        if (menu) {
            menu.remove();
        }
    }
}());