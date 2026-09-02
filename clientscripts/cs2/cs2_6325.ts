/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6325

function cs2_6325(): void {
    let str0: string = "<col=c8c8c8>";
    let int0: graphic = Graphic.aif_treasure_chest_key_0;

    if (varc_1936 == 2) {
        cs2_6326(1, Component.interface_1304.component_1304_13, Component.interface_1304.component_1304_14);
        cs2_6326(0, Component.interface_1304.component_1304_16, Component.interface_1304.component_1304_17);
        cs2_6326(0, Component.interface_1304.component_1304_19, Component.interface_1304.component_1304_20);
        int0 = Graphic.aif_treasure_chest_key_1;
    } else if (varc_1936 == 1) {
        cs2_6326(0, Component.interface_1304.component_1304_13, Component.interface_1304.component_1304_14);
        cs2_6326(1, Component.interface_1304.component_1304_16, Component.interface_1304.component_1304_17);
        cs2_6326(0, Component.interface_1304.component_1304_19, Component.interface_1304.component_1304_20);
    } else {
        cs2_6326(0, Component.interface_1304.component_1304_13, Component.interface_1304.component_1304_14);
        cs2_6326(0, Component.interface_1304.component_1304_16, Component.interface_1304.component_1304_17);
        cs2_6326(1, Component.interface_1304.component_1304_19, Component.interface_1304.component_1304_20);
        str0 = "<col=787878>";
    }
    ifSetGraphic(int0, Component.interface_1304.component_1304_12);

    if (varc_1935 > 0) {
        ifSetText(str0 + tostring(min(varc_1935, 999999999)) + "</col>", Component.interface_1304.component_1304_6);
    } else {
        ifSetText(str0 + "None" + "</col>", Component.interface_1304.component_1304_6);
    }
}
