/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6463

function cs2_6463(intArg0: number): void {
    if (intArg0 == 0) {
        return;
    }
    cs2_6476(0, 0, Component.interface_1311.component_1311_15, Component.interface_1311.component_1311_16, Component.interface_1311.component_1311_21);
    hookMouseEnter(hook(cs2_6475, "iiIII", [0, 1, Component.interface_1311.component_1311_15, Component.interface_1311.component_1311_16, Component.interface_1311.component_1311_21]), Component.interface_1311.component_1311_27);
    hookMouseExit(hook(cs2_6475, "iiIII", [0, 0, Component.interface_1311.component_1311_15, Component.interface_1311.component_1311_16, Component.interface_1311.component_1311_21]), Component.interface_1311.component_1311_27);
    cs2_6476(0, 0, Component.interface_1311.component_1311_17, Component.interface_1311.component_1311_18, Component.interface_1311.component_1311_19);
    hookMouseEnter(hook(cs2_6475, "iiIII", [0, 1, Component.interface_1311.component_1311_17, Component.interface_1311.component_1311_18, Component.interface_1311.component_1311_19]), Component.interface_1311.component_1311_30);
    hookMouseExit(hook(cs2_6475, "iiIII", [0, 0, Component.interface_1311.component_1311_17, Component.interface_1311.component_1311_18, Component.interface_1311.component_1311_19]), Component.interface_1311.component_1311_30);
    cs2_6476(0, 0, Component.interface_1311.component_1311_23, Component.interface_1311.component_1311_24, Component.interface_1311.component_1311_25);
    hookMouseEnter(hook(cs2_6475, "iiIII", [0, 1, Component.interface_1311.component_1311_23, Component.interface_1311.component_1311_24, Component.interface_1311.component_1311_25]), Component.interface_1311.component_1311_28);
    hookMouseExit(hook(cs2_6475, "iiIII", [0, 0, Component.interface_1311.component_1311_23, Component.interface_1311.component_1311_24, Component.interface_1311.component_1311_25]), Component.interface_1311.component_1311_28);
    cs2_6476(0, 0, Component.interface_1311.component_1311_31, Component.interface_1311.component_1311_32, Component.interface_1311.component_1311_33);
    hookMouseEnter(hook(cs2_6475, "iiIII", [0, 1, Component.interface_1311.component_1311_31, Component.interface_1311.component_1311_32, Component.interface_1311.component_1311_33]), Component.interface_1311.component_1311_29);
    hookMouseExit(hook(cs2_6475, "iiIII", [0, 0, Component.interface_1311.component_1311_31, Component.interface_1311.component_1311_32, Component.interface_1311.component_1311_33]), Component.interface_1311.component_1311_29);
    ifSetHide(true, Component.interface_1311.component_1311_68);

    switch (intArg0) {
        case 1:
            cs2_6476(1, 0, Component.interface_1311.component_1311_17, Component.interface_1311.component_1311_18, Component.interface_1311.component_1311_19);
            hookMouseEnter(hook(cs2_6475, "iiIII", [1, 1, Component.interface_1311.component_1311_17, Component.interface_1311.component_1311_18, Component.interface_1311.component_1311_19]), Component.interface_1311.component_1311_30);
            hookMouseExit(hook(cs2_6475, "iiIII", [1, 0, Component.interface_1311.component_1311_17, Component.interface_1311.component_1311_18, Component.interface_1311.component_1311_19]), Component.interface_1311.component_1311_30);
            break;
        case 2:
            cs2_6476(1, 0, Component.interface_1311.component_1311_15, Component.interface_1311.component_1311_16, Component.interface_1311.component_1311_21);
            hookMouseEnter(hook(cs2_6475, "iiIII", [1, 1, Component.interface_1311.component_1311_15, Component.interface_1311.component_1311_16, Component.interface_1311.component_1311_21]), Component.interface_1311.component_1311_27);
            hookMouseExit(hook(cs2_6475, "iiIII", [1, 0, Component.interface_1311.component_1311_15, Component.interface_1311.component_1311_16, Component.interface_1311.component_1311_21]), Component.interface_1311.component_1311_27);
            ifSetHide(false, Component.interface_1311.component_1311_68);
            break;
        case 3:
            cs2_6476(1, 0, Component.interface_1311.component_1311_23, Component.interface_1311.component_1311_24, Component.interface_1311.component_1311_25);
            hookMouseEnter(hook(cs2_6475, "iiIII", [1, 1, Component.interface_1311.component_1311_23, Component.interface_1311.component_1311_24, Component.interface_1311.component_1311_25]), Component.interface_1311.component_1311_28);
            hookMouseExit(hook(cs2_6475, "iiIII", [1, 0, Component.interface_1311.component_1311_23, Component.interface_1311.component_1311_24, Component.interface_1311.component_1311_25]), Component.interface_1311.component_1311_28);
            break;
        case 4:
            cs2_6476(1, 0, Component.interface_1311.component_1311_31, Component.interface_1311.component_1311_32, Component.interface_1311.component_1311_33);
            hookMouseEnter(hook(cs2_6475, "iiIII", [1, 1, Component.interface_1311.component_1311_31, Component.interface_1311.component_1311_32, Component.interface_1311.component_1311_33]), Component.interface_1311.component_1311_29);
            hookMouseExit(hook(cs2_6475, "iiIII", [1, 0, Component.interface_1311.component_1311_31, Component.interface_1311.component_1311_32, Component.interface_1311.component_1311_33]), Component.interface_1311.component_1311_29);
            break;
    }
}
