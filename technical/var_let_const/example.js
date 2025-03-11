function example() {
    var a = 10;
    let b = 20;
    const c = 30;
    
    if (true) {
        var a = 40; // Allowed, affects the function scope
        let b = 50; // New block-scoped variable
        // c = 60; // Error: Assignment to constant variable
    }
    
    console.log(a); // 40 (updated function scope)
    console.log(b); // 20 (block-scoped, unaffected by inner block)
}

example();