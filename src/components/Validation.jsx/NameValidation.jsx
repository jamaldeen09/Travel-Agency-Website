import React from "react";

export const NameValidation = (name) => {

    const regex = /[\^°<>#*~!"§$%?®©¶]+/;
    if (!name){
        return false;
    }
    else if (name.length <= 0){
        return false;
    }
    else if (regex.test(name) === true){
        return false;
    }
    else{
        return true;
    }
}








