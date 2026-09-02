/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6467

function cs2_6467(): number {
    let int0: Enum = Enum.enum_5960;
    let int1: number = 0;
    let int2: number = 0;

    int1 = cs2_6468(16, int1);
    int1 = cs2_6468(15, int1);

    while (int2 < enumGetoutputcount(int0) - 2) {
        int1 = cs2_6468(int2, int1);
        int2 = int2 + 1;
    }
    ifSetScrollSize(0, max(int1, ifGetHeight(Component.interface_1311.component_1311_74)), Component.interface_1311.component_1311_74);
    proc_scrollbar_vertical(Component.interface_1311.component_1311_78, Component.interface_1311.component_1311_74, Graphic.task_scrollbar_dragger_3, Graphic.task_scrollbar_dragger_0, Graphic.task_scrollbar_dragger_1, Graphic.task_scrollbar_dragger_2, Graphic.task_scrollbar_1, Graphic.task_scrollbar_0);
    cs2_6481(varc_1964, varc_1965);
    return 0;
}
