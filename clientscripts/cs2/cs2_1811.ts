/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1811

function cs2_1811(intArg0: component, intArg1: component, intArg2: component): void {
    if (stringLength(varcstr_clanwars_caller) == 0) {
        cs2_1812("", intArg2);
        return;
    }
    let int3: number = min(chatGethistorylength(), 100) - 1;
    let str0: string = "";
    let int4: number = -1;

    while (int3 >= 0) {
        switch (chatGethistorytype(int3)) {
            case 1:
            case 2:
            case 3:
            case 7:
            case 9:
            case 11:
            case 17:
            case 18:
            case 20:
            case 24:
            case 25:
            case 41:
            case 42:
            case 44:
            case 45:
                if (compare(lowercase(removetags(chatGethistoryname(int3))), varcstr_clanwars_caller) != 0) {
                    break;
                }
                str0 = chatGethistorymessage(int3);
                int4 = int3;
                break;
        }
        int3 = int3 - 1;
    }

    if (int4 < 0) {
        varc_clanwars_caller_lastindex = -1;
        cs2_1812("", intArg2);
        return;
    }

    if (varc_clanwars_caller_lastindex == -1 || int4 <= varc_clanwars_caller_lastindex || compare(str0, varcstr_clanwars_caller_lastusedstring) != 0) {
        cs2_1812(str0, intArg2);
    }
    varc_clanwars_caller_lastindex = int4;
}
