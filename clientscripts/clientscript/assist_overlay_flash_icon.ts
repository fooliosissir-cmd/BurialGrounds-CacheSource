/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,assist_overlay_flash_icon]

function assist_overlay_flash_icon(): void {
    ifSetOnTimer(hook(assist_flash_icon, "ii", [clientClock(), clientClock() + 25]), Component.interface_745.component_745_2);
}
