/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,booth_init]

function booth_init(): void {
    ccDeleteAll(Component.interface_549.component_549_110);
    ifSetHide(true, Component.interface_549.component_549_15);
    let int0: number = 0;

    while (int0 < 14) {
        ccCreate(Component.interface_549.component_549_110, 5, int0);
        if (int0 != 6 && int0 != 8 && int0 != 11) {
            if (invGetobj(94, int0) != -1) {
                ccSetSize(36, 32, 0, 0);
                if (int0 == 0) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_116, 2, 2), 0, 0);
                } else if (int0 == 1) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_117, 2, 2), 0, 0);
                } else if (int0 == 2) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_118, 2, 2), 0, 0);
                } else if (int0 == 3) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_120, 2, 2), 0, 0);
                } else if (int0 == 4) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_121, 2, 2), 0, 0);
                } else if (int0 == 5) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_122, 2, 2), 0, 0);
                } else if (int0 == 7) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_123, 2, 2), 0, 0);
                } else if (int0 == 9) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_125, 2, 2), 0, 0);
                } else if (int0 == 10) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_124, 2, 2), 0, 0);
                } else if (int0 == 12) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_126, 2, 2), 0, 0);
                } else if (int0 == 13) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_119, 2, 2), 0, 0);
                }
                ccSetObject(invGetobj(94, int0), invGetNum(94, int0));
                ccSetOpBase(ocName(invGetobj(94, int0)));
                ccSetOp(1, "Remove" + "<col=ff9040>");
                ccSetOp(10, "Examine" + "<col=ff9040>");
                ccSetGraphicShadow(1118481);
                ccSetOutline(1);
            } else {
                ccSetSize(32, 32, 0, 0);
                if (int0 == 0) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_116, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_156));
                } else if (int0 == 1) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_117, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_157));
                } else if (int0 == 2) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_118, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_158));
                } else if (int0 == 3) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_120, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_159));
                } else if (int0 == 4) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_121, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_161));
                } else if (int0 == 5) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_122, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_162));
                } else if (int0 == 7) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_123, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_163));
                } else if (int0 == 9) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_125, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_164));
                } else if (int0 == 10) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_124, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_165));
                } else if (int0 == 12) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_126, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_160));
                } else if (int0 == 13) {
                    ccSetPosition(...cs2_788(Component.interface_549.component_549_119, 2, 2), 0, 0);
                    ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_166));
                }
            }
        }
        int0 = int0 + 1;
    }
}
