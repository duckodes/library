# ⚡ FONT SOURCE

### 💧 setup
```html
<!--set to header-->
<link rel="stylesheet" href="https://lib.duckode.com/css/font-face.css">
```
> ## Available font
> 🔹 'Ysabeau_SC'
> 🔹 'Poiret_One'

# ⚡ JS SOURCE

## 🔥 clickutils.js
### 💧 last version 1.0.2
### 💧 description
> * To prevent MITB from executing scripted click events, a clickutils.js has been developed. 
> * This script utilizes event listeners such as mousedown, mouseup, touchstart, and touchend.

> ### Note (repeated multiple times):
> All functions returned by clickutils are intended for a single use. Therefore, functions returned by clickutils should be re-added internally at the appropriate moment to avoid being executed only once.

### 💧 Quick setup
```html
<!--set to body-->
<script src="https://lib.duckode.com/js/clickutils.min.js"></script>
<script>
    const element = document.querySelector('.your-target-class');
    function elementClick(e) {
        // TODO: click action
        // parameter 'e': mouse event
        // loop: use clickutils.click(element, 0, elementClick) in this function
    }
    clickutils.click(element, 0, elementClick);
</script>
```

### 💧 setup
```html
<script src="https://lib.duckode.com/js/clickutils.min.js"></script>
```

### 💧 function
> ### nClick & nTouch return by Promise
> * clickutils.click(element, button, func)
> * clickutils.nClick(element, button)
> * clickutils.touch(element, func)
> * clickutils.nTouch(element)

### parameter
> * element : any —— target element
> * button : number —— 0: left mouse button, 1: right mouse button
> * func : function —— action to add to


## 🔥 contextmenuutils.js
### 💧 last version 1.0.1
### 💧 description
> * Easy to add menu or list with javascript

### 💧 Quick setup
```html
<!--set to header-->
<link rel="stylesheet" href="https://lib.duckode.com/css/contextmenuutils.css">

<!--set to body-->
<script src="https://lib.duckode.com/js/contextmenuutils.min.js"></script>
<script>
    document.addEventListener("click", (e) => {
        contextmenuutils.init(document.body, (b, c) => {
            c.style.paddingTop = '3px';
            c.style.paddingBottom = '3px';
            // ToMouse(c) or ToParent(c)
            ToMouse(c);
        });
        contextmenuutils.addItem('Item 1', (c) => {
            setup(c, () => {
                // TODO: click item action
                console.log('item action 1');
            });
        });
        contextmenuutils.addItem('Item 2', (c) => {
            setup(c, () => {
                // TODO: click item action
                console.log('item action 2');
            });
        });
        function setup(c, func) {
            c.addEventListener("click", func);
            c.addEventListener("mouseenter", () => {
                c.style.background = "#505050";
            });
            c.addEventListener("mouseleave", () => {
                c.style.background = "";
            });
        }
        
        // setup contextmenu display : mouse position
        function ToMouse(c) {
            c.style.left = (e.clientX) + "px";
            c.style.top = (e.clientY) + "px";
        }
        // setup contextmenu display : in parent
        function ToParent(c) {
            c.className = "relative";
        }
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

### 💧 parameter
> * p : element —— parent of contextmenu
> * t : string —— item name
> * fc : function —— action to add to
> * b : element —— cover item element
> * c : element —— item element