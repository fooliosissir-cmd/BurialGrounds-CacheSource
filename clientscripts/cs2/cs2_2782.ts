/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2782

function cs2_2782(): void {
    if (stringLength(varcstr_321) <= 0) {
        ifSetHide(true, Component.interface_667.component_667_49);
        ifSetHide(true, Component.inventory_wear2.popup);
        ifSetHide(true, Component.interface_763.component_763_3);
        return;
    }
    ccDeleteAll(Component.interface_667.component_667_51);
    let int0: number = stringWidth(varcstr_321, Graphic.b12_full);
    let int1: number = parawidth(varcstr_322, 2147483647, Graphic.p11_full);
    let int2: number = parawidth(varcstr_323, 2147483647, Graphic.p11_full);
    let int3: number = parawidth(varcstr_324, 2147483647, Graphic.p11_full);
    let int4: number = 0;
    let int5: number = 0;
    let str0: string = "Superior stats are shown in " + "<col=ffffff>" + "white" + "</col>" + ".";

    if (stringLength(varcstr_325) > 0) {
        int4 = parawidth(varcstr_325, 2147483647, Graphic.p11_full);
        int5 = stringWidth(str0, Graphic.p11_full);
    }
    let int6: number = paraheight(varcstr_324, 2147483647, Graphic.p11_full) * 10 + 3;
    let int7: number = 5 + int2 + 5 + int3;

    if (int4 > 0) {
        int7 = int7 + 5 + int4;
        int7 = max(int7, int5 + 10);
    }
    int7 = max(int7, int1);
    let int8: number = max(max(int7, int0), ifGetWidth(Component.interface_667.component_667_62));
    let int9: number = 0;

    if (int8 > int7) {
        int9 = (int8 - int7) / 2;
    }
    ccCreate(Component.interface_667.component_667_51, 4, ifGetNextSubId(Component.interface_667.component_667_51));
    ccSetPosition(int9 + 10, 25, 0, 0);
    ccSetSize(ccGetX(), int6, 1, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextShadow(true);
    ccSetColour(colour(0xFF981F));
    ccSetText(varcstr_322);
    ccCreate(Component.interface_667.component_667_51, 4, ifGetNextSubId(Component.interface_667.component_667_51));
    ccSetPosition(int9 + 15, 25, 0, 0);
    ccSetSize(ccGetX(), int6, 1, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextShadow(true);
    ccSetColour(colour(0xFF981F));
    ccSetText(varcstr_323);
    ccCreate(Component.interface_667.component_667_51, 4, ifGetNextSubId(Component.interface_667.component_667_51));
    ccSetPosition(int9 + 15 + int2 + 5, 25, 0, 0);
    ccSetSize(int3, int6, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextShadow(true);
    ccSetColour(colour(0xFF981F));
    ccSetTextAlign(1, 0, 0);
    ccSetText(varcstr_324);

    if (int4 > 0) {
        ccCreate(Component.interface_667.component_667_51, 4, ifGetNextSubId(Component.interface_667.component_667_51));
        ccSetPosition(int9 + 15 + int2 + 5 + int3 + 5, 25, 0, 0);
        ccSetSize(int4, int6, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextShadow(true);
        ccSetColour(colour(0xFF981F));
        ccSetTextAlign(1, 0, 0);
        ccSetText(varcstr_325);
        ccCreate(Component.interface_667.component_667_51, 4, ifGetNextSubId(Component.interface_667.component_667_51));
        ccSetPosition(0, 25 + int6, 1, 0);
        ccSetSize(int5, 12, 0, 0);
        ccSetTextAlign(1, 1, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextShadow(true);
        ccSetColour(colour(0xFF981F));
        ccSetText(str0);
        int6 = int6 + ccGetHeight();
    }
    ifSetSize(int8 + 20, int6 + 60, 0, 0, Component.interface_667.component_667_51);
    ifSetText(varcstr_321, Component.interface_667.component_667_61);
    ifSetHide(false, Component.interface_667.component_667_49);
    ifSetHide(false, Component.inventory_wear2.popup);
    ifSetHide(false, Component.interface_763.component_763_3);
}
