/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_358

function cs2_358(intArg0: number): void {
    if (intArg0 != 1) {
        return;
    }
    soundSynth(Sound.sound_9830, 1, 0);
    varbit_8092 = (varbit_8092 + 1) % 8;
    let int1: graphic = Graphic.emotes_40;
    let int2: struct = cs2_361(varc_1010, 3);

    if (int2 == -1) {
        int2 = Struct.playerdesign4_adventurer_male_0;
    }

    switch ((varbit_playerdesign4_colourrandomisation + varbit_8092) % 8) {
        case 1:
            int1 = structParam(int2, Param.playerdesign4_outfit_torsocolour1);
            varc_playerdesign3_torsocol = int1;
            baseColour(1, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_legscolour1);
            varc_playerdesign3_legscol = int1;
            baseColour(2, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_feetcolour1);
            varc_playerdesign3_feetcol = int1;
            baseColour(3, int1);
            break;
        case 2:
            int1 = structParam(int2, Param.playerdesign4_outfit_torsocolour2);
            varc_playerdesign3_torsocol = int1;
            baseColour(1, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_legscolour2);
            varc_playerdesign3_legscol = int1;
            baseColour(2, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_feetcolour2);
            varc_playerdesign3_feetcol = int1;
            baseColour(3, int1);
            break;
        case 3:
            int1 = structParam(int2, Param.playerdesign4_outfit_torsocolour3);
            varc_playerdesign3_torsocol = int1;
            baseColour(1, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_legscolour3);
            varc_playerdesign3_legscol = int1;
            baseColour(2, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_feetcolour3);
            varc_playerdesign3_feetcol = int1;
            baseColour(3, int1);
            break;
        case 4:
            int1 = structParam(int2, Param.playerdesign4_outfit_torsocolour4);
            varc_playerdesign3_torsocol = int1;
            baseColour(1, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_legscolour4);
            varc_playerdesign3_legscol = int1;
            baseColour(2, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_feetcolour4);
            varc_playerdesign3_feetcol = int1;
            baseColour(3, int1);
            break;
        case 5:
            int1 = structParam(int2, Param.playerdesign4_outfit_torsocolour5);
            varc_playerdesign3_torsocol = int1;
            baseColour(1, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_legscolour5);
            varc_playerdesign3_legscol = int1;
            baseColour(2, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_feetcolour5);
            varc_playerdesign3_feetcol = int1;
            baseColour(3, int1);
            break;
        case 6:
            int1 = structParam(int2, Param.playerdesign4_outfit_torsocolour6);
            varc_playerdesign3_torsocol = int1;
            baseColour(1, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_legscolour6);
            varc_playerdesign3_legscol = int1;
            baseColour(2, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_feetcolour6);
            varc_playerdesign3_feetcol = int1;
            baseColour(3, int1);
            break;
        case 7:
            int1 = structParam(int2, Param.playerdesign4_outfit_torsocolour7);
            varc_playerdesign3_torsocol = int1;
            baseColour(1, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_legscolour7);
            varc_playerdesign3_legscol = int1;
            baseColour(2, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_feetcolour7);
            varc_playerdesign3_feetcol = int1;
            baseColour(3, int1);
            break;
        default:
            int1 = structParam(int2, Param.playerdesign4_outfit_torsocolour0);
            varc_playerdesign3_torsocol = int1;
            baseColour(1, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_legscolour0);
            varc_playerdesign3_legscol = int1;
            baseColour(2, int1);
            int1 = structParam(int2, Param.playerdesign4_outfit_feetcolour0);
            varc_playerdesign3_feetcol = int1;
            baseColour(3, int1);
            break;
    }
    cs2_391();
}
