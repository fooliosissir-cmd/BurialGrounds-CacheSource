/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_285

function cs2_285(intArg0: component, intArg1: number): number {
    deltooltip_action(Component.interface_755.component_755_57);
    let int2: boolean = true;
    let int3: number = -1;
    let str0: string = "Hide";
    let str1: string = "Show";
    let str2: string = "`You are here'";

    if (varbit_worldmap_yah_hidden == 1) {
        str0 = "Show";
        str1 = "Hide";
        int2 = false;
    }
    ccCreate(intArg0, 5, 0);
    ccCreate<1>(intArg0, 4, 1);
    ccSetPosition(-1, intArg1, 0, 0);
    ccSetSize(26, 26, 0, 0);
    ccSetPosition<1>(ccGetX() + ccGetWidth() - 1, intArg1, 0, 0);
    ccSetSize<1>(ccGetX<1>(), ccGetHeight(), 1, 0);
    let int4: number = ccGetWidth<1>();
    ccSetGraphic(structParam(Struct.worldmap_overlay_style_default, Param.param_130));
    ccSetColour<1>(colour(0xAFAFAF));
    ccSetTextFont<1>(Graphic.p12_full);
    ccSetTextShadow<1>(true);
    ccSetTextAlign<1>(0, 1, 0);
    ccSetText<1>(str2);
    ccSetOpBase("<col=ff9040>" + str2 + "</col>");
    ccSetOpBase<1>("<col=ff9040>" + str2 + "</col>");
    ccSetOp(1, str0);
    ccSetOp<1>(1, str0);
    str2 = "Toggles the " + "<col=7f0000>" + "You are here" + "</col>" + " marker.";
    ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xFFFFFF)]));
    ccHookMouseEnter<1>(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xFFFFFF)]));
    ccSetOnMouseOver(hook(cs2_310, "sIi", [str2, intArg0, ccGetId<1>()]));
    ccSetOnMouseOver<1>(hook(cs2_310, "sIi", [str2, intArg0, ccGetId<1>()]));
    ccHookMouseExit(hook(cs2_289, "Iii", [intArg0, ccGetId<1>(), colour(0xAFAFAF)]));
    ccHookMouseExit<1>(hook(cs2_289, "Iii", [intArg0, ccGetId<1>(), colour(0xAFAFAF)]));
    ccSetOnOpt(hook(worldmap_key_toggle, "iIiiis1", [event_opindex, intArg0, ccGetId(), ccGetId<1>(), 2, str1, int2]));
    ccSetOnOpt<1>(hook(worldmap_key_toggle, "iIiiis1", [event_opindex, intArg0, ccGetId(), ccGetId<1>(), 2, str1, int2]));
    cs2_287(2, int2, intArg0, intArg1);
    intArg1 = intArg1 + ccGetHeight();
    str2 = "Intra-map links";

    if (varbit_worldmap_samemaplinks_hidden == 1) {
        str0 = "Show";
        str1 = "Hide";
        int2 = false;
    } else {
        str0 = "Hide";
        str1 = "Show";
        int2 = true;
    }
    ccCreate(intArg0, 5, 3);
    ccCreate<1>(intArg0, 4, 4);
    ccSetPosition(3, intArg1, 0, 0);
    ccSetSize(22, 26, 0, 0);
    ccSetPosition<1>(ccGetX() + ccGetWidth(), intArg1, 0, 0);
    ccSetSize<1>(ccGetX<1>() + ccGetX(), ccGetHeight(), 1, 0);
    ccSetColour<1>(colour(0xAFAFAF));
    ccSetTextFont<1>(Graphic.p12_full);
    ccSetTextShadow<1>(true);
    ccSetTextAlign<1>(0, 1, 0);
    ccSetText<1>(str2);
    ccSetOpBase("<col=ff9040>" + str2 + "</col>");
    ccSetOpBase<1>("<col=ff9040>" + str2 + "</col>");
    ccSetOp(1, str0);
    ccSetOp<1>(1, str0);
    str2 = "Toggles the features that show links within a map.";
    ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xFFFFFF)]));
    ccHookMouseEnter<1>(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xFFFFFF)]));
    ccSetOnMouseOver(hook(cs2_310, "sIi", [str2, intArg0, ccGetId<1>()]));
    ccSetOnMouseOver<1>(hook(cs2_310, "sIi", [str2, intArg0, ccGetId<1>()]));
    ccHookMouseExit(hook(cs2_289, "Iii", [intArg0, ccGetId<1>(), colour(0xAFAFAF)]));
    ccHookMouseExit<1>(hook(cs2_289, "Iii", [intArg0, ccGetId<1>(), colour(0xAFAFAF)]));
    ccSetOnOpt(hook(worldmap_key_toggle, "iIiiis1", [event_opindex, intArg0, ccGetId(), ccGetId<1>(), 10, str1, int2]));
    ccSetOnOpt<1>(hook(worldmap_key_toggle, "iIiiis1", [event_opindex, intArg0, ccGetId(), ccGetId<1>(), 10, str1, int2]));
    ccCreate<1>(intArg0, 3, 5);
    ccSetPosition<1>(4, intArg1 + 12, 0, 0);
    ccSetSize<1>(5, 5, 0, 0);
    ccSetColour<1>(colour(0x000000));
    ccSetfill<1>(true);
    ccCreate<1>(intArg0, 3, 6);
    ccSetPosition<1>(17, intArg1 + 12, 0, 0);
    ccSetSize<1>(5, 5, 0, 0);
    ccSetColour<1>(colour(0x000000));
    ccSetfill<1>(true);
    ccCreate<1>(intArg0, 3, 7);
    ccSetPosition<1>(3, intArg1 + 11, 0, 0);
    ccSetSize<1>(5, 5, 0, 0);
    ccSetColour<1>(colour(0xFFFF00));
    ccSetfill<1>(true);
    ccCreate<1>(intArg0, 3, 8);
    ccSetPosition<1>(16, intArg1 + 11, 0, 0);
    ccSetSize<1>(5, 5, 0, 0);
    ccSetColour<1>(colour(0xFFFF00));
    ccSetfill<1>(true);
    ccCreate<1>(intArg0, 9, 9);
    ccSetPosition<1>(5, intArg1 + 13, 0, 0);
    ccSetSize<1>(15, 0, 0, 0);
    ccSetlinewid<1>(2);
    ccSetColour<1>(colour(0xFFFF00));
    cs2_287(10, int2, intArg0, intArg1);
    intArg1 = intArg1 + ccGetHeight();
    str2 = "Map labels";

    if (varbit_worldmap_textlabels_hidden == 1) {
        str0 = "Show";
        str1 = "Hide";
        int2 = false;
    } else {
        str0 = "Hide";
        str1 = "Show";
        int2 = true;
    }
    ccCreate(intArg0, 4, 11);
    ccSetPosition(1, intArg1, 0, 0);
    ccSetSize(23, 26, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(1, 1, 0);
    ccSetTextShadow(true);
    ccSetColour(colour(0xFFFFFF));
    ccSetText("ABC" + "<br>" + "XYZ");
    ccCreate<1>(intArg0, 4, 12);
    ccSetPosition<1>(ccGetX() + ccGetWidth(), intArg1, 0, 0);
    ccSetSize<1>(ccGetX<1>() + ccGetX(), ccGetHeight(), 1, 0);
    ccSetColour<1>(colour(0xAFAFAF));
    ccSetTextFont<1>(Graphic.p12_full);
    ccSetTextShadow<1>(true);
    ccSetTextAlign<1>(0, 1, 0);
    ccSetText<1>(str2);
    ccSetOpBase("<col=ff9040>" + str2 + "</col>");
    ccSetOpBase<1>("<col=ff9040>" + str2 + "</col>");
    ccSetOp(1, str0);
    ccSetOp<1>(1, str0);
    str2 = "Toggles most text labels." + "<br>" + "Some are always shown.";
    ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xFFFFFF)]));
    ccHookMouseEnter<1>(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xFFFFFF)]));
    ccSetOnMouseOver(hook(cs2_310, "sIi", [str2, intArg0, ccGetId<1>()]));
    ccSetOnMouseOver<1>(hook(cs2_310, "sIi", [str2, intArg0, ccGetId<1>()]));
    ccHookMouseExit(hook(cs2_289, "Iii", [intArg0, ccGetId<1>(), colour(0xAFAFAF)]));
    ccHookMouseExit<1>(hook(cs2_289, "Iii", [intArg0, ccGetId<1>(), colour(0xAFAFAF)]));
    ccSetOnOpt(hook(worldmap_key_toggle, "iIiiis1", [event_opindex, intArg0, ccGetId(), ccGetId<1>(), 13, str1, int2]));
    ccSetOnOpt<1>(hook(worldmap_key_toggle, "iIiiis1", [event_opindex, intArg0, ccGetId(), ccGetId<1>(), 13, str1, int2]));
    cs2_287(13, int2, intArg0, intArg1);
    intArg1 = intArg1 + ccGetHeight();
    str2 = "Icon tooltips";

    if (varbit_worldmap_tooltips_hidden == 1) {
        str0 = "Show";
        str1 = "Hide";
        int2 = false;
    } else {
        str0 = "Hide";
        str1 = "Show";
        int2 = true;
    }
    ccCreate<1>(intArg0, 3, 14);
    ccSetPosition<1>(3, intArg1 + 6, 0, 0);
    ccSetSize<1>(20, 14, 0, 0);
    ccSetfill<1>(true);
    ccSetColour<1>(colour(0x0E0E0E));
    ccCreate(intArg0, 3, 15);
    ccSetPosition(3, intArg1 + 6, 0, 0);
    ccSetSize(ccGetWidth<1>(), ccGetHeight<1>(), 0, 0);
    ccSetfill(false);
    ccSetColour(colour(0xEBECE6));
    ccCreate(intArg0, 4, 16);
    ccSetPosition(ccGetX<1>() + ccGetWidth<1>() + 2, intArg1, 0, 0);
    ccSetSize(ccGetX() + ccGetX<1>(), 26, 1, 0);
    ccSetColour(colour(0xF5B241));
    ccSetTextFont(Graphic.p12_full);
    ccSetTextShadow(true);
    ccSetTextAlign(0, 1, 0);
    ccSetText(str2);
    ccSetOpBase<1>("<col=ff9040>" + str2 + "</col>");
    ccSetOpBase("<col=ff9040>" + str2 + "</col>");
    ccSetOp<1>(1, str0);
    ccSetOp(1, str0);
    str2 = "Toggles icon tooltips.";
    ccHookMouseEnter<1>(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId(), colour(0xFFFFFF)]));
    ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId(), colour(0xFFFFFF)]));
    ccSetOnMouseOver<1>(hook(cs2_310, "sIi", [str2, intArg0, ccGetId()]));
    ccSetOnMouseOver(hook(cs2_310, "sIi", [str2, intArg0, ccGetId()]));
    ccHookMouseExit<1>(hook(cs2_289, "Iii", [intArg0, ccGetId(), colour(0xAFAFAF)]));
    ccHookMouseExit(hook(cs2_289, "Iii", [intArg0, ccGetId(), colour(0xAFAFAF)]));
    ccSetOnOpt<1>(hook(worldmap_key_toggle, "iIiiis1", [event_opindex, intArg0, ccGetId<1>(), ccGetId(), 17, str1, int2]));
    ccSetOnOpt(hook(worldmap_key_toggle, "iIiiis1", [event_opindex, intArg0, ccGetId<1>(), ccGetId(), 17, str1, int2]));
    cs2_287(17, int2, intArg0, intArg1);
    intArg1 = intArg1 + ccGetHeight();
    ccCreate(intArg0, 5, 18);
    ccSetSize(26, 26, 0, 0);
    str2 = "Double-click the map to set a marker";
    let int5: number = max(paraheight(str2, int4, Graphic.p11_full) * 10 + 3, ccGetHeight());
    ccSetPosition(-1, intArg1 + (int5 - ccGetHeight()) / 2, 0, 0);
    ccSetGraphic(structParam(Struct.struct_972, Param.param_130));
    ccCreate<1>(intArg0, 4, 19);
    ccSetPosition<1>(0, intArg1, 2, 0);
    ccSetSize<1>(int4, int5, 0, 0);
    ccSetColour<1>(colour(0xAFAFAF));
    ccSetTextShadow<1>(true);

    if (varp_1159 == -1 || varp_1159 == 0) {
        ccSetTextAlign<1>(1, 1, 0);
        ccSetTextFont<1>(Graphic.p11_full);
        ccSetText<1>(str2);
    } else {
        str2 = "Clear your marker";
        ccSetTextAlign<1>(0, 1, 0);
        ccSetTextFont<1>(Graphic.p12_full);
        ccSetText<1>(str2);
        ccSetOp(1, str2);
        ccSetOp<1>(1, str2);
        str2 = "Removes the marker.";
        ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xFFFFFF)]));
        ccHookMouseEnter<1>(hook(cc_text_colour_swapper, "Iii", [intArg0, ccGetId<1>(), colour(0xFFFFFF)]));
        ccSetOnMouseOver(hook(cs2_310, "sIi", [str2, intArg0, ccGetId<1>()]));
        ccSetOnMouseOver<1>(hook(cs2_310, "sIi", [str2, intArg0, ccGetId<1>()]));
        ccHookMouseExit(hook(cs2_289, "Iii", [intArg0, ccGetId<1>(), colour(0xAFAFAF)]));
        ccHookMouseExit<1>(hook(cs2_289, "Iii", [intArg0, ccGetId<1>(), colour(0xAFAFAF)]));
        ccSetOnOpt(hook(worldmap_key_toggle, "iIiiis1", [event_opindex, intArg0, -1, -1, -1, "", false]));
        ccSetOnOpt<1>(hook(worldmap_key_toggle, "iIiiis1", [event_opindex, intArg0, -1, -1, -1, "", false]));
    }
    return intArg1 + ccGetHeight<1>();
}
