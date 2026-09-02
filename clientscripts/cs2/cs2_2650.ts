/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2650

function cs2_2650(): void {
    let int0: Enum = Enum.enum_1093;

    if (gender() == 1) {
        int0 = Enum.enum_3872;
    }
    ifSetSize(stringWidth(enumOp(type_int, type_string, int0, varp_1442) + chatPlayerName() + "<img=3>" + ":", Graphic.p12_full), ifGetHeight(Component.interface_137.component_137_53), 0, 0, Component.interface_137.component_137_53);
}
