// Evitar usar el any al programar
(()=>{
    
    let avenger: any;

    avenger = 'Ironman';
    console.log( (avenger as string).charAt(0) );

    
    avenger = 150.3434343;
    console.log( (<number>avenger).toFixed() );

})();