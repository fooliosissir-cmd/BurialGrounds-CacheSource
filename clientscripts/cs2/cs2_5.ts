/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5

function cs2_5(): void {
    let int0: number = 30;

    if (varbit_prayer_mode == 1) {
        int0 = 20;
    }
    let int1: number = 0;

    while (int1 < int0) {
        if (ccFind(Component.interface_271.component_271_7, int1) == 1 && cs2_2297(int1) == 1 && cs2_2295(int1) == 1) {
            ccSetGraphic(Graphic.prayerglow);
        }
        int1 = int1 + 1;
    }
}
