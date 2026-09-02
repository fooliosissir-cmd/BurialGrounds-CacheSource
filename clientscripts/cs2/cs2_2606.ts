/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2606

function cs2_2606(intArg0: component): void {
    soundVorbisVolume(10046, 1, 0, 255);
    let int1: obj = -1;

    switch (varc_929) {
        case 0:
            if (varc_930 != -1) {
                int1 = invGetobj(93, varc_930);
            }
            break;
        case 1:
            if (varc_931 != -1) {
                int1 = invGetobj(93, varc_931);
            }
            break;
        case 2:
            if (varc_932 != -1) {
                int1 = invGetobj(93, varc_932);
            }
            break;
        case 3:
            if (varc_933 != -1) {
                int1 = invGetobj(93, varc_933);
            }
            break;
        case 4:
            if (varc_934 != -1) {
                int1 = invGetobj(93, varc_934);
            }
            break;
        case 5:
            if (varc_935 != -1) {
                int1 = invGetobj(93, varc_935);
            }
            break;
        case 6:
            if (varc_936 != -1) {
                int1 = invGetobj(93, varc_936);
            }
            break;
        case 7:
            if (varc_937 != -1) {
                int1 = invGetobj(93, varc_937);
            }
            break;
        case 8:
            if (varc_938 != -1) {
                int1 = invGetobj(93, varc_938);
            }
            break;
        case 9:
            if (varc_939 != -1) {
                int1 = invGetobj(93, varc_939);
            }
            break;
    }

    switch (intArg0) {
        case Component.interface_292.component_292_119:
            if (invTotalparam(93, 803) == 0) {
                mes("You have no squads that need resupplying.");
            } else {
                mes("You do not have sufficient investment credits to resupply all your squads.");
            }
            break;
        case Component.interface_292.component_292_122:
            mes("You do not have sufficient investment credits to apply the selected changes.");
            break;
        case Component.interface_292.component_292_102:
        case Component.interface_292.component_292_104:
        case Component.interface_292.component_292_103:
        case Component.interface_292.component_292_110:
        case Component.interface_292.component_292_111:
            mes("You must resupply this squad first.");
            break;
        case Component.interface_292.component_292_113:
            mes("This squad does not need resupplying.");
            break;
    }
}
