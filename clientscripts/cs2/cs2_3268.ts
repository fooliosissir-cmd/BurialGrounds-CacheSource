/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3268

function cs2_3268(): void {
    let int0: number = 1;
    let int1: number = 18;
    let int2: number = 255;
    let int3: number = varc_rand_exists_1 + varc_rand_exists_2 + varc_rand_exists_3 + varc_rand_exists_4 + varc_rand_exists_5;
    let int4: number = int2 - int3 * int1;

    int4 = min(int4, 105);
    let int5: number = 4;
    let [int6, int7, int8, int9] = cs2_3269(varc_rand_player_tab, int5, int1, int4);

    switch (varc_rand_player_tab) {
        case 0:
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_265), int5), 0, 0, Component.interface_933.component_933_265);
            if (varc_rand_exists_1 == 1) {
                ifSetHide(false, Component.interface_933.component_933_265);
                ifSetOp(1, "Expand", Component.interface_933.component_933_265);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_317);
            } else {
                ifSetHide(true, Component.interface_933.component_933_265);
                ifSetOp(1, "", Component.interface_933.component_933_265);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_266), int6), 0, 0, Component.interface_933.component_933_266);
            if (varc_rand_exists_2 == 1) {
                ifSetHide(false, Component.interface_933.component_933_266);
                ifSetOp(1, "Expand", Component.interface_933.component_933_266);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_275);
            } else {
                ifSetHide(true, Component.interface_933.component_933_266);
                ifSetHide(true, Component.interface_933.component_933_316);
                ifSetOp(1, "", Component.interface_933.component_933_266);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_276), int7), 0, 0, Component.interface_933.component_933_276);
            if (varc_rand_exists_3 == 1) {
                ifSetHide(false, Component.interface_933.component_933_276);
                ifSetOp(1, "Expand", Component.interface_933.component_933_276);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_285);
            } else {
                ifSetHide(true, Component.interface_933.component_933_276);
                ifSetHide(true, Component.interface_933.component_933_274);
                ifSetOp(1, "", Component.interface_933.component_933_276);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_286), int8), 0, 0, Component.interface_933.component_933_286);
            if (varc_rand_exists_4 == 1) {
                ifSetHide(false, Component.interface_933.component_933_286);
                ifSetOp(1, "Expand", Component.interface_933.component_933_286);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_295);
            } else {
                ifSetHide(true, Component.interface_933.component_933_286);
                ifSetHide(true, Component.interface_933.component_933_284);
                ifSetOp(1, "", Component.interface_933.component_933_286);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_296), int9), 0, 0, Component.interface_933.component_933_296);
            if (varc_rand_exists_5 == 1) {
                ifSetHide(false, Component.interface_933.component_933_296);
                ifSetOp(1, "Expand", Component.interface_933.component_933_296);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_308);
            } else {
                ifSetHide(true, Component.interface_933.component_933_296);
                ifSetHide(true, Component.interface_933.component_933_294);
                ifSetOp(1, "", Component.interface_933.component_933_296);
            }
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_265), ifGetY(Component.interface_933.component_933_266) - ifGetY(Component.interface_933.component_933_265) - 5), 2, 0, Component.interface_933.component_933_265);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_266), ifGetY(Component.interface_933.component_933_276) - ifGetY(Component.interface_933.component_933_266) - 5), 2, 0, Component.interface_933.component_933_266);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_276), ifGetY(Component.interface_933.component_933_286) - ifGetY(Component.interface_933.component_933_276) - 5), 2, 0, Component.interface_933.component_933_276);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_286), ifGetY(Component.interface_933.component_933_296) - ifGetY(Component.interface_933.component_933_286) - 5), 2, 0, Component.interface_933.component_933_286);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_296), int2 - ifGetY(Component.interface_933.component_933_296) - 5), 2, 0, Component.interface_933.component_933_296);
            break;
        case 1:
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_265), int5), 0, 0, Component.interface_933.component_933_265);
            ifSetOp(1, "Shrink", Component.interface_933.component_933_265);
            ifSetGraphic(Graphic.rand_team_icon_1, Component.interface_933.component_933_317);
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_266), int6), 0, 0, Component.interface_933.component_933_266);
            if (varc_rand_exists_2 == 1) {
                ifSetHide(false, Component.interface_933.component_933_266);
                ifSetOp(1, "Expand", Component.interface_933.component_933_266);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_275);
            } else {
                ifSetHide(true, Component.interface_933.component_933_266);
                ifSetHide(true, Component.interface_933.component_933_316);
                ifSetOp(1, "", Component.interface_933.component_933_266);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_276), int7), 0, 0, Component.interface_933.component_933_276);
            if (varc_rand_exists_3 == 1) {
                ifSetHide(false, Component.interface_933.component_933_276);
                ifSetOp(1, "Expand", Component.interface_933.component_933_276);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_285);
            } else {
                ifSetHide(true, Component.interface_933.component_933_276);
                ifSetHide(true, Component.interface_933.component_933_274);
                ifSetOp(1, "", Component.interface_933.component_933_276);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_286), int8), 0, 0, Component.interface_933.component_933_286);
            if (varc_rand_exists_4 == 1) {
                ifSetHide(false, Component.interface_933.component_933_286);
                ifSetOp(1, "Expand", Component.interface_933.component_933_286);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_295);
            } else {
                ifSetHide(true, Component.interface_933.component_933_286);
                ifSetHide(true, Component.interface_933.component_933_284);
                ifSetOp(1, "", Component.interface_933.component_933_286);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_296), int9), 0, 0, Component.interface_933.component_933_296);
            if (varc_rand_exists_5 == 1) {
                ifSetHide(false, Component.interface_933.component_933_296);
                ifSetOp(1, "Expand", Component.interface_933.component_933_296);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_308);
            } else {
                ifSetHide(true, Component.interface_933.component_933_296);
                ifSetHide(true, Component.interface_933.component_933_294);
                ifSetOp(1, "", Component.interface_933.component_933_296);
            }
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_265), ifGetY(Component.interface_933.component_933_266) - ifGetY(Component.interface_933.component_933_265) - 2), 2, 0, Component.interface_933.component_933_265);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_266), ifGetY(Component.interface_933.component_933_276) - ifGetY(Component.interface_933.component_933_266) - 2), 2, 0, Component.interface_933.component_933_266);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_276), ifGetY(Component.interface_933.component_933_286) - ifGetY(Component.interface_933.component_933_276) - 2), 2, 0, Component.interface_933.component_933_276);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_286), ifGetY(Component.interface_933.component_933_296) - ifGetY(Component.interface_933.component_933_286) - 2), 2, 0, Component.interface_933.component_933_286);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_296), int2 - ifGetY(Component.interface_933.component_933_296) - 2), 2, 0, Component.interface_933.component_933_296);
            break;
        case 2:
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_265), int5), 0, 0, Component.interface_933.component_933_265);
            if (varc_rand_exists_1 == 1) {
                ifSetHide(false, Component.interface_933.component_933_265);
                ifSetOp(1, "Expand", Component.interface_933.component_933_265);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_317);
            } else {
                ifSetHide(true, Component.interface_933.component_933_265);
                ifSetOp(1, "", Component.interface_933.component_933_265);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_266), int6), 0, 0, Component.interface_933.component_933_266);
            ifSetOp(1, "Shrink", Component.interface_933.component_933_266);
            ifSetGraphic(Graphic.rand_team_icon_1, Component.interface_933.component_933_275);
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_276), int7), 0, 0, Component.interface_933.component_933_276);
            if (varc_rand_exists_3 == 1) {
                ifSetHide(false, Component.interface_933.component_933_276);
                ifSetOp(1, "Expand", Component.interface_933.component_933_276);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_285);
            } else {
                ifSetHide(true, Component.interface_933.component_933_276);
                ifSetHide(true, Component.interface_933.component_933_274);
                ifSetOp(1, "", Component.interface_933.component_933_276);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_286), int8), 0, 0, Component.interface_933.component_933_286);
            if (varc_rand_exists_4 == 1) {
                ifSetHide(false, Component.interface_933.component_933_286);
                ifSetOp(1, "Expand", Component.interface_933.component_933_286);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_295);
            } else {
                ifSetHide(true, Component.interface_933.component_933_286);
                ifSetHide(true, Component.interface_933.component_933_284);
                ifSetOp(1, "", Component.interface_933.component_933_286);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_296), int9), 0, 0, Component.interface_933.component_933_296);
            if (varc_rand_exists_5 == 1) {
                ifSetHide(false, Component.interface_933.component_933_296);
                ifSetOp(1, "Expand", Component.interface_933.component_933_296);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_308);
            } else {
                ifSetHide(true, Component.interface_933.component_933_296);
                ifSetHide(true, Component.interface_933.component_933_294);
                ifSetOp(1, "", Component.interface_933.component_933_296);
            }
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_265), ifGetY(Component.interface_933.component_933_266) - ifGetY(Component.interface_933.component_933_265) - 2), 2, 0, Component.interface_933.component_933_265);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_266), ifGetY(Component.interface_933.component_933_276) - ifGetY(Component.interface_933.component_933_266) - 2), 2, 0, Component.interface_933.component_933_266);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_276), ifGetY(Component.interface_933.component_933_286) - ifGetY(Component.interface_933.component_933_276) - 2), 2, 0, Component.interface_933.component_933_276);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_286), ifGetY(Component.interface_933.component_933_296) - ifGetY(Component.interface_933.component_933_286) - 2), 2, 0, Component.interface_933.component_933_286);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_296), int2 - ifGetY(Component.interface_933.component_933_296) - 2), 2, 0, Component.interface_933.component_933_296);
            break;
        case 3:
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_265), int5), 0, 0, Component.interface_933.component_933_265);
            if (varc_rand_exists_1 == 1) {
                ifSetHide(false, Component.interface_933.component_933_265);
                ifSetOp(1, "Expand", Component.interface_933.component_933_265);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_317);
            } else {
                ifSetHide(true, Component.interface_933.component_933_265);
                ifSetOp(1, "", Component.interface_933.component_933_265);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_266), int6), 0, 0, Component.interface_933.component_933_266);
            if (varc_rand_exists_2 == 1) {
                ifSetHide(false, Component.interface_933.component_933_266);
                ifSetOp(1, "Expand", Component.interface_933.component_933_266);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_275);
            } else {
                ifSetHide(true, Component.interface_933.component_933_266);
                ifSetHide(true, Component.interface_933.component_933_316);
                ifSetOp(1, "", Component.interface_933.component_933_266);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_276), int7), 0, 0, Component.interface_933.component_933_276);
            ifSetOp(1, "Shrink", Component.interface_933.component_933_276);
            ifSetGraphic(Graphic.rand_team_icon_1, Component.interface_933.component_933_285);
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_286), int8), 0, 0, Component.interface_933.component_933_286);
            if (varc_rand_exists_4 == 1) {
                ifSetHide(false, Component.interface_933.component_933_286);
                ifSetOp(1, "Expand", Component.interface_933.component_933_286);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_295);
            } else {
                ifSetHide(true, Component.interface_933.component_933_286);
                ifSetHide(true, Component.interface_933.component_933_284);
                ifSetOp(1, "", Component.interface_933.component_933_286);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_296), int9), 0, 0, Component.interface_933.component_933_296);
            if (varc_rand_exists_5 == 1) {
                ifSetHide(false, Component.interface_933.component_933_296);
                ifSetOp(1, "Expand", Component.interface_933.component_933_296);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_308);
            } else {
                ifSetHide(true, Component.interface_933.component_933_296);
                ifSetHide(true, Component.interface_933.component_933_294);
                ifSetOp(1, "", Component.interface_933.component_933_296);
            }
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_265), ifGetY(Component.interface_933.component_933_266) - ifGetY(Component.interface_933.component_933_265) - 2), 2, 0, Component.interface_933.component_933_265);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_266), ifGetY(Component.interface_933.component_933_276) - ifGetY(Component.interface_933.component_933_266) - 2), 2, 0, Component.interface_933.component_933_266);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_276), ifGetY(Component.interface_933.component_933_286) - ifGetY(Component.interface_933.component_933_276) - 2), 2, 0, Component.interface_933.component_933_276);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_286), ifGetY(Component.interface_933.component_933_296) - ifGetY(Component.interface_933.component_933_286) - 2), 2, 0, Component.interface_933.component_933_286);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_296), int2 - ifGetY(Component.interface_933.component_933_296) - 2), 2, 0, Component.interface_933.component_933_296);
            break;
        case 4:
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_265), int5), 0, 0, Component.interface_933.component_933_265);
            if (varc_rand_exists_1 == 1) {
                ifSetHide(false, Component.interface_933.component_933_265);
                ifSetOp(1, "Expand", Component.interface_933.component_933_265);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_317);
            } else {
                ifSetHide(true, Component.interface_933.component_933_265);
                ifSetOp(1, "", Component.interface_933.component_933_265);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_266), int6), 0, 0, Component.interface_933.component_933_266);
            if (varc_rand_exists_2 == 1) {
                ifSetHide(false, Component.interface_933.component_933_266);
                ifSetOp(1, "Expand", Component.interface_933.component_933_266);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_275);
            } else {
                ifSetHide(true, Component.interface_933.component_933_266);
                ifSetHide(true, Component.interface_933.component_933_316);
                ifSetOp(1, "", Component.interface_933.component_933_266);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_276), int7), 0, 0, Component.interface_933.component_933_276);
            if (varc_rand_exists_3 == 1) {
                ifSetHide(false, Component.interface_933.component_933_276);
                ifSetOp(1, "Expand", Component.interface_933.component_933_276);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_285);
            } else {
                ifSetHide(true, Component.interface_933.component_933_276);
                ifSetHide(true, Component.interface_933.component_933_274);
                ifSetOp(1, "", Component.interface_933.component_933_276);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_286), int8), 0, 0, Component.interface_933.component_933_286);
            ifSetOp(1, "Shrink", Component.interface_933.component_933_286);
            ifSetGraphic(Graphic.rand_team_icon_1, Component.interface_933.component_933_295);
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_296), int9), 0, 0, Component.interface_933.component_933_296);
            if (varc_rand_exists_5 == 1) {
                ifSetHide(false, Component.interface_933.component_933_296);
                ifSetOp(1, "Expand", Component.interface_933.component_933_296);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_308);
            } else {
                ifSetHide(true, Component.interface_933.component_933_296);
                ifSetHide(true, Component.interface_933.component_933_294);
                ifSetOp(1, "", Component.interface_933.component_933_296);
            }
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_265), ifGetY(Component.interface_933.component_933_266) - ifGetY(Component.interface_933.component_933_265) - 2), 2, 0, Component.interface_933.component_933_265);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_266), ifGetY(Component.interface_933.component_933_276) - ifGetY(Component.interface_933.component_933_266) - 2), 2, 0, Component.interface_933.component_933_266);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_276), ifGetY(Component.interface_933.component_933_286) - ifGetY(Component.interface_933.component_933_276) - 2), 2, 0, Component.interface_933.component_933_276);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_286), ifGetY(Component.interface_933.component_933_296) - ifGetY(Component.interface_933.component_933_286) - 2), 2, 0, Component.interface_933.component_933_286);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_296), int2 - ifGetY(Component.interface_933.component_933_296) - 2), 2, 0, Component.interface_933.component_933_296);
            break;
        case 5:
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_265), int5), 0, 0, Component.interface_933.component_933_265);
            if (varc_rand_exists_1 == 1) {
                ifSetHide(false, Component.interface_933.component_933_265);
                ifSetOp(1, "Expand", Component.interface_933.component_933_265);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_317);
            } else {
                ifSetHide(true, Component.interface_933.component_933_265);
                ifSetOp(1, "", Component.interface_933.component_933_265);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_266), int6), 0, 0, Component.interface_933.component_933_266);
            if (varc_rand_exists_2 == 1) {
                ifSetHide(false, Component.interface_933.component_933_266);
                ifSetOp(1, "Expand", Component.interface_933.component_933_266);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_275);
            } else {
                ifSetHide(true, Component.interface_933.component_933_266);
                ifSetHide(true, Component.interface_933.component_933_316);
                ifSetOp(1, "", Component.interface_933.component_933_266);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_276), int7), 0, 0, Component.interface_933.component_933_276);
            if (varc_rand_exists_3 == 1) {
                ifSetHide(false, Component.interface_933.component_933_276);
                ifSetOp(1, "Expand", Component.interface_933.component_933_276);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_285);
            } else {
                ifSetHide(true, Component.interface_933.component_933_276);
                ifSetHide(true, Component.interface_933.component_933_274);
                ifSetOp(1, "", Component.interface_933.component_933_276);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_286), int8), 0, 0, Component.interface_933.component_933_286);
            if (varc_rand_exists_4 == 1) {
                ifSetHide(false, Component.interface_933.component_933_286);
                ifSetOp(1, "Expand", Component.interface_933.component_933_286);
                ifSetGraphic(Graphic.rand_team_icon_0, Component.interface_933.component_933_295);
            } else {
                ifSetHide(true, Component.interface_933.component_933_286);
                ifSetHide(true, Component.interface_933.component_933_284);
                ifSetOp(1, "", Component.interface_933.component_933_286);
            }
            ifSetPosition(int0, cs2_3270(ifGetY(Component.interface_933.component_933_296), int9), 0, 0, Component.interface_933.component_933_296);
            ifSetOp(1, "Shrink", Component.interface_933.component_933_296);
            ifSetGraphic(Graphic.rand_team_icon_1, Component.interface_933.component_933_308);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_265), ifGetY(Component.interface_933.component_933_266) - ifGetY(Component.interface_933.component_933_265) - 2), 2, 0, Component.interface_933.component_933_265);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_266), ifGetY(Component.interface_933.component_933_276) - ifGetY(Component.interface_933.component_933_266) - 2), 2, 0, Component.interface_933.component_933_266);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_276), ifGetY(Component.interface_933.component_933_286) - ifGetY(Component.interface_933.component_933_276) - 2), 2, 0, Component.interface_933.component_933_276);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_286), ifGetY(Component.interface_933.component_933_296) - ifGetY(Component.interface_933.component_933_286) - 2), 2, 0, Component.interface_933.component_933_286);
            ifSetSize(16384, cs2_3270(ifGetHeight(Component.interface_933.component_933_296), int2 - ifGetY(Component.interface_933.component_933_296) - 2), 2, 0, Component.interface_933.component_933_296);
            break;
    }
    cs2_3271();
}
