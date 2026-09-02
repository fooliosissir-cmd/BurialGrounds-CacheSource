/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xmas10_snowball_mouse_leave]

function xmas10_snowball_mouse_leave(): void {
    if (ifFind(Component.xmas10_snowball.throw_end1) == 1 && ccGetGraphic() == 4032) {
        ccSetGraphic(Graphic.set_but_end_2_0);
    }

    if (ifFind(Component.xmas10_snowball.throw_end2) == 1 && ccGetGraphic() == 4035) {
        ccSetGraphic(Graphic.set_but_end_2_3);
    }

    if (ifFind(Component.xmas10_snowball.throw_mid) == 1 && ccGetGraphic() == 4038) {
        ccSetGraphic(Graphic.set_but_fill_2_0);
    }
}
