/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sfa_init]

function sfa_init(): void {
    varc_1078 = varbit_sfa_event_time;
    varc_sfa_initial_disappear = 0;
    let int0: number = clientClock();
    ifSetOnTimer(hook(cs2_2892, "Ii", [Component.sfa.initial, int0]), Component.sfa.initial);
    soundSynth(Sound.sound_8641, 1, 0);
    ifSetOnResize(hook(cs2_2887, "", []), Component.sfa.content_layer);
    cs2_2888();
}
