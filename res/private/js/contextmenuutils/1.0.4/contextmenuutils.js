const contextmenuutils = (function () {
    return {
        init: init
    }
    function init(parent, target = null) {
        const base = document.createElement("div");
        base.id = "ins-contextmenu-base";

        const contextmenu = document.createElement("div");
        contextmenu.id = "ins-contextmenu";

        parent.appendChild(base);
        parent.appendChild(contextmenu);
        const addItem = (content) => {
            const item = document.createElement("div");
            item.textContent = content;
            contextmenu.appendChild(item);

            return item;
        }
        const remove = () => {
            base.remove();
            contextmenu.remove();
        }

        base.onclick = (e) => {
            if (e.target === base) {
                remove();
            }
            if (!target) {
                contextmenu.style.left = (e.clientX) + "px";
                contextmenu.style.top = (e.clientY) + "px";
            }
        }
        if (target) {
            contextmenu.style.left = target.getBoundingClientRect().x + "px";
            contextmenu.style.top = (target.clientHeight) + target.getBoundingClientRect().y + "px";
        }
        return {
            base,
            contextmenu,
            addItem,
            remove
        }
    }
}());