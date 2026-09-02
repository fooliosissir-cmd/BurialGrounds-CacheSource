/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3412

function cs2_3412(intArg0: component, intArg1: component): void {
    ifSetText("High-risk Wilderness World", intArg0);
    ifSetText("Warning: This is a High-risk Wilderness world." + "<br>" + "<br>" + "While you are in the Wilderness on this world, you will not be permitted to use the Protect Item prayer or curse, so you may lose ALL your items when you die." + "<br>" + "<br>" + "You have been warned!", intArg1);
}
