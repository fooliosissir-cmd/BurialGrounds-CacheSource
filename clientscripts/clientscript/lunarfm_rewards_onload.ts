/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lunarfm_rewards_onload]

function lunarfm_rewards_onload(): void {
    cs2_4267();
    cs2_4274();
    ifSetText("", Component.interface_1083.component_1083_85);
    ifSetText("Select a reward for more information.", Component.interface_1083.component_1083_87);
    ifSetText("", Component.interface_1083.component_1083_89);
    ifSetHide(true, Component.interface_1083.component_1083_90);
    ifSetHide(true, Component.interface_1083.component_1083_164);
    ifSetHide(true, Component.interface_1083.component_1083_159);
    ifSetHide(false, Component.interface_1083.component_1083_157);
    ifSetHide(false, Component.interface_1083.component_1083_158);
    ifSetHide(false, Component.interface_1083.component_1083_165);

    if (varbit_lunarfm_spells_unlocked < 11) {
        cs2_4270();
        ifSetText("Spells", Component.interface_1083.component_1083_85);
    } else {
        cs2_4272();
        ifSetText("Wishes", Component.interface_1083.component_1083_85);
    }
}
