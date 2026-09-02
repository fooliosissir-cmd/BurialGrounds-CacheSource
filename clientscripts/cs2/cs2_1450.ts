/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1450

function cs2_1450(): void {
    let int0: number = 0;
    let int1: number = invSize(95);

    while (int0 < int1) {
        ccCreate(Component.interface_762.component_762_95, 5, int0);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(0, 0, 0, 0);
        ccSetHide(true);
        if (invGetobj(95, int0) != -1) {
            cs2_1453(int0);
        }
        ccSetOutline(1);
        ccSetGraphicShadow(3355443);
        ccSetOnMouseOver(hook(cs2_1480, "Ii", [Component.interface_762.component_762_95, int0]));
        ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_762.component_762_99]));
        int0 = int0 + 1;
    }
}
