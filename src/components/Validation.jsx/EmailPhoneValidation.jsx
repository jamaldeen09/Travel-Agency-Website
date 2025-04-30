


export const EmailValidation = (email) => {

    const regex = /[\^°<>#*~!"§$%?®©¶]+/;
    if (!email){
        return false;
    }
    else if (email.length <= 0){
        return false;
    }
    else if (regex.test(email) === true || !email.includes("@")){
        return false;
    }
    else if (!email.includes(".")){
        return false
    }
    else{
        return true;
    }
}


export const PhoneValidation = (num) => {

    const regex = /[\^°<>#*~!"§$%?®©¶]+/;
    if (!num){
        return false;
    }
    else if (num.length <= 0 || num.length > 11 || num.length < 11){
        return false;
    }
    else{
        return true;
    }
}