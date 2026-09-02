/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1367

function cs2_1367(): void {
    ifSetText("Zamorak = " + tostring(varbit_castlewars_zamorak_score), Component.interface_58.component_58_0);
    ifSetText(tostring(varbit_castlewars_saradomin_score) + " = Saradomin", Component.interface_58.component_58_1);
    ifSetText(tostring(varp_castlewars_timer) + " Min", Component.interface_58.component_58_6);

    if (varbit_castlewars_saradomin_maindoor == 0) {
        ifSetText("Health: " + tostring(varbit_castlewars_saradomin_maindoor) + "%", Component.interface_58.component_58_9);
        ifSetColour(colour(0xFF0000), Component.interface_58.component_58_9);
    } else {
        ifSetText("Health " + tostring(varbit_castlewars_saradomin_maindoor) + "%", Component.interface_58.component_58_9);
        ifSetColour(colour(0x00FF00), Component.interface_58.component_58_9);
    }

    if (varbit_castlewars_saradomin_flag == 0) {
        ifSetText("Safe", Component.interface_58.component_58_2);
        ifSetColour(colour(0x00FF00), Component.interface_58.component_58_2);
    } else if (varbit_castlewars_saradomin_flag == 1) {
        ifSetText("Taken", Component.interface_58.component_58_2);
        ifSetColour(colour(0xFF0000), Component.interface_58.component_58_2);
    } else if (varbit_castlewars_saradomin_flag == 2) {
        ifSetText("Dropped", Component.interface_58.component_58_2);
        ifSetColour(colour(0xFFFF00), Component.interface_58.component_58_2);
    }

    if (varbit_castlewars_zamorak_flag == 0) {
        ifSetText("Safe", Component.interface_58.component_58_3);
        ifSetColour(colour(0x00FF00), Component.interface_58.component_58_3);
    } else if (varbit_castlewars_zamorak_flag == 1) {
        ifSetText("Taken", Component.interface_58.component_58_3);
        ifSetColour(colour(0xFF0000), Component.interface_58.component_58_3);
    } else if (varbit_castlewars_zamorak_flag == 2) {
        ifSetText("Dropped", Component.interface_58.component_58_3);
        ifSetColour(colour(0xFFFF00), Component.interface_58.component_58_3);
    }

    if (varbit_castlewars_saradomin_sidedoor == 1) {
        ifSetText("Unlocked", Component.interface_58.component_58_10);
        ifSetColour(colour(0xFF0000), Component.interface_58.component_58_10);
    } else {
        ifSetText("Locked", Component.interface_58.component_58_10);
        ifSetColour(colour(0x00FF00), Component.interface_58.component_58_10);
    }

    if (varbit_castlewars_saradomin_tunnel1 == 1) {
        ifSetText("Cleared", Component.interface_58.component_58_11);
        ifSetColour(colour(0xFF0000), Component.interface_58.component_58_11);
    } else {
        ifSetText("Collapsed", Component.interface_58.component_58_11);
        ifSetColour(colour(0x00FF00), Component.interface_58.component_58_11);
    }

    if (varbit_castlewars_saradomin_tunnel2 == 1) {
        ifSetText("Cleared", Component.interface_58.component_58_12);
        ifSetColour(colour(0xFF0000), Component.interface_58.component_58_12);
    } else {
        ifSetText("Collapsed", Component.interface_58.component_58_12);
        ifSetColour(colour(0x00FF00), Component.interface_58.component_58_12);
    }

    if (varbit_castlewars_saradomin_catapult == 1) {
        ifSetText("Destroyed", Component.interface_58.component_58_13);
        ifSetColour(colour(0xFF0000), Component.interface_58.component_58_13);
    } else {
        ifSetText("Operational", Component.interface_58.component_58_13);
        ifSetColour(colour(0x00FF00), Component.interface_58.component_58_13);
    }
    ifSetObject(Obj.obj_18748, -1, Component.interface_58.component_58_4);
    ifSetObject(Obj.obj_18749, -1, Component.interface_58.component_58_5);
    ifSetObject(Obj.obj_18750, -1, Component.interface_58.component_58_14);
    ifSetObject(Obj.obj_18751, -1, Component.interface_58.component_58_15);
    ifSetObject(Obj.obj_18752, -1, Component.interface_58.component_58_16);
    ifSetObject(Obj.obj_18753, -1, Component.interface_58.component_58_17);
    ifSetObject(Obj.obj_18754, -1, Component.interface_58.component_58_18);
}
