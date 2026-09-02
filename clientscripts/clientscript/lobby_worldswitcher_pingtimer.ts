/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobby_worldswitcher_pingtimer]

function lobby_worldswitcher_pingtimer(intArg0: number): void {
    if (clientClock() > intArg0) {
        lobby_worldswitcher_drawlist();
    }
}
