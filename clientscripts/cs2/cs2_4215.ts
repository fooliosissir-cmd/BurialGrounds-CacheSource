/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4215

function cs2_4215(): void {
    if (ifFind(Component.artisan_player_anim.player_model) == 1) {
        ccSetPlayerModelSelf();
        ccSetModelAnim(41);
    }
}
