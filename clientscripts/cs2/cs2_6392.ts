/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6392

function cs2_6392(intArg0: number): void {
    let int1: boolean = true;
    let int2: boolean = true;
    let int3: boolean = true;

    switch (intArg0) {
        case 1:
            int1 = false;
            ifSetText("Bronze rewards", Component.interface_1307.component_1307_73);
            break;
        case 2:
            int2 = false;
            ifSetText("Silver rewards", Component.interface_1307.component_1307_73);
            break;
        case 3:
            int3 = false;
            ifSetText("Gold rewards", Component.interface_1307.component_1307_73);
            break;
    }
    ifSetHide(int1, Component.interface_1307.component_1307_36);
    ifSetHide(int2, Component.interface_1307.component_1307_38);
    ifSetHide(int3, Component.interface_1307.component_1307_40);
    soundVorbisVolume(6185, 1, 0, 200);
}
