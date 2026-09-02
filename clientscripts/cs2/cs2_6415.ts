/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6415

function cs2_6415(intArg0: number): void {
    let int1: component = -1;
    let int2: component = -1;
    let int3: component = -1;
    let int4: component = -1;

    switch (intArg0) {
        case 85721111:
            int1 = Component.interface_1308.component_1308_24;
            int2 = Component.interface_1308.component_1308_47;
            int3 = Component.interface_1308.component_1308_46;
            int4 = Component.interface_1308.component_1308_48;
            break;
        case 85721113:
            int1 = Component.interface_1308.component_1308_26;
            int2 = Component.interface_1308.component_1308_365;
            int3 = Component.interface_1308.component_1308_364;
            int4 = Component.interface_1308.component_1308_366;
            break;
        case 85721115:
            int1 = Component.interface_1308.component_1308_28;
            int2 = Component.interface_1308.component_1308_378;
            int3 = Component.interface_1308.component_1308_377;
            int4 = Component.interface_1308.component_1308_379;
            break;
        case 85721117:
            int1 = Component.interface_1308.component_1308_30;
            int2 = Component.interface_1308.component_1308_391;
            int3 = Component.interface_1308.component_1308_390;
            int4 = Component.interface_1308.component_1308_392;
            break;
        case 85721119:
            int1 = Component.interface_1308.component_1308_32;
            int2 = Component.interface_1308.component_1308_404;
            int3 = Component.interface_1308.component_1308_403;
            int4 = Component.interface_1308.component_1308_405;
            break;
        case 85721121:
            int1 = Component.interface_1308.component_1308_34;
            int2 = Component.interface_1308.component_1308_417;
            int3 = Component.interface_1308.component_1308_416;
            int4 = Component.interface_1308.component_1308_418;
            break;
    }

    if (int1 == -1 || int2 == -1 || int3 == -1) {
        return;
    }
    ifSetColour(colour(0x5B5959), int2);
    ifSetHide(true, int3);
    ifSetHide(false, int1);
    ifSetText("Nothing", int2);
    ifSetHide(true, int4);
}
