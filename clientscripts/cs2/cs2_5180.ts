/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5180

function cs2_5180(intArg0: number): void {
    let int1: struct = enumOp(type_int, type_struct, Enum.hcape_enum_goal_id_to_struct, intArg0);
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";

    if (int1 == -1) {
        str1 = "Select a goal from the list above.";
        if (intArg0 > -1) {
            return;
        }
    } else {
        str0 = structParam(int1, Param.hcape_goal_name);
        str1 = structParam(int1, Param.hcape_goal_desc);
        if (intArg0 != 13) {
            if (cs2_5200(intArg0) == 1) {
                str2 = "<col=00ff00>" + "COMPLETED" + "</col>";
            } else {
                str2 = "<col=ff0000>" + "INCOMPLETE" + "</col>";
            }
        }
        cs2_5204();
    }
    let str3: string = append("Goal: ", str0);

    if (stringLength(str2) > 0) {
        str3 = append(str3, "<br>" + "Status: ");
        str3 = append(str3, str2);
    }
    str3 = append(str3, "<br>");
    str3 = append(str3, str1);
    let int2: number = 10;
    let int3: number = 16;
    let int4: number = ifGetWidth(Component.interface_1122.component_1122_56) - int2 * 2;
    let int5: number = paraheight(str3, int4, Graphic.p12_full);
    ifSetTextAlign(0, 0, int3, Component.interface_1122.component_1122_57);
    let int6: number = int3 * int5;
    ifSetPosition(int2, int2, 0, 0, Component.interface_1122.component_1122_57);
    ifSetSize(int4, int6, 0, 0, Component.interface_1122.component_1122_57);
    ifSetText(str3, Component.interface_1122.component_1122_57);
    let int7: number = int6 + int2 + int2;

    if (int7 < ifGetHeight(Component.interface_1122.component_1122_56)) {
        int7 = ifGetHeight(Component.interface_1122.component_1122_56);
    }
    ifSetScrollSize(ifGetWidth(Component.interface_1122.component_1122_56), int7, Component.interface_1122.component_1122_56);
    proc_scrollbar_vertical(Component.interface_1122.component_1122_121, Component.interface_1122.component_1122_56, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    varc_hcape_active_goal = intArg0;
    cs2_5176();
}
