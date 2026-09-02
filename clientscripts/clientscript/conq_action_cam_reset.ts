/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_action_cam_reset]

function conq_action_cam_reset(): void {
    camFollowcoord(varc_conq_camera_coord);
    ifSetOnTimer(hook(cs2_421, "iii", [varc_1355, varc_1356, 0]), Component.conq_scroll_overlay.main_layer);
}
