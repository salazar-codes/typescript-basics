// Evitar usar el any al programar
(()=>{
    
    const fullName = (firstName:string, ...restArgs: string[] ):string => {
        return `${firstName} ${restArgs.join(" ")}`;
    }

    fullName('Aea','a','v','b','d','e');

})();