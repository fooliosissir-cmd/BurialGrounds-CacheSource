/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fairyrings_vartransmit]

function fairyrings_vartransmit(): void {
    switch (varbit_fairyring1) {
        case 1:
            varc_122 = 1536;
            break;
        case 2:
            varc_122 = 1024;
            break;
        case 3:
            varc_122 = 512;
            break;
        default:
            varc_122 = 0;
            break;
    }

    switch (varbit_fairyring2) {
        case 1:
            varc_123 = 1536;
            break;
        case 2:
            varc_123 = 1024;
            break;
        case 3:
            varc_123 = 512;
            break;
        default:
            varc_123 = 0;
            break;
    }

    switch (varbit_fairyring3) {
        case 1:
            varc_124 = 1536;
            break;
        case 2:
            varc_124 = 1024;
            break;
        case 3:
            varc_124 = 512;
            break;
        default:
            varc_124 = 0;
            break;
    }
}
