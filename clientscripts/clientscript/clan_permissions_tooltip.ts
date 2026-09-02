/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_permissions_tooltip]

function clan_permissions_tooltip(intArg0: component, strArg0: string): void {
    let int1: number = ifGetX(intArg0) + ifGetWidth(intArg0) / 2;

    aif_tooltip(Component.interface_1096.component_1096_106, intArg0, -1, strArg0, 150, -1, -1, -1, 13, 4, 2, int1, ifGetY(intArg0));
}
