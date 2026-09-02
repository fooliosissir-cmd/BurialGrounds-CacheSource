/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ecosystem_tutorial_cam_8_2]

function ecosystem_tutorial_cam_8_2(intArg0: component): void {
    ifSetOnCamFinished(noHook(""), intArg0);
    camMovealong(0, 1, 450, 450, 1, 1);
}
