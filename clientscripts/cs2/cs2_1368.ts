/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1368

function cs2_1368(): void {
    ifSetText("Zamorak = " + tostring(varbit_castlewars_zamorak_score), Component.interface_59.component_59_0);
    ifSetText(tostring(varbit_castlewars_saradomin_score) + " = Saradomin", Component.interface_59.component_59_1);
    ifSetText(tostring(varp_castlewars_timer) + " min", Component.interface_59.component_59_6);

    if (varbit_castlewars_zamorak_maindoor == 0) {
        ifSetText("Health: " + tostring(varbit_castlewars_zamorak_maindoor) + "%", Component.interface_59.component_59_9);
        ifSetColour(colour(0xFF0000), Component.interface_59.component_59_9);
    } else {
        ifSetText("Health " + tostring(varbit_castlewars_zamorak_maindoor) + "%", Component.interface_59.component_59_9);
        ifSetColour(colour(0x00FF00), Component.interface_59.component_59_9);
    }

    if (varbit_castlewars_saradomin_flag == 0) {
        ifSetText("Safe", Component.interface_59.component_59_2);
        ifSetColour(colour(0x00FF00), Component.interface_59.component_59_2);
    } else if (varbit_castlewars_saradomin_flag == 1) {
        ifSetText("Taken", Component.interface_59.component_59_2);
        ifSetColour(colour(0xFF0000), Component.interface_59.component_59_2);
    } else if (varbit_castlewars_saradomin_flag == 2) {
        ifSetText("Dropped", Component.interface_59.component_59_2);
        ifSetColour(colour(0xFFFF00), Component.interface_59.component_59_2);
    }

    if (varbit_castlewars_zamorak_flag == 0) {
        ifSetText("Safe", Component.interface_59.component_59_3);
        ifSetColour(colour(0x00FF00), Component.interface_59.component_59_3);
    } else if (varbit_castlewars_zamorak_flag == 1) {
        ifSetText("Taken", Component.interface_59.component_59_3);
        ifSetColour(colour(0xFF0000), Component.interface_59.component_59_3);
    } else if (varbit_castlewars_zamorak_flag == 2) {
        ifSetText("Dropped", Component.interface_59.component_59_3);
        ifSetColour(colour(0xFFFF00), Component.interface_59.component_59_3);
    }

    if (varbit_castlewars_zamorak_sidedoor == 1) {
        ifSetText("Unlocked", Component.interface_59.component_59_10);
        ifSetColour(colour(0xFF0000), Component.interface_59.component_59_10);
    } else {
        ifSetText("Locked", Component.interface_59.component_59_10);
        ifSetColour(colour(0x00FF00), Component.interface_59.component_59_10);
    }

    if (varbit_castlewars_zamorak_tunnel1 == 1) {
        ifSetText("Cleared", Component.interface_59.component_59_11);
        ifSetColour(colour(0xFF0000), Component.interface_59.component_59_11);
    } else {
        ifSetText("Collapsed", Component.interface_59.component_59_11);
        ifSetColour(colour(0x00FF00), Component.interface_59.component_59_11);
    }

    if (varbit_castlewars_zamorak_tunnel2 == 1) {
        ifSetText("Cleared", Component.interface_59.component_59_12);
        ifSetColour(colour(0xFF0000), Component.interface_59.component_59_12);
    } else {
        ifSetText("Collapsed", Component.interface_59.component_59_12);
        ifSetColour(colour(0x00FF00), Component.interface_59.component_59_12);
    }

    if (varbit_castlewars_zamorak_catapult == 1) {
        ifSetText("Destroyed", Component.interface_59.component_59_13);
        ifSetColour(colour(0xFF0000), Component.interface_59.component_59_13);
    } else {
        ifSetText("Operational", Component.interface_59.component_59_13);
        ifSetColour(colour(0x00FF00), Component.interface_59.component_59_13);
    }
    ifSetObject(Obj.obj_18748, -1, Component.interface_59.component_59_4);
    ifSetObject(Obj.obj_18749, -1, Component.interface_59.component_59_5);
    ifSetObject(Obj.obj_18750, -1, Component.interface_59.component_59_14);
    ifSetObject(Obj.obj_18751, -1, Component.interface_59.component_59_15);
    ifSetObject(Obj.obj_18752, -1, Component.interface_59.component_59_16);
    ifSetObject(Obj.obj_18753, -1, Component.interface_59.component_59_17);
    ifSetObject(Obj.obj_18754, -1, Component.interface_59.component_59_18);
}
