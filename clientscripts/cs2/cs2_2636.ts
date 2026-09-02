/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2636

function cs2_2636(): void {
    if (varbit_mob_current_scenario == 2) {
        ifSettargetverb("Attack wall", Component.interface_859.component_859_16);
        ifSettargetverb("Collect", Component.interface_859.component_859_17);
    } else if (varbit_mob_current_scenario == 4) {
        ifSettargetverb("Rescue", Component.interface_859.component_859_16);
        ifSettargetverb("Steal", Component.interface_859.component_859_17);
    } else if (varbit_mob_current_scenario == 3) {
        ifSettargetverb("Collect gold", Component.interface_859.component_859_16);
    }
}
