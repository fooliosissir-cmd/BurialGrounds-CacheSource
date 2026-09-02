/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xbows_pouch_num]

function xbows_pouch_num(): void {
    ifSetText(tostring(varbit_xbows_pouch_num1), Component.interface_433.component_433_11);
    ifSetText(tostring(varbit_xbows_pouch_num2), Component.interface_433.component_433_12);
    ifSetText(tostring(varbit_xbows_pouch_num3), Component.interface_433.component_433_13);
    ifSetText(tostring(varbit_xbows_pouch_num4), Component.interface_433.component_433_14);

    if (varbit_xbows_pouch_num1 == 0) {
        ifSetColour(colour(0xFF0033), Component.interface_433.component_433_11);
    } else {
        ifSetColour(colour(0x00C000), Component.interface_433.component_433_11);
    }

    if (varbit_xbows_pouch_num2 == 0) {
        ifSetColour(colour(0xFF0033), Component.interface_433.component_433_12);
    } else {
        ifSetColour(colour(0x00C000), Component.interface_433.component_433_12);
    }

    if (varbit_xbows_pouch_num3 == 0) {
        ifSetColour(colour(0xFF0033), Component.interface_433.component_433_13);
    } else {
        ifSetColour(colour(0x00C000), Component.interface_433.component_433_13);
    }

    if (varbit_xbows_pouch_num4 == 0) {
        ifSetColour(colour(0xFF0033), Component.interface_433.component_433_14);
    } else {
        ifSetColour(colour(0x00C000), Component.interface_433.component_433_14);
    }
}
