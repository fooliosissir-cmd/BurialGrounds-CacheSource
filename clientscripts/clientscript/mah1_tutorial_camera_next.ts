/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah1_tutorial_camera_next]

function mah1_tutorial_camera_next(): void {
    if (varc_mah1_tutorial_camera_step < splineLength(0)) {
        varc_mah1_tutorial_camera_step = varc_mah1_tutorial_camera_step + 1;
        switch (varc_mah1_tutorial_camera_step) {
            case 9:
            case 10:
            case 11:
                ifSetOnCamFinished(hook(mah1_tutorial_camera_next, "", []), Component.interface_558.component_558_0);
                camMovealong(0, varc_mah1_tutorial_camera_step, 900, 900, 1, varc_mah1_tutorial_camera_step);
                break;
            case 12:
                ifSetOnCamFinished(noHook(""), Component.interface_558.component_558_0);
                camMovealong(0, varc_mah1_tutorial_camera_step, 900, 100, 1, varc_mah1_tutorial_camera_step);
                break;
            default:
                ifSetOnCamFinished(noHook(""), Component.interface_558.component_558_0);
                camMovealong(0, varc_mah1_tutorial_camera_step, 900, 500, 1, varc_mah1_tutorial_camera_step);
                break;
        }
    } else {
        varc_mah1_tutorial_camera_step = 0;
    }
}
