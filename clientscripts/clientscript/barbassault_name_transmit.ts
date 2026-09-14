/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,barbassault_name_transmit]

function barbassault_name_transmit(intArg0: component): void {
    let str0: string = "";
    let int1: graphic = Graphic.p11_full;
    let int2: component = Component.interface_492.component_492_49;

    switch (intArg0) {
        case Component.interface_492.component_492_15:
        case Component.interface_493.component_493_27:
        case Component.interface_488.component_488_3:
            str0 = varcstr_212;
            break;
        case Component.interface_492.component_492_16:
        case Component.interface_493.component_493_28:
        case Component.interface_488.component_488_8:
            str0 = varcstr_213;
            break;
        case Component.interface_492.component_492_17:
        case Component.interface_493.component_493_29:
        case Component.interface_488.component_488_13:
            str0 = varcstr_214;
            break;
        case Component.interface_492.component_492_18:
        case Component.interface_493.component_493_30:
        case Component.interface_488.component_488_18:
            str0 = varcstr_215;
            break;
        case Component.interface_492.component_492_19:
        case Component.interface_493.component_493_31:
            str0 = varcstr_216;
            break;
    }

    switch (intArg0) {
        case Component.interface_493.component_493_27:
        case Component.interface_493.component_493_28:
        case Component.interface_493.component_493_29:
        case Component.interface_493.component_493_30:
        case Component.interface_493.component_493_31:
            int1 = Graphic.p12_full;
            int2 = Component.interface_493.component_493_56;
            break;
        case Component.interface_488.component_488_3:
        case Component.interface_488.component_488_8:
        case Component.interface_488.component_488_13:
        case Component.interface_488.component_488_18:
            int1 = Graphic.p12_full;
            int2 = Component.interface_488.component_488_27;
            break;
    }
    let str1: string = str0;
    let int3: number = ifGetWidth(intArg0);

    if (parawidth(str1 + " ", 2147483647, int1) > int3) {
        while (parawidth(str1 + "... ", 2147483647, int1) > int3) {
            str1 = subString(str1, 0, stringLength(str1) - 1);
        }
        ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, int2, str0, 25, 5000]), intArg0);
        ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [int2]), intArg0);
        str0 = str1 + "...";
    } else {
        ifSetOnMouseRepeat(noHook(""), intArg0);
        ifSetOnMouseLeave(noHook(""), intArg0);
    }

    switch (intArg0) {
        case Component.interface_492.component_492_15:
        case Component.interface_492.component_492_16:
        case Component.interface_492.component_492_17:
        case Component.interface_492.component_492_18:
        case Component.interface_492.component_492_19:
        case Component.interface_493.component_493_27:
        case Component.interface_493.component_493_28:
        case Component.interface_493.component_493_29:
        case Component.interface_493.component_493_30:
        case Component.interface_493.component_493_31:
            if (compare(str0, "") == 0 || compare(str0, "null") == 0) {
                str0 = "none set";
            }
            break;
        case Component.interface_488.component_488_3:
        case Component.interface_488.component_488_8:
        case Component.interface_488.component_488_13:
        case Component.interface_488.component_488_18:
            if (compare(str0, "") == 0 || compare(str0, "null") == 0) {
                str0 = "---";
            }
            break;
    }
    ifSetText(str0, intArg0);
}
