/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_360

function cs2_360(intArg0: struct): [graphic, graphic, graphic] {
    switch (varbit_playerdesign4_colourrandomisation) {
        case 1:
            return [structParam(intArg0, Param.playerdesign4_outfit_torsocolour1), structParam(intArg0, Param.playerdesign4_outfit_legscolour1), structParam(intArg0, Param.playerdesign4_outfit_feetcolour1)];
        case 2:
            return [structParam(intArg0, Param.playerdesign4_outfit_torsocolour2), structParam(intArg0, Param.playerdesign4_outfit_legscolour2), structParam(intArg0, Param.playerdesign4_outfit_feetcolour2)];
        case 3:
            return [structParam(intArg0, Param.playerdesign4_outfit_torsocolour3), structParam(intArg0, Param.playerdesign4_outfit_legscolour3), structParam(intArg0, Param.playerdesign4_outfit_feetcolour3)];
        case 4:
            return [structParam(intArg0, Param.playerdesign4_outfit_torsocolour4), structParam(intArg0, Param.playerdesign4_outfit_legscolour4), structParam(intArg0, Param.playerdesign4_outfit_feetcolour4)];
        case 5:
            return [structParam(intArg0, Param.playerdesign4_outfit_torsocolour5), structParam(intArg0, Param.playerdesign4_outfit_legscolour5), structParam(intArg0, Param.playerdesign4_outfit_feetcolour5)];
        case 6:
            return [structParam(intArg0, Param.playerdesign4_outfit_torsocolour6), structParam(intArg0, Param.playerdesign4_outfit_legscolour6), structParam(intArg0, Param.playerdesign4_outfit_feetcolour6)];
        case 7:
            return [structParam(intArg0, Param.playerdesign4_outfit_torsocolour7), structParam(intArg0, Param.playerdesign4_outfit_legscolour7), structParam(intArg0, Param.playerdesign4_outfit_feetcolour7)];
        default:
            return [structParam(intArg0, Param.playerdesign4_outfit_torsocolour0), structParam(intArg0, Param.playerdesign4_outfit_legscolour0), structParam(intArg0, Param.playerdesign4_outfit_feetcolour0)];
    }
}
