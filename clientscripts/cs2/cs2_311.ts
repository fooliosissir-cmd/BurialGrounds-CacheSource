/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_311

function cs2_311(strArg0: string, intArg0: number, intArg1: number): void {
    if (varbit_worldmap_tooltips_hidden == 1) {
        ccDeleteAll(Component.interface_755.component_755_57);
        return;
    }
    worldmap_tooltip(strArg0, intArg0 + 3, intArg1 + 3);
}
