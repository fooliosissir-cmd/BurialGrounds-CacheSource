/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4846

function cs2_4846(intArg0: number): void {
    ifSetHide(true, Component.interface_1258.component_1258_479);
    ifSetHide(true, Component.interface_1258.component_1258_470);
    ifSetHide(true, Component.interface_1258.component_1258_461);
    ifSetHide(true, Component.interface_1258.component_1258_390);
    ifSetHide(true, Component.interface_1258.component_1258_318);
    ifSetHide(true, Component.interface_1258.component_1258_240);

    switch (intArg0) {
        case 1:
            ifSetHide(false, Component.interface_1258.component_1258_479);
            ifSetHide(false, Component.interface_1258.component_1258_390);
            ifSetGraphic(Graphic.clan_custom_object_backing_lrg_0, Component.interface_1258.component_1258_495);
            break;
        case 2:
            ifSetHide(false, Component.interface_1258.component_1258_470);
            ifSetHide(false, Component.interface_1258.component_1258_318);
            ifSetGraphic(Graphic.clan_custom_object_backing_lrg_1, Component.interface_1258.component_1258_495);
            break;
        case 3:
            ifSetHide(false, Component.interface_1258.component_1258_461);
            ifSetHide(false, Component.interface_1258.component_1258_240);
            ifSetGraphic(Graphic.clan_custom_object_backing_lrg_2, Component.interface_1258.component_1258_495);
            break;
    }
    cs2_4838();
    cs2_4810();
    cs2_4840();
    cs2_4814();
}
