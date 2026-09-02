/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4085

function cs2_4085(): void {
    if (ifFind(Component.xmas10_snowball.throw_end1) == 1) {
        ccSetGraphic(Graphic.set_but_end_2_0);
    }

    if (ifFind(Component.xmas10_snowball.throw_end2) == 1) {
        ccSetGraphic(Graphic.set_but_end_2_3);
    }

    if (ifFind(Component.xmas10_snowball.throw_mid) == 1) {
        ccSetGraphic(Graphic.set_but_fill_2_0);
    }
}
