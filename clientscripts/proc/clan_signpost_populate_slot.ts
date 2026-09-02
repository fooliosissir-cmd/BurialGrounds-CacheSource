/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_signpost_populate_slot]

function proc_clan_signpost_populate_slot(intArg0: number, strArg0: string, intArg1: graphic, intArg2: graphic, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: boolean, intArg9: number, intArg10: component, intArg11: number, intArg12: component, intArg13: component, intArg14: component, intArg15: component, intArg16: component, intArg17: component, intArg18: component, intArg19: component, intArg20: component): void {
    ifSetHide(true, intArg13);
    ifSetHide(false, intArg12);
    ifSetHide(true, intArg15);
    ifSetOp(1, "Details", intArg14);
    ifSetText(strArg0, intArg16);

    switch (intArg7) {
        case -2:
            ifSetGraphic(Graphic.clans_portaicons_small_0, intArg10);
            break;
        case -1:
            ifSetGraphic(Graphic.clans_portaicons_small_1, intArg10);
            break;
        case 0:
            ifSetGraphic(Graphic.clans_portaicons_small_2, intArg10);
            break;
        case 1:
            ifSetGraphic(Graphic.clans_portaicons_small_3, intArg10);
            break;
        case 2:
            ifSetGraphic(Graphic.clans_portaicons_small_4, intArg10);
            break;
    }
    ifSetGraphic(intArg1, intArg17);
    ifSetGraphic(intArg2, intArg18);
    ifSetColour(hsvtorgb(intArg3), intArg17);
    ifSetColour(hsvtorgb(intArg4), intArg18);
    ifSetColour(hsvtorgb(intArg5), intArg19);
    ifSetColour(hsvtorgb(intArg6), intArg20);
    ifSetOnOpt(hook(cs2_5111, "i1", [intArg0, intArg8]), intArg14);
    ifSetHide(true, intArg13);
}
