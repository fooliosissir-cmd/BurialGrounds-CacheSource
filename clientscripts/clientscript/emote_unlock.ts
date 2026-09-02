/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,emote_unlock]

function emote_unlock(): void {
    if (varbit_sos_emote_flap == 1) {
        ifSetGraphic(Graphic.emotes_31, Component.interface_464.component_464_32);
    } else {
        ifSetGraphic(Graphic.emotes_locked_11, Component.interface_464.component_464_32);
    }

    if (varbit_sos_emote_doh == 1) {
        ifSetGraphic(Graphic.emotes_29, Component.interface_464.component_464_30);
    } else {
        ifSetGraphic(Graphic.emotes_locked_9, Component.interface_464.component_464_30);
    }

    if (varbit_sos_emote_idea == 1) {
        ifSetGraphic(Graphic.emotes_32, Component.interface_464.component_464_33);
    } else {
        ifSetGraphic(Graphic.emotes_locked_12, Component.interface_464.component_464_33);
    }

    if (varbit_sos_emote_stamp == 1) {
        ifSetGraphic(Graphic.emotes_30, Component.interface_464.component_464_31);
    } else {
        ifSetGraphic(Graphic.emotes_locked_10, Component.interface_464.component_464_31);
    }

    if (varbit_lost_tribe_quest >= 7) {
        ifSetGraphic(Graphic.emotes_26, Component.interface_464.component_464_24);
        ifSetGraphic(Graphic.emotes_27, Component.interface_464.component_464_25);
    } else {
        ifSetGraphic(Graphic.emotes_locked_6, Component.interface_464.component_464_24);
        ifSetGraphic(Graphic.emotes_locked_7, Component.interface_464.component_464_25);
    }

    if (varbit_emote_glasswall == 1) {
        ifSetGraphic(Graphic.emotes_25, Component.interface_464.component_464_29);
    } else {
        ifSetGraphic(Graphic.emotes_locked_5, Component.interface_464.component_464_29);
    }

    if (varbit_emote_glassbox == 1) {
        ifSetGraphic(Graphic.emotes_22, Component.interface_464.component_464_26);
    } else {
        ifSetGraphic(Graphic.emotes_locked_2, Component.interface_464.component_464_26);
    }

    if (varbit_emote_climbrope == 1) {
        ifSetGraphic(Graphic.emotes_23, Component.interface_464.component_464_27);
    } else {
        ifSetGraphic(Graphic.emotes_locked_3, Component.interface_464.component_464_27);
    }

    if (varbit_emote_lean == 1) {
        ifSetGraphic(Graphic.emotes_24, Component.interface_464.component_464_28);
    } else {
        ifSetGraphic(Graphic.emotes_locked_4, Component.interface_464.component_464_28);
    }

    if (varbit_emote_terrified == 1) {
        ifSetGraphic(Graphic.emotes_28, Component.interface_464.component_464_37);
    } else {
        ifSetGraphic(Graphic.emotes_locked_8, Component.interface_464.component_464_37);
    }

    if (varbit_emote_zombie_dance == 1) {
        ifSetGraphic(Graphic.emotes_34, Component.interface_464.component_464_35);
    } else {
        ifSetGraphic(Graphic.emotes_locked_14, Component.interface_464.component_464_35);
    }

    if (varbit_emote_zombie_walk == 1) {
        ifSetGraphic(Graphic.emotes_33, Component.interface_464.component_464_34);
    } else {
        ifSetGraphic(Graphic.emotes_locked_13, Component.interface_464.component_464_34);
    }

    if (varbit_emote_bunny_hop == 1) {
        ifSetGraphic(Graphic.emotes_35, Component.interface_464.component_464_38);
    } else {
        ifSetGraphic(Graphic.emotes_locked_15, Component.interface_464.component_464_38);
    }

    if (varbit_emote_skillcape == 1) {
        ifSetGraphic(Graphic.emotes_36, Component.interface_464.component_464_39);
    } else {
        ifSetGraphic(Graphic.emotes_locked_16, Component.interface_464.component_464_39);
    }

    if (varbit_hw07_prog == 12) {
        ifSetGraphic(Graphic.emotes_37, Component.interface_464.component_464_36);
    } else {
        ifSetGraphic(Graphic.emotes_locked_17, Component.interface_464.component_464_36);
    }

    if (varbit_emote_xmas07 == 1) {
        ifSetGraphic(Graphic.emotes_38, Component.interface_464.component_464_40);
    } else {
        ifSetGraphic(Graphic.emotes_locked_18, Component.interface_464.component_464_40);
    }

    if (varbit_emote_music == 1) {
        ifSetGraphic(Graphic.emotes_39, Component.interface_464.component_464_41);
    } else {
        ifSetGraphic(Graphic.emotes_locked_19, Component.interface_464.component_464_41);
    }

    if (varbit_emote_sops == 1) {
        ifSetGraphic(Graphic.emotes_40, Component.interface_464.component_464_42);
    } else {
        ifSetGraphic(Graphic.emotes_locked_20, Component.interface_464.component_464_42);
    }

    if (varbit_emote_atlum == 1) {
        ifSetGraphic(Graphic.emotes_41, Component.interface_464.component_464_43);
    } else {
        ifSetGraphic(Graphic.emotes_locked_21, Component.interface_464.component_464_43);
    }

    if (varbit_swept_hw08_emote == 1) {
        ifSetGraphic(Graphic.emotes_42, Component.interface_464.component_464_44);
    } else {
        ifSetGraphic(Graphic.emotes_locked_22, Component.interface_464.component_464_44);
    }

    if (varbit_emote_xmas08 == 1) {
        ifSetGraphic(Graphic.emotes_44, Component.interface_464.component_464_45);
    } else {
        ifSetGraphic(Graphic.emotes_locked_24, Component.interface_464.component_464_45);
    }

    if (varbit_emote_tg08 == 1) {
        ifSetGraphic(Graphic.emotes_45, Component.interface_464.component_464_46);
    } else {
        ifSetGraphic(Graphic.emotes_locked_25, Component.interface_464.component_464_46);
    }

    if (varbit_easter09_main == 85 || varbit_easter10_main == 18) {
        ifSetGraphic(Graphic.emotes_46, Component.interface_464.component_464_47);
    } else {
        ifSetGraphic(Graphic.emotes_locked_26, Component.interface_464.component_464_47);
    }
    cs2_1626();

    if (varbit_xmas09_emote == 1) {
        ifSetGraphic(Graphic.emotes_48, Component.interface_464.component_464_48);
    } else {
        ifSetGraphic(Graphic.emotes_locked_28, Component.interface_464.component_464_48);
    }

    if (varbit_csi_complete_6 == 1) {
        ifSetGraphic(Graphic.emotes_49, Component.interface_464.component_464_49);
    } else {
        ifSetGraphic(Graphic.emotes_locked_29, Component.interface_464.component_464_49);
    }

    if (varbit_hw10_main == 20) {
        ifSetGraphic(Graphic.emotes_50, Component.interface_464.component_464_50);
    } else {
        ifSetGraphic(Graphic.emotes_locked_30, Component.interface_464.component_464_50);
    }

    if (varbit_xmas10_emote == 1) {
        ifSetGraphic(Graphic.emotes_51, Component.interface_464.component_464_52);
    } else {
        ifSetGraphic(Graphic.emotes_locked_31, Component.interface_464.component_464_52);
    }

    if (varbit_task_completed_total == 1091) {
        ifSetGraphic(Graphic.emotes_52, Component.interface_464.component_464_51);
    } else {
        ifSetGraphic(Graphic.emotes_locked_32, Component.interface_464.component_464_51);
    }

    if (varbit_easter11_miniquest == 60) {
        ifSetGraphic(Graphic.emotes_66, Component.interface_464.component_464_53);
    } else {
        ifSetGraphic(Graphic.emotes_locked_46, Component.interface_464.component_464_53);
    }
}
