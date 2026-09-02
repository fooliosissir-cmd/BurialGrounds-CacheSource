/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4084

function cs2_4084(): void {
    if (ifFind(Component.xmas10_snowball.throw_end1) == 1 && ccGetGraphic() != 4033) {
        ccSetGraphic(Graphic.set_but_end_2_1);
    }

    if (ifFind(Component.xmas10_snowball.throw_end2) == 1 && ccGetGraphic() != 4036) {
        ccSetGraphic(Graphic.set_but_end_2_4);
    }

    if (ifFind(Component.xmas10_snowball.throw_mid) == 1 && ccGetGraphic() != 4039) {
        ccSetGraphic(Graphic.set_but_fill_2_1);
    }
}
