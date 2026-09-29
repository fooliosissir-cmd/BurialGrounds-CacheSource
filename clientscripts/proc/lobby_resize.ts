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

    // Burial Grounds lobby layout: a permanent left-side navigation rail with
    // the active pane occupying the rest of the lobby. This deliberately
    // breaks from the stock revision-727 horizontal tab strip while keeping
    // every existing tab and action wired to its native script.
    ifSetPosition(0, 0, 0, 0, Component.interface_906.component_906_51);
    ifSetSize(132, 0, 0, 1, Component.interface_906.component_906_51);

    ifSetPosition(140, 0, 0, 0, Component.interface_906.component_906_53);
    ifSetSize(140, 0, 1, 1, Component.interface_906.component_906_53);

    ifSetPosition(8, 18, 0, 0, Component.interface_906.component_906_214);
    ifSetPosition(8, 66, 0, 0, Component.interface_906.component_906_215);
    ifSetPosition(8, 114, 0, 0, Component.interface_906.component_906_216);
    ifSetPosition(8, 162, 0, 0, Component.interface_906.component_906_217);
    ifSetPosition(8, 210, 0, 0, Component.interface_906.component_906_218);
    ifSetPosition(8, 258, 0, 0, Component.interface_906.component_906_219);

    ifSetSize(116, 40, 0, 0, Component.interface_906.component_906_214);
    ifSetSize(116, 40, 0, 0, Component.interface_906.component_906_215);
    ifSetSize(116, 40, 0, 0, Component.interface_906.component_906_216);
    ifSetSize(116, 40, 0, 0, Component.interface_906.component_906_217);
    ifSetSize(116, 40, 0, 0, Component.interface_906.component_906_218);
    ifSetSize(116, 40, 0, 0, Component.interface_906.component_906_219);

    ifSetSize(0, 40, 1, 0, Component.interface_906.component_906_230);
    ifSetSize(0, 40, 1, 0, Component.interface_906.component_906_28);
    ifSetSize(0, 40, 1, 0, Component.interface_906.component_906_27);
    ifSetSize(0, 40, 1, 0, Component.interface_906.component_906_280);
    ifSetSize(0, 40, 1, 0, Component.interface_906.component_906_26);
    ifSetSize(0, 40, 1, 0, Component.interface_906.component_906_25);

    ifSetPosition(34, 9, 0, 0, Component.interface_906.component_906_231);
    ifSetPosition(34, 9, 0, 0, Component.interface_906.component_906_228);
    ifSetPosition(34, 9, 0, 0, Component.interface_906.component_906_226);
    ifSetPosition(34, 9, 0, 0, Component.interface_906.component_906_281);
    ifSetPosition(34, 9, 0, 0, Component.interface_906.component_906_224);
    ifSetPosition(34, 9, 0, 0, Component.interface_906.component_906_222);
}
