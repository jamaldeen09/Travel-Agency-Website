
export const CityRegionValidation = (cityRegion) => {
    const regex = /[\^°<>#*~!"§$%?®©¶]+/;
    if (!cityRegion){
        return false;
    }
    else if (cityRegion.length <= 0){
        return false;
    }
    else if (regex.test(cityRegion) === true){
        return false;
    }
    else{
        return true;
    }
}