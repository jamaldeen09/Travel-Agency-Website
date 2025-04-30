

export const addressValidation = (address) => {
    const regex = /[\^°<>#*~!"§$%?®©¶]+/;
    
    if (!address){
        return false;
    }
    else if (address.length <= 0 || address.length > 10 ){
        return false;
    }
    else if (regex.test(address) === true){
        return false;
    }
    else{
        return true;
    }
}