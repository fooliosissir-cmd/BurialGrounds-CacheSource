/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2124

function cs2_2124(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component, intArg8: component): void {
    varc_681 = random(2048);
    varc_684 = random(2048);
    varc_687 = random(2048);
    varc_690 = random(2048);
    varc_680 = 25 - randominc(50);
    varc_682 = 25 - randominc(50);
    varc_683 = 25 - randominc(50);
    varc_685 = 25 - randominc(50);
    varc_686 = 25 - randominc(50);
    varc_688 = 25 - randominc(50);
    varc_689 = 25 - randominc(50);
    varc_691 = 25 - randominc(50);
    cs2_2127(intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8);
    ifSetOnTimer(hook(cs2_2126, "IIIIIIII", [intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8]), intArg0);
    let int9: number = clientClock() + 100;
    ifSetOnTimer(hook(cs2_5613, "Iiiii", [Component.interface_420.component_420_25, random(63), random(127), random(2), int9]), Component.interface_420.component_420_25);
    ifSetOnTimer(hook(cs2_5613, "Iiiii", [Component.interface_420.component_420_22, random(63), random(127), random(2), int9]), Component.interface_420.component_420_22);
    ifSetOnTimer(hook(cs2_5613, "Iiiii", [Component.interface_420.component_420_23, random(63), random(127), random(2), int9]), Component.interface_420.component_420_23);
    ifSetOnTimer(hook(cs2_5613, "Iiiii", [Component.interface_420.component_420_21, random(63), random(127), random(2), int9]), Component.interface_420.component_420_21);
}
