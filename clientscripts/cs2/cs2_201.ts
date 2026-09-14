/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_201

function cs2_201(): void {
    if (varc_last_clanchannelowner_attempttorejoin == 1 && varc_last_clanchannelowner_init == 1 && stringLength(varcstr_last_clanchannelowner) > 0) {
        clanJoinChat(varcstr_last_clanchannelowner);
        varc_last_clanchannelowner_attempttorejoin = 2;
    }
}
