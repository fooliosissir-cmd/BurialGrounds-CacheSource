/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5166

function cs2_5166(): void {
    varc_colour_picker_original_varc = max(0, min(varc_colour_picker_original_varc, 65535));
    resumeHsldialog(varc_colour_picker_original_varc);
}
