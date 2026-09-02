/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,snapshot_mutetoggle]

function snapshot_mutetoggle(): void {
    if (playermodlevel() == 5 || playermodlevel() == 6) {
        ifSetText("Suggest to mute this player for 48 hours", Component.interface_594.component_594_83);
        ifSetText("Suggest to mute this player for 48 hours", Component.interface_594.component_594_10);
        ifSetText("Suggest to mute this player for 48 hours", Component.interface_594.component_594_60);
    } else {
        ifSetText("Mute this player for 48 hours", Component.interface_594.component_594_83);
        ifSetText("Mute this player for 48 hours", Component.interface_594.component_594_10);
        ifSetText("Mute this player for 48 hours", Component.interface_594.component_594_60);
    }

    if (varc_snapshot_mute == 1) {
        varc_snapshot_mute = 0;
    } else {
        varc_snapshot_mute = 1;
    }

    if (varc_snapshot_mute == 0) {
        ifSetGraphic(Graphic.options_radio_buttons_boxed_0, Component.interface_594.component_594_82);
        ifSetGraphic(Graphic.options_radio_buttons_boxed_0, Component.interface_594.component_594_9);
        ifSetGraphic(Graphic.options_radio_buttons_boxed_0, Component.interface_594.component_594_59);
    } else {
        ifSetGraphic(Graphic.options_radio_buttons_boxed_2, Component.interface_594.component_594_82);
        ifSetGraphic(Graphic.options_radio_buttons_boxed_2, Component.interface_594.component_594_9);
        ifSetGraphic(Graphic.options_radio_buttons_boxed_2, Component.interface_594.component_594_59);
    }
}
