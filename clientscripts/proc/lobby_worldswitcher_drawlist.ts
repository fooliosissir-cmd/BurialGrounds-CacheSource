/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobby_worldswitcher_drawlist]

function lobby_worldswitcher_drawlist(): void {
    ifSetOnTimer(hook(lobby_worldswitcher_timer, "", []), Component.interface_910.component_910_0);
}
