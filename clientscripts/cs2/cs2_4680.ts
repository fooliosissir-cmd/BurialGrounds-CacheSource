/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4680

function cs2_4680(): void {
    let int0: number = ifGetWidth(Component.interface_302.component_302_77);
    let int1: number = scale(varc_deadly_hunting_side_energy, 10000, int0);

    ifSetSize(int1, ifGetHeight(Component.interface_302.component_302_77), 0, 0, Component.interface_302.component_302_78);
}
