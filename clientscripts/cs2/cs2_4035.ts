/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4035

function cs2_4035(): number {
    let int0: number = 88;

    if (varbit_zemo_main == 250) {
        int0 = int0 + 5;
    }

    if (varbit_demonslayer_main >= 3) {
        int0 = int0 + 5;
    }

    if (varp_itexamlevel >= 9) {
        int0 = int0 + 5;
    }

    if (varbit_deserttreasure == 15) {
        int0 = int0 + 10;
    }

    if (varbit_glomem_quest >= 45) {
        int0 = int0 + 10;
    }

    if (varp_grandtree >= 160) {
        int0 = int0 + 5;
    }

    if (varp_hazeelcultquest >= 9) {
        int0 = int0 + 5;
    }

    if (varbit_myreque_2_quest >= 430) {
        int0 = int0 + 5;
    }

    if (varbit_makinghistory_prog >= 4) {
        int0 = int0 + 5;
    }

    if (varbit_hist_prog == 20) {
        int0 = int0 + 5;
    }

    if (varp_arthur >= 7) {
        int0 = int0 + 5;
    }

    if (varp_itgronigen >= 7) {
        int0 = int0 + 5;
    }

    if (varp_priestperil >= 61) {
        int0 = int0 + 5;
    }

    if (varp_runemysteries >= 6) {
        int0 = int0 + 5;
    }

    if (varp_phoenixgang >= 7 || varp_146 >= 4) {
        int0 = int0 + 5;
    }

    if (varbit_twocats_quest >= 70) {
        int0 = int0 + 5;
    }

    if (varp_ikov >= 80) {
        int0 = int0 + 5;
    }

    if (varbit_surok_quest >= 150) {
        int0 = int0 + 5;
    }
    return int0;
}
