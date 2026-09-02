/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6526

function cs2_6526(intArg0: number): void {
    let int1: boolean = true;
    let int2: boolean = true;
    let int3: boolean = true;

    switch (intArg0) {
        case 1:
            int1 = false;
            ifSetText("Bronze rewards", Component.interface_1317.component_1317_71);
            break;
        case 2:
            int2 = false;
            ifSetText("Silver rewards", Component.interface_1317.component_1317_71);
            break;
        case 3:
            int3 = false;
            ifSetText("Gold rewards", Component.interface_1317.component_1317_71);
            break;
    }
    ifSetHide(int1, Component.interface_1317.component_1317_37);
    ifSetHide(int2, Component.interface_1317.component_1317_39);
    ifSetHide(int3, Component.interface_1317.component_1317_41);
    soundVorbisVolume(6185, 1, 0, 200);
}
