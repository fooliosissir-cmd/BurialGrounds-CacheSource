/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,instance_system_init]

function clientscript_instance_system_init(): void {
    ifSetOnVarcTransmit(hook(clientscript_instance_system_refresh, "Y", [], [1995]), Component.instance_system.rows);
    instance_system_rebuild();
}
