/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6518

function cs2_6518(intArg0: number, intArg1: number): void {
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;

    ifSetHide(false, Component.interface_1302.component_1302_37);

    switch (intArg1) {
        case 1:
            int2 = varc_1973;
            int3 = varc_1974;
            int4 = varc_1975;
            int5 = varc_1976;
            int6 = -50;
            int7 = -100;
            break;
        case 2:
            int2 = varc_1977;
            int3 = varc_1978;
            int4 = varc_1979;
            int5 = varc_1980;
            int6 = -25;
            int7 = -50;
            break;
        case 3:
            int2 = varc_1981;
            int3 = varc_1982;
            int4 = varc_1983;
            int5 = varc_1984;
            int6 = 0;
            int7 = 0;
            break;
        case 4:
            int2 = varc_1985;
            int3 = varc_1986;
            int4 = varc_1987;
            int5 = varc_1988;
            int6 = 25;
            int7 = 50;
            break;
        case 5:
            int2 = varc_1989;
            int3 = varc_1990;
            int4 = varc_1991;
            int5 = varc_1992;
            int6 = 50;
            int7 = 100;
            break;
    }
    ifSetText(enumOp(type_int, type_string, Enum.enum_5995, int2), Component.interface_1302.component_1302_44);

    if (int2 == 0 && int3 == 0 && int4 == 0 && int5 == 0) {
        ifSetText("No active conditions", Component.interface_1302.component_1302_43);
    } else {
        ifSetText(enumOp(type_int, type_string, Enum.enum_5995, int3), Component.interface_1302.component_1302_43);
    }
    ifSetText(enumOp(type_int, type_string, Enum.enum_5995, int4), Component.interface_1302.component_1302_42);
    let str0: string = "";

    switch (int5) {
        case 1:
            str0 = "Mildly struggling";
            break;
        case 2:
            str0 = "Severely struggling";
            break;
        case 3:
            str0 = "Removed from the race";
            break;
    }
    ifSetText(str0, Component.interface_1302.component_1302_45);
    ifSetPosition(int6, 71, 1, 0, Component.interface_1302.component_1302_39);
    ifSetPosition(int7, 47, 1, 0, Component.interface_1302.component_1302_40);
}
