/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3413

function cs2_3413(intArg0: number): void {
    if (intArg0 == 1) {
        graphics_options_message(intArg0, 1, "This setting is not available in your current version of Java.", "", "");
        graphics_options_message(intArg0, 1, "Please update to the latest version.", "", "");
    } else {
        graphics_options_message(intArg0, 1, "This setting is not available in your current version of Java." + "<br>" + "<br>" + "Please update to the latest version, or try our Windows Client available from the link below.", "Download Windows Client", "downloads.ws");
    }
}
