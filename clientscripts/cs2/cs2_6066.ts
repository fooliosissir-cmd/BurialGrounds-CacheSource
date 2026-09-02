/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6066

function cs2_6066(): graphic {
    switch (mapLang()) {
        case 0:
            return Graphic.graphic_10236;
        case 1:
            return Graphic.graphic_10238;
        case 2:
            return Graphic.graphic_10239;
        case 3:
            return Graphic.graphic_10237;
    }
    return -1;
}
