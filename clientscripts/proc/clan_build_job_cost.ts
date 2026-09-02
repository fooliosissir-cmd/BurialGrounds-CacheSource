/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_build_job_cost]

function clan_build_job_cost(intArg0: number, intArg1: number): [number, number, number, number, number, number] {
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: struct = enumOp(type_int, type_struct, Enum.clan_build_jobinfo, intArg0);
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;

    if (intArg0 < 1 || intArg0 > 900) {
        mes("Clan Build Tick : Attempting to look up build cost for invalid job " + tostring(intArg0) + ".");
        return [0, 0, 0, 0, 0, 0];
    }
    let [int15, str0, int16, int17, int18, int19, int20, int21] = clan_build_job_info(intArg0);
    let int22: struct = -1;

    if (intArg0 < 600) {
        switch (int19) {
            case 1:
                int22 = Struct.struct_2021;
                break;
            case 2:
                int22 = Struct.struct_2022;
                break;
            case 3:
                int22 = Struct.struct_2023;
                break;
            case 4:
                int22 = enumOp(type_int, type_struct, Enum.clan_build_skillplot_upkeep, int21);
                break;
            case 5:
                int22 = int8;
                break;
        }
    } else {
        switch (int19) {
            case 1:
                int22 = Struct.struct_2031;
                break;
            case 2:
                int22 = Struct.struct_2032;
                break;
            case 3:
                int22 = Struct.struct_2033;
                break;
            case 4:
                int22 = enumOp(type_int, type_struct, Enum.clan_build_skillplot_costs, int21);
                break;
            case 5:
                int22 = int8;
                break;
        }
    }

    if (intArg1 == 0) {
        return [0, 0, 0, 0, 0, 0];
    }

    switch (intArg1) {
        case 1:
            return [structParam(int22, Param.param_1483), structParam(int22, Param.param_1490), structParam(int22, Param.param_1497), structParam(int22, Param.param_1504), structParam(int22, Param.param_1511), structParam(int22, Param.param_1518)];
        case 2:
            return [structParam(int22, Param.param_1484), structParam(int22, Param.param_1491), structParam(int22, Param.param_1498), structParam(int22, Param.param_1505), structParam(int22, Param.param_1512), structParam(int22, Param.param_1519)];
        case 3:
            return [structParam(int22, Param.param_1485), structParam(int22, Param.param_1492), structParam(int22, Param.param_1499), structParam(int22, Param.param_1506), structParam(int22, Param.param_1513), structParam(int22, Param.param_1520)];
        case 4:
            return [structParam(int22, Param.param_1486), structParam(int22, Param.param_1493), structParam(int22, Param.param_1500), structParam(int22, Param.param_1507), structParam(int22, Param.param_1514), structParam(int22, Param.param_1521)];
        case 5:
            return [structParam(int22, Param.param_1487), structParam(int22, Param.param_1494), structParam(int22, Param.param_1501), structParam(int22, Param.param_1508), structParam(int22, Param.param_1515), structParam(int22, Param.param_1522)];
        case 6:
            return [structParam(int22, Param.param_1488), structParam(int22, Param.param_1495), structParam(int22, Param.param_1502), structParam(int22, Param.param_1509), structParam(int22, Param.param_1516), structParam(int22, Param.param_1523)];
        case 7:
            return [structParam(int22, Param.param_1489), structParam(int22, Param.param_1496), structParam(int22, Param.param_1503), structParam(int22, Param.param_1510), structParam(int22, Param.param_1517), structParam(int22, Param.param_1524)];
    }
    return [0, 0, 0, 0, 0, 0];
}
