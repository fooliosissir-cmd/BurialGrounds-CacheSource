/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_912

function cs2_912(intArg0: obj): string {
    let str0: string = enumOp(type_obj, type_string, Enum.obj_objstring_requires_object, intArg0);

    if (compare(str0, "") != 0) {
        return "<br>" + str0;
    }

    switch (varc_746) {
        case 0:
            if (ocParam(intArg0, Param.rand_item) != 1) {
                return "<br>" + enumOp(type_int, type_string, Enum.obj_intstring_requires_arrows, ocParam(intArg0, Param.levelrequire));
            }
            break;
        case 1:
            return "<br>" + enumOp(type_int, type_string, Enum.enum_1439, ocParam(intArg0, Param.levelrequire));
        case 2:
        case 5:
            return "<br>" + enumOp(type_int, type_string, Enum.enum_1436, ocParam(intArg0, Param.levelrequire));
        case 3:
            return "<br>" + enumOp(type_int, type_string, Enum.enum_1438, ocParam(intArg0, Param.levelrequire));
        case 4:
            return "<br>" + "Requires an ogre composite bow.";
    }
    return "";
}
