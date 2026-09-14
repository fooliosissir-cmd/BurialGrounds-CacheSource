/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,login_popup_throbber]

function login_popup_throbber(): void {
    varc_1882 = 1;
    let int0: component = Component.interface_596.component_596_12;

    if (hasSignonKey() == 1) {
        int0 = Component.interface_975.component_975_3;
    }
    let int1: number = login_getreply();

    if (int1 != -3 && int1 != 42 && int1 != 43) {
        ifSetOnTimer(noHook(""), int0);
        return;
    }

    if (clientClock() < varc_1092) {
        return;
    }
    varc_1092 = clientClock() + 5;

    switch (ifGetGraphic(int0)) {
        case Graphic.loading_wheel_1_0:
            ifSetGraphic(Graphic.loading_wheel_1_1, int0);
            break;
        case Graphic.loading_wheel_1_1:
            ifSetGraphic(Graphic.loading_wheel_1_2, int0);
            break;
        case Graphic.loading_wheel_1_2:
            ifSetGraphic(Graphic.loading_wheel_1_3, int0);
            break;
        case Graphic.loading_wheel_1_3:
            ifSetGraphic(Graphic.loading_wheel_1_4, int0);
            break;
        case Graphic.loading_wheel_1_4:
            ifSetGraphic(Graphic.loading_wheel_1_5, int0);
            break;
        case Graphic.loading_wheel_1_5:
            ifSetGraphic(Graphic.loading_wheel_1_6, int0);
            break;
        case Graphic.loading_wheel_1_6:
            ifSetGraphic(Graphic.loading_wheel_1_7, int0);
            break;
        case Graphic.loading_wheel_1_7:
            ifSetGraphic(Graphic.loading_wheel_1_0, int0);
            break;
        default:
            ifSetGraphic(Graphic.loading_wheel_1_0, int0);
            break;
    }
}
