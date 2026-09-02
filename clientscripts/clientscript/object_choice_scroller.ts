/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,object_choice_scroller]

function object_choice_scroller(intArg0: component, intArg1: graphic, intArg2: number): void {
    let int3: number = ifGetScrollX(Component.interface_1179.component_1179_10);

    ifSetScrollPos(ifGetScrollX(Component.interface_1179.component_1179_10) + intArg2, 0, Component.interface_1179.component_1179_10);

    if (int3 != ifGetScrollX(Component.interface_1179.component_1179_10)) {
        ifSetGraphic(intArg1, intArg0);
    }
    cs2_5533();
}
