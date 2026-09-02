/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objreq_info_draw]

function objreq_info_draw(intArg0: number): number {
    varc_objreq_lines = 0;
    let str0: string = "";
    let int1: number = 0;

    if (varc_objreq_obj != -1) {
        if (compare(ocIop(varc_objreq_obj, 2), "Wear") == 0 || compare(ocIop(varc_objreq_obj, 2), "Wield") == 0) {
            int1 = 1;
        }
        ifSetObjectNonum(varc_objreq_obj, -1, Component.interface_449.component_449_13);
        ifSetObjectNonum(varc_objreq_obj, -1, Component.interface_449.component_449_14);
        if (mapMembers() == 0 && ocMembers(varc_objreq_obj) == 1) {
            objreq_print_warn("This is a members item. Additional information is not available on this world.", 1, intArg0);
        } else {
            str0 = obj_warning();
            if (compare(str0, "") != 0) {
                objreq_print_warn(str0, 1, intArg0);
                varc_objreq_lines = varc_objreq_lines + 1;
            }
            objreq_print_single(varcstr_25, 1, intArg0);
            if (compare(ocParam(varc_objreq_obj, Param.obj_info_extra), "") != 0) {
                objreq_print_single(" ", 1, intArg0);
                objreq_print_single(ocParam(varc_objreq_obj, Param.obj_info_extra), 1, intArg0);
            }
            if (ocParam(varc_objreq_obj, Param.objreq_requirement_priority) % 2 == 1) {
                if (compare(varcstr_26, "") != 0 && int1 == 1) {
                    objreq_print_single(varcstr_26, 0, intArg0);
                }
                if (compare(varcstr_34, "") != 0) {
                    objreq_print_single(varcstr_34, 0, intArg0);
                }
            } else {
                if (compare(varcstr_34, "") != 0) {
                    objreq_print_single(varcstr_34, 0, intArg0);
                }
                if (compare(varcstr_26, "") != 0 && int1 == 1) {
                    objreq_print_single(varcstr_26, 0, intArg0);
                }
            }
            str0 = cs2_912(varc_objreq_obj);
            if (compare(str0, "") != 0) {
                objreq_print_single(str0, 0, intArg0);
            }
            if (compare(varcstr_35, "") != 0 && int1 == 1) {
                objreq_print_triple(varcstr_35, varcstr_36, varcstr_52, intArg0);
            }
        }
    } else {
        objreq_print_single("Select an item to see its information.", 1, intArg0);
    }
    return 6 * 2 + varc_objreq_lines * 11;
}
