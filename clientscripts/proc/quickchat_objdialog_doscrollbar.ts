/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_objdialog_doscrollbar]

function quickchat_objdialog_doscrollbar(intArg0: component, intArg1: component): void {
    let int2: number = ifGetHeight(intArg0);
    let int3: number = ifGetScrollHeight(intArg0);
    let int4: number = int3 - int2;

    if (int4 < 0) {
        int4 = 0;
    }
    let int5: number = ifGetScrollY(intArg0);

    if (int5 > int4) {
        int5 = int4;
    }
    proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    scrollbar_resize(intArg1, intArg0, int5);
}
