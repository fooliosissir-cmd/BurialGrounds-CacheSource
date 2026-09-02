/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tutorial3_cameracontrols_click]

function tutorial3_cameracontrols_click(intArg0: component): void {
    soundVorbisVolume(10046, 1, 0, 255);
    ifSetColour(colour(0xFFFF00), intArg0);
    ifSetOnTimer(hook(cs2_2775, "iI", [clientClock() + 15, event_com]), intArg0);
}
