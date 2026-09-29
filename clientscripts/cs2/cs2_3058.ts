/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3058

function cs2_3058(): void {
    // Burial Grounds keeps the lobby intentionally focused. Only the lore-facing
    // Home pane and the World Select pane are mounted here.
    ifOpenSubClient(Component.interface_906.component_906_208, Interface.interface_907);
    cs2_2998();

    ifOpenSubClient(Component.interface_906.component_906_209, Interface.interface_910);
    cs2_3103();

    // Social/chat/settings panes are deliberately not opened in the lobby.
    // Their underlying game functionality remains available where it belongs.
}
