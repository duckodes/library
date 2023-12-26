var storageutils = (function () {
    return {
        set: set,
        get: get,
        getCount: getCount
    };
    function set(k, v) {
        if (localStorage.getItem(k) === null) {
            localStorage.setItem(k, v + `_${0}`);
        } else {
            localStorage.setItem(k, `${getBefore(localStorage.getItem(k), '_')}_${(parseInt(getAfter(localStorage.getItem(k), '_')) + 1)}`);
        }
    }
    function get(k, v = null) {
        if (localStorage.getItem(k) === null) {
            localStorage.setItem(k, v + `_${0}`);
        } else {
            localStorage.setItem(k, `${getBefore(localStorage.getItem(k), '_')}_${(parseInt(getAfter(localStorage.getItem(k), '_')) + 1)}`);
        }
        try {
            return JSON.parse(localStorage.getItem(k));
        } catch (error) {
            return getBefore(localStorage.getItem(k), '_');
        }
    }
    function getCount(k) {
        return parseInt(getAfter(localStorage.getItem(k), '_'));
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