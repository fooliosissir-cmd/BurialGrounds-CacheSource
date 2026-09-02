/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_theatre_prop_select]

function clan_theatre_prop_select(intArg0: number): void {
    let int1: graphic = Graphic.clan_custom_object_backing_lrg_0;
    let int2: number = 7706;
    let int3: number = 7289;
    let int4: number = 0;

    while (int4 < enumGetoutputcount(Enum.clan_theatre_prop_com2id)) {
        if (ccFind(Component.interface_823.component_823_3, int4) == 1) {
            if (int4 != intArg0) {
                ccSetGraphic(int1);
            } else {
                ccSetGraphic(int1);
            }
        }
        int4 = int4 + 1;
    }
}
