const dateutils = (function () {
    return {
        ToDate: timestampToTime,
        ToDateTime: timestampToDateTime,
        ToHash: encrypt
    };
    function timestampToTime(timestamp) {
        const date = new Date(timestamp);
        return date;
    }
    function timestampToDateTime(timestamp) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    function encrypt(timestamp) {
        const now = new Date(timestamp);
        const uniqueCode = `${now.getFullYear()}${now.getMonth()}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}${Math.random() * 10000}`;
        const hashedCode = btoa(uniqueCode).replace(/=/g, '');
        return hashedCode;
    }
}());