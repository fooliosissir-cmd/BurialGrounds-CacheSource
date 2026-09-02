/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,scab_tries_update]

function scab_tries_update(): void {
    let str0: string = tostring(varc_scab_total_tries_remaining / 10);
    let str1: string = tostring(varc_scab_total_tries_remaining % 10);

    ifSetText(str0, Component.interface_269.component_269_48);
    ifSetText(str1, Component.interface_269.component_269_49);
}
