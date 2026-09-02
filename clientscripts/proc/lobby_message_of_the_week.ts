/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobby_message_of_the_week]

function lobby_message_of_the_week(): void {
    let str0: string = "news";
    let str1: string = "mad-may-and-wild-weekends";
    let int0: number = random(100);

    ifSetHide(true, Component.interface_908.component_908_15);
    ifSetHide(false, Component.interface_908.component_908_30);

    switch (mapLang()) {
        case 0:
            if (int0 < 50) {
                ifSetGraphic(Graphic.graphic_11955, Component.interface_908.component_908_31);
            } else {
                ifSetGraphic(Graphic.graphic_11910, Component.interface_908.component_908_31);
            }
            break;
        case 1:
            ifSetGraphic(Graphic.graphic_11957, Component.interface_908.component_908_31);
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_11956, Component.interface_908.component_908_31);
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_11958, Component.interface_908.component_908_31);
            break;
    }
    ifSetGraphic(-1, Component.interface_908.component_908_35);
    ifSetText("", Component.interface_908.component_908_33);
    ifSetSize(345, 35, 0, 0, Component.interface_908.component_908_33);
    ifSetPosition(231, 5, 0, 0, Component.interface_908.component_908_33);
    ifSetColour(colour(0x0E1903), Component.interface_908.component_908_33);
    ifSetTextFont(Graphic.welcome_font_large, Component.interface_908.component_908_33);
    ifSetTextAlign(1, 2, 0, Component.interface_908.component_908_33);
    ifSetText("", Component.interface_908.component_908_32);
    ifSetPosition(231, 46, 0, 0, Component.interface_908.component_908_32);
    ifSetSize(345, 70, 0, 0, Component.interface_908.component_908_32);
    ifSetColour(colour(0x0E1903), Component.interface_908.component_908_32);
    ifSetTextAlign(1, 1, 0, Component.interface_908.component_908_32);
}
