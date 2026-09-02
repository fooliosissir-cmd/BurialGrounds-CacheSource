/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,initialise_stat_xp]

function initialise_stat_xp(): void {
    varc_runecraftxp = statVisibleXp(20);
    varc_craftingxp = statVisibleXp(12);
    varc_fletchingxp = statVisibleXp(9);
    varc_cookingxp = statVisibleXp(7);
    varc_constructionxp = statVisibleXp(22);
    varc_herblorexp = statVisibleXp(15);
    varc_magicxp = statVisibleXp(6);
    varc_smithingxp = statVisibleXp(13);
    varc_farmingxp = statVisibleXp(19);
}
