/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4729

function cs2_4729(): [string, string, string, string, string, string, string, string] {
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let str3: string = "";
    let str4: string = "";
    let str5: string = "";
    let str6: string = "";
    let str7: string = "";

    switch (mapLang()) {
        case 1:
            str0 = "/a";
            str1 = "/c";
            str2 = "/f";
            str3 = "/g";
            str4 = "\\a";
            str5 = "\\c";
            str6 = "\\f";
            str7 = "\\g";
            break;
        case 2:
            str0 = "/p";
            str1 = "/c";
            str2 = "/a";
            str3 = "/i";
            str4 = "\\p";
            str5 = "\\c";
            str6 = "\\a";
            str7 = "\\i";
            break;
        case 3:
            str0 = "/p";
            str1 = "/c";
            str2 = "/f";
            str3 = "/g";
            str4 = "\\p";
            str5 = "\\c";
            str6 = "\\f";
            str7 = "\\g";
            break;
        case 4:
            str0 = "/p";
            str1 = "/c";
            str2 = "/f";
            str3 = "/g";
            str4 = "\\p";
            str5 = "\\c";
            str6 = "\\f";
            str7 = "\\g";
            break;
        default:
            str0 = "/p";
            str1 = "/c";
            str2 = "/f";
            str3 = "/g";
            str4 = "\\p";
            str5 = "\\c";
            str6 = "\\f";
            str7 = "\\g";
            break;
    }
    return [str0, str4, str1, str5, str2, str6, str3, str7];
}
