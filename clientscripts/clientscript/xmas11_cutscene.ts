/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xmas11_cutscene]

function xmas11_cutscene(intArg0: component): void {
    let int1: coord = cs2_284(coord());

    switch (varc_1749) {
        case 1:
            proc_tutorial3_fadein(75, intArg0);
            cs2_5602(int1);
            camMovealong(0, 0, 1000, 0, 1, 0);
            break;
        case 2:
            cs2_5602(int1);
            camMovealong(0, 1, 2000, 2000, 1, 1);
            ifSetOnCamFinished(hook(cs2_5599, "Iiii", [event_com, 2, 2000, 2000]), intArg0);
            break;
        case 3:
            proc_tutorial3_fadein(75, intArg0);
            cs2_5603(int1);
            camMovealong(0, 0, 800, 800, 1, 0);
            ifSetOnCamFinished(hook(cs2_5600, "Iiii", [event_com, 1, 800, 800]), intArg0);
            break;
        case 4:
            cs2_5603(int1);
            camMovealong(0, 3, 800, 800, 1, 3);
            ifSetOnCamFinished(hook(cs2_5601, "Iiii", [event_com, 4, 800, 800]), intArg0);
            break;
    }
}
