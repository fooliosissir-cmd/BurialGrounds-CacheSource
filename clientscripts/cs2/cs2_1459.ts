/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1459

function cs2_1459(): void {
    let int0: number = 2;
    let int1: number = 0;
    let int2: number = 0;

    while (int0 <= 9) {
        switch (int0) {
            case 2:
                int1 = varbit_4885;
                break;
            case 3:
                int1 = varbit_4886;
                break;
            case 4:
                int1 = varbit_4887;
                break;
            case 5:
                int1 = varbit_4888;
                break;
            case 6:
                int1 = varbit_4889;
                break;
            case 7:
                int1 = varbit_4890;
                break;
            case 8:
                int1 = varbit_4891;
                break;
            case 9:
                int1 = varbit_4892;
                break;
        }
        if (int1 > 0) {
            cs2_1460(int0, cs2_1470(int0));
        } else if (int2 == 0) {
            cs2_1461(int0);
            int2 = 1;
        } else {
            cs2_1462(int0);
        }
        int0 = int0 + 1;
    }
    cs2_1463(varbit_4893);
}
