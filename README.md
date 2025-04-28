# ⚡ ESM

## 🔥 contextmenuutils.js
### 💧 last version 1.0.4
### 💧 description
> * Easy to add menu or list with ES Module

### 💧 Quick setup
```html
<!--set to header-->
<link rel="stylesheet" href="https://lib.duckode.com/module/contextmenuutils/contextmenuutils.css">

<!--set to body-->
<script type="module">
    import contextmenuutils from "https://lib.duckode.com/module/contextmenuutils/contextmenuutils.js";
    document.addEventListener("click", (e) => {
        // initialize menu base
        const menu = contextmenuutils.init(document.body, document.body);

        // add sub menu
        const submenu = menu.addItem('click submenu');
        submenu.addEventListener("click", () => {
            console.log('click submenu');
            menu.remove();
        });
    });
</script>
```

### 💧 setup
```html
<link rel="stylesheet" href="https://lib.duckode.com/css/contextmenuutils.css">
<script src="https://lib.duckode.com/module/contextmenuutils/contextmenuutils.js"></script>
```

# ⚡ JS SOURCE

## 🔥 clickutils.js
### 💧 last version 1.0.3
### 💧 description
> * To prevent MITB from executing scripted click events, a clickutils.js has been developed. 
> * This script utilizes event listeners such as mousedown, mouseup

> ### Note (repeated multiple times):
> All functions returned by clickutils are intended for a single use. To allow clickutils to operate more than once, you need to set canLoop to true. The advantage is that you can add the removeLoop() method at the appropriate time to remove the loop. This method will immediately remove the events that were added.

### 💧 Quick setup
```html
<!--set to body-->
<script src="https://lib.duckode.com/js/clickutils.min.js"></script>
<script>
    const element = document.querySelector('.your-target-class');
    var canLoop = true; // Default: true
    const click = clickutils.click(element, 0, elementClick, canLoop);
    function elementClick(e) {
        // TODO: click action
        // parameter 'e': mouseup event
        console.log("element is click");
        click.removeLoop(); // to remove the loop can call this function
    }
</script>
```

### 💧 setup
```html
<script src="https://lib.duckode.com/js/clickutils.min.js"></script>
```

### 💧 function
> * clickutils.click(element, button, func)

### parameter
> * element : any —— target element
> * button : number —— 0: left mouse button, 1: right mouse button
> * callback : function —— action to add to
> * canLoop : boolean —— do click function again

## 🔥 contextmenuutils.js
### 💧 last version 1.0.3
### 💧 description
> * Easy to add menu or list with javascript

### 💧 Quick setup
```html
<!--set to header-->
<link rel="stylesheet" href="https://lib.duckode.com/css/contextmenuutils.css">

<!--set to body-->
<script src="https://lib.duckode.com/js/contextmenuutils.min.js"></script>
<script>
    const toClickPoint = true; // Default: false (true: generate at mouse point)
    const target = null; // target click element (if toClickPoint = false && target != null, generate below target)
    document.addEventListener("click", (e) => {
        contextmenuutils.init(document.body, (base, contextmenu) => {
            // base: background board of contextmenu
            // contextmenu: main board of contextmenu
            contextmenu.style.paddingTop = '3px';
            contextmenu.style.paddingBottom = '3px';
        }, toClickPoint, target);
        const changeColor = (item, callback) => {
            item.addEventListener("click", callback);
            item.addEventListener("mouseenter", () => {
                item.style.background = "#505050";
            });
            item.addEventListener("mouseleave", () => {
                item.style.background = "";
            });
        }
        contextmenuutils.addItem('Item 1', (item) => {
            // item: contextmenu item (contextmenu child)
            changeColor(item, () => {
                // TODO: click item action
                console.log('item action 1');
                contextmenuutils.remove(); // remove the contextmenu
            });
        });
        contextmenuutils.addItem('Item 2', (item) => {
            changeColor(item, () => {
                console.log('item action 2');
                contextmenuutils.remove(); // remove the contextmenu
            });
        });
    });
</script>
```

### 💧 setup
```html
<link rel="stylesheet" href="https://lib.duckode.com/css/contextmenuutils.css">
<script src="https://lib.duckode.com/js/contextmenuutils.min.js"></script>
```

### 💧 function
> * contextmenuutils.init(p, fc)
> * contextmenuutils.addItem(t, fc)
> * contextmenuutils.remove()

### parameter
> * parent : element —— parent of contextmenu
> * content : string —— item name
> * callback : function —— action to add to
> * base : element —— background board of contextmenu
> * contextmenu : element —— item element