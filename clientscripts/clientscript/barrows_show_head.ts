/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,barrows_show_head]

function barrows_show_head(): void {
    let int0: component = -1;

    if (varc_barrows_overlay_head == -1) {
        return;
    }

    switch (varc_barrows_overlay_head) {
        case Obj.obj_4761:
        case Obj.obj_4762:
            int0 = Component.interface_24.component_24_10;
            break;
        case Obj.obj_4763:
        case Obj.obj_4764:
            int0 = Component.interface_24.component_24_8;
            break;
        case Obj.obj_4765:
        case Obj.obj_4766:
            int0 = Component.interface_24.component_24_9;
            break;
        case Obj.obj_4767:
        case Obj.obj_4768:
            int0 = Component.interface_24.component_24_11;
            break;
        case Obj.obj_4769:
        case Obj.obj_4770:
            int0 = Component.interface_24.component_24_12;
            break;
        case Obj.obj_4771:
        case Obj.obj_4772:
            int0 = Component.interface_24.component_24_13;
            break;
        case Obj.obj_24195:
        case Obj.obj_24196:
            int0 = Component.interface_24.component_24_14;
            break;
    }

    if (int0 == -1) {
        return;
    }
    ifSetObject(varc_barrows_overlay_head, -1, int0);
    ifSetModelZoom(1600, int0);
    ifSetModelAnim(12554, int0);
}
