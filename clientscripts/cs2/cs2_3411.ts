/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3411

function cs2_3411(): void {
    varc_1240 = 3;
    varc_1277 = 0;

    if (hasBase64url() == 1) {
        proc_loginscreen_setactivemenu(5);
        if (varc_1273 == 1) {
            return;
        } else {
            ifSetOnTimer(hook(cs2_3381, "Ii", [Component.interface_975.component_975_44, 0]), Component.interface_975.component_975_44);
        }
    } else if (userflowflags(3) == true) {
        proc_loginscreen_setactivemenu(7);
    } else {
        proc_loginscreen_setactivemenu(11);
    }
}
