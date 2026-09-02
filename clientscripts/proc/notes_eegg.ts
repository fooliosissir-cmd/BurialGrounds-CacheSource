/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,notes_eegg]

function notes_eegg(strArg0: string): string {
    let str1: string = lowercase(strArg0);

    if (compare(str1, "all your base are belong to us") == 0) {
        return "orly?";
    } else if (compare(str1, "orly") == 0) {
        return "yarly";
    } else if (compare(str1, "bangin'") == 0) {
        return "donk";
    } else if (compare(str1, "murder") == 0 || compare(str1, "redrum") == 0) {
        return "All rest and no play makes Guthix a dull boy.";
    } else if (compare(str1, "humperdinck") == 0 || compare(str1, "humperdink") == 0) {
        return "Have fun storming the castle!";
    } else if (compare(str1, "i am your father") == 0) {
        return "Nooooooooooooooooooooooooo!";
    } else if (compare(str1, "i'll be back") == 0) {
        return "Come with me if you want to live.";
    } else if (compare(str1, "there is no spoon") == 0) {
        return "Then you will see, it is not the spoon that bends, it is only yourself.";
    } else if (compare(str1, "milton waddams") == 0) {
        return "The ratio of people to cake is too big.";
    } else if (compare(str1, "you fight like a dairy farmer") == 0) {
        return "How appropriate. You fight like a cow.";
    } else if (compare(str1, "finish the fight") == 0) {
        return "They must love the smell of hero.";
    } else if (compare(str1, "r.i.p. runescape") == 0) {
        return "Wanna bet?";
    } else if (compare(str1, "penso, logo existo") == 0) {
        return "Borboletas salpicadas de goiabada...";
    } else if (compare(str1, "le temps passe") == 0) {
        return "L'\u0153uf dur.";
    } else if (compare(str1, "paul") == 0) {
        return "Rargh, I'm a lava monster!";
    } else if (compare(str1, "andrew") == 0) {
        return "Cabbage.";
    } else if (compare(str1, "sevga") == 0) {
        return "Marmaros had a close encounter with a prayer-eating behemoth.";
    }
    return strArg0;
}
