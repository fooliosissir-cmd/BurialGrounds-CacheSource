/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2296

function cs2_2296(intArg0: number): number {
    let int1: number = enumOp(type_int, type_struct, Enum.enum_2279, intArg0);

    if (varbit_prayer_mode == 1) {
        int1 = enumOp(type_int, type_struct, Enum.enum_863, intArg0);
        switch (int1) {
            case 888:
                return varbit_6820;
            case 889:
                return varbit_curse_sap_warrior;
            case 890:
                return varbit_curse_sap_ranger;
            case 891:
                return varbit_curse_sap_mage;
            case 892:
                return varbit_6824;
            case 893:
                return varbit_6825;
            case 894:
                return varbit_6826;
            case 895:
                return varbit_6827;
            case 896:
                return varbit_6828;
            case 897:
                return varbit_6829;
            case 898:
                return varbit_curse_leech_attack;
            case 899:
                return varbit_curse_leech_ranged;
            case 900:
                return varbit_curse_leech_magic;
            case 901:
                return varbit_curse_leech_defence;
            case 902:
                return varbit_curse_leech_strength;
            case 903:
                return varbit_6835;
            case 904:
                return varbit_6836;
            case 905:
                return varbit_6837;
            case 906:
                return varbit_6838;
            case 907:
                return varbit_6839;
            default:
                return 0;
        }
    }

    switch (int1) {
        case 660:
            return varbit_5942;
        case 661:
            return varbit_5943;
        case 662:
            return varbit_5944;
        case 663:
            return varbit_5945;
        case 664:
            return varbit_5946;
        case 665:
            return varbit_5947;
        case 666:
            return varbit_5948;
        case 667:
            return varbit_5949;
        case 668:
            return varbit_5950;
        case 669:
            return varbit_5951;
        case 670:
            return varbit_5952;
        case 671:
            return varbit_5953;
        case 672:
            return varbit_5954;
        case 673:
            return varbit_5955;
        case 674:
            return varbit_5956;
        case 675:
            return varbit_5957;
        case 676:
            return varbit_5958;
        case 677:
            return varbit_5959;
        case 678:
            return varbit_5960;
        case 679:
            return varbit_5961;
        case 680:
            return varbit_5962;
        case 681:
            return varbit_5963;
        case 682:
            return varbit_5964;
        case 683:
            return varbit_5965;
        case 684:
            return varbit_5966;
        case 685:
            return varbit_5967;
        case 1005:
            return varbit_7768;
        case 686:
            return varbit_5968;
        case 1006:
            return varbit_7769;
        case 1029:
            return varbit_7381;
        default:
            return 0;
    }
}
