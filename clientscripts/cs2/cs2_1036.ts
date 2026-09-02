/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1036

function cs2_1036(): number {
    let int0: number = -1;

    if (enumOp(type_int, type_int, Enum.gamearea_type, varbit_gamearea_id) > 0) {
        int0 = enumOp(type_int, 107, Enum.gamearea_contextmenu, varbit_gamearea_id);
        if (int0 != -1) {
            return int0;
        }
    }
    return enumOp(type_int, 107, Enum.quickchat_skillcontext, varbit_quickchat_lastskill);
}
