function manipulateString(str, log){
    str = str.toUpperCase();
    log(str);
}

manipulateString("hello, world!", (x) => {console.log(`The manipulated string is: ${x}`) });