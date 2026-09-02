/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2612

function cs2_2612(intArg0: coord, intArg1: number): void {
    camFollowcoord(moveCoord(intArg0, 16, 0, 16));

    switch (intArg1) {
        case 0:
            viewportSetZoom(144, 180);
            break;
        case 1:
            viewportSetZoom(176, 220);
            break;
        case 2:
            viewportSetZoom(208, 260);
            break;
        case 3:
            viewportSetZoom(240, 300);
            break;
        case 4:
            viewportSetZoom(272, 340);
            break;
    }
}
