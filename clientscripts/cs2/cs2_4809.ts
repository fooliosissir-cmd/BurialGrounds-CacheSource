/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4809

function cs2_4809(): void {
    ifSetHide(true, Component.interface_1258.component_1258_443);
    ifSetHide(true, Component.interface_1258.component_1258_377);
    ifSetHide(true, Component.interface_1258.component_1258_305);
    ifSetHide(true, Component.interface_1258.component_1258_431);
    ifSetHide(true, Component.interface_1258.component_1258_365);
    ifSetHide(true, Component.interface_1258.component_1258_293);

    if (clan_custom_slot_disabled(varbit_clan_custom_stronghold_current_slot_varp) == 1) {
        ifSetHide(false, Component.interface_1258.component_1258_431);
        ifSetHide(false, Component.interface_1258.component_1258_365);
        ifSetHide(false, Component.interface_1258.component_1258_293);
    } else {
        ifSetHide(false, Component.interface_1258.component_1258_443);
        ifSetHide(false, Component.interface_1258.component_1258_377);
        ifSetHide(false, Component.interface_1258.component_1258_305);
    }
    cs2_4840();
    cs2_4814();
}
