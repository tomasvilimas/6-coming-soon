function isValidInput (selector, data){

    if(typeof selector!== 'string'){
        return false;
    }
    if(typeof selector === ''){
        return false;
    
    }
    if(typeof selector > 100){
        return false;
    }
    
    
    if(!Array.isArray(data)){
        return false;
    }
    
    if ( data.length ===0 ){
        return false;
    }

    return true;

}

export {isValidInput};