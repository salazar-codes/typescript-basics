// Evitar usar el any al programar
(()=>{
    
    function returnName(name: string, age:number, upper:boolean = false):string {
        return '';
    }

    const returnName2 = ():string => {
        return '';
    }

})();