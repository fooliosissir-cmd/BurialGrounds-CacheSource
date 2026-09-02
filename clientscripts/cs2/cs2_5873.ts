/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5873

function cs2_5873(): void {
    let int0: number = ifGetWidth(Component.interface_429.component_429_58) - ifGetWidth(Component.interface_429.component_429_59);
    let int1: number = scale(detailGetSpeechvol(), 127, int0);

    ifSetPosition(int1, 0, 0, 0, Component.interface_429.component_429_59);
}
