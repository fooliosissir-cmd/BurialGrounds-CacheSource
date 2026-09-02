/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2207

function cs2_2207(): void {
    if (varc_easter10_pushbarstatus == 0) {
        ifSetOnTimer(hook(cs2_2212, "", []), Component.easter10_nuts.content);
    }
}
