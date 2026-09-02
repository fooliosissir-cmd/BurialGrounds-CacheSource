/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4689

function cs2_4689(): void {
    ifSetHide(false, Component.interface_551.component_551_9);
    ifSetText(enumOp(type_int, type_string, Enum.loy_boost_name, 1), Component.interface_551.component_551_15);
    ifSetGraphic(Graphic.aif_loyalty_icon_1_0, Component.interface_551.component_551_17);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.loy_boost_cost, 1)), Component.interface_551.component_551_16);
    ifSetHide(false, Component.interface_551.component_551_33);
    ifSetText(enumOp(type_int, type_string, Enum.loy_boost_name, 2), Component.interface_551.component_551_41);
    ifSetGraphic(Graphic.aif_loyalty_icon_1_1, Component.interface_551.component_551_43);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.loy_boost_cost, 2)), Component.interface_551.component_551_42);
    ifSetHide(false, Component.interface_551.component_551_47);
    ifSetText(enumOp(type_int, type_string, Enum.loy_boost_name, 3), Component.interface_551.component_551_55);
    ifSetGraphic(Graphic.aif_loyalty_icon_1_2, Component.interface_551.component_551_57);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.loy_boost_cost, 3)), Component.interface_551.component_551_56);
    ifSetHide(false, Component.interface_551.component_551_61);
    ifSetText(enumOp(type_int, type_string, Enum.loy_boost_name, 4), Component.interface_551.component_551_69);
    ifSetGraphic(Graphic.aif_loyalty_icon_1_3, Component.interface_551.component_551_71);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.loy_boost_cost, 4)), Component.interface_551.component_551_70);
    ifSetOnMouseOver(hook(cs2_4692, "Ii", [event_com, 80]), Component.interface_551.component_551_10);
    ifSetOnMouseOver(hook(cs2_4692, "Ii", [event_com, 129]), Component.interface_551.component_551_36);
    ifSetOnMouseOver(hook(cs2_4692, "Ii", [event_com, 31]), Component.interface_551.component_551_50);
    ifSetOnMouseOver(hook(cs2_4692, "Ii", [event_com, 80]), Component.interface_551.component_551_64);
}
