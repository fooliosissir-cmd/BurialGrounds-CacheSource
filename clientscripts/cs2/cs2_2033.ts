/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2033

function cs2_2033(): void {
    let int0: number = invTotal(Inv.inv, Obj.gnome_spice);
    let int1: number = invTotal(Inv.inv, Obj.king_worm);
    let int2: number = invTotal(Inv.inv, Obj.equa_leaves);
    let int3: number = invTotal(Inv.inv, Obj.toads_legs);
    let int4: number = invTotal(Inv.inv, Obj.chocolate_bar);

    if (int3 >= 2 && int0 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_437.component_437_37);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_437.component_437_37);
    }

    if (int2 >= 2 && int0 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_437.component_437_38);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_437.component_437_38);
    }

    if (int2 >= 1 && int0 >= 1 && int1 >= 2) {
        ifSetColour(colour(0x00FF00), Component.interface_437.component_437_39);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_437.component_437_39);
    }

    if (int4 >= 2 && int0 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_437.component_437_40);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_437.component_437_40);
    }

    if (invTotal(Inv.inv, Obj.toads_legs) > 1) {
        ifSetObject(Obj.toads_legs, 100, Component.interface_437.component_437_4);
    } else {
        ifSetObject(Obj.obj_9499, 100, Component.interface_437.component_437_4);
    }

    if (invTotal(Inv.inv, Obj.gnome_spice) > 0) {
        ifSetObject(Obj.gnome_spice, 90, Component.interface_437.component_437_5);
    } else {
        ifSetObject(Obj.obj_9500, 90, Component.interface_437.component_437_5);
    }

    if (invTotal(Inv.inv, Obj.equa_leaves) > 1) {
        ifSetObject(Obj.equa_leaves, 120, Component.interface_437.component_437_12);
    } else {
        ifSetObject(Obj.obj_9494, 120, Component.interface_437.component_437_12);
    }

    if (invTotal(Inv.inv, Obj.gnome_spice) > 0) {
        ifSetObject(Obj.gnome_spice, 90, Component.interface_437.component_437_11);
    } else {
        ifSetObject(Obj.obj_9500, 90, Component.interface_437.component_437_11);
    }

    if (invTotal(Inv.inv, Obj.chocolate_bar) > 1) {
        ifSetObject(Obj.chocolate_bar, 140, Component.interface_437.component_437_27);
    } else {
        ifSetObject(Obj.obj_9507, 140, Component.interface_437.component_437_27);
    }

    if (invTotal(Inv.inv, Obj.gnome_spice) > 0) {
        ifSetObject(Obj.gnome_spice, 90, Component.interface_437.component_437_28);
    } else {
        ifSetObject(Obj.obj_9500, 90, Component.interface_437.component_437_28);
    }

    if (invTotal(Inv.inv, Obj.king_worm) > 1) {
        ifSetObject(Obj.king_worm, 100, Component.interface_437.component_437_19);
    } else {
        ifSetObject(Obj.obj_9501, 100, Component.interface_437.component_437_19);
    }

    if (invTotal(Inv.inv, Obj.equa_leaves) > 0) {
        ifSetObject(Obj.equa_leaves, 120, Component.interface_437.component_437_20);
    } else {
        ifSetObject(Obj.obj_9494, 120, Component.interface_437.component_437_20);
    }

    if (invTotal(Inv.inv, Obj.gnome_spice) > 0) {
        ifSetObject(Obj.gnome_spice, 90, Component.interface_437.component_437_18);
    } else {
        ifSetObject(Obj.obj_9500, 90, Component.interface_437.component_437_18);
    }
}
