function tiny(string) {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
}

function hello(data){
    console.log("Hello " + data);
}


module.exports = {
    tiny,
    hello,
}

