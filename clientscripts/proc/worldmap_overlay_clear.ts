/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_overlay_clear]

function worldmap_overlay_clear(intArg0: component): void {
    ifSetOnTimer(hook(worldmap_overlay, "IIiii", [intArg0, Component.interface_755.component_755_28, 0, 0, 0]), intArg0);
    ccDeleteAll(intArg0);
    ccDeleteAll(Component.interface_755.component_755_36);
    ccDeleteAll(Component.interface_755.component_755_37);
    ccDeleteAll(Component.interface_755.component_755_38);
    ccDeleteAll(Component.interface_755.component_755_39);
    ccDeleteAll(Component.interface_755.component_755_40);
    ccDeleteAll(Component.interface_755.component_755_41);
    ccDeleteAll(Component.interface_755.component_755_42);
}
