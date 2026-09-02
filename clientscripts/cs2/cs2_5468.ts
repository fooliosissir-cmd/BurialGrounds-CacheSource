/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5468

function cs2_5468(): void {
    splineNew(0, 11);
    splineNew(1, 11);
    splineAddPoint(0, 0, coord(3371, 3072, 0), 400, coord(3374, 3077, 0), 400, 0);
    splineAddPoint(1, 0, coord(3374, 3094, 0), 50, coord(3376, 3094, 0), 50, 0);
    splineAddPoint(0, 1, coord(3376, 3084, 0), 400, coord(3379, 3085, 0), 400, 0);
    splineAddPoint(1, 1, coord(3379, 3095, 0), 50, coord(3381, 3096, 0), 50, 0);
    splineAddPoint(0, 2, coord(3398, 3091, 0), 300, coord(3401, 3094, 0), 300, 0);
    splineAddPoint(1, 2, coord(3385, 3099, 0), 1700, coord(3387, 3101, 0), 1700, 0);
    splineAddPoint(0, 3, coord(3400, 3110, 0), 900, coord(3400, 3115, 0), 900, 0);
    splineAddPoint(1, 3, coord(3388, 3111, 0), 1500, coord(3388, 3114, 0), 1500, 0);
    splineAddPoint(0, 4, coord(3394, 3131, 0), 1100, coord(3391, 3136, 0), 1100, 0);
    splineAddPoint(1, 4, coord(3384, 3121, 0), 1100, coord(3381, 3124, 0), 1100, 0);
    splineAddPoint(0, 5, coord(3370, 3140, 0), 1300, coord(3364, 3140, 0), 1300, 0);
    splineAddPoint(1, 5, coord(3371, 3123, 0), 1000, coord(3367, 3122, 0), 1000, 0);
    splineAddPoint(0, 6, coord(3345, 3123, 0), 2100, coord(3342, 3118, 0), 2100, 0);
    splineAddPoint(1, 6, coord(3362, 3118, 0), 700, coord(3359, 3114, 0), 700, 0);
    splineAddPoint(0, 7, coord(3344, 3103, 0), 1600, coord(3346, 3097, 0), 1600, 0);
    splineAddPoint(1, 7, coord(3360, 3107, 0), 300, coord(3361, 3103, 0), 300, 0);
    splineAddPoint(0, 8, coord(3353, 3087, 0), 900, coord(3357, 3085, 0), 900, 0);
    splineAddPoint(1, 8, coord(3363, 3100, 0), 100, coord(3364, 3098, 0), 100, 0);
    splineAddPoint(0, 9, coord(3371, 3086, 0), 400, coord(3374, 3091, 0), 400, 0);
    splineAddPoint(1, 9, coord(3374, 3097, 0), 150, coord(3375, 3098, 0), 150, 0);
    splineAddPoint(0, 10, coord(3374, 3093, 0), 400, coord(3374, 3095, 0), 400, 0);
    splineAddPoint(1, 10, coord(3374, 3102, 0), 150, coord(3374, 3104, 0), 150, 0);
    camMovealong(0, 0, 100, 400, 1, 0);
    ifSetOnCamFinished(hook(cs2_5469, "i", [0]), Component.interface_1161.component_1161_0);
}
