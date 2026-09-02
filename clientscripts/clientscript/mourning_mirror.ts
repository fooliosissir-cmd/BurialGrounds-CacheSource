/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mourning_mirror]

function mourning_mirror(intArg0: component): void {
    ifSetHide(false, Component.interface_181.component_181_1);

    switch (varc_mourning_mirror) {
        case 1:
            ifSetModelAngle(0, 0, 510, 762, 0, 410, intArg0);
            break;
        case 2:
            ifSetModelAngle(0, 0, 514, 1241, 0, 410, intArg0);
            break;
        case 3:
            ifSetModelAngle(0, 0, 512, 1536, 1250, 410, intArg0);
            break;
        case 4:
            ifSetModelAngle(0, 0, 512, 0, 1250, 410, intArg0);
            break;
        case 5:
            ifSetModelAngle(0, 0, 512, 512, 1250, 410, intArg0);
            break;
        case 6:
            ifSetModelAngle(0, 0, 512, 1024, 1250, 410, intArg0);
            break;
        default:
            ifSetHide(true, Component.interface_181.component_181_1);
            break;
    }
}
