/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6244

function cs2_6244(): void {
    varc_qbd2_phase_damage = varc_qbd2_phase_damage - 7500 / 50;
    let int0: number = max(1, 100 - scale(varc_qbd2_phase_damage, 7500, 100));

    if (varc_qbd2_phase_damage <= 0) {
        varc_qbd2_phase_damage = 0;
        ifSetOnTimer(noHook(""), Component.interface_1285.component_1285_3);
    } else {
        proc_aif_progressbar_set(int0, Component.interface_1285.component_1285_5, -1);
    }
}
