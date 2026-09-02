/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1175

function cs2_1175(): void {
    if (clientClock() % 10 != 0) {
        return;
    }
    let int0: number = 0;
    let int1: number = coordZ(coord());
    let int2: number = coordX(coord());

    if (int1 > 9919 && int1 < 10368 && int2 > 3007 && int2 < 3136) {
        int0 = (int1 - 9920) / 8 + 1;
    } else if (int1 > 3524 && int1 < 3968 && int2 > 2943 && int2 < 3393 && varbit_pvpw_not_wilderness == 0) {
        int0 = (int1 - 3520) / 8 + 1;
    }

    if (int0 < 0) {
        int0 = 0;
    } else if (int0 > 60) {
        int0 = 60;
    }
    let int3: number = comlevelActive();
    let int4: number = 0;
    let int5: number = 0;

    if (cs2_208() == 1) {
        int4 = int3 - int0;
        if (int4 < 20) {
            int4 = 20;
        }
        int5 = int3 + int0;
        if (int5 > 138) {
            int5 = 138;
        }
        if (int4 == int5) {
            if (getWindowMode() < 2) {
                ifSetText(" ", Component.interface_548.component_548_30);
            } else {
                ifSetText(" ", Component.interface_746.component_746_18);
            }
            return;
        }
    } else {
        int4 = int3 - (int0 + 5 + int3 / 10);
        if (int4 < 20) {
            int4 = 20;
        }
        int5 = int3 + int0 + 5 + int3 / 10;
        if (int5 > 138) {
            int5 = 138;
        }
        while (int5 < 139 && int5 - (int0 + 5 + int5 / 10) <= int3) {
            int5 = int5 + 1;
        }
        int5 = int5 - 1;
    }

    if (getWindowMode() < 2) {
        ifSetText(tostring(int4) + " - " + tostring(int5), Component.interface_548.component_548_30);
    } else {
        ifSetText(tostring(int4) + " - " + tostring(int5), Component.interface_746.component_746_18);
    }
}
