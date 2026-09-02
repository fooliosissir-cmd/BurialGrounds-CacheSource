/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_802

function cs2_802(intArg0: number, strArg0: string, intArg1: number, intArg2: number, intArg3: number): [string, number] {
    let int4: number = stringLength(strArg0);

    if (intArg0 <= -1) {
        intArg0 = int4;
    } else {
        intArg0 = min(intArg0, int4);
    }
    let str1: string = "";

    if (intArg0 > 0) {
        str1 = subString(strArg0, 0, intArg0);
    }
    let str2: string = "";

    if (intArg0 < int4) {
        str2 = subString(strArg0, intArg0, int4);
    }
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;

    if (intArg2 == 85) {
        int5 = stringLength(str1);
        if (int5 > 1) {
            str1 = subString(str1, 0, int5 - 1);
        } else {
            str1 = "";
            int7 = 1;
        }
        strArg0 = append(str1, str2);
        intArg0 = max(intArg0 - 1, 0);
    } else if (intArg2 == 101) {
        int5 = stringLength(str2);
        if (int5 > 1) {
            str2 = subString(str2, 1, int5);
        } else {
            str2 = "";
            int7 = 1;
        }
        strArg0 = append(str1, str2);
    } else if (charIsprintable(intArg3) == 1) {
        switch (intArg1) {
            case 0:
                if (varc_1650 == 1) {
                    int6 = 255;
                } else {
                    int6 = 80;
                }
                if (int4 < int6) {
                    strArg0 = append(appendChar(str1, intArg3), str2);
                    intArg0 = intArg0 + 1;
                } else {
                    int7 = 1;
                }
                break;
            case 1:
                if (charIsnumeric(intArg3) == 1 && int4 < 10) {
                    strArg0 = append(appendChar(str1, intArg3), str2);
                    intArg0 = intArg0 + 1;
                } else {
                    int7 = 1;
                }
                break;
            case 2:
                if (int4 < 12) {
                    strArg0 = append(appendChar(str1, intArg3), str2);
                    intArg0 = intArg0 + 1;
                } else {
                    int7 = 1;
                }
                break;
            case 3:
                if (int4 < 320) {
                    strArg0 = append(appendChar(str1, intArg3), str2);
                    intArg0 = intArg0 + 1;
                } else {
                    int7 = 1;
                }
                break;
            case 4:
                if ((charIsalphanumeric(intArg3) == 1 || stringIndexofChar(" '&,.!-\xe0\xc0\xe1\xc1\xe2\xc2\xe3\xc3\xe4\xc4\xe5\xc5\xe7\xc7\xe8\xc8\xe9\xc9\xea\xca\xeb\xcb\xec\xcc\xed\xcd\xee\xce\xef\xcf\xf1\xd1\xf2\xd2\xf3\xd3\xf4\xd4\xf5\xd5\xf6\xd6\xf9\xd9\xfa\xda\xfb\xdb\xfc\xdc\xfd\xdd\xff", intArg3, 0) != -1) && int4 < 50) {
                    strArg0 = append(appendChar(str1, intArg3), str2);
                    intArg0 = intArg0 + 1;
                } else {
                    int7 = 1;
                }
                break;
            case 5:
                if (int4 < 50) {
                    strArg0 = append(appendChar(str1, intArg3), str2);
                    intArg0 = intArg0 + 1;
                } else {
                    int7 = 1;
                }
                break;
            case 6:
                switch (mapLang()) {
                    case 1:
                        if ((charIsnumeric(intArg3) == 1 || (stringIndexofChar("KkMmTt", intArg3, 0) != -1 && int4 > 0)) && int4 < 10) {
                            if (stringIndexofString(strArg0, "K", 0) == -1 && stringIndexofString(strArg0, "k", 0) == -1 && stringIndexofString(strArg0, "M", 0) == -1 && stringIndexofString(strArg0, "m", 0) == -1 && stringIndexofString(strArg0, "T", 0) == -1 && stringIndexofString(strArg0, "t", 0) == -1) {
                                strArg0 = append(appendChar(str1, intArg3), str2);
                                intArg0 = intArg0 + 1;
                            } else {
                                int7 = 1;
                            }
                        } else {
                            int7 = 1;
                        }
                        break;
                    default:
                        if ((charIsnumeric(intArg3) == 1 || (stringIndexofChar("KkMm", intArg3, 0) != -1 && int4 > 0)) && int4 < 10) {
                            if (stringIndexofString(strArg0, "K", 0) == -1 && stringIndexofString(strArg0, "k", 0) == -1 && stringIndexofString(strArg0, "M", 0) == -1 && stringIndexofString(strArg0, "m", 0) == -1) {
                                strArg0 = append(appendChar(str1, intArg3), str2);
                                intArg0 = intArg0 + 1;
                            } else {
                                int7 = 1;
                            }
                        } else {
                            int7 = 1;
                        }
                        break;
                }
                break;
            case 7:
                if (int4 < 30) {
                    strArg0 = append(appendChar(str1, intArg3), str2);
                    intArg0 = intArg0 + 1;
                } else {
                    int7 = 1;
                }
                break;
        }
    }
    return [strArg0, intArg0];
}
