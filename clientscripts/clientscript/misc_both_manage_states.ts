/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,misc_both_manage_states]

function misc_both_manage_states(): void {
    if (varbit_royal_quest >= 30) {
        ifSetHide(false, Component.interface_391.component_391_22);
        ifSetHide(false, Component.interface_391.component_391_24);
    } else {
        ifSetHide(true, Component.interface_391.component_391_22);
        ifSetHide(true, Component.interface_391.component_391_24);
    }
    ifSetText(tostring(varbit_misc_coffers), Component.interface_391.component_391_115);

    if (varbit_misc_points_fish > 0) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_87);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_87);
    }

    if (varbit_misc_points_fish > 1) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_88);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_88);
    }

    if (varbit_misc_points_fish > 2) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_89);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_89);
    }

    if (varbit_misc_points_fish > 3) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_91);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_91);
    }

    if (varbit_misc_points_fish > 4) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_92);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_92);
    }

    if (varbit_misc_points_fish > 5) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_93);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_93);
    }

    if (varbit_misc_points_fish > 6) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_94);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_94);
    }

    if (varbit_misc_points_fish > 7) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_95);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_95);
    }

    if (varbit_misc_points_fish > 8) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_96);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_96);
    }

    if (varbit_misc_points_fish > 9) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_97);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_97);
    }

    if (varbit_misc_points_mine > 0) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_44);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_44);
    }

    if (varbit_misc_points_mine > 1) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_45);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_45);
    }

    if (varbit_misc_points_mine > 2) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_46);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_46);
    }

    if (varbit_misc_points_mine > 3) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_47);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_47);
    }

    if (varbit_misc_points_mine > 4) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_48);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_48);
    }

    if (varbit_misc_points_mine > 5) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_49);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_49);
    }

    if (varbit_misc_points_mine > 6) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_50);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_50);
    }

    if (varbit_misc_points_mine > 7) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_51);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_51);
    }

    if (varbit_misc_points_mine > 8) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_52);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_52);
    }

    if (varbit_misc_points_mine > 9) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_53);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_53);
    }

    if (varbit_misc_points_herb > 0) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_74);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_74);
    }

    if (varbit_misc_points_herb > 1) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_75);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_75);
    }

    if (varbit_misc_points_herb > 2) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_76);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_76);
    }

    if (varbit_misc_points_herb > 3) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_77);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_77);
    }

    if (varbit_misc_points_herb > 4) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_78);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_78);
    }

    if (varbit_misc_points_herb > 5) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_79);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_79);
    }

    if (varbit_misc_points_herb > 6) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_80);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_80);
    }

    if (varbit_misc_points_herb > 7) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_81);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_81);
    }

    if (varbit_misc_points_herb > 8) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_82);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_82);
    }

    if (varbit_misc_points_herb > 9) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_83);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_83);
    }

    if (varbit_misc_points_wood > 0) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_58);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_58);
    }

    if (varbit_misc_points_wood > 1) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_59);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_59);
    }

    if (varbit_misc_points_wood > 2) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_60);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_60);
    }

    if (varbit_misc_points_wood > 3) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_61);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_61);
    }

    if (varbit_misc_points_wood > 4) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_62);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_62);
    }

    if (varbit_misc_points_wood > 5) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_63);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_63);
    }

    if (varbit_misc_points_wood > 6) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_64);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_64);
    }

    if (varbit_misc_points_wood > 7) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_65);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_65);
    }

    if (varbit_misc_points_wood > 8) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_66);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_66);
    }

    if (varbit_misc_points_wood > 9) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_70);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_70);
    }

    if (varbit_misc_points_rarewood > 0) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_124);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_124);
    }

    if (varbit_misc_points_rarewood > 1) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_125);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_125);
    }

    if (varbit_misc_points_rarewood > 2) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_126);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_126);
    }

    if (varbit_misc_points_rarewood > 3) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_127);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_127);
    }

    if (varbit_misc_points_rarewood > 4) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_128);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_128);
    }

    if (varbit_misc_points_rarewood > 5) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_129);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_129);
    }

    if (varbit_misc_points_rarewood > 6) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_130);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_130);
    }

    if (varbit_misc_points_rarewood > 7) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_131);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_131);
    }

    if (varbit_misc_points_rarewood > 8) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_132);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_132);
    }

    if (varbit_misc_points_rarewood > 9) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_133);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_133);
    }

    if (varbit_misc_points_farm > 0) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_145);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_145);
    }

    if (varbit_misc_points_farm > 1) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_146);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_146);
    }

    if (varbit_misc_points_farm > 2) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_147);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_147);
    }

    if (varbit_misc_points_farm > 3) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_148);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_148);
    }

    if (varbit_misc_points_farm > 4) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_149);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_149);
    }

    if (varbit_misc_points_farm > 5) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_150);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_150);
    }

    if (varbit_misc_points_farm > 6) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_151);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_151);
    }

    if (varbit_misc_points_farm > 7) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_152);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_152);
    }

    if (varbit_misc_points_farm > 8) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_153);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_153);
    }

    if (varbit_misc_points_farm > 9) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_154);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_154);
    }

    if (varp_1888 > 0) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_98);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_98);
    }

    if (varp_1888 > 1) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_99);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_99);
    }

    if (varp_1888 > 2) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_100);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_100);
    }

    if (varp_1888 > 3) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_101);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_101);
    }

    if (varp_1888 > 4) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_104);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_104);
    }

    if (varp_1888 > 5) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_105);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_105);
    }

    if (varp_1888 > 6) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_106);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_106);
    }

    if (varp_1888 > 7) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_107);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_107);
    }

    if (varp_1888 > 8) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_108);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_108);
    }

    if (varp_1888 > 9) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_109);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_109);
    }

    if (varp_1888 > 10) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_110);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_110);
    }

    if (varp_1888 > 11) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_111);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_111);
    }

    if (varp_1888 > 12) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_112);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_112);
    }

    if (varp_1888 > 13) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_113);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_113);
    }

    if (varp_1888 > 14) {
        ifSetColour(colour(0xFFFFFF), Component.interface_391.component_391_114);
    } else {
        ifSetColour(colour(0x000000), Component.interface_391.component_391_114);
    }

    if (varbit_misc_herbs_or_flax == 1) {
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_391.component_391_155);
        ifSetGraphic(Graphic.miscgraphics_11, Component.interface_391.component_391_157);
    } else {
        ifSetGraphic(Graphic.miscgraphics_11, Component.interface_391.component_391_155);
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_391.component_391_157);
    }

    if (varbit_misc_rarewood_type == 0) {
        ifSetGraphic(Graphic.miscgraphics_11, Component.interface_391.component_391_134);
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_391.component_391_135);
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_391.component_391_136);
    } else if (varbit_misc_rarewood_type == 1) {
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_391.component_391_134);
        ifSetGraphic(Graphic.miscgraphics_11, Component.interface_391.component_391_135);
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_391.component_391_136);
    } else {
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_391.component_391_134);
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_391.component_391_135);
        ifSetGraphic(Graphic.miscgraphics_11, Component.interface_391.component_391_136);
    }

    if (varbit_misc_cooked == 0) {
        ifSetGraphic(Graphic.miscgraphics_10, Component.interface_391.component_391_120);
    } else {
        ifSetGraphic(Graphic.miscgraphics_11, Component.interface_391.component_391_120);
    }
}
