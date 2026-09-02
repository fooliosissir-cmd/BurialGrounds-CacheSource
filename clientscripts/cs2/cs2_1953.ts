/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1953

function cs2_1953(): void {
    let int0: number = invTotal(Inv.inv, Obj.vodka);
    let int1: number = invTotal(Inv.inv, Obj.gin);
    let int2: number = invTotal(Inv.inv, Obj.whisky);
    let int3: number = invTotal(Inv.inv, Obj.orange);
    let int4: number = invTotal(Inv.inv, Obj.lemon);
    let int5: number = invTotal(Inv.inv, Obj.equa_leaves);
    let int6: number = invTotal(Inv.inv, Obj.lime);
    let int7: number = invTotal(Inv.inv, Obj.chocolate_bar);
    let int8: number = invTotal(Inv.inv, Obj.pineapple);
    let int9: number = invTotal(Inv.inv, Obj.dwellberries);
    let int10: number = invTotal(Inv.inv, Obj.bucket_milk);
    let int11: number = invTotal(Inv.inv, Obj.brandy);

    if (int0 >= 2 && int1 >= 1 && int3 >= 1 && int6 >= 1 && int4 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_436.component_436_81);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_436.component_436_81);
    }

    if (int0 >= 1 && int6 >= 3) {
        ifSetColour(colour(0x00FF00), Component.interface_436.component_436_82);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_436.component_436_82);
    }

    if (int8 >= 1 && int4 >= 1 && int3 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_436.component_436_83);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_436.component_436_83);
    }

    if (int8 >= 2 && int4 >= 1 && int3 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_436.component_436_84);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_436.component_436_84);
    }

    if (int0 >= 1 && int1 >= 1 && int9 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_436.component_436_85);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_436.component_436_85);
    }

    if (int2 >= 1 && int5 >= 1 && int10 >= 1 && int7 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_436.component_436_86);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_436.component_436_86);
    }

    if (int0 >= 1 && int1 >= 1 && int11 >= 1 && int4 >= 2 && int3 >= 1) {
        ifSetColour(colour(0x00FF00), Component.interface_436.component_436_87);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_436.component_436_87);
    }

    if (invTotal(Inv.inv, Obj.pineapple) > 0) {
        ifSetObject(Obj.pineapple, 100, Component.interface_436.component_436_24);
    } else {
        ifSetObject(Obj.obj_9497, 100, Component.interface_436.component_436_24);
    }

    if (invTotal(Inv.inv, Obj.lemon) > 0) {
        ifSetObject(Obj.lemon, 140, Component.interface_436.component_436_25);
    } else {
        ifSetObject(Obj.obj_9492, 140, Component.interface_436.component_436_25);
    }

    if (invTotal(Inv.inv, Obj.orange) > 0) {
        ifSetObject(Obj.orange, 140, Component.interface_436.component_436_26);
    } else {
        ifSetObject(Obj.obj_9493, 140, Component.interface_436.component_436_26);
    }

    if (invTotal(Inv.inv, Obj.vodka) > 1) {
        ifSetObject(Obj.vodka, 120, Component.interface_436.component_436_4);
    } else {
        ifSetObject(Obj.obj_9491, 120, Component.interface_436.component_436_4);
    }

    if (invTotal(Inv.inv, Obj.gin) > 0) {
        ifSetObject(Obj.gin, 120, Component.interface_436.component_436_5);
    } else {
        ifSetObject(Obj.obj_9491, 120, Component.interface_436.component_436_5);
    }

    if (invTotal(Inv.inv, Obj.orange) > 0) {
        ifSetObject(Obj.orange, 140, Component.interface_436.component_436_6);
    } else {
        ifSetObject(Obj.obj_9493, 140, Component.interface_436.component_436_6);
    }

    if (invTotal(Inv.inv, Obj.lime) > 0) {
        ifSetObject(Obj.lime, 140, Component.interface_436.component_436_7);
    } else {
        ifSetObject(Obj.obj_9555, 140, Component.interface_436.component_436_7);
    }

    if (invTotal(Inv.inv, Obj.lemon) > 0) {
        ifSetObject(Obj.lemon, 140, Component.interface_436.component_436_8);
    } else {
        ifSetObject(Obj.obj_9492, 140, Component.interface_436.component_436_8);
    }

    if (invTotal(Inv.inv, Obj.vodka) > 0) {
        ifSetObject(Obj.vodka, 120, Component.interface_436.component_436_17);
    } else {
        ifSetObject(Obj.obj_9491, 120, Component.interface_436.component_436_17);
    }

    if (invTotal(Inv.inv, Obj.lime) > 2) {
        ifSetObject(Obj.lime, 120, Component.interface_436.component_436_18);
    } else {
        ifSetObject(Obj.obj_9555, 140, Component.interface_436.component_436_18);
    }

    if (invTotal(Inv.inv, Obj.vodka) > 0) {
        ifSetObject(Obj.vodka, 120, Component.interface_436.component_436_62);
    } else {
        ifSetObject(Obj.obj_9491, 120, Component.interface_436.component_436_62);
    }

    if (invTotal(Inv.inv, Obj.gin) > 0) {
        ifSetObject(Obj.gin, 120, Component.interface_436.component_436_64);
    } else {
        ifSetObject(Obj.obj_9491, 120, Component.interface_436.component_436_64);
    }

    if (invTotal(Inv.inv, Obj.brandy) > 0) {
        ifSetObject(Obj.brandy, 120, Component.interface_436.component_436_63);
    } else {
        ifSetObject(Obj.obj_9556, 120, Component.interface_436.component_436_63);
    }

    if (invTotal(Inv.inv, Obj.orange) > 0) {
        ifSetObject(Obj.orange, 140, Component.interface_436.component_436_65);
    } else {
        ifSetObject(Obj.obj_9493, 140, Component.interface_436.component_436_65);
    }

    if (invTotal(Inv.inv, Obj.lemon) > 1) {
        ifSetObject(Obj.lemon, 140, Component.interface_436.component_436_66);
    } else {
        ifSetObject(Obj.obj_9492, 140, Component.interface_436.component_436_66);
    }

    if (invTotal(Inv.inv, Obj.whisky) > 0) {
        ifSetObject(Obj.whisky, 120, Component.interface_436.component_436_51);
    } else {
        ifSetObject(Obj.obj_9491, 120, Component.interface_436.component_436_51);
    }

    if (invTotal(Inv.inv, Obj.equa_leaves) > 0) {
        ifSetObject(Obj.equa_leaves, 120, Component.interface_436.component_436_52);
    } else {
        ifSetObject(Obj.obj_9494, 120, Component.interface_436.component_436_52);
    }

    if (invTotal(Inv.inv, Obj.chocolate_bar) > 0) {
        ifSetObject(Obj.chocolate_bar, 140, Component.interface_436.component_436_54);
    } else {
        ifSetObject(Obj.obj_9507, 140, Component.interface_436.component_436_54);
    }

    if (invTotal(Inv.inv, Obj.bucket_milk) > 0) {
        ifSetObject(Obj.bucket_milk, 100, Component.interface_436.component_436_53);
    } else {
        ifSetObject(Obj.obj_9495, 100, Component.interface_436.component_436_53);
    }

    if (invTotal(Inv.inv, Obj.pineapple) > 1) {
        ifSetObject(Obj.pineapple, 100, Component.interface_436.component_436_33);
    } else {
        ifSetObject(Obj.obj_9497, 100, Component.interface_436.component_436_33);
    }

    if (invTotal(Inv.inv, Obj.lemon) > 0) {
        ifSetObject(Obj.lemon, 140, Component.interface_436.component_436_34);
    } else {
        ifSetObject(Obj.obj_9492, 140, Component.interface_436.component_436_34);
    }

    if (invTotal(Inv.inv, Obj.orange) > 0) {
        ifSetObject(Obj.orange, 140, Component.interface_436.component_436_35);
    } else {
        ifSetObject(Obj.obj_9493, 140, Component.interface_436.component_436_35);
    }

    if (invTotal(Inv.inv, Obj.vodka) > 0) {
        ifSetObject(Obj.vodka, 120, Component.interface_436.component_436_42);
    } else {
        ifSetObject(Obj.obj_9491, 120, Component.interface_436.component_436_42);
    }

    if (invTotal(Inv.inv, Obj.gin) > 0) {
        ifSetObject(Obj.gin, 120, Component.interface_436.component_436_43);
    } else {
        ifSetObject(Obj.obj_9491, 120, Component.interface_436.component_436_43);
    }

    if (invTotal(Inv.inv, Obj.dwellberries) > 0) {
        ifSetObject(Obj.dwellberries, 140, Component.interface_436.component_436_44);
    } else {
        ifSetObject(Obj.obj_9496, 140, Component.interface_436.component_436_44);
    }
}
