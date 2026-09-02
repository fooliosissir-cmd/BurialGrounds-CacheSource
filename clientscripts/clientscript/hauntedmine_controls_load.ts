/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,hauntedmine_controls_load]

function hauntedmine_controls_load(): void {
    if (testBit(varp_hauntedmine_bits, 1) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_points_curve, Component.interface_144.component_144_134);
    }

    if (testBit(varp_hauntedmine_bits, 2) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_points_curve, Component.interface_144.component_144_135);
    }

    if (testBit(varp_hauntedmine_bits, 3) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_points_curve_mirror, Component.interface_144.component_144_136);
    }

    if (testBit(varp_hauntedmine_bits, 4) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_points_curve, Component.interface_144.component_144_137);
    }

    if (testBit(varp_hauntedmine_bits, 5) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_points_curve, Component.interface_144.component_144_138);
    }

    if (testBit(varp_hauntedmine_bits, 6) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_points_curve_mirror, Component.interface_144.component_144_139);
    }

    if (testBit(varp_hauntedmine_bits, 7) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_points_curve_mirror, Component.interface_144.component_144_140);
    }

    if (testBit(varp_hauntedmine_bits, 8) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_points_curve, Component.interface_144.component_144_141);
    }

    if (varp_hauntedmine_bits > 8191) {
        ifSetHide(true, Component.interface_144.component_144_186);
        ifSetGraphic(Graphic.combatboxes_3, Component.interface_144.component_144_146);
    }

    if (testBit(varp_hauntedmine_bits, 14) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_cart, Component.interface_144.component_144_174);
        ifSetModelAnim(1456, Component.interface_144.component_144_174);
    }

    if (testBit(varp_hauntedmine_bits, 15) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_cart, Component.interface_144.component_144_172);
        ifSetModelAnim(1456, Component.interface_144.component_144_172);
    }

    if (testBit(varp_hauntedmine_bits, 16) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_cart, Component.interface_144.component_144_176);
        ifSetModelAnim(1456, Component.interface_144.component_144_176);
    }

    if (testBit(varp_hauntedmine_bits, 17) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_cart, Component.interface_144.component_144_178);
        ifSetModelAnim(1455, Component.interface_144.component_144_178);
    }

    if (testBit(varp_hauntedmine_bits, 18) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_cart, Component.interface_144.component_144_180);
        ifSetModelAnim(1455, Component.interface_144.component_144_180);
    }

    if (testBit(varp_hauntedmine_bits, 19) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_cart, Component.interface_144.component_144_183);
        ifSetModelAnim(1453, Component.interface_144.component_144_183);
    }

    if (testBit(varp_hauntedmine_bits, 20) == 1) {
        ifSetModel(Model.quest_hauntedmine_if_track_cart, Component.interface_144.component_144_185);
        ifSetModelAnim(1453, Component.interface_144.component_144_185);
    }
}
