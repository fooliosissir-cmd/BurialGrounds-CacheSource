/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5263

function cs2_5263(intArg0: component): void {
    let int1: component = Component.interface_430.component_430_78;
    let int2: component = Component.interface_430.component_430_79;

    if (varbit_hlr4m_borrowed_power_invspell == 1) {
        ifSetPosition(ifGetX(intArg0), ifGetY(intArg0), 0, 0, int1);
        ifSetHide(true, intArg0);
        ifSetHide(false, int1);
    } else if (varbit_hlr4m_borrowed_power_instaspell == 1) {
        ifSetPosition(ifGetX(intArg0), ifGetY(intArg0), 0, 0, int2);
        ifSetHide(true, intArg0);
        ifSetHide(false, int2);
    }
}
