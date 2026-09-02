/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5152

function cs2_5152(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let str0: string = "";

    varc_1563 = max(varc_1563 - 1, 0);

    if (varc_1563 % 50 == 0) {
        int2 = varc_1563 / 50;
        int1 = int2 % 60;
        int0 = int2 / 60;
        str0 = tostring(int0) + ":";
        if (int1 < 10) {
            str0 = append(str0, "0" + tostring(int1));
        } else {
            str0 = append(str0, tostring(int1));
        }
        ifSetText(str0, Component.clan_kickout_overlay.clan_kickout_timer);
    }

    if (varc_1563 <= 0) {
        ifSetOnTimer(noHook(""), Component.clan_kickout_overlay.clan_kickout_timer);
        ifClose();
    }
}
