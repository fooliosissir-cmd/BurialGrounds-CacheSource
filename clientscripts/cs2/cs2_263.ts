/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_263

function cs2_263(): void {
    ifSetHide(true, Component.interface_923.component_923_16);
    ifSetHide(true, Component.interface_923.component_923_18);
    ifSetHide(true, Component.interface_923.component_923_20);
    ifSetHide(true, Component.interface_923.component_923_22);
    ifSetHide(true, Component.interface_923.component_923_24);
    ifSetHide(true, Component.interface_923.component_923_26);
    ifSetHide(true, Component.interface_923.component_923_28);
    ifSetHide(true, Component.interface_923.component_923_30);
    ifSetHide(true, Component.interface_923.component_923_17);
    ifSetHide(true, Component.interface_923.component_923_19);
    ifSetHide(true, Component.interface_923.component_923_21);
    ifSetHide(true, Component.interface_923.component_923_23);
    ifSetHide(true, Component.interface_923.component_923_25);
    ifSetHide(true, Component.interface_923.component_923_27);
    ifSetHide(true, Component.interface_923.component_923_29);
    ifSetHide(true, Component.interface_923.component_923_31);
    let str0: string = "Bait: None";

    switch (varc_fishcomp_client_bait) {
        case 1:
            str0 = "Bait: worm";
            ifSetHide(false, Component.interface_923.component_923_17);
            break;
        case 2:
            str0 = "Bait: maggot";
            ifSetHide(false, Component.interface_923.component_923_19);
            break;
        case 4:
            str0 = "Bait: locust";
            ifSetHide(false, Component.interface_923.component_923_21);
            break;
        case 3:
            str0 = "Bait: cricket";
            ifSetHide(false, Component.interface_923.component_923_23);
            break;
        case 5:
            str0 = "Bait: cray";
            ifSetHide(false, Component.interface_923.component_923_25);
            break;
        case 6:
            str0 = "Bait: shrimp";
            ifSetHide(false, Component.interface_923.component_923_27);
            break;
        case 7:
            str0 = "Bait: green moth";
            ifSetHide(false, Component.interface_923.component_923_29);
            break;
        case 8:
            str0 = "Bait: grey moth";
            ifSetHide(false, Component.interface_923.component_923_31);
            break;
    }
    ifSetText(str0, Component.interface_923.component_923_112);

    if (varc_fishcomp_client_bait == 0) {
        ifSetOnTimer(hook(cs2_6252, "", []), Component.interface_923.component_923_105);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_923.component_923_105);
        ifSetHide(false, Component.interface_923.component_923_64);
    }
}
