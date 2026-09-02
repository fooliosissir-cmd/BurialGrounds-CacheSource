/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_email_validation_timer]

function lobbyscreen_email_validation_timer(): void {
    let int0: number = detailGetSoundVol();
    let int1: number = detailGetMusicVol();
    let int2: number = detailGetBgsoundvol();
    let int3: number = detailGetSpeechvol();
    let int4: number = detailGetLoginVol();

    if (varbit_10242 == 0) {
        return;
    }

    if (varbit_10242 == 2) {
        ifSetHide(false, Component.interface_906.component_906_40);
        ifSetHide(true, Component.interface_906.component_906_32);
        ifSetOnVarTransmit(hook(email_validation_timer, "Y", [], [2411]), Component.interface_906.component_906_40);
    } else if (varbit_10242 == 1) {
        ifSetHide(true, Component.interface_906.component_906_40);
        ifSetHide(false, Component.interface_906.component_906_32);
        ifSetHide(true, Component.interface_906.component_906_56);
        ifSetOnVarTransmit(noHook(""), Component.interface_906.component_906_0);
    }
}
