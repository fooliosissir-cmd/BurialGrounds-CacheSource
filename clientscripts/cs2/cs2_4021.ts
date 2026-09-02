/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4021

function cs2_4021(strArg0: string): void {
    let int0: number = stringWidth(strArg0, ifGetfontmetrics(Component.interface_1245.component_1245_330));

    ifSetSize(int0 + 30, ifGetHeight(Component.interface_1245.component_1245_326), 0, 0, Component.interface_1245.component_1245_326);
    ifSetText(strArg0, Component.interface_1245.component_1245_330);
}
