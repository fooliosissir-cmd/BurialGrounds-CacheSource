/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_keyword_get]

function clan_keyword_get(intArg0: number, intArg1: number): string {
    let int2: number = -1;

    if (intArg0 > 0 && intArg1 > 0) {
        int2 = enumOp(type_int, type_enum, Enum.clan_keyword_categories_id, intArg0);
        if (int2 != -1) {
            return enumOp(type_int, type_string, int2, intArg1);
        }
    }
    return "";
}
