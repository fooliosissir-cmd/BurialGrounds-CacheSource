/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4302

function cs2_4302(): void {
    if (activeClanSettingsFindAffined() == 1) {
        clansettings_list_scrollbar_update();
    }
}
