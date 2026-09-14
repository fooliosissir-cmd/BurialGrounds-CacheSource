/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_renderer_button_highlight]

function proc_graphics_options_renderer_button_highlight(intArg0: component, intArg1: number, intArg2: boolean): void {
    if (intArg2 == true) {
        if (ccFind(intArg0, 0) == 1) {
            ccSetGraphic(Graphic.set_but_fill_2_1);
        }
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(Graphic.set_but_end_2_1);
        }
        if (ccFind(intArg0, 2) == 1) {
            ccSetGraphic(Graphic.set_but_end_2_4);
        }
    } else if (detailGetToolkit() == intArg1) {
        if (ccFind(intArg0, 0) == 1) {
            ccSetGraphic(Graphic.set_but_fill_2_2);
        }
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(Graphic.set_but_end_2_2);
        }
        if (ccFind(intArg0, 2) == 1) {
            ccSetGraphic(Graphic.set_but_end_2_5);
        }
    } else {
        if (ccFind(intArg0, 0) == 1) {
            ccSetGraphic(Graphic.set_but_fill_2_0);
        }
        if (ccFind(intArg0, 1) == 1) {
            ccSetGraphic(Graphic.set_but_end_2_0);
        }
        if (ccFind(intArg0, 2) == 1) {
            ccSetGraphic(Graphic.set_but_end_2_3);
        }
    }
}
