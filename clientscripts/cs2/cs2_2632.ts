/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2632

function cs2_2632(intArg0: component): void {
    if (intArg0 != Component.interface_859.component_859_0) {
        cs2_1360(intArg0);
    }

    switch (intArg0) {
        case Component.interface_859.component_859_0:
            ifSetText("Go to", Component.interface_859.component_859_28);
            ifSetText("Click to view this squad.", Component.interface_859.component_859_29);
            break;
        case Component.interface_859.component_859_13:
            ifSetText("Attack", Component.interface_859.component_859_28);
            ifSetText("Select the enemy squad you wish to attack.", Component.interface_859.component_859_29);
            break;
        case Component.interface_859.component_859_14:
            ifSetText("Move", Component.interface_859.component_859_28);
            ifSetText("Select the destination for your squad.", Component.interface_859.component_859_29);
            break;
        case Component.interface_859.component_859_15:
            ifSetText("Explore", Component.interface_859.component_859_28);
            ifSetText("Send the unit to explore for treasure.", Component.interface_859.component_859_29);
            break;
        case Component.interface_859.component_859_16:
            if (varbit_mob_current_scenario == 2) {
                ifSetText("Attack wall/catapult", Component.interface_859.component_859_28);
                ifSetText("Select the wall or catapult you want your squad to attack.", Component.interface_859.component_859_29);
            } else if (varbit_mob_current_scenario == 3) {
                ifSetText("Collect gold", Component.interface_859.component_859_28);
                ifSetText("Select the cave entrance from which your squad should gather gold.", Component.interface_859.component_859_29);
            } else if (varbit_mob_current_scenario == 4) {
                ifSetText("Rescue", Component.interface_859.component_859_28);
                ifSetText("Select the fissure from which your squad should rescue TzHaar.", Component.interface_859.component_859_29);
            }
            break;
        case Component.interface_859.component_859_17:
            if (varbit_mob_current_scenario == 2) {
                ifSetText("Collect", Component.interface_859.component_859_28);
                ifSetText("Select a resource for your squad to collect.", Component.interface_859.component_859_29);
            } else if (varbit_mob_current_scenario == 4) {
                ifSetText("Steal", Component.interface_859.component_859_28);
                ifSetText("Select a lander to steal TzHaar from.", Component.interface_859.component_859_29);
            }
            break;
    }
}
