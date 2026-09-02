/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1889

function cs2_1889(): string {
    if (cs2_1431() == 1) {
        return "World " + tostring(mapWorld()) + " (PvP)";
    } else {
        return "World " + tostring(mapWorld());
    }
}
