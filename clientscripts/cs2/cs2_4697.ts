/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4697

function cs2_4697(intArg0: number): void {
    let int1: number = clientClock();
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let str3: string = "";
    let str4: string = "";
    let str5: string = "";
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 1;

    if (int1 >= intArg0 + 200 || intArg0 == 0) {
        intArg0 = int1;
        if (varc_1540 < 1) {
            str0 = "Destroyed";
        } else if (varc_1540 < 5 / 2) {
            str0 = "Under attack";
        } else if (varc_1540 < 5) {
            str0 = "Unlit ammo";
        } else {
            str0 = "Fine";
        }
        if (varc_1541 < 1) {
            str1 = "Empty";
        } else if (varc_1541 < 10 / 2) {
            str1 = "Low";
        } else if (varc_1541 < 10) {
            str1 = "Almost full";
        } else {
            str1 = "Full";
        }
        if (varc_1542 == 1) {
            str2 = "1 broken";
        } else if (varc_1542 > 0) {
            str2 = tostring(varc_1542) + " broken";
        } else {
            str2 = "Repaired";
        }
        if (varc_1543 == 1) {
            str3 = tostring(int5) + " broken";
        } else if (varc_1543 > 0) {
            str3 = tostring(varc_1543) + " broken";
        } else {
            str3 = "Repaired";
        }
        int2 = varc_loy_health_client / 2;
        ifSetSize(int2 * 16384 / 100, ifGetHeight(Component.interface_500.component_500_12), 2, 0, Component.interface_500.component_500_12);
        if (int2 < 97) {
            ifSetHide(true, Component.interface_500.component_500_13);
        }
        str4 = tostring(varc_1544 * 10);
        ifSetText(tostring(varc_1546) + " min", Component.interface_500.component_500_29);
        if (varc_1547 != 0) {
            ifSetHide(false, Component.interface_500.component_500_10);
            ifSetSize(ifGetWidth(Component.interface_500.component_500_2), 253, 0, 0, Component.interface_500.component_500_2);
            switch (varc_1547) {
                case 1:
                    str5 = "Clobbering Time!";
                    break;
                case 2:
                    str5 = "Slow-mo";
                    break;
                case 3:
                    str5 = "No Well";
                    break;
                case 4:
                    str5 = "Oil Spill";
                    break;
                case 5:
                    str5 = "Fire in the Hole!";
                    break;
                case 6:
                    str5 = "Armoured Trolls";
                    break;
            }
        } else {
            ifSetHide(true, Component.interface_500.component_500_10);
            ifSetSize(ifGetWidth(Component.interface_500.component_500_2), 225, 0, 0, Component.interface_500.component_500_2);
        }
        int3 = cs2_4699(Component.interface_500.component_500_8, Component.interface_500.component_500_21, Component.interface_500.component_500_22, "Ballista", str0);
        int4 = cs2_4699(Component.interface_500.component_500_5, Component.interface_500.component_500_19, Component.interface_500.component_500_20, "Oil", str1);
        int3 = max(int3, int4);
        int4 = cs2_4699(Component.interface_500.component_500_6, Component.interface_500.component_500_39, Component.interface_500.component_500_40, "Barricades", str2);
        int3 = max(int3, int4);
        int4 = cs2_4699(Component.interface_500.component_500_7, Component.interface_500.component_500_17, Component.interface_500.component_500_18, "Walls", str3);
        int3 = max(int3, int4);
        int4 = cs2_4699(Component.interface_500.component_500_9, Component.interface_500.component_500_41, Component.interface_500.component_500_42, "Trolls", str4);
        int3 = max(int3, int4);
        if (varc_1547 != 0) {
            int4 = cs2_4699(Component.interface_500.component_500_10, Component.interface_500.component_500_15, Component.interface_500.component_500_16, "Troll Attack", str5);
            int3 = max(int3, int4);
        }
        if (int3 + 15 > ifGetWidth(Component.interface_500.component_500_2)) {
            ifSetSize(int3 + 15, ifGetHeight(Component.interface_500.component_500_2), 0, 0, Component.interface_500.component_500_2);
        }
    }
    ifSetOnTimer(hook(cs2_4697, "i", [intArg0]), Component.interface_500.component_500_8);
}
