/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5903

function cs2_5903(): void {
    let int0: number = varbit_11155 - 1;

    if (int0 < 0) {
        return;
    }
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: component = -1;
    let int5: component = -1;

    while (int1 < 13) {
        int2 = int1 - int0;
        if (int2 < 0) {
            int2 = int2 + 13;
        }
        int4 = cs2_5935(int1);
        int5 = cs2_5933(int1);
        ifSetGraphic(Graphic.graphic_9801, int5);
        ifSetSize(55, 55, 0, 0, int5);
        ifSetPosition(0, 0, 0, 2, int5);
        ifSettiling(true, int5);
        switch (int2) {
            case 0:
                int3 = 349;
                ifSetGraphic(Graphic.graphic_9882, int5);
                ifSetSize(55, 77, 0, 0, int5);
                varc_1789 = int1;
                ifSetPosition(int3, ifGetY(Component.interface_1253.component_1253_153), 0, 0, Component.interface_1253.component_1253_153);
                ifSetPosition(0, -3, 0, 2, int5);
                break;
            case 1:
                int3 = 407;
                break;
            case 2:
                int3 = 465;
                break;
            case 3:
                int3 = 523;
                break;
            case 4:
                int3 = 581;
                break;
            case 5:
                int3 = 639;
                break;
            case 6:
                int3 = 697;
                break;
            case 7:
                int3 = -1;
                break;
            case 8:
                int3 = 57;
                break;
            case 9:
                int3 = 116;
                break;
            case 10:
                int3 = 174;
                break;
            case 11:
                int3 = 232;
                break;
            case 12:
                int3 = 290;
                break;
        }
        ifSetPosition(int3, ifGetY(int4), 0, 0, int4);
        int1 = int1 + 1;
    }
}
