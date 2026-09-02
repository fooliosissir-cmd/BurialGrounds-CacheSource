/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5639

function cs2_5639(intArg0: number, intArg1: number, intArg2: number): number {
    let str0: string = "";
    let int3: component = -1;

    switch (intArg0) {
        case 7:
            str0 = varcstr_124;
            int3 = Component.interface_673.component_673_83;
            varcstr_328 = varcstr_124;
            break;
        case 8:
            str0 = varcstr_125;
            int3 = Component.interface_673.component_673_73;
            varcstr_329 = varcstr_125;
            break;
    }
    let int4: number = stringLength(str0);

    if (int4 <= 0) {
        switch (intArg0) {
            case 7:
                create_error("Please enter your desired password here.", Component.interface_673.component_673_83);
                break;
            case 8:
                create_error("Please enter your desired password again here.", Component.interface_673.component_673_73);
                break;
        }
        return 0;
    }

    if (intArg1 == 1 && compare(varcstr_124, varcstr_125) != 0 && (stringLength(varcstr_124) > 0 || stringLength(varcstr_125) > 0)) {
        create_error("Please ensure both passwords match.", Component.interface_673.component_673_73);
        return 0;
    } else if (int4 < 5) {
        create_error("Passwords must be at least 5 characters long.", int3);
        return 0;
    } else if (int4 > 20) {
        create_error("Passwords must be no more than " + tostring(20) + " characters long.", int3);
        return 0;
    } else if (cs2_2202(str0) == 1) {
        create_error("Passwords may only contain letters and numbers.", int3);
        return 0;
    } else if (stringIndexofString(varcstr_122, str0, 0) != -1) {
        create_error("Your password is too similar to your Email address.", int3);
        return 0;
    }
    let str1: string = subString(str0, 0, 1);
    let int5: number = stringLength(str0);
    let int6: number = 0;
    let int7: number = 0;

    while (int6 < int5) {
        if (stringIndexofString(str0, str1, int6) == int6) {
            int7 = int7 + 1;
        }
        int6 = int6 + 1;
    }

    if (int7 == int5) {
        create_error("Your password is too easy to guess.", int3);
        return 0;
    }

    switch (intArg0) {
        case 7:
            ifSetGraphic(Graphic.symbols_1_3, Component.interface_673.component_673_83);
            ifSetHide(true, Component.interface_673.component_673_88);
            break;
        case 8:
            ifSetGraphic(Graphic.symbols_1_3, Component.interface_673.component_673_73);
            ifSetHide(true, Component.interface_673.component_673_78);
            break;
    }
    ifSetHide(true, Component.interface_673.component_673_30);

    if (intArg2 == 1) {
        switch (intArg0) {
            case 7:
                proc_create_focus(8, 1);
                break;
            case 8:
                proc_create_focus(15, 1);
                break;
        }
    }
    return 1;
}
