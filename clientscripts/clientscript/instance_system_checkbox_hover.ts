/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,instance_system_checkbox_hover]

function clientscript_instance_system_checkbox_hover(intArg0: boolean): void {
    ifSetGraphic(instance_system_checkbox(intArg0), Component.instance_system.practice_checkbox);
}
