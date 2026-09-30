/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_email_validation_timer]

/**
 * Legacy RuneScape email-validation overlays are not part of Burial Grounds.
 * Keep the native script id valid but never expose those surfaces.
 */
function lobbyscreen_email_validation_timer(): void {
    // This is the Home content ancestor, not an email-validation surface.
    ifSetHide(false, Component.interface_906.component_906_32);
    ifSetHide(true, Component.interface_906.component_906_40);
    ifSetHide(true, Component.interface_906.component_906_56);
}
