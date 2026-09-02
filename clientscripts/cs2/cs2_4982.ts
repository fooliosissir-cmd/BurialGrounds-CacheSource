/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4982

function cs2_4982(intArg0: struct, intArg1: struct, intArg2: number, intArg3: number, intArg4: number): void {
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = 0;
    let int20: number = 0;
    let int21: number = 0;
    let int22: number = 0;
    let int23: number = intArg2 - intArg4;

    int23 = max(int23, 0);

    if (clanProfileFind() == 1) {
        switch (intArg2) {
            case 0:
                int17 = structParam(intArg0, Param.param_1483);
                int18 = structParam(intArg0, Param.param_1490);
                int19 = structParam(intArg0, Param.param_1497);
                int20 = structParam(intArg0, Param.param_1504);
                int21 = structParam(intArg0, Param.param_1511);
                int22 = structParam(intArg0, Param.param_1518);
                break;
            case 1:
                int17 = structParam(intArg0, Param.param_1484);
                int18 = structParam(intArg0, Param.param_1491);
                int19 = structParam(intArg0, Param.param_1498);
                int20 = structParam(intArg0, Param.param_1505);
                int21 = structParam(intArg0, Param.param_1512);
                int22 = structParam(intArg0, Param.param_1519);
                break;
            case 2:
                int17 = structParam(intArg0, Param.param_1485);
                int18 = structParam(intArg0, Param.param_1492);
                int19 = structParam(intArg0, Param.param_1499);
                int20 = structParam(intArg0, Param.param_1506);
                int21 = structParam(intArg0, Param.param_1513);
                int22 = structParam(intArg0, Param.param_1520);
                break;
            case 3:
                int17 = structParam(intArg0, Param.param_1486);
                int18 = structParam(intArg0, Param.param_1493);
                int19 = structParam(intArg0, Param.param_1500);
                int20 = structParam(intArg0, Param.param_1507);
                int21 = structParam(intArg0, Param.param_1514);
                int22 = structParam(intArg0, Param.param_1521);
                break;
            case 4:
                int17 = structParam(intArg0, Param.param_1487);
                int18 = structParam(intArg0, Param.param_1494);
                int19 = structParam(intArg0, Param.param_1501);
                int20 = structParam(intArg0, Param.param_1508);
                int21 = structParam(intArg0, Param.param_1515);
                int22 = structParam(intArg0, Param.param_1522);
                break;
            case 5:
                int17 = structParam(intArg0, Param.param_1488);
                int18 = structParam(intArg0, Param.param_1495);
                int19 = structParam(intArg0, Param.param_1502);
                int20 = structParam(intArg0, Param.param_1509);
                int21 = structParam(intArg0, Param.param_1516);
                int22 = structParam(intArg0, Param.param_1523);
                break;
            case 6:
                int17 = structParam(intArg0, Param.param_1489);
                int18 = structParam(intArg0, Param.param_1496);
                int19 = structParam(intArg0, Param.param_1503);
                int20 = structParam(intArg0, Param.param_1510);
                int21 = structParam(intArg0, Param.param_1517);
                int22 = structParam(intArg0, Param.param_1524);
                break;
        }
        switch (intArg2) {
            case 1:
                int5 = structParam(intArg1, Param.param_1483);
                int6 = structParam(intArg1, Param.param_1490);
                int7 = structParam(intArg1, Param.param_1497);
                int8 = structParam(intArg1, Param.param_1504);
                int9 = structParam(intArg1, Param.param_1511);
                int10 = structParam(intArg1, Param.param_1518);
                break;
            case 2:
                int5 = structParam(intArg1, Param.param_1484);
                int6 = structParam(intArg1, Param.param_1491);
                int7 = structParam(intArg1, Param.param_1498);
                int8 = structParam(intArg1, Param.param_1505);
                int9 = structParam(intArg1, Param.param_1512);
                int10 = structParam(intArg1, Param.param_1519);
                break;
            case 3:
                int5 = structParam(intArg1, Param.param_1485);
                int6 = structParam(intArg1, Param.param_1492);
                int7 = structParam(intArg1, Param.param_1499);
                int8 = structParam(intArg1, Param.param_1506);
                int9 = structParam(intArg1, Param.param_1513);
                int10 = structParam(intArg1, Param.param_1520);
                break;
            case 4:
                int5 = structParam(intArg1, Param.param_1486);
                int6 = structParam(intArg1, Param.param_1493);
                int7 = structParam(intArg1, Param.param_1500);
                int8 = structParam(intArg1, Param.param_1507);
                int9 = structParam(intArg1, Param.param_1514);
                int10 = structParam(intArg1, Param.param_1521);
                break;
            case 5:
                int5 = structParam(intArg1, Param.param_1487);
                int6 = structParam(intArg1, Param.param_1494);
                int7 = structParam(intArg1, Param.param_1501);
                int8 = structParam(intArg1, Param.param_1508);
                int9 = structParam(intArg1, Param.param_1515);
                int10 = structParam(intArg1, Param.param_1522);
                break;
            case 6:
                int5 = structParam(intArg1, Param.param_1488);
                int6 = structParam(intArg1, Param.param_1495);
                int7 = structParam(intArg1, Param.param_1502);
                int8 = structParam(intArg1, Param.param_1509);
                int9 = structParam(intArg1, Param.param_1516);
                int10 = structParam(intArg1, Param.param_1523);
                break;
            case 7:
                int5 = structParam(intArg1, Param.param_1489);
                int6 = structParam(intArg1, Param.param_1496);
                int7 = structParam(intArg1, Param.param_1503);
                int8 = structParam(intArg1, Param.param_1510);
                int9 = structParam(intArg1, Param.param_1517);
                int10 = structParam(intArg1, Param.param_1524);
                break;
        }
        if (int23 > 0) {
            switch (int23) {
                case 1:
                    int11 = structParam(intArg1, Param.param_1483);
                    int12 = structParam(intArg1, Param.param_1490);
                    int13 = structParam(intArg1, Param.param_1497);
                    int14 = structParam(intArg1, Param.param_1504);
                    int15 = structParam(intArg1, Param.param_1511);
                    int16 = structParam(intArg1, Param.param_1518);
                    break;
                case 2:
                    int11 = structParam(intArg1, Param.param_1484);
                    int12 = structParam(intArg1, Param.param_1491);
                    int13 = structParam(intArg1, Param.param_1498);
                    int14 = structParam(intArg1, Param.param_1505);
                    int15 = structParam(intArg1, Param.param_1512);
                    int16 = structParam(intArg1, Param.param_1519);
                    break;
                case 3:
                    int11 = structParam(intArg1, Param.param_1485);
                    int12 = structParam(intArg1, Param.param_1492);
                    int13 = structParam(intArg1, Param.param_1499);
                    int14 = structParam(intArg1, Param.param_1506);
                    int15 = structParam(intArg1, Param.param_1513);
                    int16 = structParam(intArg1, Param.param_1520);
                    break;
                case 4:
                    int11 = structParam(intArg1, Param.param_1486);
                    int12 = structParam(intArg1, Param.param_1493);
                    int13 = structParam(intArg1, Param.param_1500);
                    int14 = structParam(intArg1, Param.param_1507);
                    int15 = structParam(intArg1, Param.param_1514);
                    int16 = structParam(intArg1, Param.param_1521);
                    break;
                case 5:
                    int11 = structParam(intArg1, Param.param_1487);
                    int12 = structParam(intArg1, Param.param_1494);
                    int13 = structParam(intArg1, Param.param_1501);
                    int14 = structParam(intArg1, Param.param_1508);
                    int15 = structParam(intArg1, Param.param_1515);
                    int16 = structParam(intArg1, Param.param_1522);
                    break;
                case 6:
                    int11 = structParam(intArg1, Param.param_1488);
                    int12 = structParam(intArg1, Param.param_1495);
                    int13 = structParam(intArg1, Param.param_1502);
                    int14 = structParam(intArg1, Param.param_1509);
                    int15 = structParam(intArg1, Param.param_1516);
                    int16 = structParam(intArg1, Param.param_1523);
                    break;
            }
        } else {
            int11 = 0;
            int12 = 0;
            int13 = 0;
            int14 = 0;
            int15 = 0;
            int16 = 0;
        }
        if (intArg3 == 1 && intArg2 == 1) {
            int5 = int5 * 2;
            int6 = int6 * 2;
            int7 = int7 * 2;
            int8 = int8 * 2;
            int9 = int9 * 2;
            int10 = int10 * 2;
        }
        ifSetText(tostring(int5), Component.interface_1261.component_1261_58);
        ifSetText(tostring(int6), Component.interface_1261.component_1261_59);
        ifSetText(tostring(int7), Component.interface_1261.component_1261_60);
        ifSetText(tostring(int8), Component.interface_1261.component_1261_61);
        ifSetText(tostring(int9), Component.interface_1261.component_1261_62);
        ifSetText(tostring(int10), Component.interface_1261.component_1261_63);
        ifSetText(tostring(int17), Component.interface_1261.component_1261_66);
        ifSetText(tostring(int18), Component.interface_1261.component_1261_67);
        ifSetText(tostring(int19), Component.interface_1261.component_1261_68);
        ifSetText(tostring(int20), Component.interface_1261.component_1261_69);
        ifSetText(tostring(int21), Component.interface_1261.component_1261_70);
        ifSetText(tostring(int22), Component.interface_1261.component_1261_71);
        ifSetText(tostring(int11), Component.interface_1261.component_1261_73);
        ifSetText(tostring(int12), Component.interface_1261.component_1261_74);
        ifSetText(tostring(int13), Component.interface_1261.component_1261_75);
        ifSetText(tostring(int14), Component.interface_1261.component_1261_76);
        ifSetText(tostring(int15), Component.interface_1261.component_1261_77);
        ifSetText(tostring(int16), Component.interface_1261.component_1261_78);
    }
}
