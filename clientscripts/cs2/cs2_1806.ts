/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1806

function cs2_1806(strArg0: string): void {
    proc_meslayer_close(12);
    strArg0 = lowercase(removetags(strArg0));
    let int0: number = stringLength(strArg0);
    strArg0 = cs2_2332(strArg0, "_", "\xa0");
    strArg0 = cs2_2332(strArg0, " ", "\xa0");

    while (stringIndexofString(strArg0, " ", 0) == 0 && int0 > 0) {
        strArg0 = subString(strArg0, 1, int0);
        int0 = stringLength(strArg0);
    }

    while (stringIndexofString(strArg0, " ", int0 - 1) == int0 - 1 && int0 > 0) {
        strArg0 = subString(strArg0, 0, int0 - 1);
        int0 = stringLength(strArg0);
    }

    if (compare(varcstr_clanwars_caller, strArg0) == 0) {
        mes("Caller not changed.");
        return;
    }
    varcstr_clanwars_caller = strArg0;

    if (stringLength(varcstr_clanwars_caller) > 0) {
        mes("Caller set: " + cs2_1814(varcstr_clanwars_caller));
    } else {
        mes("Caller feature disabled.");
    }
    proc_clanwars_caller_namechange(Component.interface_265.component_265_22, Component.interface_265.component_265_24, Component.interface_265.component_265_25);
    proc_clanwars_caller_namechange(Component.interface_789.component_789_14, Component.interface_789.component_789_16, Component.interface_789.component_789_17);
    proc_clanwars_caller_namechange(Component.interface_1112.component_1112_5, Component.interface_1112.component_1112_7, Component.interface_1112.component_1112_8);
}
