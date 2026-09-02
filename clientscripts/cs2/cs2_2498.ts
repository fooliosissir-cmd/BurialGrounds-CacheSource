/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2498

function cs2_2498(): void {
    varc_837 = varbit_mob_current_formation;

    if (varc_837 > 0 && varc_837 <= 9) {
        cs2_2500(enumOp(type_int, type_component, Enum.enum_2400, varc_837));
    }
}
