/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_event_populate]

function clan_event_populate(): void {
    ifSetText("Event", Component.interface_1107.component_1107_60);
    ifSetHide(false, Component.interface_1107.component_1107_58);
    ifSetHide(false, Component.interface_1107.component_1107_59);

    switch (loadClanSettingVarbit<130>()) {
        case 1:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, loadClanSettingVarbit<98>(), loadClanSettingVarbit<106>(), loadClanSettingVarbit<82>(), loadClanSettingVarbit<90>(), loadClanSettingVarbit<74>(), loadClanSettingVarbit<114>(), loadClanSettingVar<65>(), loadClanSettingVarbit<132>(), loadClanSettingVarLong<122>());
            break;
        case 2:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, loadClanSettingVarbit<99>(), loadClanSettingVarbit<107>(), loadClanSettingVarbit<83>(), loadClanSettingVarbit<91>(), loadClanSettingVarbit<75>(), loadClanSettingVarbit<115>(), loadClanSettingVar<66>(), loadClanSettingVarbit<133>(), loadClanSettingVarLong<123>());
            break;
        case 3:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, loadClanSettingVarbit<100>(), loadClanSettingVarbit<108>(), loadClanSettingVarbit<84>(), loadClanSettingVarbit<92>(), loadClanSettingVarbit<76>(), loadClanSettingVarbit<116>(), loadClanSettingVar<67>(), loadClanSettingVarbit<134>(), loadClanSettingVarLong<124>());
            break;
        case 4:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, loadClanSettingVarbit<101>(), loadClanSettingVarbit<109>(), loadClanSettingVarbit<85>(), loadClanSettingVarbit<93>(), loadClanSettingVarbit<77>(), loadClanSettingVarbit<117>(), loadClanSettingVar<68>(), loadClanSettingVarbit<135>(), loadClanSettingVarLong<125>());
            break;
        case 5:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, loadClanSettingVarbit<102>(), loadClanSettingVarbit<110>(), loadClanSettingVarbit<86>(), loadClanSettingVarbit<94>(), loadClanSettingVarbit<78>(), loadClanSettingVarbit<118>(), loadClanSettingVar<69>(), loadClanSettingVarbit<136>(), loadClanSettingVarLong<126>());
            break;
        case 6:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, loadClanSettingVarbit<103>(), loadClanSettingVarbit<111>(), loadClanSettingVarbit<87>(), loadClanSettingVarbit<95>(), loadClanSettingVarbit<79>(), loadClanSettingVarbit<119>(), loadClanSettingVar<70>(), loadClanSettingVarbit<137>(), loadClanSettingVarLong<127>());
            break;
        case 7:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, loadClanSettingVarbit<104>(), loadClanSettingVarbit<112>(), loadClanSettingVarbit<88>(), loadClanSettingVarbit<96>(), loadClanSettingVarbit<80>(), loadClanSettingVarbit<120>(), loadClanSettingVar<71>(), loadClanSettingVarbit<138>(), loadClanSettingVarLong<128>());
            break;
        case 8:
            cs2_4421(Component.interface_1107.component_1107_50, Component.interface_1107.component_1107_51, loadClanSettingVarbit<105>(), loadClanSettingVarbit<113>(), loadClanSettingVarbit<89>(), loadClanSettingVarbit<97>(), loadClanSettingVarbit<81>(), loadClanSettingVarbit<121>(), loadClanSettingVar<72>(), loadClanSettingVarbit<139>(), loadClanSettingVarLong<129>());
            break;
        default:
            hookMouseEnter(noHook(""), Component.interface_1107.component_1107_54);
            hookMouseExit(noHook(""), Component.interface_1107.component_1107_54);
            hookMouseEnter(noHook(""), Component.interface_1107.component_1107_56);
            hookMouseExit(noHook(""), Component.interface_1107.component_1107_55);
            hookMouseEnter(noHook(""), Component.interface_1107.component_1107_56);
            hookMouseExit(noHook(""), Component.interface_1107.component_1107_56);
            ifSetText("Events (none)", Component.interface_1107.component_1107_60);
            ifSetHide(true, Component.interface_1107.component_1107_58);
            ifSetHide(true, Component.interface_1107.component_1107_59);
            ifSetText("", Component.interface_1107.component_1107_50);
            ifSetText("", Component.interface_1107.component_1107_51);
            ifSetOnClick(noHook(""), Component.interface_1107.component_1107_57);
            break;
    }
}
