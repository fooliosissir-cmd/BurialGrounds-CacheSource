/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6331

function cs2_6331(): void {
    let str0: string = "Bury";

    if (varbit_carni_treasurechest_fromkeyring == 1) {
        str0 = "Abort";
    }
    ifSetText(str0, Component.interface_1304.component_1304_24);
    ifSetOp(1, str0, Component.interface_1304.component_1304_22);
}
