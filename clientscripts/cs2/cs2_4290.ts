/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4290

function cs2_4290(): void {
    if (activeClanSettingsFindAffined() == 1) {
        cs2_4291();
    }
    proc_clansettings_interface_refresh();
}
