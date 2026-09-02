/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1159

function cs2_1159(): void {
    let int0: number = ifGetWidth(Component.interface_429.component_429_35) - ifGetWidth(Component.interface_429.component_429_36);
    let int1: number = scale(detailGetMusicVol(), 255, int0);

    ifSetPosition(int1, 0, 0, 0, Component.interface_429.component_429_36);
}
