/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_message]

function graphics_options_message(intArg0: number, intArg1: number, strArg0: string, strArg1: string, strArg2: string): void {
    let int2: number = 0;

    if (intArg0 == 1) {
        if (stringLength(strArg0) > 0) {
            int2 = stringIndexofString(strArg0, "<br>", 0);
            if (int2 == -1) {
                mes(strArg0);
                return;
            }
            mes(subString(strArg0, 0, int2));
        }
        return;
    }

    if (intArg0 == 2) {
        ifSetText(cs2_400(strArg0, "<br>", " "), Component.interface_978.component_978_7);
        lobbyscreen_input_full("", strArg0, 0, -1, "", strArg1, 0);
        if (stringLength(strArg1) > 0) {
            ifSetOnClick(hook(cs2_702, "s1", [strArg2, true]), Component.interface_906.component_906_168);
        } else {
            ifSetOnClick(noHook(""), Component.interface_906.component_906_168);
        }
        return;
    }
    ifSetText(cs2_400(strArg0, "<br>", " "), Component.interface_978.component_978_7);
    ifSetText(strArg0, Component.interface_744.component_744_76);
    ifSetOnClick(hook(clientscript_loginscreen_setactivemenu_full, "i11", [6, false, true]), Component.interface_744.component_744_79);

    if (stringLength(strArg1) > 0) {
        ifSetText(strArg1, Component.interface_744.component_744_78);
        ifSetOnClick(hook(cs2_702, "s1", [strArg2, true]), Component.interface_744.component_744_78);
    } else {
        ifSetText("", Component.interface_744.component_744_78);
        ifSetOnClick(noHook(""), Component.interface_744.component_744_77);
    }
    proc_loginscreen_setactivemenu(9);
}
