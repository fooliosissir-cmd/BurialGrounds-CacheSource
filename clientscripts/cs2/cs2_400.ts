/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_400

function cs2_400(strArg0: string, strArg1: string, strArg2: string): string {
    let int0: number = 0;
    let int1: number = 0;
    let str3: string = "";
    let str4: string = "";
    let int2: number = stringLength(strArg0);
    let int3: number = stringLength(strArg1);

    if (int2 > 0) {
        int1 = stringIndexofString(strArg0, strArg1, int1);
        while (int1 != -1) {
            str4 = subString(strArg0, int0, int1);
            if (compare(str4, "") != 0) {
                str3 = str3 + str4 + strArg2;
            }
            int1 = int1 + int3;
            int0 = int1;
            int1 = stringIndexofString(strArg0, strArg1, int1);
        }
        str4 = subString(strArg0, int0, int2);
        if (compare(str4, "") != 0) {
            str3 = str3 + str4;
        }
    }
    return str3;
}
