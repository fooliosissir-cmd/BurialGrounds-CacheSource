/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,vm_kudos_set]

function vm_kudos_set(): void {
    ifSetText(tostring(varbit_vm_kudos) + "/" + tostring(183), Component.interface_532.component_532_1);

    if (varbit_vm_kudos == 183) {
        ifSetColour(colour(0x00FF00), Component.interface_532.component_532_1);
    }
}
