/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5406

function cs2_5406(intArg0: number, intArg1: number): void {
    ifSetHide(true, Component.interface_1172.component_1172_2);
    ifSetHide(true, Component.interface_1172.component_1172_5);
    ifSetHide(false, Component.interface_1172.component_1172_7);

    if (intArg0 == 1) {
        ifSetText("Yeah! You won!", Component.interface_1172.component_1172_8);
        switch (random(2)) {
            case 0:
                soundVorbisVolume(7897, 1, 0, 255);
                break;
            case 1:
                soundVorbisVolume(7885, 1, 0, 255);
                break;
        }
        if (varbit_dom_climber_prog > 0 || varbit_dom_endurance_prog > 0 || varbit_dom_special_match != 0) {
            ifSetText("You now have a dominion factor of: " + tostring_spacer(intArg1, ","), Component.interface_1172.component_1172_10);
        } else {
            ifSetText("", Component.interface_1172.component_1172_10);
        }
    } else {
        ifSetText("Unlucky, you lost!", Component.interface_1172.component_1172_8);
        switch (random(2)) {
            case 0:
                soundVorbisVolume(7904, 1, 0, 255);
                break;
            case 1:
                soundVorbisVolume(7874, 1, 0, 255);
                break;
        }
        if (varbit_dom_climber_prog > 0 || varbit_dom_endurance_prog > 0 || varbit_dom_special_match != 0) {
            ifSetText("You leave with a dominion factor of: " + tostring_spacer(intArg1, ","), Component.interface_1172.component_1172_10);
        } else {
            ifSetText("", Component.interface_1172.component_1172_10);
        }
    }
}
