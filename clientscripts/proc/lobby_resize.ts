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

    // Burial Grounds uses a compact lore-facing left rail rather than the
    // revision-727 social/account tab strip.
    ifSetPosition(0, 0, 0, 0, Component.interface_906.component_906_51);
    ifSetSize(132, 0, 0, 1, Component.interface_906.component_906_51);

    ifSetPosition(140, 0, 0, 0, Component.interface_906.component_906_53);
    ifSetSize(140, 0, 1, 1, Component.interface_906.component_906_53);

    ifSetPosition(8, 74, 0, 0, Component.interface_906.component_906_214);
    ifSetPosition(8, 148, 0, 0, Component.interface_906.component_906_215);

    ifSetSize(116, 58, 0, 0, Component.interface_906.component_906_214);
    ifSetSize(116, 58, 0, 0, Component.interface_906.component_906_215);

    ifSetSize(0, 58, 1, 0, Component.interface_906.component_906_230);
    ifSetSize(0, 58, 1, 0, Component.interface_906.component_906_28);

    ifSetPosition(34, 17, 0, 0, Component.interface_906.component_906_231);
    ifSetPosition(34, 17, 0, 0, Component.interface_906.component_906_228);

    // Retired lobby destinations stay completely out of sight and out of use.
    ifSetHide(true, Component.interface_906.component_906_216);
    ifSetHide(true, Component.interface_906.component_906_217);
    ifSetHide(true, Component.interface_906.component_906_218);
    ifSetHide(true, Component.interface_906.component_906_219);
}
