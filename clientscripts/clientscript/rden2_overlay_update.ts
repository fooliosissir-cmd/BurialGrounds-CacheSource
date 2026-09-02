/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rden2_overlay_update]

function rden2_overlay_update(): void {
    ifSetText(tostring(varbit_rden2_score), Component.rden2_overlay.score_text);
    ifSetText(tostring(varc_1732), Component.rden2_overlay.catalyst_text);
    ifSetText(tostring(varbit_rden2_bonus_value) + "%", Component.rden2_overlay.charge_text);

    if (varc_1731 != 1) {
        ifSetText(tostring(varc_1731) + " sets", Component.rden2_overlay.apparatus_text);
    } else {
        ifSetText("1 set", Component.rden2_overlay.apparatus_text);
    }

    switch (varc_1731) {
        case 0:
            ifSetColour(colour(0xC4312D), Component.rden2_overlay.apparatus_text);
            break;
        case 1:
            ifSetColour(colour(0xC4312D), Component.rden2_overlay.apparatus_text);
            break;
        case 2:
            ifSetColour(colour(0xD0C420), Component.rden2_overlay.apparatus_text);
            break;
        case 3:
            ifSetColour(colour(0xD0C420), Component.rden2_overlay.apparatus_text);
            break;
        case 4:
            ifSetColour(colour(0xD0C420), Component.rden2_overlay.apparatus_text);
            break;
        case 5:
            ifSetColour(colour(0x28C851), Component.rden2_overlay.apparatus_text);
            break;
        case 6:
            ifSetColour(colour(0x28C851), Component.rden2_overlay.apparatus_text);
            break;
    }

    if (varc_1732 < 3) {
        ifSetColour(colour(0xC4312D), Component.rden2_overlay.catalyst_text);
    } else {
        ifSetColour(colour(0x28C851), Component.rden2_overlay.catalyst_text);
    }

    switch (varc_1730) {
        case 0:
            ifSetText("None", Component.rden2_overlay.reagents_text);
            ifSetColour(colour(0xC4312D), Component.rden2_overlay.reagents_text);
            break;
        case 1:
            ifSetText("A", Component.rden2_overlay.reagents_text);
            ifSetColour(colour(0xD0C420), Component.rden2_overlay.reagents_text);
            break;
        case 2:
            ifSetText("B", Component.rden2_overlay.reagents_text);
            ifSetColour(colour(0xD0C420), Component.rden2_overlay.reagents_text);
            break;
        case 3:
            ifSetText("A & B", Component.rden2_overlay.reagents_text);
            ifSetColour(colour(0x28C851), Component.rden2_overlay.reagents_text);
            break;
    }
    ifSetText(tostring(varbit_rden2_minutes_left) + " mins", Component.rden2_overlay.timer_text);

    if (varbit_rden2_minutes_left < 4) {
        ifSetColour(colour(0xC4312D), Component.rden2_overlay.timer_text);
    } else {
        ifSetColour(colour(0x28C851), Component.rden2_overlay.timer_text);
    }

    if (varc_rden2_events_hidden == 0) {
        ifSetGraphic(Graphic.conq_tick_box_0, Component.rden2_overlay.showevents_button);
        ifSetHide(false, Component.rden2_overlay.events_layer);
    } else {
        ifSetGraphic(Graphic.conq_tick_box_1, Component.rden2_overlay.showevents_button);
        ifSetHide(true, Component.rden2_overlay.events_layer);
    }
}
