/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter10_turnresult_setup]

function easter10_turnresult_setup(): void {
    ifSetText("+ " + tostring(varp_1693) + " ( " + tostring(varp_easter10_resourcegame_totalnuts) + " )" + "<br>" + "+ " + tostring(varp_1692) + " ( " + tostring(varp_easter10_resourcegame_totalchoc) + " )" + "<br>" + "+ " + tostring(varp_1694) + " ( " + tostring(varp_easter10_resourcegame_totalfruit) + " )" + "<br>", Component.interface_929.component_929_106);
    ifSetText("+ " + tostring(varp_1695) + " ( " + tostring(varp_1689) + " )" + "<br>" + "+ " + tostring(varp_1697) + " ( " + tostring(varp_1690) + " )" + "<br>" + "+ " + tostring(varp_1696) + " ( " + tostring(varp_1691) + " )" + "<br>", Component.interface_929.component_929_108);

    if (varbit_easter10_incubator_status == 1) {
        ifSetText("WORKING", Component.interface_929.component_929_113);
        ifSetColour(colour(0x00FF00), Component.interface_929.component_929_113);
    } else {
        soundSynth(Sound.sound_8723, 10, 0);
        ifSetText("NEEDS REPAIR", Component.interface_929.component_929_113);
        ifSetColour(colour(0xFF0000), Component.interface_929.component_929_113);
    }

    if (varbit_easter10_conveyor_status == 1) {
        ifSetText("WORKING", Component.interface_929.component_929_112);
        ifSetColour(colour(0x00FF00), Component.interface_929.component_929_112);
    } else {
        soundSynth(Sound.sound_8723, 10, 1);
        ifSetText("NEEDS REPAIR", Component.interface_929.component_929_112);
        ifSetColour(colour(0xFF0000), Component.interface_929.component_929_112);
    }

    if (varbit_easter10_painter_status == 1) {
        ifSetText("WORKING", Component.interface_929.component_929_114);
        ifSetColour(colour(0x00FF00), Component.interface_929.component_929_114);
    } else {
        soundSynth(Sound.sound_8723, 10, 2);
        ifSetText("NEEDS REPAIR", Component.interface_929.component_929_114);
        ifSetColour(colour(0xFF0000), Component.interface_929.component_929_114);
    }
    ifSetText(tostring(varc_easter10_totalworkers / 5), Component.interface_929.component_929_102);

    switch (varp_1698) {
        case 5:
            ifSetText("Your workers uncover a hidden stash and you receive", Component.interface_929.component_929_104);
            ifSetText("3 extra resources.", Component.interface_929.component_929_105);
            soundSynth(Sound.sound_8728, 1, 0);
            break;
        case 6:
            ifSetText("An accident at work has taken place. As a result you have", Component.interface_929.component_929_104);
            ifSetText("lost 3 resources.", Component.interface_929.component_929_105);
            soundSynth(Sound.sound_8723, 10, 0);
            break;
        case 7:
            ifSetText("The paint machine is out of glaze and requires a repair to work at full efficiency.", Component.interface_929.component_929_104);
            ifSetText("Painter needs repair.", Component.interface_929.component_929_105);
            break;
        case 8:
            ifSetText("The conveyor team needs re-training in order to work at full efficiency.", Component.interface_929.component_929_104);
            ifSetText("Conveyor needs repair.", Component.interface_929.component_929_105);
            break;
        case 9:
            ifSetText("The oven is coated in soot. It requires a repair to work at full efficiency.", Component.interface_929.component_929_104);
            ifSetText("Oven needs repair.", Component.interface_929.component_929_105);
            break;
        default:
            ifSetText("", Component.interface_929.component_929_104);
            ifSetText("Nothing unusual happened.", Component.interface_929.component_929_105);
            break;
    }
}
