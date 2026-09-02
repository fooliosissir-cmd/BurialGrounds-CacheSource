/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6305

function cs2_6305(intArg0: component, intArg1: number): void {
    let int2: graphic = ifGetGraphic(intArg0);
    let int3: graphic = -1;

    switch (int2) {
        case Graphic.graphic_11654:
            int3 = Graphic.graphic_11655;
            break;
        case Graphic.graphic_11684:
            int3 = Graphic.graphic_11685;
            break;
        case Graphic.graphic_11666:
            int3 = Graphic.graphic_11667;
            break;
        case Graphic.graphic_11657:
            int3 = Graphic.graphic_11658;
            break;
        case Graphic.graphic_11687:
            int3 = Graphic.graphic_11688;
            break;
        case Graphic.graphic_11702:
            int3 = Graphic.graphic_11703;
            break;
        case Graphic.graphic_11675:
            int3 = Graphic.graphic_11676;
            break;
        case Graphic.graphic_11672:
            int3 = Graphic.graphic_11673;
            break;
        case Graphic.graphic_11708:
            int3 = Graphic.graphic_11709;
            break;
        case Graphic.graphic_11696:
            int3 = Graphic.graphic_11697;
            break;
        case Graphic.graphic_11669:
            int3 = Graphic.graphic_11670;
            break;
        case Graphic.graphic_11660:
            int3 = Graphic.graphic_11661;
            break;
        case Graphic.graphic_11681:
            int3 = Graphic.graphic_11682;
            break;
        case Graphic.graphic_11693:
            int3 = Graphic.graphic_11694;
            break;
        case Graphic.graphic_11678:
            int3 = Graphic.graphic_11679;
            break;
        case Graphic.graphic_11663:
            int3 = Graphic.graphic_11664;
            break;
        case Graphic.graphic_11690:
            int3 = Graphic.graphic_11691;
            break;
        case Graphic.graphic_11699:
            int3 = Graphic.graphic_11700;
            break;
        case Graphic.graphic_11705:
            int3 = Graphic.graphic_11706;
            break;
    }
    ifSetGraphic(int3, intArg0);
    soundVorbisVolume(16778, 1, 0, 50);
    cs2_6509(intArg1);
    cs2_6512(intArg1);
}
