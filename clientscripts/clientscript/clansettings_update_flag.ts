/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clansettings_update_flag]

function clansettings_update_flag(): void {
    if (activeClanSettingsFindAffined() == 1) {
        cs2_4328(Component.interface_1096.component_1096_348);
    }
}
