const contextmenuutils = (function () {
    return {
        init: init
    }
    function init(parent, target = null) {
        const base = document.createElement("div");
        base.className = "contextmenu-base";

        const menu = document.createElement("div");
        menu.className = "contextmenu-menu";

        parent.appendChild(base);
        parent.appendChild(menu);
        const addItem = (content) => {
            const item = document.createElement("div");
            item.textContent = content;
            menu.appendChild(item);

            return item;
        }
        const addLine = () => {
            const line = document.createElement("hr");
            menu.appendChild(line);
            return line;
        }
        const remove = () => {
            base.remove();
            menu.remove();
        }

        window.onclick = (e) => {
            if (e.target === base) {
                remove();
            }
            if (!target) {
                menu.style.left = (e.clientX) + "px";
                menu.style.top = (e.clientY) + "px";
            }
        }
        if (target) {
            if (!devicecheck.mobileAndTabletCheck()) {
                menu.style.left = target.getBoundingClientRect().x * window.devicePixelRatio + "px";
            } else {
                menu.style.left = target.getBoundingClientRect().x + "px";
            }
            menu.style.top = (target.clientHeight) + target.getBoundingClientRect().y + "px";
        }
        return {
            base,
            menu,
            addItem,
            addLine,
            remove
        }
    }
}());

export default contextmenuutils;