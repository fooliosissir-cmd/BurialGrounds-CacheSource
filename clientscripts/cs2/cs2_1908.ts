/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1908

function cs2_1908(): void {
    let int0: number = 12;
    let str0: string = "";

    ifSetSize(16, varc_564 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_138);
    ifSetSize(16, varc_565 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_139);
    ifSetSize(16, varc_566 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_140);
    ifSetSize(16, varc_567 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_144);
    ifSetSize(16, varc_568 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_148);
    ifSetSize(16, varc_569 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_82);
    ifSetSize(16, varc_570 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_86);
    ifSetSize(16, varc_571 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_90);
    ifSetSize(16, varc_572 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_94);
    ifSetSize(16, varc_573 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_61);
    ifSetSize(16, varc_574 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_65);
    ifSetSize(16, varc_575 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_69);
    ifSetSize(16, varc_576 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_73);
    ifSetSize(16, varc_577 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_103);
    ifSetSize(16, varc_578 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_107);
    ifSetSize(16, varc_579 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_111);
    ifSetSize(16, varc_580 * 100 / int0 * 16384 / 100, 0, 2, Component.interface_806.component_806_115);

    if (varc_564 == 0) {
        str0 = "There are no class 1 clay locations in the area.";
    } else if (varc_564 == 1) {
        str0 = "There is 1 class 1 clay location in the area.";
    } else {
        str0 = "There are " + tostring(varc_564) + " class 1 clay locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_138);

    if (varc_565 == 0) {
        str0 = "There are no class 2 fishing locations in the area.";
    } else if (varc_565 == 1) {
        str0 = "There is 1 class 2 fishing location in the area.";
    } else {
        str0 = "There are " + tostring(varc_565) + " class 2 fishing locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_139);

    if (varc_566 == 0) {
        str0 = "There are no class 3 fishing locations in the area.";
    } else if (varc_566 == 1) {
        str0 = "There is 1 class 3 fishing location in the area.";
    } else {
        str0 = "There are " + tostring(varc_566) + " class 3 fishing locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_140);

    if (varc_567 == 0) {
        str0 = "There are no class 4 fishing locations in the area.";
    } else if (varc_567 == 1) {
        str0 = "There is 1 class 4 fishing location in the area.";
    } else {
        str0 = "There are " + tostring(varc_567) + " class 4 fishing locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_144);

    if (varc_568 == 0) {
        str0 = "There are no class 5 fishing locations in the area.";
    } else if (varc_568 == 1) {
        str0 = "There is 1 class 5 fishing location in the area.";
    } else {
        str0 = "There are " + tostring(varc_568) + " class 5 fishing locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_148);

    if (varc_569 == 0) {
        str0 = "There are no class 2 mining locations in the area.";
    } else if (varc_569 == 1) {
        str0 = "There is 1 class 2 mining location in the area.";
    } else {
        str0 = "There are " + tostring(varc_569) + " class 2 mining locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_82);

    if (varc_570 == 0) {
        str0 = "There are no class 3 mining locations in the area.";
    } else if (varc_570 == 1) {
        str0 = "There is 1 class 3 mining location in the area.";
    } else {
        str0 = "There are " + tostring(varc_570) + " class 3 mining locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_86);

    if (varc_571 == 0) {
        str0 = "There are no class 4 mining locations in the area.";
    } else if (varc_571 == 1) {
        str0 = "There is 1 class 4 mining location in the area.";
    } else {
        str0 = "There are " + tostring(varc_571) + " class 4 mining locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_90);

    if (varc_572 == 0) {
        str0 = "There are no class 5 mining locations in the area.";
    } else if (varc_572 == 1) {
        str0 = "There is 1 class 5 mining location in the area.";
    } else {
        str0 = "There are " + tostring(varc_572) + " class 5 mining locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_94);

    if (varc_573 == 0) {
        str0 = "There are no class 2 woodcutting locations in the area.";
    } else if (varc_573 == 1) {
        str0 = "There is 1 class 2 woodcutting location in the area.";
    } else {
        str0 = "There are " + tostring(varc_573) + " class 2 woodcutting locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_61);

    if (varc_574 == 0) {
        str0 = "There are no class 3 woodcutting locations in the area.";
    } else if (varc_574 == 1) {
        str0 = "There is 1 class 3 woodcutting location in the area.";
    } else {
        str0 = "There are " + tostring(varc_574) + " class 3 woodcutting locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_65);

    if (varc_575 == 0) {
        str0 = "There are no class 4 woodcutting locations in the area.";
    } else if (varc_575 == 1) {
        str0 = "There is 1 class 4 woodcutting location in the area.";
    } else {
        str0 = "There are " + tostring(varc_575) + " class 4 woodcutting locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_69);

    if (varc_576 == 0) {
        str0 = "There are no class 5 woodcutting locations in the area.";
    } else if (varc_576 == 1) {
        str0 = "There is 1 class 5 woodcutting location in the area.";
    } else {
        str0 = "There are " + tostring(varc_576) + " class 5 woodcutting locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_73);

    if (varc_577 == 0) {
        str0 = "There are no class 2 hunting locations in the area.";
    } else if (varc_577 == 1) {
        str0 = "There is 1 class 2 hunting location in the area.";
    } else {
        str0 = "There are " + tostring(varc_577) + " class 2 hunting locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_103);

    if (varc_578 == 0) {
        str0 = "There are no class 3 hunting locations in the area.";
    } else if (varc_578 == 1) {
        str0 = "There is 1 class 3 hunting location in the area.";
    } else {
        str0 = "There are " + tostring(varc_578) + " class 3 hunting locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_107);

    if (varc_579 == 0) {
        str0 = "There are no class 4 hunting locations in the area.";
    } else if (varc_579 == 1) {
        str0 = "There is 1 class 4 hunting location in the area.";
    } else {
        str0 = "There are " + tostring(varc_579) + " class 4 hunting locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_111);

    if (varc_580 == 0) {
        str0 = "There are no class 5 hunting locations in the area.";
    } else if (varc_580 == 1) {
        str0 = "There is 1 class 5 hunting location in the area.";
    } else {
        str0 = "There are " + tostring(varc_580) + " class 5 hunting locations in the area.";
    }
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_806.component_806_49, str0, 25, 100]), Component.interface_806.component_806_115);
}
