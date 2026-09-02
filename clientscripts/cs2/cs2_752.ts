/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_752

function cs2_752(): void {
    if (varbit_4534 == 0 && varbit_lore_timer_2 == 0) {
        ifSetText("---", Component.interface_662.component_662_43);
        return;
    }

    if (varbit_lore_timer_2 == 0) {
        ifSetText(tostring(varbit_4534) + ".00", Component.interface_662.component_662_43);
    } else {
        ifSetText(tostring(varbit_4534) + ".30", Component.interface_662.component_662_43);
    }
}
