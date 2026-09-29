/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3064

function cs2_3064(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetText("Enter Greyhaven", Component.interface_906.component_906_199);
        ifSetOp(1, "Enter Greyhaven", Component.interface_906.component_906_186);
        ifSetOnOp(hook(clientscript_lobbyscreen_entergame, "I", [Component.interface_906.component_906_186]), Component.interface_906.component_906_186);
    } else {
        ifSetText("Opening the gates...", Component.interface_906.component_906_199);
        ifClearops(Component.interface_906.component_906_186);
        ifSetOnOp(noHook(""), Component.interface_906.component_906_186);
    }
    cs2_3065(intArg0);
}
