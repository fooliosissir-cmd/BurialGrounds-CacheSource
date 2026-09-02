/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clansettings_interface_refresh]

function proc_clansettings_interface_refresh(): void {
    let int0: number = 0;
    let int1: number = 0;

    if (activeClanSettingsFindAffined() == 1) {
        if (activeClanSettingsGetallowunaffined() == 1) {
            int1 = 1;
        } else if (activeClanSettingsGetallowunaffined() == 0) {
            int1 = 0;
        }
        int0 = loadClanSettingVar();
        int0 = int0 / 10 + 72;
        cs2_4501(Component.interface_1096.component_1096_228, enumOp(type_int, type_string, Enum.clansettings_timezone_enum, int0));
        cs2_4501(Component.interface_1096.component_1096_355, enumOp(type_int, type_string, Enum.clan_core_int_to_filter_rank_plus_1, varc_1516));
        cs2_4501(Component.interface_1096.component_1096_196, enumOp(type_int, type_string, Enum.clan_permissions_guest_access, loadClanSettingVarbit<292>()));
        cs2_4329(Component.interface_1096.component_1096_304);
        if (loadClanSettingVarbit<6>() == 0) {
            cs2_4501(Component.interface_1096.component_1096_279, "Not set");
        } else {
            cs2_4501(Component.interface_1096.component_1096_279, enumOp(type_int, type_string, Enum.clan_noticeboard_event_world, loadClanSettingVarbit<6>()));
        }
        if (loadClanSettingVarbit<5>() == 1) {
            if (cs2_4292() == 1) {
                ifSetHide(false, Component.interface_1096.component_1096_247);
                ifSetHide(true, Component.interface_1096.component_1096_249);
                ifSetHide(true, Component.interface_1096.component_1096_248);
                ifSetHide(true, Component.interface_1096.component_1096_250);
            } else {
                ifSetHide(true, Component.interface_1096.component_1096_247);
                ifSetHide(true, Component.interface_1096.component_1096_249);
                ifSetHide(false, Component.interface_1096.component_1096_248);
                ifSetHide(true, Component.interface_1096.component_1096_250);
            }
        } else if (cs2_4292() == 1) {
            ifSetHide(true, Component.interface_1096.component_1096_247);
            ifSetHide(false, Component.interface_1096.component_1096_249);
            ifSetHide(true, Component.interface_1096.component_1096_248);
            ifSetHide(true, Component.interface_1096.component_1096_250);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_247);
            ifSetHide(true, Component.interface_1096.component_1096_249);
            ifSetHide(true, Component.interface_1096.component_1096_248);
            ifSetHide(false, Component.interface_1096.component_1096_250);
        }
        if (loadClanSettingVarbit<4>() == 1) {
            if (cs2_4292() == 1) {
                ifSetHide(false, Component.interface_1096.component_1096_243);
                ifSetHide(true, Component.interface_1096.component_1096_245);
                ifSetHide(true, Component.interface_1096.component_1096_244);
                ifSetHide(true, Component.interface_1096.component_1096_246);
            } else {
                ifSetHide(true, Component.interface_1096.component_1096_243);
                ifSetHide(true, Component.interface_1096.component_1096_245);
                ifSetHide(false, Component.interface_1096.component_1096_244);
                ifSetHide(true, Component.interface_1096.component_1096_246);
            }
        } else if (cs2_4292() == 1) {
            ifSetHide(true, Component.interface_1096.component_1096_243);
            ifSetHide(false, Component.interface_1096.component_1096_245);
            ifSetHide(true, Component.interface_1096.component_1096_244);
            ifSetHide(true, Component.interface_1096.component_1096_246);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_243);
            ifSetHide(true, Component.interface_1096.component_1096_245);
            ifSetHide(true, Component.interface_1096.component_1096_244);
            ifSetHide(false, Component.interface_1096.component_1096_246);
        }
        if (activeClanSettingsGetallowunaffined() == 1) {
            if (cs2_4292() == 1) {
                ifSetHide(false, Component.interface_1096.component_1096_769);
                ifSetHide(true, Component.interface_1096.component_1096_724);
                ifSetHide(true, Component.interface_1096.component_1096_723);
                ifSetHide(true, Component.interface_1096.component_1096_725);
            } else {
                ifSetHide(true, Component.interface_1096.component_1096_769);
                ifSetHide(true, Component.interface_1096.component_1096_724);
                ifSetHide(false, Component.interface_1096.component_1096_723);
                ifSetHide(true, Component.interface_1096.component_1096_725);
            }
        } else if (cs2_4292() == 1) {
            ifSetHide(true, Component.interface_1096.component_1096_769);
            ifSetHide(false, Component.interface_1096.component_1096_724);
            ifSetHide(true, Component.interface_1096.component_1096_723);
            ifSetHide(true, Component.interface_1096.component_1096_725);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_769);
            ifSetHide(true, Component.interface_1096.component_1096_724);
            ifSetHide(true, Component.interface_1096.component_1096_723);
            ifSetHide(false, Component.interface_1096.component_1096_725);
        }
        if (activeClanSettingsGetranktalk() == -1) {
            if (cs2_4292() == 1) {
                ifSetHide(false, Component.interface_1096.component_1096_773);
                ifSetHide(true, Component.interface_1096.component_1096_771);
                ifSetHide(true, Component.interface_1096.component_1096_770);
                ifSetHide(true, Component.interface_1096.component_1096_772);
            } else {
                ifSetHide(true, Component.interface_1096.component_1096_773);
                ifSetHide(true, Component.interface_1096.component_1096_771);
                ifSetHide(false, Component.interface_1096.component_1096_770);
                ifSetHide(true, Component.interface_1096.component_1096_772);
            }
        } else if (cs2_4292() == 1) {
            ifSetHide(true, Component.interface_1096.component_1096_773);
            ifSetHide(false, Component.interface_1096.component_1096_771);
            ifSetHide(true, Component.interface_1096.component_1096_770);
            ifSetHide(true, Component.interface_1096.component_1096_772);
        } else {
            ifSetHide(true, Component.interface_1096.component_1096_773);
            ifSetHide(true, Component.interface_1096.component_1096_771);
            ifSetHide(true, Component.interface_1096.component_1096_770);
            ifSetHide(false, Component.interface_1096.component_1096_772);
        }
        if (clanProfileFind() == 1) {
            cs2_4501(Component.interface_1096.component_1096_211, enumOp(type_int, type_string, Enum.clan_signpost_viewing_permission, loadClanVar<2811>()));
            cs2_4501(Component.interface_1096.component_1096_196, enumOp(type_int, type_string, Enum.clan_permissions_guest_access, loadClanSettingVarbit<292>()));
        } else {
            cs2_4501(Component.interface_1096.component_1096_211, "N/A");
            cs2_4501(Component.interface_1096.component_1096_196, "N/A");
        }
        if (cs2_4292() == 1) {
            ifSetHide(true, Component.interface_1096.component_1096_235);
            ifSetHide(true, Component.interface_1096.component_1096_285);
        } else {
            ifSetHide(false, Component.interface_1096.component_1096_235);
            ifSetHide(false, Component.interface_1096.component_1096_285);
        }
        proc_clansettings_list_build();
        if (cs2_4292() == 1) {
            ifSetHide(true, Component.interface_1096.component_1096_271);
            ifSetHide(true, Component.interface_1096.component_1096_257);
            ifSetHide(true, Component.interface_1096.component_1096_132);
            ifSetHide(true, Component.interface_1096.component_1096_125);
            ifSetHide(true, Component.interface_1096.component_1096_161);
            ifSetHide(true, Component.interface_1096.component_1096_349);
            ifSetHide(true, Component.interface_1096.component_1096_298);
        } else {
            ifSetHide(false, Component.interface_1096.component_1096_271);
            ifSetHide(false, Component.interface_1096.component_1096_257);
            ifSetHide(false, Component.interface_1096.component_1096_132);
            ifSetHide(false, Component.interface_1096.component_1096_125);
            ifSetHide(false, Component.interface_1096.component_1096_161);
            ifSetHide(false, Component.interface_1096.component_1096_349);
            ifSetHide(false, Component.interface_1096.component_1096_298);
        }
    }
    cs2_4310();
}
