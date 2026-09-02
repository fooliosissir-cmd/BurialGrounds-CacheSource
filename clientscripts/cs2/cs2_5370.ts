/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5370

function cs2_5370(intArg0: number, intArg1: number, strArg0: string, strArg1: string): void {
    if (intArg0 == 1) {
        ifSetHide(true, Component.agidad_overlay.numbers);
    } else {
        ifSetHide(false, Component.agidad_overlay.numbers);
    }

    if (intArg1 == 1) {
        ifSetHide(true, Component.agidad_overlay.timerbar);
    } else {
        ifSetHide(false, Component.agidad_overlay.timerbar);
    }
    ifSetText(strArg0, Component.agidad_overlay.event_name);
    ifSetText(strArg1, Component.agidad_overlay.event_desc);
    let int2: number = stringWidth(strArg1, Graphic.graphic_4040);
    ifSetSize(int2 + 16, ifGetHeight(Component.agidad_overlay.desc), 0, 0, Component.agidad_overlay.desc);
    int2 = stringWidth(strArg0, Graphic.graphic_4040);
    ifSetSize(int2 + 16, ifGetHeight(Component.agidad_overlay.title), 0, 0, Component.agidad_overlay.title);
    int2 = max(ifGetWidth(Component.agidad_overlay.desc), ifGetWidth(Component.agidad_overlay.title));

    if (intArg1 == 0) {
        int2 = max(int2, ifGetWidth(Component.agidad_overlay.timerbar));
    }

    if (intArg0 == 0) {
        int2 = max(int2, ifGetWidth(Component.agidad_overlay.numbers));
    }
    ifSetSize(int2 + 48, ifGetHeight(Component.agidad_overlay.overlay), 0, 0, Component.agidad_overlay.overlay);
    let int3: number = ifGetHeight(Component.agidad_overlay.desc) + ifGetHeight(Component.agidad_overlay.title);

    if (intArg1 == 0) {
        int3 = int3 + ifGetHeight(Component.agidad_overlay.timerbar);
    }
    ifSetSize(ifGetWidth(Component.agidad_overlay.overlay), int3, 0, 0, Component.agidad_overlay.overlay);

    if (intArg0 == 0) {
        ifSetPosition(0, 7 + ifGetHeight(Component.agidad_overlay.overlay), 1, 0, Component.agidad_overlay.numbers);
    }
}
