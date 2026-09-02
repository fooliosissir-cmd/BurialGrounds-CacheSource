/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ecosystem_tutorial_camera]

function ecosystem_tutorial_camera(intArg0: component): void {
    switch (varc_ecosystem_tutorial) {
        case 1:
            ecosystem_tutorial_cam_1(intArg0);
            break;
        case 2:
            ecosystem_tutorial_cam_2(intArg0);
            break;
        case 3:
            ecosystem_tutorial_cam_3(intArg0);
            break;
        case 4:
            ecosystem_tutorial_cam_4(intArg0);
            break;
        case 5:
            ecosystem_tutorial_cam_5(intArg0);
            break;
        case 6:
            ecosystem_tutorial_cam_6(intArg0);
            break;
        case 7:
            ecosystem_tutorial_cam_7(intArg0);
            break;
        case 8:
            ecosystem_tutorial_cam_8(intArg0);
            break;
        default:
            camReset();
            break;
    }
}
