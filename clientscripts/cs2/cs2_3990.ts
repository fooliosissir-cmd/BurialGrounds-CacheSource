/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3990

function cs2_3990(intArg0: number, intArg1: number, intArg2: number): void {
    if (intArg2 != 1) {
        return;
    }
    deltooltip_action(Component.interface_917.component_917_111);
    let int3: number = task_get_progress(intArg0);

    if (int3 == 2) {
        cs2_4014(intArg1, Graphic.graphic_4043);
    } else {
        cs2_4014(intArg1, gameframe_skin_graphic(Graphic.graphic_4041));
    }
    cs2_3991(intArg0);
}
