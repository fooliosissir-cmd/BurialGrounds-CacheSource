/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6508

function cs2_6508(intArg0: component, intArg1: number): void {
    let int2: graphic = ifGetGraphic(intArg0);
    let int3: graphic = -1;

    switch (int2) {
        case -1:
            int3 = Graphic.graphic_11656;
            break;
        case Graphic.graphic_11655:
            int3 = Graphic.graphic_11656;
            break;
        case Graphic.graphic_11685:
            int3 = Graphic.graphic_11686;
            break;
        case Graphic.graphic_11667:
            int3 = Graphic.graphic_11668;
            break;
        case Graphic.graphic_11658:
            int3 = Graphic.graphic_11659;
            break;
        case Graphic.graphic_11688:
            int3 = Graphic.graphic_11689;
            break;
        case Graphic.graphic_11703:
            int3 = Graphic.graphic_11704;
            break;
        case Graphic.graphic_11676:
            int3 = Graphic.graphic_11677;
            break;
        case Graphic.graphic_11673:
            int3 = Graphic.graphic_11674;
            break;
        case Graphic.graphic_11709:
            int3 = Graphic.graphic_11710;
            break;
        case Graphic.graphic_11697:
            int3 = Graphic.graphic_11698;
            break;
        case Graphic.graphic_11670:
            int3 = Graphic.graphic_11671;
            break;
        case Graphic.graphic_11661:
            int3 = Graphic.graphic_11662;
            break;
        case Graphic.graphic_11682:
            int3 = Graphic.graphic_11683;
            break;
        case Graphic.graphic_11694:
            int3 = Graphic.graphic_11695;
            break;
        case Graphic.graphic_11679:
            int3 = Graphic.graphic_11680;
            break;
        case Graphic.graphic_11664:
            int3 = Graphic.graphic_11665;
            break;
        case Graphic.graphic_11691:
            int3 = Graphic.graphic_11692;
            break;
        case Graphic.graphic_11700:
            int3 = Graphic.graphic_11701;
            break;
        case Graphic.graphic_11706:
            int3 = Graphic.graphic_11707;
            break;
        case Graphic.graphic_11654:
            int3 = Graphic.graphic_11656;
            break;
        case Graphic.graphic_11684:
            int3 = Graphic.graphic_11686;
            break;
        case Graphic.graphic_11666:
            int3 = Graphic.graphic_11668;
            break;
        case Graphic.graphic_11657:
            int3 = Graphic.graphic_11659;
            break;
        case Graphic.graphic_11687:
            int3 = Graphic.graphic_11689;
            break;
        case Graphic.graphic_11702:
            int3 = Graphic.graphic_11704;
            break;
        case Graphic.graphic_11675:
            int3 = Graphic.graphic_11677;
            break;
        case Graphic.graphic_11672:
            int3 = Graphic.graphic_11674;
            break;
        case Graphic.graphic_11708:
            int3 = Graphic.graphic_11710;
            break;
        case Graphic.graphic_11696:
            int3 = Graphic.graphic_11698;
            break;
        case Graphic.graphic_11669:
            int3 = Graphic.graphic_11671;
            break;
        case Graphic.graphic_11660:
            int3 = Graphic.graphic_11662;
            break;
        case Graphic.graphic_11681:
            int3 = Graphic.graphic_11683;
            break;
        case Graphic.graphic_11693:
            int3 = Graphic.graphic_11695;
            break;
        case Graphic.graphic_11678:
            int3 = Graphic.graphic_11680;
            break;
        case Graphic.graphic_11663:
            int3 = Graphic.graphic_11665;
            break;
        case Graphic.graphic_11690:
            int3 = Graphic.graphic_11692;
            break;
        case Graphic.graphic_11699:
            int3 = Graphic.graphic_11701;
            break;
        case Graphic.graphic_11705:
            int3 = Graphic.graphic_11707;
            break;
        case Graphic.graphic_11656:
            int3 = Graphic.graphic_11656;
            break;
        case Graphic.graphic_11686:
            int3 = Graphic.graphic_11686;
            break;
        case Graphic.graphic_11668:
            int3 = Graphic.graphic_11668;
            break;
        case Graphic.graphic_11659:
            int3 = Graphic.graphic_11659;
            break;
        case Graphic.graphic_11689:
            int3 = Graphic.graphic_11689;
            break;
        case Graphic.graphic_11704:
            int3 = Graphic.graphic_11704;
            break;
        case Graphic.graphic_11677:
            int3 = Graphic.graphic_11677;
            break;
        case Graphic.graphic_11674:
            int3 = Graphic.graphic_11674;
            break;
        case Graphic.graphic_11710:
            int3 = Graphic.graphic_11710;
            break;
        case Graphic.graphic_11698:
            int3 = Graphic.graphic_11698;
            break;
        case Graphic.graphic_11671:
            int3 = Graphic.graphic_11671;
            break;
        case Graphic.graphic_11662:
            int3 = Graphic.graphic_11662;
            break;
        case Graphic.graphic_11683:
            int3 = Graphic.graphic_11683;
            break;
        case Graphic.graphic_11695:
            int3 = Graphic.graphic_11695;
            break;
        case Graphic.graphic_11680:
            int3 = Graphic.graphic_11680;
            break;
        case Graphic.graphic_11665:
            int3 = Graphic.graphic_11665;
            break;
        case Graphic.graphic_11692:
            int3 = Graphic.graphic_11692;
            break;
        case Graphic.graphic_11701:
            int3 = Graphic.graphic_11701;
            break;
        case Graphic.graphic_11707:
            int3 = Graphic.graphic_11707;
            break;
    }
    ifSetGraphic(int3, intArg0);

    switch (random(6)) {
        case 0:
            soundVorbisVolume(16777, 1, 0, 255);
            break;
        case 1:
            soundVorbisVolume(16774, 1, 0, 255);
            break;
        case 2:
            soundVorbisVolume(16781, 1, 0, 255);
            break;
        case 3:
            soundVorbisVolume(16773, 1, 0, 255);
            break;
        case 4:
            soundVorbisVolume(16775, 1, 0, 255);
            break;
        case 5:
            soundVorbisVolume(16779, 1, 0, 255);
            break;
    }
    cs2_6511(intArg1);
    cs2_6514(intArg1);
}
