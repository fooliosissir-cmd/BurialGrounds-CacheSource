/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter09_reject]

function easter09_reject(): void {
    if (varc_easter09_nuts_bar == 1 || varc_easter09_nuts_bar == 2) {
        mes("You can't do that right now.");
        return;
    }
    soundSynth(Sound.sound_6421, 1, 0);

    if (ifGetX(Component.interface_306.component_306_6) >= ifGetX(Component.interface_306.component_306_18) && ifGetX(Component.interface_306.component_306_6) < ifGetX(Component.interface_306.component_306_18) + ifGetWidth(Component.interface_306.component_306_18)) {
        varc_easter09_nuts_tagged = 1;
        easter09_nut_check(varc_easter09_nuts_model1);
    }

    if (ifGetX(Component.interface_306.component_306_7) >= ifGetX(Component.interface_306.component_306_18) && ifGetX(Component.interface_306.component_306_7) < ifGetX(Component.interface_306.component_306_18) + ifGetWidth(Component.interface_306.component_306_18)) {
        varc_easter09_nuts_tagged = 2;
        easter09_nut_check(varc_easter09_nuts_model2);
    }

    if (ifGetX(Component.interface_306.component_306_8) >= ifGetX(Component.interface_306.component_306_18) && ifGetX(Component.interface_306.component_306_8) < ifGetX(Component.interface_306.component_306_18) + ifGetWidth(Component.interface_306.component_306_18)) {
        varc_easter09_nuts_tagged = 3;
        easter09_nut_check(varc_easter09_nuts_model3);
    }

    if (ifGetX(Component.interface_306.component_306_9) >= ifGetX(Component.interface_306.component_306_18) && ifGetX(Component.interface_306.component_306_9) < ifGetX(Component.interface_306.component_306_18) + ifGetWidth(Component.interface_306.component_306_18)) {
        varc_easter09_nuts_tagged = 4;
        easter09_nut_check(varc_easter09_nuts_model4);
    }
    varc_easter09_nuts_bar = 1;
    ifSetOnTimer(hook(easter09_nuts_bar, "I", [event_com]), Component.interface_306.component_306_10);
}
