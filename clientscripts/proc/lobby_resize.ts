/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobby_resize]

function proc_lobby_resize(): void {
    let int0: number = 0;

    if (getWindowMode() < 2) {
        ifSetSize(0, 0, 1, 1, Component.interface_906.component_906_271);
    } else {
        ifSetSize(956, 503, 0, 0, Component.interface_906.component_906_271);
    }

    if (detailGetMaxScreenSize() == 2 && getWindowMode() != 1) {
        ifSetSize(800, 503, 0, 0, Component.interface_906.component_906_271);
    }
}
