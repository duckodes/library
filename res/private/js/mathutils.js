const mathutils = (() => {
    // 次方
    function pow(x, y) {
        var result = 1;
        while (y > 0) {
            if (y % 2 === 1) {  // 如果 y 是奇數
                result *= x;
            }
            x *= x;  // 每次平方 x
            y = Math.floor(y / 2);  // y 變成原來的一半
        }
        return result;
    }
    // function pow(x, y){
    //     var a = x;
    //     for(i = 0; i < y - 1; i++){
    //         a*=x;
    //     }
    //     return a;
    // }
})();