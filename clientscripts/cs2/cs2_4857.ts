/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4857

function cs2_4857(): void {
    if (clanProfileFind() == 1) {
        cs2_4854();
        if (loadClanVarbit<2580>() < 7) {
            ifSetHide(true, Component.interface_1258.component_1258_21);
            ifSetHide(true, Component.interface_1258.component_1258_20);
            ifSetHide(true, Component.interface_1258.component_1258_9);
            ifSetHide(true, Component.interface_1258.component_1258_10);
        }
        if (loadClanVarbit<2580>() < 5) {
            ifSetHide(true, Component.interface_1258.component_1258_18);
            ifSetHide(true, Component.interface_1258.component_1258_19);
            ifSetHide(true, Component.interface_1258.component_1258_7);
            ifSetHide(true, Component.interface_1258.component_1258_8);
        }
        if (loadClanVarbit<2580>() < 3) {
            ifSetHide(true, Component.interface_1258.component_1258_5);
            ifSetHide(true, Component.interface_1258.component_1258_6);
        }
    }
}
