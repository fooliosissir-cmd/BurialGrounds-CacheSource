/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,qbd1_cutscene_control]

function qbd1_cutscene_control(intArg0: component): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 0:
            proc_fadeout(colour(0x000000), 1, intArg0);
            break;
        case 1:
            proc_fadeout(colour(0x000000), 25, intArg0);
            break;
        case 2:
            proc_fadein(25, intArg0);
            break;
        case 3:
            proc_fadeout(colour(0x000000), 100, intArg0);
            break;
        case 4:
            proc_fadein(100, intArg0);
            break;
        case 5:
            proc_fadein(75, intArg0);
            splineNew(0, 3);
            splineNew(1, 3);
            splineAddPoint(0, 0, cs2_6216(coord(1125, 6108, 0)), 500, cs2_6216(coord(1124, 6111, 0)), 500, 0);
            splineAddPoint(1, 0, cs2_6216(coord(1121, 6103, 0)), 350, cs2_6216(coord(1122, 6104, 0)), 350, 0);
            splineAddPoint(0, 1, cs2_6216(coord(1129, 6116, 0)), 600, cs2_6216(coord(1127, 6119, 0)), 600, 0);
            splineAddPoint(1, 1, cs2_6216(coord(1120, 6111, 0)), 400, cs2_6216(coord(1118, 6113, 0)), 400, 0);
            splineAddPoint(0, 2, cs2_6216(coord(1115, 6117, 0)), 700, cs2_6216(coord(1113, 6120, 0)), 700, 0);
            splineAddPoint(1, 2, cs2_6216(coord(1116, 6123, 0)), 550, cs2_6216(coord(1113, 6124, 0)), 550, 0);
            camMovealong(0, 0, 150, 200, 1, 0);
            ifSetOnCamFinished(hook(cs2_6223, "iiIii", [1, 1, intArg0, 150, 150]), intArg0);
            break;
        case 6:
            splineNew(0, 3);
            splineNew(1, 3);
            splineAddPoint(0, 0, cs2_6216(coord(1124, 6108, 0)), 500, cs2_6216(coord(1124, 6109, 0)), 500, 0);
            splineAddPoint(1, 0, cs2_6216(coord(1121, 6103, 0)), 350, cs2_6216(coord(1121, 6104, 0)), 350, 0);
            splineAddPoint(0, 1, cs2_6216(coord(1123, 6113, 0)), 500, cs2_6216(coord(1123, 6114, 0)), 500, 0);
            splineAddPoint(1, 1, cs2_6216(coord(1122, 6104, 0)), 350, cs2_6216(coord(1122, 6105, 0)), 350, 0);
            splineAddPoint(0, 2, cs2_6216(coord(1125, 6119, 0)), 500, cs2_6216(coord(1126, 6120, 0)), 500, 0);
            splineAddPoint(1, 2, cs2_6216(coord(1124, 6105, 0)), 350, cs2_6216(coord(1125, 6105, 0)), 350, 0);
            camMovealong(0, 0, 250, 0, 1, 0);
            break;
        case 7:
            camMovealong(0, 1, 250, 0, 1, 1);
            break;
        case 10:
            proc_fadein(75, intArg0);
            splineNew(0, 5);
            splineNew(1, 5);
            splineAddPoint(0, 0, qbd1_coord(coord(2779, 1588, 0)), 500, qbd1_coord(coord(2780, 1588, 0)), 500, 0);
            splineAddPoint(1, 0, qbd1_coord(coord(2778, 1589, 0)), 350, qbd1_coord(coord(2778, 1590, 0)), 350, 0);
            splineAddPoint(0, 1, qbd1_coord(coord(2781, 1588, 0)), 500, qbd1_coord(coord(2782, 1588, 0)), 500, 0);
            splineAddPoint(1, 1, qbd1_coord(coord(2780, 1591, 0)), 350, qbd1_coord(coord(2781, 1590, 0)), 350, 0);
            splineAddPoint(0, 2, qbd1_coord(coord(2782, 1590, 0)), 500, qbd1_coord(coord(2783, 1590, 0)), 500, 0);
            splineAddPoint(1, 2, qbd1_coord(coord(2785, 1591, 0)), 350, qbd1_coord(coord(2786, 1590, 0)), 350, 0);
            splineAddPoint(0, 3, qbd1_coord(coord(2786, 1588, 0)), 500, qbd1_coord(coord(2786, 1589, 0)), 500, 0);
            splineAddPoint(1, 3, qbd1_coord(coord(2789, 1590, 0)), 350, qbd1_coord(coord(2790, 1593, 0)), 350, 0);
            splineAddPoint(0, 4, qbd1_coord(coord(2787, 1589, 0)), 500, qbd1_coord(coord(2788, 1588, 0)), 500, 0);
            splineAddPoint(1, 4, qbd1_coord(coord(2789, 1587, 0)), 350, qbd1_coord(coord(2790, 1586, 0)), 350, 0);
            camMovealong(0, 0, 200, 0, 1, 0);
            break;
        case 11:
            camMovealong(0, 1, 200, 0, 1, 1);
            break;
        case 12:
            camMovealong(0, 2, 200, 0, 1, 2);
            break;
        case 13:
            camMovealong(0, 3, 200, 0, 1, 3);
            break;
        case 20:
            proc_fadein(75, intArg0);
            splineNew(0, 5);
            splineNew(1, 5);
            splineAddPoint(0, 0, qbd1_coord_multiroom(coord(1446, 6123, 0)), 500, qbd1_coord_multiroom(coord(1445, 6121, 0)), 500, 0);
            splineAddPoint(1, 0, qbd1_coord_multiroom(coord(1432, 6105, 0)), 350, qbd1_coord_multiroom(coord(1433, 6108, 0)), 350, 0);
            splineAddPoint(0, 1, qbd1_coord_multiroom(coord(1445, 6116, 0)), 500, qbd1_coord_multiroom(coord(1445, 6113, 0)), 500, 0);
            splineAddPoint(1, 1, qbd1_coord_multiroom(coord(1435, 6112, 0)), 350, qbd1_coord_multiroom(coord(1436, 6114, 0)), 350, 0);
            splineAddPoint(0, 2, qbd1_coord_multiroom(coord(1441, 6108, 0)), 750, qbd1_coord_multiroom(coord(1438, 6107, 0)), 750, 0);
            splineAddPoint(1, 2, qbd1_coord_multiroom(coord(1438, 6117, 0)), 450, qbd1_coord_multiroom(coord(1439, 6120, 0)), 450, 0);
            splineAddPoint(0, 3, qbd1_coord_multiroom(coord(1434, 6111, 0)), 750, qbd1_coord_multiroom(coord(1433, 6114, 0)), 750, 0);
            splineAddPoint(1, 3, qbd1_coord_multiroom(coord(1439, 6122, 0)), 450, qbd1_coord_multiroom(coord(1439, 6124, 0)), 450, 0);
            splineAddPoint(0, 4, qbd1_coord_multiroom(coord(1438, 6118, 0)), 1000, qbd1_coord_multiroom(coord(1438, 6119, 0)), 1000, 0);
            splineAddPoint(1, 4, qbd1_coord_multiroom(coord(1439, 6127, 0)), 500, qbd1_coord_multiroom(coord(1439, 6129, 0)), 500, 0);
            camMovealong(0, 0, 400, 400, 1, 0);
            ifSetOnCamFinished(hook(cs2_6223, "iiIii", [1, 3, intArg0, 350, 350]), intArg0);
            break;
        case 30:
            proc_fadein(75, intArg0);
            splineNew(0, 4);
            splineNew(1, 4);
            splineAddPoint(0, 0, qbd1_coord_jump(coord(1308, 6244, 0)), 500, qbd1_coord_jump(coord(1310, 6243, 0)), 500, 0);
            splineAddPoint(1, 0, qbd1_coord_jump(coord(1322, 6240, 0)), 350, qbd1_coord_jump(coord(1320, 6240, 0)), 350, 0);
            splineAddPoint(0, 1, qbd1_coord_jump(coord(1312, 6243, 0)), 700, qbd1_coord_jump(coord(1314, 6243, 0)), 700, 0);
            splineAddPoint(1, 1, qbd1_coord_jump(coord(1316, 6240, 0)), 400, qbd1_coord_jump(coord(1314, 6240, 0)), 400, 0);
            splineAddPoint(0, 2, qbd1_coord_jump(coord(1316, 6241, 0)), 900, qbd1_coord_jump(coord(1317, 6240, 0)), 900, 0);
            splineAddPoint(1, 2, qbd1_coord_jump(coord(1311, 6240, 0)), 500, qbd1_coord_jump(coord(1309, 6240, 0)), 500, 0);
            splineAddPoint(0, 3, qbd1_coord_jump(coord(1316, 6238, 0)), 1200, qbd1_coord_jump(coord(1313, 6237, 0)), 1200, 0);
            splineAddPoint(1, 3, qbd1_coord_jump(coord(1307, 6240, 0)), 700, qbd1_coord_jump(coord(1305, 6240, 0)), 700, 0);
            camMovealong(0, 0, 300, 300, 1, 0);
            ifSetOnCamFinished(hook(cs2_6223, "iiIii", [1, 1, intArg0, 300, 250]), intArg0);
            break;
        case 35:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, qbd1_coord_jump(coord(1312, 6242, 0)), 500, qbd1_coord_jump(coord(1310, 6242, 0)), 500, 0);
            splineAddPoint(1, 0, qbd1_coord_jump(coord(1322, 6240, 0)), 350, qbd1_coord_jump(coord(1321, 6240, 0)), 350, 0);
            splineAddPoint(0, 1, qbd1_coord_jump(coord(1298, 6245, 0)), 700, qbd1_coord_jump(coord(1297, 6246, 0)), 700, 0);
            splineAddPoint(1, 1, qbd1_coord_jump(coord(1308, 6239, 0)), 350, qbd1_coord_jump(coord(1307, 6239, 0)), 350, 0);
            camMovealong(0, 0, 300, 0, 1, 0);
            break;
        case 40:
            proc_fadein(75, intArg0);
            splineNew(0, 3);
            splineNew(1, 3);
            splineAddPoint(0, 0, cs2_6217(coord(1056, 6115, 0)), 500, cs2_6217(coord(1058, 6116, 0)), 500, 0);
            splineAddPoint(1, 0, cs2_6217(coord(1051, 6120, 0)), 350, cs2_6217(coord(1047, 6115, 0)), 350, 0);
            splineAddPoint(0, 1, cs2_6217(coord(1060, 6113, 0)), 500, cs2_6217(coord(1060, 6112, 0)), 500, 0);
            splineAddPoint(1, 1, cs2_6217(coord(1056, 6108, 0)), 350, cs2_6217(coord(1060, 6108, 0)), 350, 0);
            splineAddPoint(0, 2, cs2_6217(coord(1061, 6110, 0)), 500, cs2_6217(coord(1062, 6109, 0)), 500, 0);
            splineAddPoint(1, 2, cs2_6217(coord(1065, 6103, 0)), 350, cs2_6217(coord(1068, 6103, 0)), 350, 0);
            camMovealong(0, 0, 150, 100, 1, 0);
            break;
        case 41:
            camMovealong(0, 1, 150, 200, 1, 1);
            break;
        case 50:
            proc_fadein(75, intArg0);
            splineNew(0, 4);
            splineNew(1, 4);
            splineAddPoint(0, 0, cs2_6218(coord(1184, 6109, 0)), 500, cs2_6218(coord(1185, 6109, 0)), 500, 0);
            splineAddPoint(1, 0, cs2_6218(coord(1179, 6109, 0)), 350, cs2_6218(coord(1180, 6108, 0)), 350, 0);
            splineAddPoint(0, 1, cs2_6218(coord(1186, 6110, 0)), 500, cs2_6218(coord(1187, 6110, 0)), 500, 0);
            splineAddPoint(1, 1, cs2_6218(coord(1180, 6108, 0)), 350, cs2_6218(coord(1181, 6107, 0)), 350, 0);
            splineAddPoint(0, 2, cs2_6218(coord(1189, 6112, 0)), 500, cs2_6218(coord(1190, 6112, 0)), 500, 0);
            splineAddPoint(1, 2, cs2_6218(coord(1184, 6105, 0)), 350, cs2_6218(coord(1185, 6105, 0)), 350, 0);
            splineAddPoint(0, 3, cs2_6218(coord(1184, 6117, 0)), 500, cs2_6218(coord(1185, 6116, 0)), 500, 0);
            splineAddPoint(1, 3, cs2_6218(coord(1192, 6109, 0)), 350, cs2_6218(coord(1192, 6111, 0)), 350, 0);
            camMovealong(0, 0, 250, 0, 1, 0);
            break;
        case 51:
            camMovealong(0, 1, 200, 200, 1, 1);
            break;
        case 52:
            camMovealong(0, 2, 200, 200, 1, 2);
            break;
        case 60:
            proc_fadein(75, intArg0);
            splineNew(0, 7);
            splineNew(1, 7);
            splineAddPoint(0, 0, qbd1_coord_siren(coord(1368, 6629, 0)), 600, qbd1_coord_siren(coord(1391, 6640, 0)), 600, 0);
            splineAddPoint(1, 0, qbd1_coord_siren(coord(1376, 6624, 0)), 400, qbd1_coord_siren(coord(1376, 6624, 0)), 400, 0);
            splineAddPoint(0, 1, qbd1_coord_siren(coord(1368, 6623, 0)), 700, qbd1_coord_siren(coord(1353, 6644, 0)), 700, 0);
            splineAddPoint(1, 1, qbd1_coord_siren(coord(1376, 6623, 0)), 350, qbd1_coord_siren(coord(1376, 6623, 0)), 350, 0);
            splineAddPoint(0, 2, qbd1_coord_siren(coord(1380, 6632, 0)), 600, qbd1_coord_siren(coord(1380, 6632, 0)), 600, 0);
            splineAddPoint(1, 2, qbd1_coord_siren(coord(1373, 6623, 0)), 350, qbd1_coord_siren(coord(1369, 6624, 0)), 350, 0);
            splineAddPoint(0, 3, qbd1_coord_siren(coord(1379, 6631, 0)), 600, qbd1_coord_siren(coord(1379, 6631, 0)), 600, 0);
            splineAddPoint(1, 3, qbd1_coord_siren(coord(1372, 6622, 0)), 350, qbd1_coord_siren(coord(1372, 6622, 0)), 350, 0);
            splineAddPoint(0, 4, qbd1_coord_siren(coord(1367, 6624, 0)), 700, qbd1_coord_siren(coord(1367, 6624, 0)), 700, 0);
            splineAddPoint(1, 4, qbd1_coord_siren(coord(1376, 6623, 0)), 450, qbd1_coord_siren(coord(1376, 6623, 0)), 450, 0);
            splineAddPoint(0, 5, qbd1_coord_siren(coord(1368, 6623, 0)), 750, qbd1_coord_siren(coord(1368, 6623, 0)), 750, 0);
            splineAddPoint(1, 5, qbd1_coord_siren(coord(1378, 6623, 0)), 500, qbd1_coord_siren(coord(1378, 6623, 0)), 500, 0);
            camMovealong(0, 0, 150, 150, 1, 0);
            break;
        case 61:
            camMovealong(0, 2, 200, 0, 1, 2);
            break;
        case 63:
            camMovealong(0, 4, 200, 0, 1, 4);
            break;
    }
}
