function translatePigLatin(str) {
    console.log(str.substr(1, str.length));
    if (str[0].toLowerCase() == "a" || str[0].toLowerCase() == "e" || 
    str[0].toLowerCase() == "i" || str[0].toLowerCase() == "o" || 
    str[0].toLowerCase() == "u" || str[0].toLowerCase() == "y") {
        str = str + "way";
    } else {
        str = str.substr(1, str.length) + str[0] + "ay";
    }
    return console.log(str);
}

translatePigLatin("consonant");