/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_scroll_camera]

function conq_scroll_camera(intArg0: number): void {
    let int1: number = camGetAngleYa();
    let int2: number = 0;
    let int3: coord = -1;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;

    if (varc_conq_camera_delay < 10) {
        varc_conq_camera_delay = varc_conq_camera_delay + 1;
        return;
    }

    if (varc_1359 < 5) {
        varc_1359 = varc_1359 + 1;
        return;
    } else {
        varc_1359 = 0;
    }

    if (int1 < 128) {
        int1 = 1;
    } else if (int1 < 256) {
        int1 = 2;
    } else if (int1 < 384) {
        int1 = 3;
    } else if (int1 < 512) {
        int1 = 4;
    } else if (int1 < 640) {
        int1 = 5;
    } else if (int1 < 768) {
        int1 = 6;
    } else if (int1 < 896) {
        int1 = 7;
    } else if (int1 < 1024) {
        int1 = 8;
    } else if (int1 < 1152) {
        int1 = 9;
    } else if (int1 < 1280) {
        int1 = 10;
    } else if (int1 < 1408) {
        int1 = 11;
    } else if (int1 < 1536) {
        int1 = 12;
    } else if (int1 < 1664) {
        int1 = 13;
    } else if (int1 < 1792) {
        int1 = 14;
    } else if (int1 < 1920) {
        int1 = 15;
    } else {
        int1 = 16;
    }

    switch (intArg0) {
        case 1:
            switch (int1) {
                case 1:
                case 16:
                    int2 = 1;
                    break;
                case 2:
                case 3:
                    int2 = 8;
                    break;
                case 4:
                case 5:
                    int2 = 7;
                    break;
                case 6:
                case 7:
                    int2 = 6;
                    break;
                case 8:
                case 9:
                    int2 = 5;
                    break;
                case 10:
                case 11:
                    int2 = 4;
                    break;
                case 12:
                case 13:
                    int2 = 3;
                    break;
                case 14:
                case 15:
                    int2 = 2;
                    break;
            }
            break;
        case 5:
            switch (int1) {
                case 1:
                case 16:
                    int2 = 5;
                    break;
                case 2:
                case 3:
                    int2 = 4;
                    break;
                case 4:
                case 5:
                    int2 = 3;
                    break;
                case 6:
                case 7:
                    int2 = 2;
                    break;
                case 8:
                case 9:
                    int2 = 1;
                    break;
                case 10:
                case 11:
                    int2 = 8;
                    break;
                case 12:
                case 13:
                    int2 = 7;
                    break;
                case 14:
                case 15:
                    int2 = 6;
                    break;
            }
            break;
        case 7:
            switch (int1) {
                case 1:
                case 16:
                    int2 = 7;
                    break;
                case 2:
                case 3:
                    int2 = 6;
                    break;
                case 4:
                case 5:
                    int2 = 5;
                    break;
                case 6:
                case 7:
                    int2 = 4;
                    break;
                case 8:
                case 9:
                    int2 = 3;
                    break;
                case 10:
                case 11:
                    int2 = 2;
                    break;
                case 12:
                case 13:
                    int2 = 1;
                    break;
                case 14:
                case 15:
                    int2 = 8;
                    break;
            }
            break;
        case 3:
            switch (int1) {
                case 1:
                case 16:
                    int2 = 3;
                    break;
                case 2:
                case 3:
                    int2 = 2;
                    break;
                case 4:
                case 5:
                    int2 = 1;
                    break;
                case 6:
                case 7:
                    int2 = 8;
                    break;
                case 8:
                case 9:
                    int2 = 7;
                    break;
                case 10:
                case 11:
                    int2 = 6;
                    break;
                case 12:
                case 13:
                    int2 = 5;
                    break;
                case 14:
                case 15:
                    int2 = 4;
                    break;
            }
            break;
        case 2:
            switch (int1) {
                case 1:
                case 16:
                    int2 = 2;
                    break;
                case 2:
                case 3:
                    int2 = 1;
                    break;
                case 4:
                case 5:
                    int2 = 8;
                    break;
                case 6:
                case 7:
                    int2 = 7;
                    break;
                case 8:
                case 9:
                    int2 = 6;
                    break;
                case 10:
                case 11:
                    int2 = 5;
                    break;
                case 12:
                case 13:
                    int2 = 4;
                    break;
                case 14:
                case 15:
                    int2 = 3;
                    break;
            }
            break;
        case 4:
            switch (int1) {
                case 1:
                case 16:
                    int2 = 4;
                    break;
                case 2:
                case 3:
                    int2 = 3;
                    break;
                case 4:
                case 5:
                    int2 = 2;
                    break;
                case 6:
                case 7:
                    int2 = 1;
                    break;
                case 8:
                case 9:
                    int2 = 8;
                    break;
                case 10:
                case 11:
                    int2 = 7;
                    break;
                case 12:
                case 13:
                    int2 = 6;
                    break;
                case 14:
                case 15:
                    int2 = 5;
                    break;
            }
            break;
        case 8:
            switch (int1) {
                case 1:
                case 16:
                    int2 = 8;
                    break;
                case 2:
                case 3:
                    int2 = 7;
                    break;
                case 4:
                case 5:
                    int2 = 6;
                    break;
                case 6:
                case 7:
                    int2 = 5;
                    break;
                case 8:
                case 9:
                    int2 = 4;
                    break;
                case 10:
                case 11:
                    int2 = 3;
                    break;
                case 12:
                case 13:
                    int2 = 2;
                    break;
                case 14:
                case 15:
                    int2 = 1;
                    break;
            }
            break;
        case 6:
            switch (int1) {
                case 1:
                case 16:
                    int2 = 6;
                    break;
                case 2:
                case 3:
                    int2 = 5;
                    break;
                case 4:
                case 5:
                    int2 = 4;
                    break;
                case 6:
                case 7:
                    int2 = 3;
                    break;
                case 8:
                case 9:
                    int2 = 2;
                    break;
                case 10:
                case 11:
                    int2 = 1;
                    break;
                case 12:
                case 13:
                    int2 = 8;
                    break;
                case 14:
                case 15:
                    int2 = 7;
                    break;
            }
            break;
        default:
            return;
    }

    switch (int2) {
        case 1:
            int3 = moveCoord(varc_conq_camera_coord, 0, 0, 1);
            break;
        case 2:
            int3 = moveCoord(varc_conq_camera_coord, 1, 0, 1);
            break;
        case 3:
            int3 = moveCoord(varc_conq_camera_coord, 1, 0, 0);
            break;
        case 4:
            int3 = moveCoord(varc_conq_camera_coord, 1, 0, -1);
            break;
        case 5:
            int3 = moveCoord(varc_conq_camera_coord, 0, 0, -1);
            break;
        case 6:
            int3 = moveCoord(varc_conq_camera_coord, -1, 0, -1);
            break;
        case 7:
            int3 = moveCoord(varc_conq_camera_coord, -1, 0, 0);
            break;
        case 8:
            int3 = moveCoord(varc_conq_camera_coord, -1, 0, 1);
            break;
        default:
            return;
    }

    if (varc_1390 == 1) {
        int4 = 44;
        int5 = 35;
        int6 = 31;
        int7 = 17;
    } else {
        int4 = 54;
        int5 = 35;
        int6 = 36;
        int7 = 17;
    }

    if (coordX(int3) % 64 > int4 || coordZ(int3) % 64 > int6 || coordX(int3) % 64 < int5 || coordZ(int3) % 64 < int7) {
        ifSetColour(colour(0x646464), Component.conq_scroll_overlay.arrow_top);
        ifSetColour(colour(0x646464), Component.conq_scroll_overlay.arrow_bottom);
        ifSetColour(colour(0x646464), Component.conq_scroll_overlay.arrow_left);
        ifSetColour(colour(0x646464), Component.conq_scroll_overlay.arrow_right);
        ifSetColour(colour(0x646464), Component.conq_scroll_overlay.arrow_top_right);
        ifSetColour(colour(0x646464), Component.conq_scroll_overlay.arrow_bottom_right);
        ifSetColour(colour(0x646464), Component.conq_scroll_overlay.arrow_top_left);
        ifSetColour(colour(0x646464), Component.conq_scroll_overlay.arrow_bottom_left);
        return;
    } else {
        ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_top);
        ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_bottom);
        ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_left);
        ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_right);
        ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_top_right);
        ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_bottom_right);
        ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_top_left);
        ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_bottom_left);
        varc_conq_camera_coord = int3;
        camFollowcoord(varc_conq_camera_coord);
    }
}
