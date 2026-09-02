/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5067

function cs2_5067(): void {
    let int0: number = 0;
    let int1: number = enumGetoutputcount(Enum.clan_field_elements);
    let int2: number = 0;

    while (int0 < int1) {
        if (varbit_clan_field_editor_type == int0) {
            int2 = 1;
        } else {
            int2 = 0;
        }
        if (enumHasoutput(type_int, Enum.clan_field_elementlist_1, int0) == 1) {
            cs2_5059(Component.interface_1111.component_1111_54, int0, int2);
        }
        if (enumHasoutput(type_int, Enum.clan_field_elementlist_2, int0) == 1) {
            cs2_5059(Component.interface_1111.component_1111_57, int0, int2);
        }
        if (enumHasoutput(type_int, Enum.clan_field_elementlist_3, int0) == 1) {
            cs2_5059(Component.interface_1111.component_1111_60, int0, int2);
        }
        if (enumHasoutput(type_int, Enum.clan_field_elementlist_4, int0) == 1) {
            cs2_5059(Component.interface_1111.component_1111_63, int0, int2);
        }
        int0 = int0 + 1;
    }
    ccDeleteAll(Component.interface_1111.component_1111_27);
    ccDeleteAll(Component.interface_1111.component_1111_28);
    ccDeleteAll(Component.interface_1111.component_1111_29);
    ccDeleteAll(Component.interface_1111.component_1111_30);
    let int3: number = 0;
    let int4: struct = enumOp(type_int, type_struct, Enum.clan_field_elements, varbit_clan_field_editor_type);
    let str0: string = "";
    let int5: Enum = -1;

    if (int4 != -1) {
        ifSetText(structParam(int4, Param.clan_field_element_name), Component.interface_1111.component_1111_26);
        ifSetGraphic(structParam(int4, Param.clan_field_element_graphic), Component.interface_1111.component_1111_24);
        str0 = structParam(int4, Param.clan_field_element_desc);
        if (structParam(int4, Param.clan_field_element_category) == 1 && int4 != Struct.clan_field_delete) {
            str0 = append(str0, "<br>" + "<br>" + "Drag your mouse over the grid to fill an area with this element.");
        }
        int3 = int3 + cs2_5068(str0, int3);
        int5 = structParam(int4, Param.clan_field_element_option1);
        if (int5 != -1) {
            int3 = int3 + 5;
            int3 = int3 + cs2_5068(enumOp(type_int, type_string, int5, -1), int3);
            ifSetPosition(0, int3, 1, 0, Component.interface_1111.component_1111_28);
            int3 = int3 + cs2_5069(int5, Component.interface_1111.component_1111_28, 1, varbit_clan_field_editor_option1);
        } else {
            ifSetSize(0, 0, 1, 0, Component.interface_1111.component_1111_28);
        }
        int5 = structParam(int4, Param.clan_field_element_option2);
        if (int5 != -1) {
            int3 = int3 + 5;
            int3 = int3 + cs2_5068(enumOp(type_int, type_string, int5, -1), int3);
            ifSetPosition(0, int3, 1, 0, Component.interface_1111.component_1111_29);
            int3 = int3 + cs2_5069(int5, Component.interface_1111.component_1111_29, 2, varbit_clan_field_editor_option2);
        } else {
            ifSetSize(0, 0, 1, 0, Component.interface_1111.component_1111_29);
        }
        int5 = structParam(int4, Param.clan_field_element_option3);
        if (int5 != -1) {
            int3 = int3 + 5;
            int3 = int3 + cs2_5068(enumOp(type_int, type_string, int5, -1), int3);
            ifSetPosition(0, int3, 1, 0, Component.interface_1111.component_1111_30);
            int3 = int3 + cs2_5069(int5, Component.interface_1111.component_1111_30, 3, varbit_clan_field_editor_option3);
        } else {
            ifSetSize(0, 0, 1, 0, Component.interface_1111.component_1111_30);
        }
    } else {
        ifSetText("", Component.interface_1111.component_1111_26);
        ifSetGraphic(-1, Component.interface_1111.component_1111_24);
    }

    if (int3 > ifGetHeight(Component.interface_1111.component_1111_27)) {
        ifSetScrollSize(0, int3, Component.interface_1111.component_1111_27);
    } else {
        ifSetScrollSize(0, 0, Component.interface_1111.component_1111_27);
    }
    ifSetScrollPos(0, min(ifGetScrollY(Component.interface_1111.component_1111_27), int3), Component.interface_1111.component_1111_27);
    proc_scrollbar_vertical(Component.interface_1111.component_1111_31, Component.interface_1111.component_1111_27, Graphic.aif_scrollbar_dragger_1_3, Graphic.aif_scrollbar_dragger_1_0, Graphic.aif_scrollbar_dragger_1_1, Graphic.aif_scrollbar_dragger_1_2, Graphic.aif_scrollbar_arrow_1_1, Graphic.aif_scrollbar_arrow_1_0);
}
