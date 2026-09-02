/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,create_error]

function create_error(strArg0: string, intArg0: component): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let str1: string = "accountappeal";
    let str2: string = "passwordchoice.ws";

    switch (intArg0) {
        case Component.interface_673.component_673_93:
            if (stringLength(strArg0) > 0) {
                ifSetGraphic(Graphic.symbols_1_5, Component.interface_673.component_673_93);
                ifSetHide(false, Component.interface_673.component_673_98);
                ifSetText(strArg0, Component.interface_673.component_673_29);
                ifSetText(strArg0, Component.interface_673.component_673_136);
            } else if (ifGetGraphic(intArg0) == Graphic.symbols_1_5) {
                ifSetText(ifGetText(Component.interface_673.component_673_136), Component.interface_673.component_673_29);
            } else if (ifGetGraphic(intArg0) == Graphic.symbols_1_3) {
                ifSetText("This email address is available for use.", Component.interface_673.component_673_29);
            } else {
                ifSetText("Please enter your email address here.", Component.interface_673.component_673_29);
            }
            ifSetSize(110, paraheight(ifGetText(Component.interface_673.component_673_29), 110 - 20, Graphic.verdana_11pt_regular) * 12 + 10, 0, 0, Component.interface_673.component_673_30);
            int1 = 99;
            int2 = 450;
            break;
        case Component.interface_673.component_673_112:
            if (stringLength(strArg0) > 0) {
                ifSetGraphic(Graphic.symbols_1_5, Component.interface_673.component_673_112);
                ifSetHide(false, Component.interface_673.component_673_117);
                ifSetText(strArg0, Component.interface_673.component_673_29);
                ifSetText(strArg0, Component.interface_673.component_673_137);
            } else if (ifGetGraphic(intArg0) == Graphic.symbols_1_5) {
                ifSetText(ifGetText(Component.interface_673.component_673_137), Component.interface_673.component_673_29);
            } else if (ifGetGraphic(intArg0) == Graphic.symbols_1_3) {
                ifSetText("Both email addresses match.", Component.interface_673.component_673_29);
            } else {
                ifSetText("Please enter your email address again here.", Component.interface_673.component_673_29);
            }
            ifSetSize(110, paraheight(ifGetText(Component.interface_673.component_673_29), 110 - 20, Graphic.verdana_11pt_regular) * 12 + 10, 0, 0, Component.interface_673.component_673_30);
            int1 = 128;
            int2 = 450;
            break;
        case Component.interface_673.component_673_83:
            if (stringLength(strArg0) > 0) {
                ifSetGraphic(Graphic.symbols_1_5, Component.interface_673.component_673_83);
                ifSetHide(false, Component.interface_673.component_673_88);
                ifSetText(strArg0, Component.interface_673.component_673_29);
                ifSetText(strArg0, Component.interface_673.component_673_138);
            } else if (ifGetGraphic(intArg0) == Graphic.symbols_1_5) {
                ifSetText(ifGetText(Component.interface_673.component_673_138), Component.interface_673.component_673_29);
            } else if (ifGetGraphic(intArg0) == Graphic.symbols_1_3) {
                ifSetText("You have entered your password.", Component.interface_673.component_673_29);
            } else {
                ifSetText("Please enter your desired password here.", Component.interface_673.component_673_29);
            }
            ifSetSize(110, paraheight(ifGetText(Component.interface_673.component_673_29), 110 - 20, Graphic.verdana_11pt_regular) * 12 + 10, 0, 0, Component.interface_673.component_673_30);
            int1 = 161;
            int2 = 450;
            break;
        case Component.interface_673.component_673_73:
            if (stringLength(strArg0) > 0) {
                ifSetGraphic(Graphic.symbols_1_5, Component.interface_673.component_673_73);
                ifSetHide(false, Component.interface_673.component_673_78);
                ifSetText(strArg0, Component.interface_673.component_673_29);
                ifSetText(strArg0, Component.interface_673.component_673_139);
            } else if (ifGetGraphic(intArg0) == Graphic.symbols_1_5) {
                ifSetText(ifGetText(Component.interface_673.component_673_139), Component.interface_673.component_673_29);
            } else if (ifGetGraphic(intArg0) == Graphic.symbols_1_3) {
                ifSetText("Both passwords match.", Component.interface_673.component_673_29);
            } else {
                ifSetText("Please enter your desired password again here.", Component.interface_673.component_673_29);
            }
            ifSetSize(110, paraheight(ifGetText(Component.interface_673.component_673_29), 110 - 10 * 2, Graphic.verdana_11pt_regular) * 12 + 10, 0, 0, Component.interface_673.component_673_30);
            int1 = 190;
            int2 = 450;
            break;
        case Component.interface_673.component_673_48:
            if (stringLength(strArg0) > 0) {
                ifSetGraphic(Graphic.symbols_1_5, Component.interface_673.component_673_48);
                ifSetHide(false, Component.interface_673.component_673_124);
                ifSetText(strArg0, Component.interface_673.component_673_29);
                ifSetText(strArg0, Component.interface_673.component_673_140);
            } else if (ifGetGraphic(intArg0) == Graphic.symbols_1_5) {
                ifSetText(ifGetText(Component.interface_673.component_673_140), Component.interface_673.component_673_29);
            } else if (ifGetGraphic(intArg0) == Graphic.symbols_1_3) {
                ifSetText("You have entered your age.", Component.interface_673.component_673_29);
            } else {
                ifSetText("Please enter your age, in years, here.", Component.interface_673.component_673_29);
            }
            int3 = ifGetWidth(Component.interface_673.component_673_37) - 277;
            ifSetSize(min(parawidth(ifGetText(Component.interface_673.component_673_29), stringWidth(ifGetText(Component.interface_673.component_673_29), Graphic.verdana_11pt_regular) / 4 * 3, Graphic.verdana_11pt_regular) + 10 * 2, int3), 30, 0, 0, Component.interface_673.component_673_30);
            int1 = 223;
            int2 = 277;
            break;
        default:
            ifSetHide(true, Component.interface_673.component_673_30);
            return;
    }
    let int4: number = ifGetHeight(Component.interface_673.component_673_30) / 2;
    let int5: number = int1 - int4;
    ifSetPosition(int2, int5, 0, 0, Component.interface_673.component_673_30);
    ifSetHide(false, Component.interface_673.component_673_30);

    if (compare(ifGetText(Component.interface_673.component_673_29), "Email already in use. Try a different email or click " + "<u=ebe0bc>" + "here" + "</u>" + " to recover this account.") == 0) {
        ifSetOnClick(hook(clientscript_loginscreen_link, "ss1", [str1, str2, true]), Component.interface_673.component_673_31);
    } else {
        ifSetOnClick(noHook(""), Component.interface_673.component_673_31);
    }
}
