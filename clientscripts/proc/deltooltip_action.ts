/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,deltooltip_action]

function deltooltip_action(intArg0: component): void {
    ccDeleteAll(intArg0);
    varc_tooltip_built = 0;
}
