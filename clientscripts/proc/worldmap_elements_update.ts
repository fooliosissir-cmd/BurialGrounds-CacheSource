/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_elements_update]

function worldmap_elements_update(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    if (worldMapGetdisableelements() == 1) {
        ccDeleteAll(intArg0);
        return;
    }
    let int5: number = 0;

    switch (worldMapGetcurrentmap()) {
        case 31:
            int5 = cs2_297(coord(3219, 9533, 2), coord(3226, 9542, 0), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 1:
            int5 = cs2_297(coord(2400, 4379, 0), coord(2348, 4386, 0), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 26:
            int5 = worldmap_elements_textbox(coord(0, 143, 0), true, "Lower level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(96, 207, 0), true, "Middle level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(192, 271, 0), true, "Upper level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2736, 5278, 0), coord(2736, 5278, 1), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2723, 5292, 0), coord(2724, 5292, 1), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2705, 5364, 0), coord(2705, 5364, 1), false, colour(0x00FFFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2699, 5328, 0), coord(2699, 5328, 1), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2720, 5360, 0), coord(2720, 5360, 1), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2731, 5349, 0), coord(2731, 5349, 1), false, colour(0x007FFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2739, 5325, 0), coord(2739, 5325, 1), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2730, 5305, 0), coord(2730, 5305, 1), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2723, 5264, 0), coord(2724, 5264, 1), false, colour(0x00FFFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2702, 5305, 0), coord(2702, 5305, 1), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2737, 5357, 1), coord(2737, 5357, 2), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2701, 5362, 1), coord(2701, 5362, 2), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2696, 5303, 1), coord(2696, 5303, 2), false, colour(0x00FFFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2697, 5292, 1), coord(2697, 5292, 2), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2722, 5253, 1), coord(2722, 5253, 2), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2741, 5258, 1), coord(2741, 5258, 2), false, colour(0x007FFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2740, 5292, 1), coord(2740, 5292, 2), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 21:
            int5 = cs2_298(coord(2839, 10130, 0), coord(2837, 10141, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2855, 10143, 0), coord(2858, 10133, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2843, 10130, 0), coord(2887, 10223, 0), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2838, 10123, 0), coord(2780, 10161, 0), false, colour(0x00FFFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 20:
            int5 = cs2_297(coord(3510, 9497, 2), coord(3510, 9494, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 25:
            int5 = cs2_297(coord(3056, 9561, 0), coord(3056, 9556, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 3:
            int5 = cs2_298(coord(2598, 9491, 0), coord(2599, 9555, 0), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2578, 9585, 0), coord(2567, 9524, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2579, 9516, 0), coord(2578, 9580, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2621, 9497, 0), coord(2620, 9563, 0), false, colour(0x00FFFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2616, 9571, 0), coord(2616, 9504, 0), false, colour(0x007FFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2578, 9506, 0), coord(2572, 9506, 0), false, colour(0x007FFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 14:
            int5 = cs2_297(coord(2508, 10289, 0), coord(2514, 10291, 0), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 2:
            int5 = cs2_297(coord(2843, 10109, 2), coord(2843, 10109, 1), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2843, 10051, 2), coord(2843, 10051, 1), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2853, 10062, 1), coord(2853, 10062, 0), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2852, 10107, 1), coord(2852, 10107, 0), false, colour(0x00FFFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(0, 79, 0), true, "Lower level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(96, 79, 0), true, "Middle level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(192, 79, 0), true, "Upper level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 6:
            int5 = cs2_297(coord(3067, 10252, 0), coord(2271, 4680, 0), false, colour(0x007FFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2543, 4723, 0), coord(2509, 4687, 0), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 24:
            int5 = worldmap_elements_textbox(coord(32, 176, 0), true, "War", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(1863, 5238, 0), coord(1914, 5222, 0), false, colour(0x007FFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(1881, 5232, 0), coord(1859, 5243, 0), false, colour(0x007FFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1902, 5222, 0), coord(2042, 5245, 0), false, colour(0x007FFF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(120, 160, 0), true, "Famine", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2039, 5240, 0), coord(2021, 5223, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2017, 5210, 0), coord(2042, 5245, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2040, 5208, 0), coord(2042, 5245, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2011, 5192, 0), coord(2042, 5245, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2031, 5189, 0), coord(2042, 5245, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2026, 5218, 0), coord(2123, 5252, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(40, 88, 0), true, "Pestilence", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2120, 5258, 0), coord(2146, 5287, 0), false, colour(0xFF007F), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2150, 5278, 0), coord(2123, 5252, 0), false, colour(0xFF007F), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2148, 5283, 0), coord(2358, 5215, 0), false, colour(0xFF007F), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(128, 72, 0), true, "Death", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(2365, 5212, 0), coord(2341, 5219, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 9:
            int5 = worldmap_elements_textbox(coord(96, 232, 0), true, "Jail", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(32, 144, 0), true, "Lower level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(104, 144, 0), true, "Middle level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(176, 144, 0), true, "Upper level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(104, 64, 0), true, "Secure sector", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3077, 4235, 0), coord(3139, 4230, 2), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3153, 4248, 2), coord(3153, 4248, 1), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3171, 4273, 2), coord(3172, 4273, 3), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3178, 4269, 2), coord(3178, 4266, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3141, 4272, 1), coord(3142, 4270, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 15:
            int5 = cs2_297(coord(2913, 5300, 2), coord(2913, 5300, 1), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2920, 5275, 1), coord(2920, 5274, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2884, 5275, 2), coord(2855, 5221, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 13:
            int5 = worldmap_elements_textbox(coord(32, 200, 0), true, "Upper level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2649, 9592, 0), coord(2644, 9595, 2), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2636, 9516, 0), coord(2636, 9511, 2), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 22:
            int5 = cs2_297(coord(3378, 9369, 0), coord(3320, 4340, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3378, 9427, 0), coord(3320, 4365, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3341, 9427, 0), coord(3279, 4368, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3341, 9369, 0), coord(3274, 4340, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 16:
            int5 = worldmap_elements_textbox(coord(32, 522, 0), true, "Sub-level 1", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(2547, 10143, 0), coord(1798, 4406, 3), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(96, 427, 0), true, "Sub-level 2", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1809, 4405, 3), coord(1809, 4405, 2), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1823, 4404, 3), coord(1823, 4404, 2), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1834, 4389, 3), coord(1834, 4389, 2), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1824, 4381, 3), coord(1824, 4381, 2), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1838, 4376, 3), coord(1838, 4376, 2), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1961, 4392, 3), coord(1961, 4392, 2), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(96, 330, 0), true, "Sub-level 3", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1810, 4394, 2), coord(1810, 4394, 1), false, colour(0x7F00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1799, 4387, 2), coord(1799, 4387, 1), false, colour(0x7F00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1798, 4382, 2), coord(1798, 4382, 1), false, colour(0x7F00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1802, 4369, 2), coord(1802, 4369, 1), false, colour(0x7F00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1826, 4362, 2), coord(1826, 4362, 1), false, colour(0x7F00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1850, 4385, 2), coord(1850, 4385, 1), false, colour(0x7F00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1864, 4388, 2), coord(1864, 4388, 1), false, colour(0x7F00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1863, 4372, 2), coord(1863, 4372, 1), false, colour(0x7F00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1932, 4379, 2), coord(1932, 4379, 1), false, colour(0x7F00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(96, 235, 0), true, "Sub-level 4", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1890, 4408, 1), coord(1890, 4408, 0), false, colour(0xFF7F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1957, 4372, 1), coord(1957, 4372, 0), false, colour(0xFF7F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(160, 138, 0), true, "Sub-level 5", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1911, 4367, 0), coord(2899, 4449, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(212, 55, 0), true, "Sub-level 6", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 30:
            int5 = worldmap_elements_textbox(coord(32, 114, 0), true, "Lower level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(128, 88, 0), true, "Middle level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(224, 88, 0), true, "Upper level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3163, 4560, 0), coord(3163, 4565, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3155, 4559, 0), coord(3161, 4559, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3141, 4565, 1), coord(3141, 4560, 2), false, colour(0xFF7F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3144, 4571, 2), coord(3144, 4566, 1), false, colour(0xFF7F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3144, 4582, 1), coord(3144, 4577, 2), false, colour(0xFF7F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3151, 4583, 0), coord(3146, 4583, 1), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3166, 4577, 0), coord(3161, 4577, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3184, 4571, 0), coord(3184, 4566, 1), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3184, 4585, 1), coord(3184, 4579, 0), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3170, 4577, 0), coord(3175, 4577, 1), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3174, 4561, 1), coord(3179, 4561, 0), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3195, 4575, 1), coord(3195, 4570, 0), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3189, 4577, 2), coord(3194, 4577, 1), false, colour(0xFF7F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3186, 4585, 1), coord(3186, 4578, 2), false, colour(0xFF7F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3168, 4586, 0), coord(3168, 4579, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3161, 4589, 1), coord(3166, 4589, 0), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3145, 4594, 0), coord(3145, 4589, 1), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3160, 4598, 0), coord(3149, 4598, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3168, 4592, 0), coord(3168, 4597, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3151, 4597, 1), coord(3155, 4597, 1), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3179, 4598, 1), coord(3175, 4598, 1), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3147, 4548, 0), coord(3144, 4548, 1), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3158, 4553, 0), coord(3158, 4556, 1), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3168, 4569, 0), coord(3171, 4569, 1), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3184, 4553, 0), coord(3184, 4556, 1), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3190, 4598, 0), coord(3193, 4598, 1), false, colour(0x007F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3141, 4551, 1), coord(3141, 4554, 2), false, colour(0xFF7F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3158, 4564, 1), coord(3158, 4567, 2), false, colour(0xFF7F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3177, 4577, 1), coord(3180, 4577, 2), false, colour(0xFF7F00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3185, 4602, 0), coord(3149, 4643, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3149, 4659, 0), coord(3149, 4663, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 23:
            int5 = cs2_297(coord(3194, 5490, 0), coord(3191, 5495, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3191, 5482, 0), coord(3185, 5478, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3186, 5472, 0), coord(3192, 5472, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3189, 5444, 0), coord(3187, 5460, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3178, 5460, 0), coord(3168, 5456, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3155, 5449, 0), coord(3143, 5443, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3154, 5462, 0), coord(3142, 5462, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3167, 5471, 0), coord(3171, 5473, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3171, 5478, 0), coord(3167, 5478, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3141, 5480, 0), coord(3142, 5489, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3244, 5495, 0), coord(3239, 5498, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3233, 5470, 0), coord(3241, 5469, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3218, 5497, 0), coord(3222, 5488, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3224, 5479, 0), coord(3222, 5474, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3229, 5454, 0), coord(3235, 5457, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3241, 5445, 0), coord(3233, 5445, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3212, 5452, 0), coord(3214, 5456, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3218, 5478, 0), coord(3215, 5475, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3208, 5471, 0), coord(3210, 5477, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3250, 5448, 0), coord(3254, 5451, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3204, 5445, 0), coord(3197, 5448, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3307, 5496, 0), coord(3317, 5496, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3299, 5484, 0), coord(3303, 5477, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3318, 5481, 0), coord(3322, 5480, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3302, 5469, 0), coord(3290, 5463, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3296, 5455, 0), coord(3299, 5450, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3287, 5448, 0), coord(3283, 5448, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3286, 5470, 0), coord(3285, 5474, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3273, 5460, 0), coord(3280, 5460, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3266, 5446, 0), coord(3260, 5491, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3265, 5491, 0), coord(3259, 5446, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3282, 5531, 0), coord(3285, 5527, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3288, 5536, 0), coord(3289, 5533, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3285, 5556, 0), coord(3291, 5555, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3297, 5536, 0), coord(3299, 5533, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3321, 5554, 0), coord(3315, 5552, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3323, 5531, 0), coord(3325, 5518, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3300, 5514, 0), coord(3297, 5510, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3285, 5508, 0), coord(3280, 5501, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3211, 5523, 0), coord(3208, 5527, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3204, 5546, 0), coord(3206, 5553, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3211, 5533, 0), coord(3214, 5533, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3230, 5547, 0), coord(3224, 5553, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3241, 5529, 0), coord(3243, 5526, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3252, 5543, 0), coord(3249, 5546, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3253, 5561, 0), coord(3256, 5561, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3262, 5552, 0), coord(3266, 5552, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3261, 5536, 0), coord(3268, 5534, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3238, 5507, 0), coord(3232, 5501, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3147, 5541, 0), coord(3143, 5535, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3158, 5561, 0), coord(3162, 5557, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3162, 5545, 0), coord(3166, 5553, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3153, 5537, 0), coord(3148, 5533, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3168, 5541, 0), coord(3171, 5542, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3174, 5558, 0), coord(3180, 5557, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3190, 5554, 0), coord(3190, 5549, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3156, 5523, 0), coord(3152, 5520, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3173, 5530, 0), coord(3165, 5515, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3182, 5530, 0), coord(3187, 5531, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3181, 5517, 0), coord(3185, 5518, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3190, 5519, 0), coord(3190, 5515, 0), false, colour(0xFF00FF), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3196, 5512, 0), coord(3202, 5515, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3197, 5529, 0), coord(3201, 5531, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(3169, 5510, 0), coord(3159, 5501, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 32:
        case 33:
        case 34:
            int5 = worldmap_elements_textbox(coord(0, 15, 0), true, "The world map screen" + "<br>" + "shows you where you are," + "<br>" + "and where important" + "<br>" + "features may be found.", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 36:
            int5 = worldmap_elements_textbox(coord(1728, 5375, 0), false, "Lower level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(1728, 5375, 1), false, "Upper level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1769, 5366, 1), coord(1773, 5366, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1778, 5346, 0), coord(1778, 5343, 1), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1744, 5325, 0), coord(1744, 5321, 1), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1735, 5313, 1), coord(1661, 5257, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 41:
            int5 = cs2_298(coord(3538, 9905, 0), coord(3538, 9909, 0), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(3541, 9905, 0), coord(3541, 9909, 0), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(3544, 9905, 0), coord(3544, 9909, 0), false, colour(0xFFFF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_298(coord(3528, 9911, 0), coord(3528, 9870, 0), false, colour(0xFF0000), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4658, 5476, 3), coord(4662, 5476, 3), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4681, 5476, 3), coord(4685, 5476, 3), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4662, 5490, 3), coord(4695, 5626, 3), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4632, 5409, 3), coord(4632, 5409, 2), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4629, 5453, 3), coord(4629, 5453, 2), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4698, 5459, 3), coord(4698, 5459, 2), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4691, 5469, 3), coord(4691, 5469, 2), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4684, 5586, 3), coord(4684, 5586, 2), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4696, 5618, 3), coord(4696, 5618, 2), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4642, 5389, 2), coord(4642, 5389, 1), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4632, 5443, 2), coord(4632, 5443, 1), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4705, 5460, 2), coord(4705, 5460, 1), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4689, 5479, 2), coord(4689, 5479, 1), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4721, 5602, 2), coord(4721, 5602, 1), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4699, 5617, 2), coord(4699, 5617, 1), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4651, 5388, 1), coord(4651, 5388, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4718, 5467, 1), coord(4718, 5467, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(4702, 5612, 1), coord(4702, 5612, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(3360, 9778, 0), true, "First level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(3296, 9586, 0), true, "Second level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(3232, 9394, 0), true, "Third level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(3168, 9202, 0), true, "Bottom", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 43:
            int5 = worldmap_elements_textbox(coord(1193, 6356, 0), true, "First level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(1044, 6297, 0), true, "Second level", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(1193, 6218, 0), true, "Bottom", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1089, 6360, 0), coord(1341, 6487, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1178, 6355, 0), coord(1207, 6507, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1341, 6380, 0), coord(1088, 6497, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        case 0:
            int5 = cs2_297(coord(2575, 9668, 0), coord(1797, 6338, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = cs2_297(coord(1844, 6356, 0), coord(1849, 6351, 0), false, colour(0x00FF00), 6, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            int5 = worldmap_elements_textbox(coord(2560, 9482, 0), true, "Forgotten Sewers", Struct.worldmap_overlay_style_default, intArg0, intArg1, intArg2, intArg3, intArg4, int5);
            break;
        default:
            ccDeleteAll(intArg0);
            break;
    }
}
