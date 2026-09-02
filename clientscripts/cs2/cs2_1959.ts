/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1959

function cs2_1959(): void {
    let int0: number = invTotal(Inv.inv, Obj.cheese);
    let int1: number = invTotal(Inv.inv, Obj.tomato);
    let int2: number = invTotal(Inv.inv, Obj.gnome_spice);
    let int3: number = invTotal(Inv.inv, Obj.king_worm);
    let int4: number = invTotal(Inv.inv, Obj.onion);
    let int5: number = invTotal(Inv.inv, Obj.cabbage);
    let int6: number = invTotal(Inv.inv, Obj.dwellberries);
    let int7: number = invTotal(Inv.inv, Obj.equa_leaves);
    let int8: number = invTotal(Inv.inv, Obj.toads_legs);
    let int9: number = invTotal(Inv.inv, Obj.pineapple_chunks);
    let int10: number = invTotal(Inv.inv, Obj.orange_chunks);
    let int11: number = invTotal(Inv.inv, Obj.lime_chunks);

    if (int7 >= 4 && int9 >= 1 && int10 >= 1 && int11 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_434.component_434_59);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_434.component_434_59);
    }

    if (int7 >= 1 && int2 >= 1 && int8 >= 1 && int0 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_434.component_434_60);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_434.component_434_60);
    }

    if (int3 >= 1 && int2 >= 1 && int0 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_434.component_434_61);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_434.component_434_61);
    }

    if (int1 >= 2 && int4 >= 1 && int5 >= 1 && int6 >= 1 && int0 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_434.component_434_62);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_434.component_434_62);
    }

    if (int1 >= 1 && int0 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_434.component_434_63);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_434.component_434_63);
    }

    if (invTotal(Inv.inv, Obj.equa_leaves) > 3) {
        ifSetObject(Obj.equa_leaves, 120, Component.interface_434.component_434_4);
    } else {
        ifSetObject(Obj.obj_9494, 120, Component.interface_434.component_434_4);
    }

    if (invTotal(Inv.inv, Obj.pineapple_chunks) > 0) {
        ifSetObject(Obj.pineapple_chunks, 120, Component.interface_434.component_434_5);
    } else {
        ifSetObject(Obj.obj_9498, 120, Component.interface_434.component_434_5);
    }

    if (invTotal(Inv.inv, Obj.orange_chunks) > 0) {
        ifSetObject(Obj.orange_chunks, 120, Component.interface_434.component_434_6);
    } else {
        ifSetObject(Obj.obj_9498, 120, Component.interface_434.component_434_6);
    }

    if (invTotal(Inv.inv, Obj.lime_chunks) > 0) {
        ifSetObject(Obj.lime_chunks, 120, Component.interface_434.component_434_7);
    } else {
        ifSetObject(Obj.obj_9498, 120, Component.interface_434.component_434_7);
    }

    if (invTotal(Inv.inv, Obj.equa_leaves) > 0) {
        ifSetObject(Obj.equa_leaves, 120, Component.interface_434.component_434_15);
    } else {
        ifSetObject(Obj.obj_9494, 120, Component.interface_434.component_434_15);
    }

    if (invTotal(Inv.inv, Obj.toads_legs) > 0) {
        ifSetObject(Obj.toads_legs, 100, Component.interface_434.component_434_16);
    } else {
        ifSetObject(Obj.obj_9499, 100, Component.interface_434.component_434_16);
    }

    if (invTotal(Inv.inv, Obj.gnome_spice) > 0) {
        ifSetObject(Obj.gnome_spice, 90, Component.interface_434.component_434_17);
    } else {
        ifSetObject(Obj.obj_9500, 90, Component.interface_434.component_434_17);
    }

    if (invTotal(Inv.inv, Obj.cheese) > 0) {
        ifSetObject(Obj.cheese, 140, Component.interface_434.component_434_18);
    } else {
        ifSetObject(Obj.obj_9502, 140, Component.interface_434.component_434_18);
    }

    if (invTotal(Inv.inv, Obj.king_worm) > 0) {
        ifSetObject(Obj.king_worm, 100, Component.interface_434.component_434_27);
    } else {
        ifSetObject(Obj.obj_9501, 100, Component.interface_434.component_434_27);
    }

    if (invTotal(Inv.inv, Obj.gnome_spice) > 0) {
        ifSetObject(Obj.gnome_spice, 90, Component.interface_434.component_434_26);
    } else {
        ifSetObject(Obj.obj_9500, 90, Component.interface_434.component_434_26);
    }

    if (invTotal(Inv.inv, Obj.cheese) > 0) {
        ifSetObject(Obj.cheese, 140, Component.interface_434.component_434_28);
    } else {
        ifSetObject(Obj.obj_9502, 140, Component.interface_434.component_434_28);
    }

    if (invTotal(Inv.inv, Obj.tomato) > 1) {
        ifSetObject(Obj.tomato, 100, Component.interface_434.component_434_35);
    } else {
        ifSetObject(Obj.obj_9503, 100, Component.interface_434.component_434_35);
    }

    if (invTotal(Inv.inv, Obj.onion) > 0) {
        ifSetObject(Obj.onion, 140, Component.interface_434.component_434_36);
    } else {
        ifSetObject(Obj.obj_9504, 140, Component.interface_434.component_434_36);
    }

    if (invTotal(Inv.inv, Obj.cabbage) > 0) {
        ifSetObject(Obj.cabbage, 90, Component.interface_434.component_434_37);
    } else {
        ifSetObject(Obj.obj_9505, 90, Component.interface_434.component_434_37);
    }

    if (invTotal(Inv.inv, Obj.dwellberries) > 0) {
        ifSetObject(Obj.dwellberries, 140, Component.interface_434.component_434_38);
    } else {
        ifSetObject(Obj.obj_9496, 140, Component.interface_434.component_434_38);
    }

    if (invTotal(Inv.inv, Obj.cheese) > 0) {
        ifSetObject(Obj.cheese, 140, Component.interface_434.component_434_39);
    } else {
        ifSetObject(Obj.obj_9502, 140, Component.interface_434.component_434_39);
    }

    if (invTotal(Inv.inv, Obj.tomato) > 0) {
        ifSetObject(Obj.tomato, 100, Component.interface_434.component_434_48);
    } else {
        ifSetObject(Obj.obj_9503, 100, Component.interface_434.component_434_48);
    }

    if (invTotal(Inv.inv, Obj.cheese) > 0) {
        ifSetObject(Obj.cheese, 140, Component.interface_434.component_434_49);
    } else {
        ifSetObject(Obj.obj_9502, 140, Component.interface_434.component_434_49);
    }
}
