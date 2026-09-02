/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5038

function cs2_5038(intArg0: number): void {
    soundVorbisVolume(6185, 1, 0, 200);

    if (intArg0 == 1) {
        ifSetHide(true, Component.interface_1111.component_1111_6);
        ifSetHide(false, Component.interface_1111.component_1111_1);
    } else {
        ifSetHide(false, Component.interface_1111.component_1111_6);
        ifSetHide(true, Component.interface_1111.component_1111_1);
    }
}
