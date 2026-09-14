/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6454

function cs2_6454(): void {
    let int0: number = 1093;

    if (gender() == 1) {
        int0 = 3872;
    }
    let str0: string = chatPlayerNameUnfiltered();
    let int1: number = stringWidth(str0, Graphic.graphic_4040) + 40;
    ifSetText(str0, Component.interface_1311.component_1311_67);
    ifSetSize(int1, 34, 0, 0, Component.interface_1311.component_1311_35);
}
