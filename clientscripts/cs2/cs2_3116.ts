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
    let str3: string = "World " + tostring(mapWorld());

    if (mapWorld() == 3) {
        str3 = "Main World";
    } else if (mapWorld() == 1) {
        str3 = "Developer World";
    }

    ifSetText(str3, Component.interface_910.component_910_11);
    ifSetPosition(stringWidth(str3, Graphic.verdana_11pt_regular) + 5, 0, 2, 2, Component.interface_910.component_910_12);

    // Burial Grounds does not use the old free/members distinction.
    ifSetHide(true, Component.interface_910.component_910_12);
}
