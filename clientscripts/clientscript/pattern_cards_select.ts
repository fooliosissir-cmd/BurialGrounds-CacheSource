/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,pattern_cards_select]

function pattern_cards_select(): void {
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_0);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_1);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_2);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_3);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_4);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_5);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_6);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_7);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_8);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_9);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_10);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_11);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_12);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_13);
    ifSetGraphic(-1, Component.pattern_cards.pattern_pick_card_14);

    if (varbit_pattern_card0 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_0);
    }

    if (varbit_pattern_card1 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_1);
    }

    if (varbit_pattern_card2 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_2);
    }

    if (varbit_pattern_card3 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_3);
    }

    if (varbit_pattern_card4 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_4);
    }

    if (varbit_pattern_card5 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_5);
    }

    if (varbit_pattern_card6 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_6);
    }

    if (varbit_pattern_card7 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_7);
    }

    if (varbit_pattern_card8 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_8);
    }

    if (varbit_pattern_card9 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_9);
    }

    if (varbit_pattern_card10 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_10);
    }

    if (varbit_pattern_card11 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_11);
    }

    if (varbit_pattern_card12 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_12);
    }

    if (varbit_pattern_card13 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_13);
    }

    if (varbit_pattern_card14 == 1) {
        ifSetGraphic(Graphic.overlay_multiway, Component.pattern_cards.pattern_pick_card_14);
    }
}
