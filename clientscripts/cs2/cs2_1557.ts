/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1557

function cs2_1557(): void {
    ifSetPosition(cs2_1552(varc_1029, varcstr_meslayerinput, Graphic.b12_full, Component.interface_752.component_752_5, -1), ifGetY(Component.interface_752.component_752_6), 0, 0, Component.interface_752.component_752_6);

    if (appletHasFocus() == 1) {
        ifSetHide(false, Component.interface_752.component_752_6);
    } else {
        ifSetHide(true, Component.interface_752.component_752_6);
    }
    ifSetOnTimer(hook(cs2_1400, "iI", [clientClock(), Component.interface_752.component_752_6]), Component.interface_752.component_752_5);
}
