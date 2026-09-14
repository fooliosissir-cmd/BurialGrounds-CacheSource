/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5041

function cs2_5041(intArg0: struct, intArg1: number, intArg2: number, intArg3: number): void {
    ccSetOp(6, "Delete");
    ccSetParamInt(Param.clan_field_element_x, intArg1);
    ccSetParamInt(Param.clan_field_element_z, intArg2);
    let str0: string = structParam(intArg0, Param.clan_field_element_name);
    ccSetOpBase("<col=ff9040>" + str0);
    let int4: Enum = -1;

    switch (structParam(intArg0, Param.clan_field_element_category)) {
        case 1:
            ccSetParamInt(Param.clan_field_element_w, cs2_5020(intArg3));
            ccSetParamInt(Param.clan_field_element_h, cs2_5021(intArg3));
            int4 = structParam(intArg0, Param.clan_field_element_option1);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5022(intArg3)));
            }
            break;
        case 2:
            int4 = structParam(intArg0, Param.clan_field_element_option1);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5023(intArg3)));
            }
            int4 = structParam(intArg0, Param.clan_field_element_option2);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5024(intArg3)));
            }
            int4 = structParam(intArg0, Param.clan_field_element_option3);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5025(intArg3)));
            }
            break;
        case 3:
            int4 = structParam(intArg0, Param.clan_field_element_option1);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5026(intArg3)));
            }
            int4 = structParam(intArg0, Param.clan_field_element_option2);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5027(intArg3)));
            }
            int4 = structParam(intArg0, Param.clan_field_element_option3);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5028(intArg3)));
            }
            break;
        case 4:
            int4 = structParam(intArg0, Param.clan_field_element_option1);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5029(intArg3)));
            }
            int4 = structParam(intArg0, Param.clan_field_element_option2);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5030(intArg3)));
            }
            break;
        case 5:
            int4 = structParam(intArg0, Param.clan_field_element_option1);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5031(intArg3)));
            }
            int4 = structParam(intArg0, Param.clan_field_element_option2);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5032(intArg3)));
            }
            int4 = structParam(intArg0, Param.clan_field_element_option3);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5033(intArg3)));
            }
            break;
        case 6:
            int4 = structParam(intArg0, Param.clan_field_element_option1);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5034(intArg3)));
            }
            int4 = structParam(intArg0, Param.clan_field_element_option2);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5035(intArg3)));
            }
            int4 = structParam(intArg0, Param.clan_field_element_option3);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, cs2_5036(intArg3)));
            }
            break;
        default:
            int4 = structParam(intArg0, Param.clan_field_element_option1);
            if (int4 != -1) {
                str0 = append(str0, "<br>" + enumOp(type_int, type_string, int4, -1) + " " + enumOp(type_int, type_string, int4, intArg3));
            }
            break;
    }
    ccSetOnMouseRepeat(hook(clan_field_editor_tooltip, "Iisii", [event_com, event_comsubid, str0, event_mousex, event_mousey]));
    ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1111.component_1111_119]));
}
