/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_popup_big_button]

function login_popup_big_button(strArg0: string, intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    let int4: graphic = Graphic.set_but_end_1_0;
    let int5: graphic = Graphic.set_but_end_1_0;
    let int6: graphic = Graphic.set_but_fill_1_0;

    ifSetOnMouseLeave(hook(clientscript_loginscreen_button_highlight, "IdIdId", [intArg1, int4, intArg2, int6, intArg3, int5]), intArg0);
    ifSetGraphic(int4, intArg1);
    ifSetGraphic(int6, intArg2);
    ifSetGraphic(int5, intArg3);
    int4 = Graphic.set_but_end_1_1;
    int6 = Graphic.set_but_fill_1_1;
    int5 = Graphic.set_but_end_1_1;
    ifSetOnMouseOver(hook(clientscript_loginscreen_button_highlight, "IdIdId", [intArg1, int4, intArg2, int6, intArg3, int5]), intArg0);
    let int7: component = Component.interface_596.component_596_65;

    if (hasSignonKey() == 1) {
        int7 = Component.interface_975.component_975_10;
    }
    ifSetText(strArg0, int7);
}
