function printAll(strs) {
    if(strs) {
        if(typeof strs === "object") {
            for(const s of strs) {
                console.log(s + " ");
            }
        } else if(typeof strs === "string") {
            console.log(strs);
        }
    }
}

printAll("")