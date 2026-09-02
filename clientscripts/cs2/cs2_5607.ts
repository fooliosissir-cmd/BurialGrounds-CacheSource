/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5607

function cs2_5607(): void {
    ifSetText(tostring(varc_1747) + " - " + tostring(varc_1746), Component.xmas11_snowman_score_overlay.xmas11_score);

    if (varc_1748 == 1) {
        ifSetText("Whitezag", Component.xmas11_snowman_score_overlay.xmas11_grayzag);
    } else {
        ifSetText("Grayzag", Component.xmas11_snowman_score_overlay.xmas11_grayzag);
    }
}
