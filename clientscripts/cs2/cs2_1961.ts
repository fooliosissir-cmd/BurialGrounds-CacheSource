/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1961

function cs2_1961(): void {
    let int0: number = invTotal(Inv.inv, Obj.cheese);
    let int1: number = invTotal(Inv.inv, Obj.gnome_spice);
    let int2: number = invTotal(Inv.inv, Obj.king_worm);
    let int3: number = invTotal(Inv.inv, Obj.onion);
    let int4: number = invTotal(Inv.inv, Obj.dwellberries);
    let int5: number = invTotal(Inv.inv, Obj.equa_leaves);
    let int6: number = invTotal(Inv.inv, Obj.toads_legs);
    let int7: number = invTotal(Inv.inv, Obj.chocolate_bar);
    let int8: number = invTotal(Inv.inv, Obj.potato);

    if (int2 >= 4 && int3 >= 2 && int1 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_435.component_435_45);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_435.component_435_45);
    }

    if (int3 >= 2 && int1 >= 1 && int8 >= 2) {
        ifSetColour(colour(0x00FF00), Component.interface_435.component_435_46);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_435.component_435_46);
    }

    if (int6 >= 4 && int1 >= 1 && int0 >= 2 && int5 >= 2 && int4 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_435.component_435_47);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_435.component_435_47);
    }

    if (int7 >= 4 && int5 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_435.component_435_48);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_435.component_435_48);
    }

    if (invTotal(Inv.inv, Obj.toads_legs) > 3) {
        ifSetObject(Obj.toads_legs, 100, Component.interface_435.component_435_22);
    } else {
        ifSetObject(Obj.obj_9499, 100, Component.interface_435.component_435_22);
    }

    if (invTotal(Inv.inv, Obj.equa_leaves) > 1) {
        ifSetObject(Obj.equa_leaves, 120, Component.interface_435.component_435_24);
    } else {
        ifSetObject(Obj.obj_9494, 120, Component.interface_435.component_435_24);
    }

    if (invTotal(Inv.inv, Obj.cheese) > 1) {
        ifSetObject(Obj.cheese, 140, Component.interface_435.component_435_23);
    } else {
        ifSetObject(Obj.obj_9502, 140, Component.interface_435.component_435_23);
    }

    if (invTotal(Inv.inv, Obj.gnome_spice) > 0) {
        ifSetObject(Obj.gnome_spice, 90, Component.interface_435.component_435_25);
    } else {
        ifSetObject(Obj.obj_9500, 90, Component.interface_435.component_435_25);
    }

    if (invTotal(Inv.inv, Obj.dwellberries) > 0) {
        ifSetObject(Obj.dwellberries, 140, Component.interface_435.component_435_26);
    } else {
        ifSetObject(Obj.obj_9496, 140, Component.interface_435.component_435_26);
    }

    if (invTotal(Inv.inv, Obj.king_worm) > 3) {
        ifSetObject(Obj.king_worm, 100, Component.interface_435.component_435_4);
    } else {
        ifSetObject(Obj.obj_9501, 100, Component.interface_435.component_435_4);
    }

    if (invTotal(Inv.inv, Obj.gnome_spice) > 0) {
        ifSetObject(Obj.gnome_spice, 90, Component.interface_435.component_435_6);
    } else {
        ifSetObject(Obj.obj_9500, 90, Component.interface_435.component_435_6);
    }

    if (invTotal(Inv.inv, Obj.onion) > 1) {
        ifSetObject(Obj.onion, 140, Component.interface_435.component_435_5);
    } else {
        ifSetObject(Obj.obj_9504, 140, Component.interface_435.component_435_5);
    }

    if (invTotal(Inv.inv, Obj.potato) > 1) {
        ifSetObject(Obj.potato, 100, Component.interface_435.component_435_14);
    } else {
        ifSetObject(Obj.obj_9506, 100, Component.interface_435.component_435_14);
    }

    if (invTotal(Inv.inv, Obj.gnome_spice) > 0) {
        ifSetObject(Obj.gnome_spice, 90, Component.interface_435.component_435_15);
    } else {
        ifSetObject(Obj.obj_9500, 90, Component.interface_435.component_435_15);
    }

    if (invTotal(Inv.inv, Obj.onion) > 1) {
        ifSetObject(Obj.onion, 140, Component.interface_435.component_435_13);
    } else {
        ifSetObject(Obj.obj_9504, 140, Component.interface_435.component_435_13);
    }

    if (invTotal(Inv.inv, Obj.chocolate_bar) > 3) {
        ifSetObject(Obj.chocolate_bar, 140, Component.interface_435.component_435_35);
    } else {
        ifSetObject(Obj.obj_9507, 140, Component.interface_435.component_435_35);
    }

    if (invTotal(Inv.inv, Obj.equa_leaves) > 0) {
        ifSetObject(Obj.equa_leaves, 120, Component.interface_435.component_435_36);
    } else {
        ifSetObject(Obj.obj_9494, 120, Component.interface_435.component_435_36);
    }
}
