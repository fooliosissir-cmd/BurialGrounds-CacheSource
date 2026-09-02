/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5738

function cs2_5738(): void {
    let int0: number = ifGetY(Component.interface_1237.component_1237_5);
    let int1: number = 0;
    let str0: string = "";
    let str1: string = "";

    if (varp_2502 != -1 && (cs2_3999(structParam(varp_2502, Param.param_1268)) == 0 || varp_2502 == Struct.struct_6879)) {
        ifSetHide(false, Component.interface_1237.component_1237_48);
        if (varp_2502 != Struct.struct_6879) {
            [int1, str0] = cs2_5755(varp_2504, varp_2502);
            str1 = "Get your " + str0 + " level to " + tostring(int1) + " to unlock: ";
        }
        str1 = append(str1, structParam(varp_2502, Param.task_details));
        int0 = cs2_5739(1, int0, str1, Component.interface_1237.component_1237_5, Component.interface_1237.component_1237_48);
    } else {
        int0 = cs2_5739(1, int0, "Explore the world of Runescape for new and exciting adventures!", Component.interface_1237.component_1237_5, Component.interface_1237.component_1237_48);
    }
}
