/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_event_populate]

function clan_event_populate(): void {
    ifSetText("Event", Component.interface_1107.component_1107_60);
    ifSetHide(false, Component.interface_1107.component_1107_58);
    ifSetHide(false, Component.interface_1107.component_1107_59);

    switch (pushVarClanSettingBit<130>()) {
        case 1:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, pushVarClanSettingBit<98>(), pushVarClanSettingBit<106>(), pushVarClanSettingBit<82>(), pushVarClanSettingBit<90>(), pushVarClanSettingBit<74>(), pushVarClanSettingBit<114>(), pushVarClanSetting<65>(), pushVarClanSettingBit<132>(), pushVarClanSettingLong<122>());
            break;
        case 2:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, pushVarClanSettingBit<99>(), pushVarClanSettingBit<107>(), pushVarClanSettingBit<83>(), pushVarClanSettingBit<91>(), pushVarClanSettingBit<75>(), pushVarClanSettingBit<115>(), pushVarClanSetting<66>(), pushVarClanSettingBit<133>(), pushVarClanSettingLong<123>());
            break;
        case 3:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, pushVarClanSettingBit<100>(), pushVarClanSettingBit<108>(), pushVarClanSettingBit<84>(), pushVarClanSettingBit<92>(), pushVarClanSettingBit<76>(), pushVarClanSettingBit<116>(), pushVarClanSetting<67>(), pushVarClanSettingBit<134>(), pushVarClanSettingLong<124>());
            break;
        case 4:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, pushVarClanSettingBit<101>(), pushVarClanSettingBit<109>(), pushVarClanSettingBit<85>(), pushVarClanSettingBit<93>(), pushVarClanSettingBit<77>(), pushVarClanSettingBit<117>(), pushVarClanSetting<68>(), pushVarClanSettingBit<135>(), pushVarClanSettingLong<125>());
            break;
        case 5:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, pushVarClanSettingBit<102>(), pushVarClanSettingBit<110>(), pushVarClanSettingBit<86>(), pushVarClanSettingBit<94>(), pushVarClanSettingBit<78>(), pushVarClanSettingBit<118>(), pushVarClanSetting<69>(), pushVarClanSettingBit<136>(), pushVarClanSettingLong<126>());
            break;
        case 6:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, pushVarClanSettingBit<103>(), pushVarClanSettingBit<111>(), pushVarClanSettingBit<87>(), pushVarClanSettingBit<95>(), pushVarClanSettingBit<79>(), pushVarClanSettingBit<119>(), pushVarClanSetting<70>(), pushVarClanSettingBit<137>(), pushVarClanSettingLong<127>());
            break;
        case 7:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, pushVarClanSettingBit<104>(), pushVarClanSettingBit<112>(), pushVarClanSettingBit<88>(), pushVarClanSettingBit<96>(), pushVarClanSettingBit<80>(), pushVarClanSettingBit<120>(), pushVarClanSetting<71>(), pushVarClanSettingBit<138>(), pushVarClanSettingLong<128>());
            break;
        case 8:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, pushVarClanSettingBit<105>(), pushVarClanSettingBit<113>(), pushVarClanSettingBit<89>(), pushVarClanSettingBit<97>(), pushVarClanSettingBit<81>(), pushVarClanSettingBit<121>(), pushVarClanSetting<72>(), pushVarClanSettingBit<139>(), pushVarClanSettingLong<129>());
            break;
        default:
            ifSetOnMouseOver(noHook(""), Component.interface_1107.component_1107_54);
            ifSetOnMouseLeave(noHook(""), Component.interface_1107.component_1107_54);
            ifSetOnMouseOver(noHook(""), Component.interface_1107.component_1107_56);
            ifSetOnMouseLeave(noHook(""), Component.interface_1107.component_1107_55);
            ifSetOnMouseOver(noHook(""), Component.interface_1107.component_1107_56);
            ifSetOnMouseLeave(noHook(""), Component.interface_1107.component_1107_56);
            ifSetText("Events (none)", Component.interface_1107.component_1107_60);
            ifSetHide(true, Component.interface_1107.component_1107_58);
            ifSetHide(true, Component.interface_1107.component_1107_59);
            ifSetText("", Component.interface_1107.component_1107_50);
            ifSetText("", Component.interface_1107.component_1107_51);
            ifSetOnClick(noHook(""), Component.interface_1107.component_1107_57);
            break;
    }
}
