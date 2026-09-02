/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6056

function cs2_6056(): void {
    let int0: component = Component.interface_548.component_548_17;

    if (getWindowMode() >= 2) {
        int0 = Component.interface_746.component_746_41;
    }
    ccDeleteAll(int0);
    ccCreate(int0, 5, 0);
    ccSetSize(220, 200, 0, 0);
    ccSettiling(true);
    ccSetGraphic(cs2_6267(Graphic.graphic_10219));
    ccSetPosition(-219, 0, 0, 1);
    ccSetOnTimer(hook(cs2_6057, "Iiii", [int0, 0, 0, 0]));
}
