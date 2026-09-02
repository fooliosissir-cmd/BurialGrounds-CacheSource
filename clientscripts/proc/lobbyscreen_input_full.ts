/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_input_full]

function lobbyscreen_input_full(strArg0: string, strArg1: string, intArg0: number, intArg1: number, strArg2: string, strArg3: string, intArg2: number): void {
    if (intArg1 != -1 && intArg1 != 6 && stringLength(strArg0) <= 0) {
        return;
    }
    lobbyscreen_input_clear();
    ifSetText(strArg0, Component.interface_906.component_906_164);

    if (compare(strArg1, "") != 0) {
        if (intArg1 != -1 && intArg1 != 6) {
            varcstr_lobbyscreen_input = strArg1;
        } else {
            varcstr_lobbyscreen_input = strArg1;
        }
        if (intArg0 == 1) {
            ifSetText(escape(varcstr_lobbyscreen_input), Component.interface_906.component_906_166);
        } else {
            ifSetText(varcstr_lobbyscreen_input, Component.interface_906.component_906_166);
        }
    }

    if (intArg1 == 6 || intArg1 == 10) {
        ifSetText("Yes", Component.interface_906.component_906_174);
        ifSetOp(1, "Yes", Component.interface_906.component_906_174);
        ifSetText("No", Component.interface_906.component_906_176);
        ifSetOp(1, "No", Component.interface_906.component_906_176);
    } else if (intArg1 == 0) {
        ifSetSize(386, 136, 0, 0, Component.interface_906.component_906_162);
        ifSetSize(0, 12, 1, 0, Component.interface_906.component_906_166);
        varc_1650 = 1;
    }

    if (intArg2 == 0) {
        ifSetSize(0, 0, 1, 1, Component.interface_906.component_906_170);
        ifSetSize(0, 0, 1, 1, Component.interface_906.component_906_174);
        ifSetHide(true, Component.interface_906.component_906_175);
        ifSetHide(true, Component.interface_906.component_906_176);
    }
    ifSetHide(false, Component.interface_906.component_906_56);
    let int3: number = 0;

    switch (intArg1) {
        case 0:
            int3 = 0;
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 7:
        case 9:
            int3 = 2;
            break;
    }

    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, 5)) == 0) {
        cs2_3161(0);
    } else if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, 3)) == 0) {
        cs2_4556(0);
    }
    ifSetOnKey(hook(lobbyscreen_input_keyboard, "izIiis", [event_keycode, event_keychar, event_com, int3, intArg1, strArg2]), Component.interface_906.component_906_166);
    ifSetOnOpt(hook(clientscript_lobbyscreen_input_ok, "is", [intArg1, strArg2]), Component.interface_906.component_906_170);
    let int4: number = 0;

    if (intArg1 != -1 && intArg1 != 6) {
        varc_1097 = stringLength(varcstr_lobbyscreen_input);
        ifSetOnClick(hook(cs2_1874, "iII", [event_mousex, Component.interface_906.component_906_166, Component.interface_906.component_906_167]), Component.interface_906.component_906_166);
        cs2_1875(Component.interface_906.component_906_166, Component.interface_906.component_906_167, varcstr_lobbyscreen_input);
        ifSetHide(true, Component.interface_906.component_906_167);
        ifSetSize(ifGetWidth(Component.interface_906.component_906_162), 136, 0, 0, Component.interface_906.component_906_162);
        ifSetOnClick(noHook(""), Component.interface_906.component_906_168);
        hookMouseEnter(noHook(""), Component.interface_906.component_906_168);
        hookMouseExit(noHook(""), Component.interface_906.component_906_168);
        ifSetHide(true, Component.interface_906.component_906_168);
    } else {
        varc_1097 = 0;
        ifSetHide(true, Component.interface_906.component_906_167);
        if (stringLength(strArg3) > 0 && stringLength(varcstr_lobbyscreen_input) > 0) {
            int4 = max(44, paraheight(varcstr_lobbyscreen_input, ifGetWidth(Component.interface_906.component_906_165), Graphic.p11_full) * 13);
            ifSetSize(ifGetWidth(Component.interface_906.component_906_165), int4, 0, 0, Component.interface_906.component_906_165);
            ifSetSize(ifGetWidth(Component.interface_906.component_906_162), int4 + 95, 0, 0, Component.interface_906.component_906_162);
            ifSetPosition(ifGetX(Component.interface_906.component_906_168), ifGetY(Component.interface_906.component_906_165) + int4 + 5, 0, 0, Component.interface_906.component_906_168);
            ifSetSize(ifGetWidth(Component.interface_906.component_906_168), 13, 0, 0, Component.interface_906.component_906_168);
            ifSetText("<u=2c6ff8>" + strArg3 + "</u>", Component.interface_906.component_906_168);
            ifSetColour(colour(0x2C6FF8), Component.interface_906.component_906_168);
            hookMouseEnter(hook(cs2_1333, "Is1", [Component.interface_906.component_906_168, strArg3, true]), Component.interface_906.component_906_168);
            hookMouseExit(hook(cs2_1333, "Is1", [Component.interface_906.component_906_168, strArg3, false]), Component.interface_906.component_906_168);
            ifSetHide(false, Component.interface_906.component_906_168);
        }
    }
}
