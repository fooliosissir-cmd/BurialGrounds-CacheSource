/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4273

function cs2_4273(): void {
    ifSetHide(true, Component.interface_1083.component_1083_161);
    ifSetHide(true, Component.interface_1083.component_1083_160);
    ifSetHide(true, Component.interface_1083.component_1083_162);
    ifSetHide(false, Component.interface_1083.component_1083_164);
    ifSetHide(true, Component.interface_1083.component_1083_157);
    ifSetHide(true, Component.interface_1083.component_1083_158);
    ifSetHide(false, Component.interface_1083.component_1083_159);
    ifSetHide(true, Component.interface_1083.component_1083_243);
    ifSetHide(true, Component.interface_1083.component_1083_253);
    ifSetHide(false, Component.interface_1083.component_1083_394);
    ifSetHide(true, Component.interface_1083.component_1083_165);
    ifSetText(tostring(2 * 10), Component.interface_1083.component_1083_415);

    if (statBase(6) < 83) {
        ifSetText(tostring(2 / 2 * 10) + " (halved)", Component.interface_1083.component_1083_416);
    } else {
        ifSetText(tostring(2 * 10), Component.interface_1083.component_1083_416);
    }

    if (statBase(6) < 80) {
        ifSetText(tostring(12 / 2 * 10) + " (halved)", Component.interface_1083.component_1083_417);
    } else {
        ifSetText(tostring(12 * 10), Component.interface_1083.component_1083_417);
    }

    if (statBase(6) < 86) {
        ifSetText(tostring(2 / 2 * 10) + " (halved)", Component.interface_1083.component_1083_418);
    } else {
        ifSetText(tostring(2 * 10), Component.interface_1083.component_1083_418);
    }

    if (statBase(6) < 91) {
        ifSetText(tostring(10 / 2 * 10) + " (halved)", Component.interface_1083.component_1083_419);
    } else {
        ifSetText(tostring(10 * 10), Component.interface_1083.component_1083_419);
    }
    ifSetText("Magic and Farming", Component.interface_1083.component_1083_420);

    if (statBase(6) < 83) {
        ifSetText("Farming (no Magic)", Component.interface_1083.component_1083_421);
    } else {
        ifSetText("Magic and Farming", Component.interface_1083.component_1083_421);
    }

    if (statBase(6) < 80) {
        ifSetText("Crafting (no Magic)", Component.interface_1083.component_1083_422);
    } else {
        ifSetText("Magic and Crafting", Component.interface_1083.component_1083_422);
    }

    if (statBase(6) < 86) {
        ifSetText("Construction (no Magic)", Component.interface_1083.component_1083_423);
    } else {
        ifSetText("Magic and Construction", Component.interface_1083.component_1083_423);
    }

    if (statBase(6) < 91) {
        ifSetText("Agility (no Magic)", Component.interface_1083.component_1083_424);
    } else {
        ifSetText("Magic and Agility", Component.interface_1083.component_1083_424);
    }
}
