/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5486

function cs2_5486(): void {
    if (varc_1686 == false) {
        return;
    }
    let [int0, str0, str1, str2] = getActiveMinimenuEntry();
    let [int1, int2] = getMinimenuLength();
    let [int3, str3, str4] = getMinimenuTarget();

    if (int3 == 1 && int1 < 2) {
        str1 = str3;
        str0 = "-> " + str4;
        str2 = "";
        int0 = -1;
    }

    if (varc_1687 == -1) {
        varc_1687 = 20;
    }

    if (compare(str1, varcstr_304) != 0 && varc_1690 == -1) {
        varcstr_304 = str1;
        varc_1689 = clientClock();
        tli_optext_close();
    }
    let str5: string = str0;

    if (compare(str1, "") != 0) {
        str5 = str5 + " " + str1 + " " + str2;
    }

    switch (int0) {
        case 4:
        case 3:
        case 2:
        case 7:
            cs2_5488(str5);
            break;
        case 1:
            if (varc_1691 != -1) {
                cs2_5488(str5);
            } else {
                tli_optext_close();
            }
            break;
        default:
            if (varc_1688 == 1) {
                tli_optext_close();
            }
            break;
    }
}
