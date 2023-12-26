var storageutils = (function () {
    return {
        set: set,
        get: get
    };
    function set(k, v) {
        localStorage.setItem(k, v);
    }
    function get(k, dv = null) {
        if (localStorage.getItem(k) === null) {
            localStorage.setItem(k, dv + `_${0}`);
        } else {
            localStorage.setItem(k, `${getBefore(localStorage.getItem(k), '_')}_${(parseInt(getAfter(localStorage.getItem(k), '_')) + 1)}`);
        }
        try {
            return JSON.parse(localStorage.getItem(k));
        } catch (error) {
            return getBefore(localStorage.getItem(k), '_');
        }
    }
    function getAfter(inputString, character) {
        const index = inputString.indexOf(character);
        if (index === -1 || index === inputString.length - 1) {
            return null;
        }
        return inputString.slice(index + 1);
    }
    function getBefore(inputString, character) {
        const index = inputString.indexOf(character);
        if (index === -1 || index === 0) {
            return null;
        }
        return inputString.slice(0, index);
    }
}());