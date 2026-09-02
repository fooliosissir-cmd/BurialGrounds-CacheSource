/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5165

function cs2_5165(): void {
    varp_colour_picker_colour = max(0, min(varp_colour_picker_colour, 65535));
    resumeHsldialog(varp_colour_picker_colour);
}
