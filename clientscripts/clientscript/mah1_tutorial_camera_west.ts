/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah1_tutorial_camera_west]

function mah1_tutorial_camera_west(): void {
    varc_mah1_tutorial_camera_step = 2;
    camMovealong(0, varc_mah1_tutorial_camera_step, 500, 900, 1, varc_mah1_tutorial_camera_step);
    ifSetOnCamFinished(hook(mah1_tutorial_camera_next, "", []), Component.interface_558.component_558_0);
}
