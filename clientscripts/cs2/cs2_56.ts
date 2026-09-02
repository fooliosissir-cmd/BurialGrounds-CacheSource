/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_56

function cs2_56(intArg0: component): void {
    ccDeleteAll(Component.interface_18.component_18_13);
    cs2_4534(Component.interface_18.component_18_13);
    ccDeleteAll(Component.interface_18.component_18_21);
    cs2_4534(Component.interface_18.component_18_21);
    ccDeleteAll(Component.interface_18.component_18_29);
    ccCreate(Component.interface_18.component_18_29, 5, ifGetNextSubId(Component.interface_18.component_18_29));
    ccSetSize(40, 0, 1, 1);
    ccSetPosition(0, 0, 1, 0);
    ccSettiling(true);
    ccCreate(Component.interface_18.component_18_29, 5, ifGetNextSubId(Component.interface_18.component_18_29));
    ccSetSize(20, 0, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccCreate(Component.interface_18.component_18_29, 5, ifGetNextSubId(Component.interface_18.component_18_29));
    ccSetSize(20, 0, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccCreate(Component.interface_18.component_18_29, 4, ifGetNextSubId(Component.interface_18.component_18_29));
    ccSetSize(26, 0, 1, 1);
    ccSetPosition(4, 0, 0, 1);
    ccSetTextFont(Graphic.p11_full);
    ccSetColour(colour(0xEFB063));
    ccSetTextAlign(1, 1, 0);
    let int1: number = ccGetId();
    ifSetOnVarTransmit(hook(cs2_58, "iY", [int1], [1747, 1737, 105, 496, 1050, 1600]), intArg0);
    ifSetOnInvTransmit(hook(cs2_58, "iY", [int1], [93, 94]), intArg0);
    cs2_59(int1);
    ifSetPosition(if_getx_absolute(Component.interface_18.component_18_27), trh_esc_mouseleave(Component.interface_18.component_18_27) + ifGetHeight(Component.interface_18.component_18_27) - 1, 0, 0, Component.interface_18.component_18_43);
    ccDeleteAll(Component.interface_18.component_18_43);
    cs2_4535(Component.interface_18.component_18_43);
    cs2_746(false);
    ifSetOnClick(hook(cs2_745, "1", [true]), Component.interface_18.component_18_29);
    ifSetOnClick(hook(cs2_745, "1", [false]), Component.interface_18.component_18_42);
}
