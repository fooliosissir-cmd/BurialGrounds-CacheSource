/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,notes_build]

function notes_build(strArg0: string, intArg0: number, intArg1: number, intArg2: colour): number {
    let int3: number = ifGetWidth(Component.interface_34.component_34_9);

    strArg0 = escape(notes_eegg(strArg0));
    ccCreate(Component.interface_34.component_34_9, 4, intArg1);
    ccSetPosition(0, intArg0 * 15 + 5, 0, 0);
    let int4: number = paraheight(strArg0, int3, Graphic.p11_full);
    ccSetSize(0, int4 * 14, 1, 0);
    ccSetColour(intArg2);
    ccSetText(strArg0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 1, 14);
    ccSetTextShadow(true);
    ccSetOnDrag(hook(notes_drag, "Iii", [event_com, event_comsubid, event_mousey]));
    ccSetOnDragComplete(hook(notes_drag_end, "I", [event_com2]));

    if (varp_notes_selected == intArg1) {
        ccSetOp(1, "Unselect");
    } else {
        ccSetOp(1, "Select");
    }
    ccSetOp(2, "Edit");
    ccSetOp(3, "Colour");
    ccSetOp(4, "Delete");
    ccSetOnOp(hook(clientscript_notes_click, "ii", [event_opindex, intArg1]));
    ccSetdragdeadzone(14);
    return intArg0 + int4;
}
