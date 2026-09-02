/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ecosystem_build_interface]

function ecosystem_build_interface(intArg0: number, intArg1: number): void {
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let int2: model = -1;
    let int3: component = -1;

    switch (intArg0) {
        case 0:
            str0 = "Nothing.";
            str1 = "There are no requirements for building this feature.";
            str2 = "This feature is an abscence of anything. Oddly, some creatures prefer the minimalist approach.";
            int2 = Model.model_62129;
            int3 = Component.interface_459.component_459_69;
            break;
        case 1:
            str0 = "Pond";
            str1 = "You need a Construction level of 65 to build a pond.";
            str2 = "Ponds attract creatures with an affinity for water. They are essentially very small, man-made lakes...or glorified puddles, depending on your view.";
            int3 = Component.interface_459.component_459_68;
            int2 = Model.model_62128;
            break;
        case 2:
            str0 = "Tall grass";
            str1 = "You need a Construction level of 62 to build tall grass.";
            str2 = "Tall grass is favoured by creatures who sneak and hide. It's also a favourite with people too lazy to trim their lawn. Essentially, it's a patch of land allowed to grow wild.";
            int3 = Component.interface_459.component_459_70;
            int2 = Model.model_62134;
            break;
        case 3:
            str0 = "Abandoned house";
            str1 = "You need a Construction level of 57 to build an abandoned house.";
            str2 = "Something approximating an abandoned house: popular amongst creatures that think they're domesticated.";
            int3 = Component.interface_459.component_459_71;
            int2 = Model.model_62132;
            break;
        case 4:
            str0 = "Thermal vent";
            str1 = "You need a Construction level of 59 to build a thermal vent.";
            str2 = "A home-made volcano, or, at least, something that looks like one. These are popular among earthy creatures.";
            int3 = Component.interface_459.component_459_72;
            int2 = Model.model_62133;
            break;
        case 5:
            str0 = "Standing stones";
            str1 = "You need a Construction level of 70 to build standing stones.";
            str2 = "A circle of home-made mystical stones, popular among creatures that are more magically inclined.";
            int3 = Component.interface_459.component_459_73;
            int2 = Model.model_62136;
            break;
        case 6:
            str0 = "Dark pit";
            str1 = "You need a Construction level of 80 to build a dark pit.";
            str2 = "A deep, dark, endless pit, popular among the more sinister creatures. Don't look too closely: you might fall in.";
            int3 = Component.interface_459.component_459_74;
            int2 = Model.model_62131;
            break;
        case 7:
            str0 = "Boneyard";
            str1 = "You need a Construction level of 56 to build a boneyard.";
            str2 = "An animal graveyard, or a collection of well-made bone mockeries. Popular among scavengers and sinister creatures.";
            int3 = Component.interface_459.component_459_75;
            int2 = Model.model_62135;
            break;
        default:
            str0 = "Unknown";
            str1 = "This should not get here.";
            str2 = "This should never get here.";
            int2 = Model.model_62129;
            int3 = Component.interface_459.component_459_69;
            break;
    }
    cs2_2973();

    if (stat(22) < intArg1) {
        ifSetColour(colour(0xCCCC00), Component.interface_459.component_459_37);
        str2 = append(str2, "<br>" + "<br>" + "You can pay Papa Mambo to build this for you.");
    } else {
        ifSetColour(colour(0x00CC00), Component.interface_459.component_459_37);
    }
    ifSetText(str0, Component.interface_459.component_459_37);
    ifSetText(str1, Component.interface_459.component_459_38);
    ifSetText(str2, Component.interface_459.component_459_36);
    ifSetModel(int2, Component.interface_459.component_459_35);
    ifSetHide(true, Component.interface_459.component_459_69);
    ifSetHide(true, Component.interface_459.component_459_68);
    ifSetHide(true, Component.interface_459.component_459_70);
    ifSetHide(true, Component.interface_459.component_459_71);
    ifSetHide(true, Component.interface_459.component_459_72);
    ifSetHide(true, Component.interface_459.component_459_73);
    ifSetHide(true, Component.interface_459.component_459_74);
    ifSetHide(true, Component.interface_459.component_459_75);

    if (int3 != -1) {
        ifSetHide(false, int3);
    } else {
        ifSetHide(false, Component.interface_459.component_459_69);
    }
}
