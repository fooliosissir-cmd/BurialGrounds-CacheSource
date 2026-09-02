/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5937

function cs2_5937(): void {
    if (compare(subString(chatPlayerNameUnfiltered(), 0, 1), "#") == 0) {
        return;
    }

    if (varbit_evalid_rewards != 0) {
        ifSetOnVarTransmit(noHook(""), Component.interface_906.component_906_235);
        return;
    }

    switch (varp_2610) {
        case 0:
            cs2_5940();
            break;
        case 1:
            evalid_ignore();
            break;
        case 2:
        case 5:
            ifSetOnVarTransmit(hook(cs2_6204, "Y", [], [2411]), Component.interface_906.component_906_235);
            evalid_check_email();
            break;
        case 3:
            ifSetOnVarcTransmit(noHook(""), Component.interface_906.component_906_235);
            proc_evalid_rewards();
            break;
        case 4:
            cs2_5940();
            break;
        default:
            evalid_ignore();
            break;
    }
}
