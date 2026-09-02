/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter10_nuts_pullback]

function easter10_nuts_pullback(): void {
    if (ifGetY(Component.easter10_nuts.bar) < 180) {
        ifSetOnTimer(hook(easter10_nuts_pullback, "", []), Component.easter10_nuts.content);
        ifSetPosition(ifGetX(Component.easter10_nuts.bar), 2 + ifGetY(Component.easter10_nuts.bar), 0, 0, Component.easter10_nuts.bar);
    } else {
        varc_easter10_pushbarstatus = 0;
    }
}
