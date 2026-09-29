/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_196

/**
 * Burial Grounds has no RuneScape membership trial/marketing panel.
 * Preserve the native script entry point but keep the promotional layer hidden.
 */
function cs2_196(): void {
    ifSetHide(true, Component.interface_906.component_906_35);
}
