/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_706

function cs2_706(intArg0: number): number {
    if (intArg0 < 1 || intArg0 > 9) {
        return 0;
    }

    switch (intArg0) {
        case 1:
            return 556 - varbit_4885 - varbit_4886 - varbit_4887 - varbit_4888 - varbit_4889 - varbit_4890 - varbit_4891 - varbit_4892;
        case 2:
            return varbit_4885;
        case 3:
            return varbit_4886;
        case 4:
            return varbit_4887;
        case 5:
            return varbit_4888;
        case 6:
            return varbit_4889;
        case 7:
            return varbit_4890;
        case 8:
            return varbit_4891;
        case 9:
            return varbit_4892;
    }
    return 0;
}
