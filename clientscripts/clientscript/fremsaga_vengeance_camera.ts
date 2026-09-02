/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_vengeance_camera]

function fremsaga_vengeance_camera(intArg0: number): void {
    switch (varc_fremsaga_vengeance_cutscene) {
        case 1:
            fremsaga_vengeance_cam_1(intArg0);
            break;
        case 2:
            fremsaga_vengeance_cam_2(intArg0);
            break;
        case 3:
            fremsaga_vengeance_cam_3(intArg0);
            break;
        case 4:
            fremsaga_vengeance_cam_4(intArg0);
            break;
        case 5:
            fremsaga_vengeance_cam_5(intArg0);
            break;
        default:
            camReset();
            break;
    }
}
