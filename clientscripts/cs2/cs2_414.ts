/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_414

function cs2_414(intArg0: number): void {
    ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_top);
    ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_bottom);
    ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_left);
    ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_right);
    ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_top_right);
    ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_bottom_right);
    ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_top_left);
    ifSetColour(colour(0x000000), Component.conq_scroll_overlay.arrow_bottom_left);

    switch (intArg0) {
        case 66387971:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_top);
            break;
        case 66387973:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_bottom);
            break;
        case 66387970:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_left);
            break;
        case 66387972:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_right);
            break;
        case 66387978:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_top_right);
            break;
        case 66387979:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_top_right);
            break;
        case 66387980:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_bottom_right);
            break;
        case 66387981:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_bottom_right);
            break;
        case 66387974:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_top_left);
            break;
        case 66387975:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_top_left);
            break;
        case 66387976:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_bottom_left);
            break;
        case 66387977:
            ifSetHide(false, Component.conq_scroll_overlay.arrow_bottom_left);
            break;
    }
}
