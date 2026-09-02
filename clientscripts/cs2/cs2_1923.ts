/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1923

function cs2_1923(): void {
    let int0: number = varc_550;
    let int1: number = varc_554;
    let int2: number = varc_555;
    let int3: number = 0;

    if (int0 == 0) {
        int1 = max(0, min(5 - int1, 5));
        int2 = max(0, min(5 - int2, 5));
        ifSetText(tostring(int1), Component.interface_804.component_804_34);
        ifSetText(tostring(int2), Component.interface_804.component_804_33);
        ifSetHide(false, Component.interface_804.component_804_2);
    } else {
        ifSetHide(true, Component.interface_804.component_804_2);
        if (int0 % 100 != 0) {
            int3 = 1;
        }
        int0 = int0 * 60 / 100 / 60;
        if (int3 == 1) {
            int0 = int0 + 1;
        }
        ifSetText("Game start : " + tostring(int0) + " mins", Component.interface_804.component_804_1);
    }
}
