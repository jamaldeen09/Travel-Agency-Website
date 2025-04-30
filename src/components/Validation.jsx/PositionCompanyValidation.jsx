


export const positionValidation = (position) => {

    const regex = /[\^°<>#*~!"§$%?®©¶]+/;
    if (!position){
        return false;
    }
    else if (position.length <= 0 || position.length > 10 ){
        return false;
    }
    else if (regex.test(position) === true){
        return false;
    }
    else{
        return true;
    }
}

export const companyValidation = (company) => {

    const regex = /[\^°<>#*~!"§$%?®©¶]+/;
    if (!company){
        return false;
    }
    else if (company.length <= 0){
        return false;
    }
    else if (regex.test(company) === true){
        return false;
    }
    else{
        return true;
    }
}