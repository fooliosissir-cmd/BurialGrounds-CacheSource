/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5900

function cs2_5900(): void {
    if (varc_1928 == 0) {
        soundVorbisRate(cs2_5925(Enum.wof_wheel_clunk), 1, 0, random(20) + 30, 150);
    } else if (varc_1928 == 1) {
        soundVorbisRate(cs2_5925(Enum.wof9_wheel_clunk), 1, 0, random(10) + 20, 255);
    }
}
