(()=>{

    const addNumbers = (a:number, b:number): number => a + b;
    
    // Después de los ":" se agrega la firma de la función.
    let myFunction: (y:number, z:number) => number;

    myFunction = addNumbers; //La función pasa por referencia

})();