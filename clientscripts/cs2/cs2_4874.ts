/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4874

function cs2_4874(intArg0: number): void {
    varbit_clan_stronghold_main_selected_resource = intArg0;
    let int1: number = 0 + 1;

    while (int1 <= 10) {
        ifSetHide(true, cs2_4871(int1));
        int1 = int1 + 1;
    }
    ifSetHide(false, cs2_4871(intArg0));
    cs2_4864();
}
