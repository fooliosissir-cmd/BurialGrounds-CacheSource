/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_setzoom]

function worldmap_setzoom(): void {
    worldMapSetZoom(varc_worldmap_zoom);
    ifSetText(tostring(varc_worldmap_zoom) + "%", Component.interface_755.component_755_14);
}
