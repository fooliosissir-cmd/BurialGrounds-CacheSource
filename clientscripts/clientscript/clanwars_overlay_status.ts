/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_overlay_status]

function clanwars_overlay_status(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component, intArg8: component, intArg9: component, intArg10: component, intArg11: component, intArg12: component, intArg13: component, intArg14: component, intArg15: component, intArg16: component): void {
    let str0: string = "";
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = 0;

    if (varc_271 == 1) {
        ifSetText(fcGetChatDisplayName() + ":", intArg3);
    } else {
        ifSetText("This clan:", intArg3);
    }
    ifSetText(tostring(varc_261), intArg5);
    ifSetText(tostring(varc_262), intArg11);

    if (varbit_clanwars_rules_endtype > 0) {
        if (varc_263 < 65535) {
            ifSetText(tostring_spacer(varc_263, ","), intArg7);
        } else {
            ifSetText("<col=ff0000>" + "You rock!" + "</col>", intArg7);
        }
        if (varc_264 < 65535) {
            ifSetText(tostring_spacer(varc_264, ","), intArg13);
        } else {
            ifSetText("<col=ff0000>" + "They rock!" + "</col>", intArg13);
        }
        ifSetHide(false, intArg6);
        ifSetHide(false, intArg12);
        ifSetHide(false, intArg7);
        ifSetHide(false, intArg13);
        int17 = 1;
        if (varbit_clanwars_rules_endtype < 15) {
            str0 = "/ " + tostring_spacer(enumOp(type_int, type_int, Enum.clanwars_killcount_options, varbit_clanwars_rules_endtype), ",");
            ifSetText(str0, intArg8);
            ifSetText(str0, intArg14);
            ifSetHide(false, intArg8);
            ifSetHide(false, intArg14);
            int18 = 1;
        } else {
            ifSetHide(true, intArg8);
            ifSetHide(true, intArg14);
        }
    } else {
        ifSetHide(true, intArg6);
        ifSetHide(true, intArg12);
        ifSetHide(true, intArg7);
        ifSetHide(true, intArg13);
        ifSetHide(true, intArg8);
        ifSetHide(true, intArg14);
    }

    if (varc_260 == 1) {
        ifSetOnTimer(noHook(""), intArg16);
        if (varbit_clanwars_rules_timelimit > 0) {
            ifSetText("Time remaining:", intArg15);
            if (varc_270 > 60) {
                cs2_1791(intArg16);
            } else if (varc_270 > 1) {
                ifSetText(tostring(varc_270) + " minutes", intArg16);
            } else if (varc_270 == 1) {
                ifSetText("<col=ff0000>" + "1 minute" + "</col>", intArg16);
            } else {
                ifSetText("<col=ff0000>" + "Not much!" + "</col>", intArg16);
            }
            ifSetHide(false, intArg15);
            ifSetHide(false, intArg16);
            int19 = 1;
        } else {
            ifSetHide(true, intArg15);
            ifSetHide(true, intArg16);
        }
    } else {
        ifSetText("Countdown to battle:", intArg15);
        if (varc_clanwars_countdown_timer != varc_270) {
            varc_clanwars_countdown_timer = varc_270;
            cs2_1790(intArg16);
            ifSetOnTimer(hook(clanwars_overlay_status_timecounter, "Iii", [intArg16, clientClock(), varc_270]), intArg16);
        }
        ifSetHide(false, intArg15);
        ifSetHide(false, intArg16);
        int19 = 1;
    }
    let int20: number = parawidth(ifGetText(intArg3), 512, Graphic.p11_full);
    let int21: number = parawidth(ifGetText(intArg9), 512, Graphic.p11_full);
    int20 = max(parawidth(ifGetText(intArg4), 512, Graphic.p11_full) + 10 + parawidth(ifGetText(intArg5), 512, Graphic.p11_full), int20);
    int21 = max(parawidth(ifGetText(intArg10), 512, Graphic.p11_full) + 10 + parawidth(ifGetText(intArg11), 512, Graphic.p11_full), int21);
    let int22: number = ifGetHeight(intArg3) + ifGetHeight(intArg4);

    if (int17 == 1) {
        int20 = max(parawidth(ifGetText(intArg6), 512, Graphic.p11_full) + 10 + parawidth(ifGetText(intArg7), 512, Graphic.p11_full), int20);
        int21 = max(parawidth(ifGetText(intArg12), 512, Graphic.p11_full) + 10 + parawidth(ifGetText(intArg13), 512, Graphic.p11_full), int21);
        int22 = int22 + ifGetHeight(intArg6);
        if (int18 == 1) {
            int20 = max(parawidth(ifGetText(intArg8), 512, Graphic.p11_full), int20);
            int21 = max(parawidth(ifGetText(intArg14), 512, Graphic.p11_full), int21);
            int22 = int22 + ifGetHeight(intArg8);
        }
    }
    let int23: number = int20 + 10 + int21;

    if (int19 == 0) {
        ifSetSize(int23 + 8, int22 + 8, 0, 0, intArg0);
        ifSetSize(ifGetWidth(intArg0), ifGetHeight(intArg0), 0, 0, intArg1);
        cs2_1788(int20, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, int21, intArg9, intArg10, intArg11, intArg12, intArg13, intArg14, int23);
        ifSetPosition(4 + int20 + 5, 4, 0, 0, intArg2);
        ifSetSize(0, int22, 0, 0, intArg2);
        proc_clanwars_setup_createbox(intArg0, 0, 0, 0);
        return;
    }
    let int24: number = int22;
    int22 = int22 + 10 + ifGetHeight(intArg15) + ifGetHeight(intArg16);
    int23 = max(parawidth(ifGetText(intArg15), 512, Graphic.p11_full), int23);
    int23 = max(parawidth(ifGetText(intArg16), 512, Graphic.p11_full), int23);
    ifSetSize(int23 + 8, int22 + 8, 0, 0, intArg0);
    ifSetSize(ifGetWidth(intArg0), ifGetHeight(intArg0), 0, 0, intArg1);
    cs2_1788(int20, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, int21, intArg9, intArg10, intArg11, intArg12, intArg13, intArg14, int23);
    ifSetPosition(4 + int20 + (int23 - (int20 + int21)) / 2, 4, 0, 0, intArg2);
    ifSetSize(0, int24, 0, 0, intArg2);
    ifSetSize(int23, ifGetHeight(intArg15), 0, 0, intArg15);
    ifSetSize(int23, ifGetHeight(intArg16), 0, 0, intArg16);
    ifSetPosition(4, 4 + int24 + 10, 0, 0, intArg15);
    ifSetPosition(4, 4 + int24 + 10 + ifGetHeight(intArg15), 0, 0, intArg16);
    proc_clanwars_setup_createbox(intArg0, 4 + int24 + 5, 0, 0);
}
