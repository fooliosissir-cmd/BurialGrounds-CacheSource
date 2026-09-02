/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3116

function cs2_3116(): void {
    if (mapWorld() == -1) {
        ifSetHide(true, Component.interface_910.component_910_12);
        ifSetText("World: Auto", Component.interface_910.component_910_11);
        return;
    }
    let [int0, int1, int2, int3, str0, str1, str2] = worldListSpecific(mapWorld());
    let int4: number = 0;

    if (testBit(int0, 0) == 1) {
        int4 = 1;
    } else {
        int4 = 0;
    }
    let str3: string = "World " + tostring(mapWorld());
    ifSetText(str3, Component.interface_910.component_910_11);
    ifSetPosition(stringWidth(str3, Graphic.verdana_11pt_regular) + 5, 0, 2, 2, Component.interface_910.component_910_12);

    if (int4 == 1) {
        ifSetGraphic(Graphic.world_select_stars_0, Component.interface_910.component_910_12);
    } else {
        ifSetGraphic(Graphic.world_select_stars_1, Component.interface_910.component_910_12);
    }
}
