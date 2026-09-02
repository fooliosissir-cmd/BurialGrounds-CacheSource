/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_orb]

function clanwars_orb(intArg0: component): void {
    ifSetModel(structParam(varc_clanwars_orb_graphic, Param.clanwars_orb_model), intArg0);
    ifSetModelAngle(0, 160, structParam(varc_clanwars_orb_graphic, Param.clanwars_orb_modelxangle), structParam(varc_clanwars_orb_graphic, Param.clanwars_orb_modelyangle), structParam(varc_clanwars_orb_graphic, Param.clanwars_orb_modelzangle), structParam(varc_clanwars_orb_graphic, Param.clanwars_orb_modelzoom), intArg0);
    ifSetModelAnim(structParam(varc_clanwars_orb_graphic, Param.clanwars_orb_modelanim), intArg0);
    ifSetPosition(0, structParam(varc_clanwars_orb_graphic, Param.clanwars_orb_modelyoffset), 1, 0, intArg0);
}
