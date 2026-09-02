/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4692

function cs2_4692(intArg0: component, intArg1: number): void {
    let int2: component = Component.interface_551.component_551_23;
    let int3: number = -1;
    let str0: string = "";
    let str1: string = "";
    let int4: number = 0;
    let str2: string = "";
    let int5: number = 0;

    switch (intArg0) {
        case Component.interface_551.component_551_10:
            int5 = 1;
            str1 = "Nothing breaks for 30 seconds.";
            break;
        case Component.interface_551.component_551_36:
            int5 = 2;
            str1 = "Kill twice as many trolls when repairing things.";
            break;
        case Component.interface_551.component_551_50:
            int5 = 3;
            str1 = "Fix twice as fast and counter-acts troll magic run energy effects.";
            break;
        case Component.interface_551.component_551_64:
            int5 = 4;
            str1 = "Broken things don't hurt gatehouse health for 30 seconds.";
            break;
        default:
            ifSetHide(true, int2);
            return;
    }
    ifSetText(enumOp(type_int, type_string, Enum.loy_boost_name, int5), Component.interface_551.component_551_29);
    ifSetText(str1, Component.interface_551.component_551_30);
    ifSetText("Cost: " + tostring(enumOp(type_int, type_int, Enum.loy_boost_cost, int5)), Component.interface_551.component_551_31);
    let int6: number = enumOp(type_int, type_int, Enum.loy_boost_cooldown, int5);

    if (int6 == 50) {
        str2 = "30 sec";
    }

    if (int6 == 100) {
        str2 = "1 min";
    }
    ifSetText("Cooldown: " + str2, Component.interface_551.component_551_32);
    ifSetColour(colour(0x363536), intArg0);
    ifSetPosition(ifGetX(int2), intArg1, 0, 0, int2);
    ifSetHide(false, int2);
}
