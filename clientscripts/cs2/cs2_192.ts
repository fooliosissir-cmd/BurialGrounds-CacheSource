/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_192

function cs2_192(): void {
    if (varp_tutorial < 1000) {
        return;
    }
    let int0: number = chatGethistorylength();
    let int1: number = 0;

    if (int0 > varc_43) {
        if (varc_chat_view == 0) {
            varc_43 = int0;
            return;
        }
        int0 = int0 - varc_43 - 1;
        if (int0 >= 100) {
            int0 = 99;
        }
        while (int0 >= 0) {
            int1 = chatGettypebyline(int0);
            if (cs2_90(int0, 0) == 1 && partnercheck(int0) == 0) {
                switch (int1) {
                    case 0:
                    case 4:
                    case 27:
                    case 28:
                    case 29:
                    case 109:
                    case 110:
                    case 26:
                    case 117:
                        cs2_180(1);
                        break;
                    case 1:
                    case 2:
                    case 17:
                    case 116:
                        cs2_180(2);
                        break;
                    case 3:
                    case 5:
                    case 6:
                    case 7:
                    case 18:
                    case 19:
                    case 30:
                    case 31:
                        cs2_180(3);
                        break;
                    case 9:
                    case 11:
                    case 107:
                    case 20:
                        cs2_180(4);
                        break;
                    case 100:
                    case 101:
                    case 103:
                    case 105:
                    case 106:
                    case 108:
                    case 111:
                    case 112:
                    case 113:
                    case 114:
                    case 118:
                    case 119:
                        cs2_180(5);
                        break;
                    case 102:
                    case 104:
                        cs2_180(6);
                        break;
                    case 41:
                    case 43:
                    case 42:
                        cs2_180(7);
                        break;
                    case 44:
                    case 46:
                    case 45:
                        cs2_180(7);
                        break;
                    case 115:
                        if (stringLength(chatGetbyline(int0)) > 1) {
                            cs2_180(1);
                        }
                        break;
                    case 120:
                        if (varc_chat_view != -1) {
                            break;
                        }
                        cs2_180(1);
                        break;
                }
            }
            int0 = int0 - 1;
        }
        varc_43 = chatGethistorylength();
    }
}
