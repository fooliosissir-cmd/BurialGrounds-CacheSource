/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,snapshot_main_load]

function snapshot_main_load(): void {
    varc_snapshot_mute = 0;

    if (playermodlevel() == 5 || playermodlevel() == 6) {
        ifSetText("Suggest to mute this player for 48 hours", Component.interface_594.component_594_83);
        ifSetText("Suggest to mute this player for 48 hours", Component.interface_594.component_594_10);
        ifSetText("Suggest to mute this player for 48 hours", Component.interface_594.component_594_60);
    } else {
        ifSetText("Mute this player for 48 hours", Component.interface_594.component_594_83);
        ifSetText("Mute this player for 48 hours", Component.interface_594.component_594_10);
        ifSetText("Mute this player for 48 hours", Component.interface_594.component_594_60);
    }
    varc_snapshot_open = 1;
    ifSetOnVarcStrTransmit(hook(snapshot_name_update, "Y", [], [24]), Component.interface_594.component_594_32);
    varc_792 = -1;
    cs2_224();
    cs2_216();
}
