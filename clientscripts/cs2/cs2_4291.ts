/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4291

function cs2_4291(): void {
    ifSetOnClanSettingsTransmit(hook(clientscript_clansettings_list_build, "", []), Component.interface_1096.component_1096_38);
    ifSetOnVarcTransmit(hook(clientscript_clansettings_list_build, "Y", [], [1516]), Component.interface_1096.component_1096_38);
    ifSetOnTimer(hook(cs2_4319, "ii", [0, 1]), Component.interface_1096.component_1096_52);
    ifSetOnClanSettingsTransmit(hook(clientscript_clansettings_interface_refresh, "", []), Component.interface_1096.component_1096_52);
    ifSetOnClanChannelTransmit(hook(clientscript_clansettings_interface_refresh, "", []), Component.interface_1096.component_1096_52);
    ifSetOnVarcTransmit(hook(cs2_118, "Y", [], [1500, 1501, 1502, 1503]), Component.interface_1096.component_1096_52);
    ifSetOnVarcStrTransmit(hook(cs2_118, "Y", [], [347]), Component.interface_1096.component_1096_52);

    switch (mapLang()) {
        case 1:
            cs2_4499(Enum.clan_int_to_job_title_de, 1, "", enumGetoutputcount(Enum.clan_int_to_job_title_de), 10, Component.interface_1096.component_1096_251, Component.interface_1096.component_1096_261, Component.interface_1096.component_1096_263, Component.interface_1096.component_1096_262, Component.interface_1096.component_1096_340);
            break;
        case 2:
            cs2_4499(Enum.clan_int_to_job_title_fr, 1, "", enumGetoutputcount(Enum.clan_int_to_job_title_de), 10, Component.interface_1096.component_1096_251, Component.interface_1096.component_1096_261, Component.interface_1096.component_1096_263, Component.interface_1096.component_1096_262, Component.interface_1096.component_1096_340);
            break;
        case 3:
            cs2_4499(Enum.clan_int_to_job_title_pt, 1, "", enumGetoutputcount(Enum.clan_int_to_job_title_de), 10, Component.interface_1096.component_1096_251, Component.interface_1096.component_1096_261, Component.interface_1096.component_1096_263, Component.interface_1096.component_1096_262, Component.interface_1096.component_1096_340);
            break;
        default:
            cs2_4499(Enum.enum_3720, 1, "", enumGetoutputcount(Enum.enum_3720), 10, Component.interface_1096.component_1096_251, Component.interface_1096.component_1096_261, Component.interface_1096.component_1096_263, Component.interface_1096.component_1096_262, Component.interface_1096.component_1096_340);
            break;
    }
    cs2_4328(Component.interface_1096.component_1096_348);
    ifSetOnClanSettingsTransmit(hook(clansettings_update_flag, "", []), Component.interface_1096.component_1096_348);
    ifSetSize(ifGetWidth(Component.interface_1096.component_1096_52), 115, 0, 0, Component.interface_1096.component_1096_52);
    ifSetHide(true, Component.interface_1096.component_1096_341);
    ifSetHide(false, Component.interface_1096.component_1096_110);
    let int0: component = Component.interface_1096.component_1096_37;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 218;
    let int5: number = 23;

    while (int1 < 500) {
        if (int1 % 2 != 0) {
            int2 = int4;
        } else {
            int2 = 0;
        }
        int3 = int1 / 2 * int5;
        ccCreate(int0, 3, int1);
        ccSetPosition(int2, int3, 0, 0);
        ccSetSize(16384 / 2, int5, 2, 0);
        ccSetfill(true);
        if (int1 / 2 % 2 != 0) {
            ccSetColour(colour(0x232220));
        } else {
            ccSetColour(colour(0x1C1B19));
        }
        int1 = int1 + 1;
    }

    if (clanProfileFind() == 1) {
        cs2_4499(Enum.clan_signpost_viewing_permission, 0, enumOp(type_int, type_string, Enum.clan_signpost_viewing_permission, pushVarClan<2811>()), -1, 4, Component.interface_1096.component_1096_211, Component.interface_1096.component_1096_221, Component.interface_1096.component_1096_223, Component.interface_1096.component_1096_222, Component.interface_1096.component_1096_340);
        cs2_4499(Enum.clan_permissions_guest_access, 0, enumOp(type_int, type_string, Enum.clan_permissions_guest_access, pushVarClanSettingBit<292>()), -1, 4, Component.interface_1096.component_1096_196, Component.interface_1096.component_1096_206, Component.interface_1096.component_1096_208, Component.interface_1096.component_1096_207, Component.interface_1096.component_1096_340);
    } else {
        cs2_4499(Enum.clan_signpost_viewing_permission, 0, "N/A", -1, 4, Component.interface_1096.component_1096_211, Component.interface_1096.component_1096_221, Component.interface_1096.component_1096_223, Component.interface_1096.component_1096_222, Component.interface_1096.component_1096_340);
        cs2_4499(Enum.clan_permissions_guest_access, 0, "N/A", -1, 4, Component.interface_1096.component_1096_196, Component.interface_1096.component_1096_206, Component.interface_1096.component_1096_208, Component.interface_1096.component_1096_207, Component.interface_1096.component_1096_340);
    }
}
