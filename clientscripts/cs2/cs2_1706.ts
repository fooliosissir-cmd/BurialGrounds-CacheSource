/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1706

function cs2_1706(): void {
    let int0: stat = 0;
    let int1: number = 0;
    let int2: number = 10;

    while (int0 != -1 && int2 > 0) {
        int1 = cs2_1708(int0);
        if (ifFind(cs2_1707(int0)) == 1) {
            if (int1 > 0) {
                ccSetColour(colour(0x32FF32));
                ccSetText(append(appendNum("+", int1), "%"));
            } else if (int1 < 0) {
                ccSetColour(colour(0xFF3232));
                ccSetText(append(tostring(int1), "%"));
            } else {
                ccSetColour(colour(0xFF981F));
                ccSetText(append(tostring(int1), "%"));
            }
        }
        switch (int0) {
            case 0:
                int0 = 2;
                break;
            case 2:
                int0 = 1;
                break;
            case 1:
                int0 = 4;
                break;
            case 4:
                int0 = 6;
                break;
            case 6:
                int0 = -1;
                break;
        }
        int2 = int2 - 1;
    }
}
