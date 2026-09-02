/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_423

function cs2_423(): void {
    if (varc_conq_camera_coord != -1) {
        camFollowcoord(varc_conq_camera_coord);
    } else if (varc_conq_action_cam_coord != -1) {
        camFollowcoord(varc_conq_action_cam_coord);
    }
}
