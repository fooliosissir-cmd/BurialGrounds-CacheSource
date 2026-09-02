/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,mob_locator_resource_setup]

function proc_mob_locator_resource_setup(): void {
    if (varc_826 < 0) {
        varc_826 = 0;
    }

    if (varc_827 < 0) {
        varc_827 = 1;
    }
    ifSetText("Charges left: " + tostring(varc_826), Component.interface_844.component_844_47);
    ifSetObjectNonum(Obj.copper_ore, 1, Component.interface_844.component_844_29);
    ifSetObjectNonum(Obj.tin_ore, 1, Component.interface_844.component_844_30);
    ifSetObjectNonum(Obj.iron_ore, 1, Component.interface_844.component_844_31);
    ifSetObjectNonum(Obj.silver_ore, 1, Component.interface_844.component_844_32);
    ifSetObjectNonum(Obj.clay, 1, Component.interface_844.component_844_33);
    ifSetObjectNonum(Obj.gold_ore, 1, Component.interface_844.component_844_34);
    ifSetObjectNonum(Obj.mithril_ore, 1, Component.interface_844.component_844_35);
    ifSetObjectNonum(Obj.adamantite_ore, 1, Component.interface_844.component_844_36);
    ifSetObjectNonum(Obj.runite_ore, 1, Component.interface_844.component_844_37);
    ifSetText(ocName(Obj.copper_ore), Component.interface_844.component_844_38);
    ifSetText(ocName(Obj.tin_ore), Component.interface_844.component_844_39);
    ifSetText(ocName(Obj.iron_ore), Component.interface_844.component_844_40);
    ifSetText(ocName(Obj.silver_ore), Component.interface_844.component_844_41);
    ifSetText(ocName(Obj.clay), Component.interface_844.component_844_42);
    ifSetText(ocName(Obj.gold_ore), Component.interface_844.component_844_43);
    ifSetText(ocName(Obj.mithril_ore), Component.interface_844.component_844_44);
    ifSetText(ocName(Obj.adamantite_ore), Component.interface_844.component_844_45);
    ifSetText(ocName(Obj.runite_ore), Component.interface_844.component_844_46);
    ifSetColour(colour(0xE1981F), Component.interface_844.component_844_38);
    ifSetColour(colour(0xE1981F), Component.interface_844.component_844_39);
    ifSetColour(colour(0xE1981F), Component.interface_844.component_844_40);
    ifSetColour(colour(0x996600), Component.interface_844.component_844_41);
    ifSetColour(colour(0x996600), Component.interface_844.component_844_42);
    ifSetColour(colour(0x996600), Component.interface_844.component_844_43);
    ifSetColour(colour(0x996600), Component.interface_844.component_844_44);
    ifSetColour(colour(0x996600), Component.interface_844.component_844_45);
    ifSetColour(colour(0x996600), Component.interface_844.component_844_46);

    if (varc_827 >= 2) {
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_41);
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_42);
    }

    if (varc_827 >= 3) {
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_43);
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_44);
    }

    if (varc_827 >= 4) {
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_45);
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_46);
    }
    ifSetObjectNonum(Obj.oak_logs, 1, Component.interface_844.component_844_13);
    ifSetObjectNonum(Obj.willow_logs, 1, Component.interface_844.component_844_14);
    ifSetObjectNonum(Obj.maple_logs, 1, Component.interface_844.component_844_15);
    ifSetObjectNonum(Obj.eucalyptus_logs, 1, Component.interface_844.component_844_16);
    ifSetObjectNonum(Obj.yew_logs, 1, Component.interface_844.component_844_17);
    ifSetObjectNonum(Obj.magic_logs, 1, Component.interface_844.component_844_18);
    ifSetText(ocName(Obj.oak_logs), Component.interface_844.component_844_21);
    ifSetText(ocName(Obj.willow_logs), Component.interface_844.component_844_22);
    ifSetText(ocName(Obj.maple_logs), Component.interface_844.component_844_23);
    ifSetText("Special logs", Component.interface_844.component_844_24);
    ifSetText(ocName(Obj.yew_logs), Component.interface_844.component_844_25);
    ifSetText(ocName(Obj.magic_logs), Component.interface_844.component_844_26);
    ifSetColour(colour(0xE1981F), Component.interface_844.component_844_21);
    ifSetColour(colour(0xE1981F), Component.interface_844.component_844_22);
    ifSetColour(colour(0x996600), Component.interface_844.component_844_23);
    ifSetColour(colour(0x996600), Component.interface_844.component_844_24);
    ifSetColour(colour(0x996600), Component.interface_844.component_844_25);
    ifSetColour(colour(0x996600), Component.interface_844.component_844_26);

    if (varc_827 >= 2) {
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_23);
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_24);
    }

    if (varc_827 >= 3) {
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_25);
    }

    if (varc_827 >= 4) {
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_26);
    }
    ifSetObjectNonum(Obj.raw_shrimp, 1, Component.interface_844.component_844_6);
    ifSetObjectNonum(Obj.raw_lobster, 1, Component.interface_844.component_844_8);
    ifSetText("Fish 1", Component.interface_844.component_844_7);
    ifSetText("Fish 2", Component.interface_844.component_844_9);
    ifSetColour(colour(0xE1981F), Component.interface_844.component_844_7);

    if (varc_827 >= 3) {
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_9);
    } else {
        ifSetColour(colour(0x996600), Component.interface_844.component_844_9);
    }
    ifSetObjectNonum(Obj.toads_legs, 1, Component.interface_844.component_844_2);
    ifSetObjectNonum(Obj.white_berries, 1, Component.interface_844.component_844_4);
    ifSetText("Herblore" + "<br>" + "secondaries 1", Component.interface_844.component_844_3);
    ifSetText("Herblore" + "<br>" + "secondaries 2", Component.interface_844.component_844_5);
    ifSetColour(colour(0xE1981F), Component.interface_844.component_844_3);
    ifSetColour(colour(0xE1981F), Component.interface_844.component_844_5);

    if (varc_827 >= 3) {
        ifSetColour(colour(0xE1981F), Component.interface_844.component_844_5);
    } else {
        ifSetColour(colour(0x996600), Component.interface_844.component_844_5);
    }
}
