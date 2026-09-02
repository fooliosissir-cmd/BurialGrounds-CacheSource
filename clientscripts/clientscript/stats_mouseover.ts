/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stats_mouseover]

function stats_mouseover(intArg0: component, intArg1: stat, intArg2: component): void {
    varc_80 = statBase(intArg1);
    stats_mouseover_create(intArg0, intArg1, intArg2);
}
