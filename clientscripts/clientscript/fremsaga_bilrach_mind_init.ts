/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_bilrach_mind_init]

function fremsaga_bilrach_mind_init(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number): void {
    varc_fremsaga_bilrach_mind_p1_x = intArg1;
    varc_fremsaga_bilrach_mind_p1_y = intArg2;
    varc_fremsaga_bilrach_mind_p2_x = intArg3;
    varc_fremsaga_bilrach_mind_p2_y = intArg4;
    varc_fremsaga_bilrach_mind_p3_x = intArg5;
    varc_fremsaga_bilrach_mind_p3_y = intArg6;
    fremsaga_bilrach_mind_build_layers(0);
    fremsaga_bilrach_mind_build_buttons(intArg1, intArg2, intArg3, intArg4, intArg5, intArg6);
    cs2_6130();
    fremsaga_bilrach_mind_set_help(intArg0);
    varc_fremsaga_bilrach_mind_probe_placed = 0;

    switch (random(6)) {
        case 0:
            varc_fremsaga_bilrach_mind_layer_id_1 = 4;
            varc_fremsaga_bilrach_mind_layer_id_2 = 8;
            varc_fremsaga_bilrach_mind_layer_id_3 = 12;
            break;
        case 1:
            varc_fremsaga_bilrach_mind_layer_id_1 = 4;
            varc_fremsaga_bilrach_mind_layer_id_2 = 12;
            varc_fremsaga_bilrach_mind_layer_id_3 = 8;
            break;
        case 2:
            varc_fremsaga_bilrach_mind_layer_id_1 = 8;
            varc_fremsaga_bilrach_mind_layer_id_2 = 4;
            varc_fremsaga_bilrach_mind_layer_id_3 = 12;
            break;
        case 3:
            varc_fremsaga_bilrach_mind_layer_id_1 = 8;
            varc_fremsaga_bilrach_mind_layer_id_2 = 12;
            varc_fremsaga_bilrach_mind_layer_id_3 = 4;
            break;
        case 4:
            varc_fremsaga_bilrach_mind_layer_id_1 = 12;
            varc_fremsaga_bilrach_mind_layer_id_2 = 4;
            varc_fremsaga_bilrach_mind_layer_id_3 = 8;
            break;
        case 5:
            varc_fremsaga_bilrach_mind_layer_id_1 = 12;
            varc_fremsaga_bilrach_mind_layer_id_2 = 8;
            varc_fremsaga_bilrach_mind_layer_id_3 = 4;
            break;
    }
}
