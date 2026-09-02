/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1162

function cs2_1162(): void {
    let int0: number = ifGetWidth(Component.interface_429.component_429_50) - ifGetWidth(Component.interface_429.component_429_51);
    let int1: number = scale(detailGetBgsoundvol(), 127, int0);

    ifSetPosition(int1, 0, 0, 0, Component.interface_429.component_429_51);
}
