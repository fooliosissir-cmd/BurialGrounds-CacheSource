/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6270

function cs2_6270(): graphic {
    switch (mapLang()) {
        case 0:
            return Graphic.graphic_11181;
        case 1:
            return Graphic.graphic_11183;
        case 2:
            return Graphic.graphic_11184;
        case 3:
            return Graphic.graphic_11182;
    }
    return -1;
}
