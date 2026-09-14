/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,autosetup]

function proc_autosetup(intArg0: number): void {
    let [int1, int2] = autosetupDosetup();
    cs2_2593(int1);

    if (int1 == 1 || int1 == 3) {
        cs2_2700(1, intArg0, true, false);
        return;
    } else {
        varc_1240 = 3;
        varc_1277 = 0;
        detailToolkitDefault(int1, 1);
        if (intArg0 == 3) {
            if (hasSignonKey() == 1) {
                proc_loginscreen_setactivemenu(5);
                ifSetOnTimer(hook(cs2_3381, "Ii", [Component.interface_975.component_975_44, 0]), Component.interface_975.component_975_44);
            } else if (userflowflags(1) == true) {
                proc_loginscreen_setactivemenu(11);
            } else {
                proc_loginscreen_setactivemenu(11);
            }
        } else {
            proc_graphics_options_rebuild(int1, getWindowMode(), ...graphics_options_reviewoptions(int1), intArg0);
        }
        return;
    }
}
