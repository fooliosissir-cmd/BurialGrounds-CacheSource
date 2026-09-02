/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4074

function cs2_4074(): graphic {
    switch (mapLang()) {
        case 0:
            return Graphic.graphic_9911;
        case 1:
            return Graphic.graphic_9908;
        case 2:
            return Graphic.graphic_9910;
        case 3:
            return Graphic.graphic_9909;
    }
    return -1;
}
