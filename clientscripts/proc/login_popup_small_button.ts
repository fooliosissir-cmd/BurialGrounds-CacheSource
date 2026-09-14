/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_popup_small_button]

function login_popup_small_button(strArg0: string, intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: number): void {
    let int5: graphic = Graphic.set_but_end_1_0;
    let int6: graphic = Graphic.set_but_end_1_0;
    let int7: graphic = Graphic.set_but_fill_1_0;

    ifSetOnMouseLeave(hook(clientscript_loginscreen_button_highlight, "IdIdId", [intArg1, int5, intArg2, int7, intArg3, int6]), intArg0);
    ifSetGraphic(int5, intArg1);
    ifSetGraphic(int7, intArg2);
    ifSetGraphic(int6, intArg3);
    int5 = Graphic.set_but_end_1_1;
    int6 = Graphic.set_but_end_1_1;
    int7 = Graphic.set_but_fill_1_1;
    ifSetOnMouseOver(hook(clientscript_loginscreen_button_highlight, "IdIdId", [intArg1, int5, intArg2, int7, intArg3, int6]), intArg0);
    let int8: component = Component.interface_596.component_596_18;

    if (hasSignonKey() == 1) {
        int8 = Component.interface_975.component_975_14;
    }
    ifSetText(strArg0, int8);
}
