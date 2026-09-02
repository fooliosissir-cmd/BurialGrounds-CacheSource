/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dream_chest_init]

function dream_chest_init(): void {
    let int0: number = 0;

    while (int0 < 5) {
        ccCreate(Component.interface_260.component_260_45, 5, int0);
        ccSetSize(36, 32, 0, 0);
        if (int0 == 0) {
            ccSetPosition(0, 43, 0, 0);
        }
        if (int0 == 1) {
            ccSetPosition(50, 2, 0, 0);
        }
        if (int0 == 2) {
            ccSetPosition(50, 43, 0, 0);
        }
        if (int0 == 3) {
            ccSetPosition(50, 85, 0, 0);
        }
        if (int0 == 4) {
            ccSetPosition(50, 125, 0, 0);
        }
        if (invGetobj(515, int0) != -1) {
            ccSetObject(invGetobj(515, int0), invGetNum(515, int0));
            ccSetOpBase(ocName(invGetobj(515, int0)));
            ccSetOp(1, "Deposit");
            ccSetGraphicShadow(1118481);
            ccSetOutline(1);
            if (int0 == 0) {
                ifSetGraphic(-1, Component.interface_260.component_260_40);
            }
            if (int0 == 1) {
                ifSetGraphic(-1, Component.interface_260.component_260_36);
            }
            if (int0 == 2) {
                ifSetGraphic(-1, Component.interface_260.component_260_37);
            }
            if (int0 == 3) {
                ifSetGraphic(-1, Component.interface_260.component_260_38);
            }
            if (int0 == 4) {
                ifSetGraphic(-1, Component.interface_260.component_260_39);
            }
        } else {
            if (int0 == 0) {
                ifSetGraphic(Graphic.graphic_159, Component.interface_260.component_260_40);
            }
            if (int0 == 1) {
                ifSetGraphic(Graphic.graphic_156, Component.interface_260.component_260_36);
            }
            if (int0 == 2) {
                ifSetGraphic(Graphic.graphic_161, Component.interface_260.component_260_37);
            }
            if (int0 == 3) {
                ifSetGraphic(Graphic.graphic_163, Component.interface_260.component_260_38);
            }
            if (int0 == 4) {
                ifSetGraphic(Graphic.graphic_165, Component.interface_260.component_260_39);
            }
        }
        int0 = int0 + 1;
    }
}
