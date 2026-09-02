/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter09_nuts_start]

function easter09_nuts_start(): void {
    ifClearops(Component.interface_306.component_306_29);
    varc_767 = 0;
    varc_easter09_nuts_model1 = -1;
    varc_easter09_nuts_model2 = -1;
    varc_easter09_nuts_model3 = -1;
    varc_easter09_nuts_model4 = -1;
    varc_easter09_nuts_tagged = 0;
    varc_easter09_nuts_bar = 0;
    ifSetOnTimer(noHook(""), Component.interface_306.component_306_19);
    ifSetOnTimer(noHook(""), Component.interface_306.component_306_20);
    ifSetOnTimer(noHook(""), Component.interface_306.component_306_21);
    ifSetOnTimer(noHook(""), Component.interface_306.component_306_22);
    ifSetOnTimer(noHook(""), Component.interface_306.component_306_10);
    ifSetOnTimer(noHook(""), Component.interface_306.component_306_25);
    ifSetText("Correct: " + tostring(varc_767) + "/" + tostring(10), Component.interface_306.component_306_3);
    varc_easter09_nuts_model1 = enumOp(type_int, type_model, Enum.easter09_nuts, 1);

    if (varc_easter09_nuts_model1 != -1) {
        ifSetModel(varc_easter09_nuts_model1, Component.interface_306.component_306_6);
        ifSetModelAngle(0, 0, 512, 0, 0, 800, Component.interface_306.component_306_6);
    }
    varc_easter09_nuts_model2 = enumOp(type_int, type_model, Enum.easter09_nuts, 2);

    if (varc_easter09_nuts_model2 != -1) {
        ifSetModel(varc_easter09_nuts_model2, Component.interface_306.component_306_7);
        ifSetModelAngle(0, 0, 512, 0, 0, 800, Component.interface_306.component_306_7);
    }
    varc_easter09_nuts_model3 = enumOp(type_int, type_model, Enum.easter09_nuts, 3);

    if (varc_easter09_nuts_model3 != -1) {
        ifSetModel(varc_easter09_nuts_model3, Component.interface_306.component_306_8);
        ifSetModelAngle(0, 0, 512, 0, 0, 800, Component.interface_306.component_306_8);
    }
    varc_easter09_nuts_model4 = enumOp(type_int, type_model, Enum.easter09_nuts, 4);

    if (varc_easter09_nuts_model4 != -1) {
        ifSetModel(varc_easter09_nuts_model4, Component.interface_306.component_306_9);
        ifSetModelAngle(0, 0, 512, 0, 0, 800, Component.interface_306.component_306_9);
    }
    ifSetPosition(0 - ifGetWidth(Component.interface_306.component_306_6), ifGetY(Component.interface_306.component_306_6), 0, 0, Component.interface_306.component_306_6);
    ifSetPosition(0 - ifGetWidth(Component.interface_306.component_306_7), ifGetY(Component.interface_306.component_306_7), 0, 0, Component.interface_306.component_306_7);
    ifSetPosition(0 - ifGetWidth(Component.interface_306.component_306_8), ifGetY(Component.interface_306.component_306_8), 0, 0, Component.interface_306.component_306_8);
    ifSetPosition(0 - ifGetWidth(Component.interface_306.component_306_9), ifGetY(Component.interface_306.component_306_9), 0, 0, Component.interface_306.component_306_9);
    ifSetPosition(ifGetX(Component.interface_306.component_306_5), 200, 0, 0, Component.interface_306.component_306_10);
    ifSetOnTimer(hook(easter09_nuts_move1, "I", [Component.interface_306.component_306_6]), Component.interface_306.component_306_19);
}
