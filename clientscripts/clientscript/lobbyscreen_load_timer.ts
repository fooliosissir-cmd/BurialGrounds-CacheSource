/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_load_timer]

function lobbyscreen_load_timer(intArg0: boolean, intArg1: number, intArg2: number): void {
    let int3: number = detailGetSoundVol();
    let int4: number = detailGetMusicVol();
    let int5: number = detailGetBgsoundvol();
    let int6: number = detailGetSpeechvol();
    let int7: number = detailGetLoginVol();

    if (varp_2567 != 0) {
        if (varc_1882 == 1 && playerMember() == 0) {
            ifSetOnTimer(hook(cs2_1999, "I1iiiiiii", [Component.interface_906.component_906_0, intArg0, intArg1, 0, int3, int4, int5, int6, int7]), Component.interface_906.component_906_0);
        } else {
            ifSetOnTimer(noHook(""), Component.interface_906.component_906_0);
            proc_lobbyscreen_load(intArg0, intArg1);
        }
        varc_1882 = 0;
    }
}
