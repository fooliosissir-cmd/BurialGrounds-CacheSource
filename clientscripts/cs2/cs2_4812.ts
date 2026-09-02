/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4812

function cs2_4812(intArg0: graphic, intArg1: number, intArg2: number, strArg0: string): void {
    if (tooltip_time(intArg2) == 0) {
        return;
    }

    if (varc_tooltip_built != 1) {
        strArg0 = strArg0 + "<br>" + "Requires tier " + tostring(intArg1) + " resources.";
        ifSetGraphic(intArg0, Component.interface_1258.component_1258_496);
        ifSetText(strArg0, Component.interface_1258.component_1258_497);
        ifSetHide(false, Component.interface_1258.component_1258_485);
        varc_tooltip_built = 1;
    }
}
