
export const postalValidation = (postalZip) => {

    const regex = /[\^°<>#*~!"§$%?®©¶]+/;
    if (!postalZip){
        return false;
    }
    else if (postalZip.length <= 0){
        return false;
    }
    else if (regex.test(postalZip) === true){
        return false;
    }
    else{
        return true;
    }
}