/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5488

function cs2_5488(strArg0: string): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;

    ifSetHide(false, Component.interface_746.component_746_215);
    varc_1688 = 1;
    ccDeleteAll(Component.interface_746.component_746_215);

    if (varc_1691 != -1 && varc_1692 != -1) {
        int1 = max(parawidth(strArg0, 1000000, Graphic.b12_full), parawidth("Cost : " + cs2_940(varc_1692), 1000000, Graphic.b12_full));
        int2 = paraheight(strArg0, int1, Graphic.b12_full) * 28;
    } else {
        int1 = parawidth(strArg0, 1000000, Graphic.b12_full);
        int2 = paraheight(strArg0, int1, Graphic.b12_full) * 14;
    }
    tli_optext_build_tooltip(Component.interface_746.component_746_215, strArg0, int1, int2);
    let int3: number = int1 + 15;
    let int4: number = int2 + 15;
    cs2_5489(int3, int4);
}
