/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_keyword_construct]

function clan_keyword_construct(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    let int4: Enum = -1;

    if (intArg2 > 0 && intArg3 > 0) {
        int4 = enumOp(type_int, type_enum, Enum.clan_keyword_categories_id, intArg2);
        if (int4 != -1) {
            ifSetText(enumOp(type_int, type_string, int4, intArg3), intArg0);
            ifSetHide(false, intArg1);
            return;
        }
    }
    ifSetText("", intArg0);
    ifSetHide(true, intArg1);
}
