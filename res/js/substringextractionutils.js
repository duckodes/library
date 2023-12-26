var substringextractionutils = (function () {
    return {
        getAfter: getAfter,
        removeBefore: removeBefore,
        getBefore: getBefore,
        removeAfter: removeAfter,
        getAfterChar: getAfterChar,
        removeBeforeChar: removeBeforeChar,
        getBeforeChar: getBeforeChar,
        removeAfterChar: removeAfterChar

    };
    
    /** Exclude character */
    function getAfter(inputString, character) {
        const index = inputString.indexOf(character);
        if (index === -1 || index === inputString.length - 1) {
            return null;
        }
        return inputString.slice(index + 1);
    }
    /** Exclude character */
    function removeBefore(inputString, character) {
        const index = inputString.indexOf(character);
        if (index !== -1) {
            return inputString.slice(index + 1);
        }
        return null;
    }

    /** Exclude character */
    function getBefore(inputString, character) {
        const index = inputString.indexOf(character);
        if (index === -1 || index === 0) {
            return null;
        }
        return inputString.slice(0, index);
    }
    /** Exclude character */
    function removeAfter(inputString, character) {
        const index = inputString.indexOf(character);
        if (index !== -1) {
            return inputString.substring(0, index);
        }
        return null;
    }

    /** Include character */
    function getAfterChar(inputString, character) {
        const index = inputString.indexOf(character);
        if (index === -1 || index === inputString.length - 1) {
            return null;
        }
        return inputString.slice(index);
    }
    /** Include character */
    function removeBeforeChar(inputString, character) {
        const index = inputString.indexOf(character);
        if (index === -1 || index === 0) {
            return null;
        }
        return inputString.slice(index);
    }

    /** Include character */
    function getBeforeChar(inputString, character) {
        const index = inputString.indexOf(character);
        if (index === -1 || index === 0) {
            return null;
        }
        return inputString.slice(0, index + 1);
    }
    /** Include character */
    function removeAfterChar(inputString, character) {
        const index = inputString.indexOf(character);
        if (index === -1 || index === inputString.length - 1) {
            return null;
        }
        return inputString.slice(0, index + 1);
    }
}());