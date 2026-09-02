/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5638

function cs2_5638(intArg0: number): number {
    varcstr_327 = varcstr_326;

    if (stringLength(varcstr_326) <= 0) {
        create_error("Please enter your Email address again here.", Component.interface_673.component_673_112);
        return 0;
    }

    if (compare(varcstr_122, varcstr_326) != 0) {
        create_error("Please ensure both Email addresses match.", Component.interface_673.component_673_112);
        return 0;
    }

    if (ifGetGraphic(Component.interface_673.component_673_93) == Graphic.symbols_1_5) {
        create_error(ifGetText(Component.interface_673.component_673_136), Component.interface_673.component_673_112);
        return 0;
    }
    ifSetGraphic(Graphic.symbols_1_3, Component.interface_673.component_673_112);
    ifSetHide(true, Component.interface_673.component_673_117);
    ifSetHide(true, Component.interface_673.component_673_30);

    if (intArg0 == 1) {
        proc_create_focus(7, 1);
    }
    return 1;
}
