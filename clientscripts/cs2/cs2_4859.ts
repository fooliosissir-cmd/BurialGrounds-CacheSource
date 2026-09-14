/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4859

function cs2_4859(): void {
    let int0: struct = -1;

    if (clanProfileFind() == 1) {
        cs2_4855();
        int0 = cs2_5116(pushVarClanBit<2598>(), pushVarClanBit<2580>());
        if (int0 == -1) {
            return;
        }
        if (structParam(int0, Param.citadel_2x2_hotspot_1_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_3);
        }
        if (structParam(int0, Param.citadel_2x2_hotspot_2_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_4);
        }
        if (structParam(int0, Param.citadel_2x2_hotspot_3_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_5);
        }
        if (structParam(int0, Param.citadel_2x2_hotspot_4_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_6);
        }
        if (structParam(int0, Param.citadel_2x2_hotspot_5_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_7);
        }
        if (structParam(int0, Param.citadel_2x2_hotspot_6_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_8);
        }
        if (structParam(int0, Param.citadel_2x2_hotspot_7_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_9);
        }
        if (structParam(int0, Param.citadel_2x2_hotspot_8_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_10);
        }
        if (structParam(int0, Param.citadel_3x3_hotspot_1_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_11);
        }
        if (structParam(int0, Param.citadel_3x3_hotspot_2_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_13);
        }
        if (structParam(int0, Param.citadel_3x3_hotspot_3_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_14);
        }
        if (structParam(int0, Param.citadel_3x3_hotspot_4_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_15);
        }
        if (structParam(int0, Param.citadel_3x3_hotspot_5_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_15);
        }
        if (structParam(int0, Param.citadel_4x4_hotspot_1_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_16);
        }
        if (structParam(int0, Param.citadel_4x4_hotspot_2_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_17);
        }
        if (structParam(int0, Param.citadel_4x4_hotspot_3_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_18);
        }
        if (structParam(int0, Param.citadel_4x4_hotspot_4_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_19);
        }
        if (structParam(int0, Param.citadel_4x4_hotspot_5_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_20);
        }
        if (structParam(int0, Param.citadel_5x5_hotspot_1_relative_coord) != 0) {
            ifSetHide(false, Component.interface_1258.component_1258_21);
        }
    }
}
