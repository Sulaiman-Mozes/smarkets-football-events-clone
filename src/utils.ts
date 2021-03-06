
export const removeUnderScore = (str:string):string => {
    let newStr = "";
    str.split("_").forEach((word) => newStr += ` ${word}`);
    return newStr;
};
