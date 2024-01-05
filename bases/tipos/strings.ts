(()=>{
    
    let batman: string = '';
    batman.toUpperCase();

    console.log( batman[10]?.toUpperCase() || 'No está presente' );

})();