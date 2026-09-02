/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objreq_print_warn]

function objreq_print_warn(strArg0: string, intArg0: number, intArg1: number): void {
    let int2: number = paraheight(strArg0, 135, Graphic.p11_full);
    let int3: number = 6 + varc_objreq_lines * 11;

    if (compare(strArg0, "") != 0) {
        ccCreate(Component.interface_449.component_449_8, 4, ifGetNextSubId(Component.interface_449.component_449_8));
        ccSetPosition(0, int3 + 3, 1, 0);
        ccSetSize(135, 11 * int2, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetColour(colour(0xC60202));
        ccSetText(strArg0);
        ccSetTextShadow(true);
        ccSetTextAlign(intArg0, 0, 0);
        varc_objreq_lines = varc_objreq_lines + int2;
    }
    ccCreate(Component.interface_449.component_449_8, 5, ifGetNextSubId(Component.interface_449.component_449_8));
    ccSetSize(12, 12, 0, 0);
    ccSetPosition(3, int3 + 3, 0, 0);
    ccSetGraphic(Graphic.km_shopitems_0);
    ccCreate(Component.interface_449.component_449_8, 5, ifGetNextSubId(Component.interface_449.component_449_8));
    ccSetSize(12, 12, 0, 0);
    ccSetPosition(3, int3 + 3, 2, 0);
    ccSetGraphic(Graphic.km_shopitems_0);
    ccCreate(Component.interface_449.component_449_8, 5, ifGetNextSubId(Component.interface_449.component_449_8));
    ccSetSize(4, 4, 0, 0);
    ccSetPosition(0, int3, 0, 0);
    ccSetGraphic(Graphic.km_shopwireframe_6);
    ccCreate(Component.interface_449.component_449_8, 5, ifGetNextSubId(Component.interface_449.component_449_8));
    ccSetSize(intArg1 - 8, 4, 0, 0);
    ccSetPosition(4, int3, 0, 0);
    ccSetGraphic(Graphic.km_shopwireframe_7);
    ccSettiling(true);
    ccCreate(Component.interface_449.component_449_8, 5, ifGetNextSubId(Component.interface_449.component_449_8));
    ccSetSize(4, 4, 0, 0);
    ccSetPosition(0, int3, 2, 0);
    ccSetGraphic(Graphic.km_shopwireframe_8);
    ccCreate(Component.interface_449.component_449_8, 5, ifGetNextSubId(Component.interface_449.component_449_8));
    ccSetSize(4, 11 * int2 - 2, 0, 0);
    ccSetPosition(-2, int3 + 4, 2, 0);
    ccSetGraphic(Graphic.km_shopwireframe_9);
    ccSettiling(true);
    ccCreate(Component.interface_449.component_449_8, 5, ifGetNextSubId(Component.interface_449.component_449_8));
    ccSetSize(4, 4, 0, 0);
    ccSetPosition(0, 11 * int2 + 8, 2, 0);
    ccSetGraphic(Graphic.km_shopwireframe_11);
    ccCreate(Component.interface_449.component_449_8, 5, ifGetNextSubId(Component.interface_449.component_449_8));
    ccSetSize(intArg1 - 8, 4, 0, 0);
    ccSetPosition(4, 11 * int2 + 10, 0, 0);
    ccSetGraphic(Graphic.km_shopwireframe_7);
    ccSettiling(true);
    ccCreate(Component.interface_449.component_449_8, 5, ifGetNextSubId(Component.interface_449.component_449_8));
    ccSetSize(4, 4, 0, 0);
    ccSetPosition(0, 11 * int2 + 8, 0, 0);
    ccSetGraphic(Graphic.km_shopwireframe_10);
    ccCreate(Component.interface_449.component_449_8, 5, ifGetNextSubId(Component.interface_449.component_449_8));
    ccSetSize(4, 11 * int2 - 2, 0, 0);
    ccSetPosition(0, int3 + 4, 0, 0);
    ccSetGraphic(Graphic.km_shopwireframe_9);
    ccSettiling(true);
}
