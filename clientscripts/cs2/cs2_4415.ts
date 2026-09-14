/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4415

function cs2_4415(): void {
    ifSetText(activeClanSettingsGetClanName(), Component.interface_1107.component_1107_155);
    ifSetText("Game time:" + "<br>" + clan_offset_tostring(pushVarClanSetting()), Component.interface_1107.component_1107_19);
    ifSetText(activeClanSettingsGetAffinedDisplayName(activeClanSettingsGetcurrentownerSlot()), Component.interface_1107.component_1107_35);

    if (pushVarClanSettingBit<6>() > 0) {
        ifSetText(tostring(pushVarClanSettingBit<6>()), Component.interface_1107.component_1107_36);
    }
    ifSetText(tostring(activeClanSettingsGetAffinedCount()), Component.interface_1107.component_1107_37);

    if (pushVarClanSettingBit<4>() == 0) {
        ifSetText("This clan is not recruiting.", Component.interface_1107.component_1107_5);
    } else if (pushVarClanSettingBit<4>() == 1) {
        ifSetText("This clan is recruiting.", Component.interface_1107.component_1107_5);
    }
    cs2_4332(Component.interface_1107.component_1107_96, Component.interface_1107.component_1107_106);
    cs2_4334(Component.interface_1107.component_1107_7, Component.interface_1107.component_1107_8);
    cs2_4336(Component.interface_1107.component_1107_88);
    cs2_4343(Component.interface_1107.component_1107_89);
    cs2_4329(Component.interface_1107.component_1107_38);
    cs2_4328(Component.interface_1107.component_1107_181);
    clan_event_populate();
    ifSetHide(true, Component.interface_1107.component_1107_139);
}
