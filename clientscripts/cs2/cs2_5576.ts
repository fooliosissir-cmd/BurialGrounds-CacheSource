/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5576

function cs2_5576(): void {
    ifSetText(tostringLocalised(varbit_rden2_points, 1), Component.interface_1181.component_1181_60);
    ifSetText("Select an item to buy.", Component.interface_1181.component_1181_166);
    ifSetText("Select an item to buy.", Component.interface_1181.component_1181_6);
    ifSetObject(Obj.rden2_helm, 1, Component.interface_1181.component_1181_225);
    ifSetObject(Obj.rden2_body, 1, Component.interface_1181.component_1181_4);
    ifSetObject(Obj.rden2_legs, 1, Component.interface_1181.component_1181_3);
    ifSetObject(Obj.rden2_gloves, 1, Component.interface_1181.component_1181_2);
    ifSetObject(Obj.rden2_boots, 1, Component.interface_1181.component_1181_1);
    ifSetObjectNonum(Obj.roguesden_kit, 1, Component.interface_1181.component_1181_0);
    proc_scrollbar_vertical(Component.interface_1181.component_1181_45, Component.interface_1181.component_1181_30, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
}
