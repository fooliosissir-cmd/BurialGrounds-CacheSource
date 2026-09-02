/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2284

function cs2_2284(intArg0: boolean, intArg1: boolean): void {
    let int2: number = createEmailValidateReply();

    if (int2 == -3) {
        return;
    }
    ifSetOnTimer(noHook(""), Component.interface_673.component_673_20);
    create_please_wait(0);

    if (int2 == 2) {
        ifSetGraphic(Graphic.symbols_1_3, Component.interface_673.component_673_93);
        ifSetHide(true, Component.interface_673.component_673_98);
        ifSetHide(true, Component.interface_673.component_673_30);
        if (intArg1 == true && stringLength(varcstr_326) > 0) {
            cs2_3953(0);
        }
        if (stringLength(varcstr_124) > 0) {
            cs2_3228(7, 1, 0);
            if (stringLength(varcstr_125) > 0) {
                cs2_3228(8, 1, 0);
            }
        }
        if (intArg0 == true) {
            proc_create_focus(14, 1);
        }
        return;
    }
    let str0: string = "accountappeal";
    let str1: string = "passwordchoice.ws";

    switch (int2) {
        case 3:
            create_error("Error contacting server.", Component.interface_673.component_673_93);
            break;
        case 20:
            create_error("Email already in use. Try a different email or click " + "<u=ebe0bc>" + "here" + "</u>" + " to recover this account.", Component.interface_673.component_673_93);
            break;
        case 21:
            create_error("Please enter a valid Email address.", Component.interface_673.component_673_93);
            break;
        default:
            create_error("Unexpected server response.", Component.interface_673.component_673_93);
            break;
    }

    if (intArg1 == true && stringLength(varcstr_326) > 0) {
        cs2_3953(0);
    }
}
