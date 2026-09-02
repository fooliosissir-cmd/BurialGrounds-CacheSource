/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_action_cam]

function conq_action_cam(): void {
    if (varc_conq_action_cam_coord == -1 || varc_1357 < 0 || varc_1358 < 0) {
        return;
    }
    camFollowcoord(varc_conq_action_cam_coord);
    varc_1355 = camGetAngleXa();
    varc_1356 = camGetAngleYa();
    ifSetOnTimer(hook(cs2_421, "iii", [varc_1357, varc_1358, 0]), Component.conq_scroll_overlay.main_layer);
}
