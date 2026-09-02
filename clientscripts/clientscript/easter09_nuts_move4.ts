/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter09_nuts_move4]

function easter09_nuts_move4(intArg0: component): void {
    if (ifGetX(intArg0) < ifGetWidth(Component.interface_306.component_306_1) - 1) {
        if (ifGetX(intArg0) == 140 + ifGetWidth(intArg0)) {
            ifSetOnTimer(hook(easter09_nuts_move1, "I", [Component.interface_306.component_306_6]), Component.interface_306.component_306_19);
        }
        ifSetPosition(1 + ifGetX(intArg0), ifGetY(intArg0), 0, 0, intArg0);
    } else {
        cs2_2324();
    }
}
