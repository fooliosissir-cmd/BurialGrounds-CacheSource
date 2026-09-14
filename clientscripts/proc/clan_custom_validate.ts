/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_custom_validate]

function clan_custom_validate(intArg0: number): number {
    let int1: number = clan_custom_validate_selected(intArg0);

    if (int1 != 1) {
        return int1;
    }
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;

    switch (intArg0) {
        case 1:
            int2 = varbit_clan_custom_slot_1_destination_id_varp;
            int3 = varbit_clan_custom_slot_1_type_varp;
            int7 = varbit_clan_custom_slot_1_tier_varp;
            int4 = varbit_clan_custom_slot_1_options1_varp;
            int5 = varbit_clan_custom_slot_1_options2_varp;
            int6 = varbit_clan_custom_slot_1_options3_varp;
            break;
        case 2:
            int2 = varbit_clan_custom_slot_2_destination_id_varp;
            int3 = varbit_clan_custom_slot_2_type_varp;
            int7 = varbit_clan_custom_slot_2_tier_varp;
            int4 = varbit_clan_custom_slot_2_options1_varp;
            int5 = varbit_clan_custom_slot_2_options2_varp;
            int6 = varbit_clan_custom_slot_2_options3_varp;
            break;
        case 3:
            int2 = varbit_clan_custom_slot_3_destination_id_varp;
            int3 = varbit_clan_custom_slot_3_type_varp;
            int7 = varbit_clan_custom_slot_3_tier_varp;
            int4 = varbit_clan_custom_slot_3_options1_varp;
            int5 = varbit_clan_custom_slot_3_options2_varp;
            int6 = varbit_clan_custom_slot_3_options3_varp;
            break;
    }

    switch (int2) {
        case 100:
            if (int3 == pushVarClanBit<2210>() && int7 == pushVarClanBit<2211>() && int4 == pushVarClanBit<2216>() && int5 == pushVarClanBit<2217>() && int6 == pushVarClanBit<2218>()) {
                int1 = 4;
            }
            break;
        case 101:
            if (int3 == pushVarClanBit<2220>() && int7 == pushVarClanBit<2221>() && int4 == pushVarClanBit<2226>() && int5 == pushVarClanBit<2227>() && int6 == pushVarClanBit<2228>()) {
                int1 = 4;
            }
            break;
        case 102:
            if (int3 == pushVarClanBit<2240>() && int7 == pushVarClanBit<2241>() && int4 == pushVarClanBit<2246>() && int5 == pushVarClanBit<2247>() && int6 == pushVarClanBit<2248>()) {
                int1 = 4;
            }
            break;
        case 103:
            if (int3 == pushVarClanBit<2190>() && int7 == pushVarClanBit<2191>() && int4 == pushVarClanBit<2196>() && int5 == pushVarClanBit<2197>() && int6 == pushVarClanBit<2198>()) {
                int1 = 4;
            }
            break;
        case 104:
            if (int3 == pushVarClanBit<2230>() && int7 == pushVarClanBit<2231>() && int4 == pushVarClanBit<2236>() && int5 == pushVarClanBit<2237>() && int6 == pushVarClanBit<2238>()) {
                int1 = 4;
            }
            break;
        case 105:
            if (int3 == pushVarClanBit<2200>() && int7 == pushVarClanBit<2201>() && int4 == pushVarClanBit<2206>() && int5 == pushVarClanBit<2207>() && int6 == pushVarClanBit<2208>()) {
                int1 = 4;
            }
            break;
        case 106:
            if (int3 == pushVarClanBit<2260>() && int7 == pushVarClanBit<2261>() && int4 == pushVarClanBit<2266>() && int5 == pushVarClanBit<2267>() && int6 == pushVarClanBit<2268>()) {
                int1 = 4;
            }
            break;
        case 107:
            if (int3 == pushVarClanBit<2270>() && int7 == pushVarClanBit<2271>() && int4 == pushVarClanBit<2276>() && int5 == pushVarClanBit<2277>() && int6 == pushVarClanBit<2278>()) {
                int1 = 4;
            }
            break;
        case 108:
            if (int3 == pushVarClanBit<2280>() && int7 == pushVarClanBit<2281>() && int4 == pushVarClanBit<2286>() && int5 == pushVarClanBit<2287>() && int6 == pushVarClanBit<2288>()) {
                int1 = 4;
            }
            break;
        case 109:
            if (int3 == pushVarClanBit<2250>() && int7 == pushVarClanBit<2251>() && int4 == pushVarClanBit<2256>() && int5 == pushVarClanBit<2257>() && int6 == pushVarClanBit<2258>()) {
                int1 = 4;
            }
            break;
        case 110:
            if (int3 == pushVarClanBit<2290>() && int7 == pushVarClanBit<2291>() && int4 == pushVarClanBit<2296>() && int5 == pushVarClanBit<2297>() && int6 == pushVarClanBit<2298>()) {
                int1 = 4;
            }
            break;
        case 111:
            if (int3 == pushVarClanBit<2300>() && int7 == pushVarClanBit<2301>() && int4 == pushVarClanBit<2306>() && int5 == pushVarClanBit<2307>() && int6 == pushVarClanBit<2308>()) {
                int1 = 4;
            }
            break;
        case 112:
            if (int3 == pushVarClanBit<2310>() && int7 == pushVarClanBit<2311>() && int4 == pushVarClanBit<2316>() && int5 == pushVarClanBit<2317>() && int6 == pushVarClanBit<2318>()) {
                int1 = 4;
            }
            break;
        case 113:
            if (int3 == pushVarClanBit<2320>() && int7 == pushVarClanBit<2321>() && int4 == pushVarClanBit<2326>() && int5 == pushVarClanBit<2327>() && int6 == pushVarClanBit<2328>()) {
                int1 = 4;
            }
            break;
        case 21:
            if (int3 == pushVarClanBit<2330>() && int7 == pushVarClanBit<2331>() && int4 == pushVarClanBit<2336>() && int5 == pushVarClanBit<2337>() && int6 == pushVarClanBit<2338>()) {
                int1 = 4;
            }
            break;
        case 22:
            if (int3 == pushVarClanBit<2340>() && int7 == pushVarClanBit<2341>() && int4 == pushVarClanBit<2346>() && int5 == pushVarClanBit<2347>() && int6 == pushVarClanBit<2348>()) {
                int1 = 4;
            }
            break;
        case 23:
            if (int3 == pushVarClanBit<2350>() && int7 == pushVarClanBit<2351>() && int4 == pushVarClanBit<2356>() && int5 == pushVarClanBit<2357>() && int6 == pushVarClanBit<2358>()) {
                int1 = 4;
            }
            break;
        case 24:
            if (int3 == pushVarClanBit<2360>() && int7 == pushVarClanBit<2361>() && int4 == pushVarClanBit<2366>() && int5 == pushVarClanBit<2367>() && int6 == pushVarClanBit<2368>()) {
                int1 = 4;
            }
            break;
        case 25:
            if (int3 == pushVarClanBit<2370>() && int7 == pushVarClanBit<2371>() && int4 == pushVarClanBit<2376>() && int5 == pushVarClanBit<2377>() && int6 == pushVarClanBit<2378>()) {
                int1 = 4;
            }
            break;
        case 26:
            if (int3 == pushVarClanBit<2380>() && int7 == pushVarClanBit<2381>() && int4 == pushVarClanBit<2386>() && int5 == pushVarClanBit<2387>() && int6 == pushVarClanBit<2388>()) {
                int1 = 4;
            }
            break;
        case 27:
            if (int3 == pushVarClanBit<2390>() && int7 == pushVarClanBit<2391>() && int4 == pushVarClanBit<2396>() && int5 == pushVarClanBit<2397>() && int6 == pushVarClanBit<2398>()) {
                int1 = 4;
            }
            break;
        case 28:
            if (int3 == pushVarClanBit<2400>() && int7 == pushVarClanBit<2401>() && int4 == pushVarClanBit<2406>() && int5 == pushVarClanBit<2407>() && int6 == pushVarClanBit<2408>()) {
                int1 = 4;
            }
            break;
        case 31:
            if (int3 == pushVarClanBit<2460>() && int7 == pushVarClanBit<2461>() && int4 == pushVarClanBit<2466>() && int5 == pushVarClanBit<2467>() && int6 == pushVarClanBit<2468>()) {
                int1 = 4;
            }
            break;
        case 32:
            if (int3 == pushVarClanBit<2470>() && int7 == pushVarClanBit<2471>() && int4 == pushVarClanBit<2476>() && int5 == pushVarClanBit<2477>() && int6 == pushVarClanBit<2478>()) {
                int1 = 4;
            }
            break;
        case 33:
            if (int3 == pushVarClanBit<2480>() && int7 == pushVarClanBit<2481>() && int4 == pushVarClanBit<2486>() && int5 == pushVarClanBit<2487>() && int6 == pushVarClanBit<2488>()) {
                int1 = 4;
            }
            break;
        case 34:
            if (int3 == pushVarClanBit<2490>() && int7 == pushVarClanBit<2491>() && int4 == pushVarClanBit<2496>() && int5 == pushVarClanBit<2497>() && int6 == pushVarClanBit<2498>()) {
                int1 = 4;
            }
            break;
        case 35:
            if (int3 == pushVarClanBit<2500>() && int7 == pushVarClanBit<2501>() && int4 == pushVarClanBit<2506>() && int5 == pushVarClanBit<2507>() && int6 == pushVarClanBit<2508>()) {
                int1 = 4;
            }
            break;
        case 41:
            if (int3 == pushVarClanBit<2410>() && int7 == pushVarClanBit<2411>() && int4 == pushVarClanBit<2416>() && int5 == pushVarClanBit<2417>() && int6 == pushVarClanBit<2418>()) {
                int1 = 4;
            }
            break;
        case 42:
            if (int3 == pushVarClanBit<2420>() && int7 == pushVarClanBit<2421>() && int4 == pushVarClanBit<2426>() && int5 == pushVarClanBit<2427>() && int6 == pushVarClanBit<2428>()) {
                int1 = 4;
            }
            break;
        case 43:
            if (int3 == pushVarClanBit<2430>() && int7 == pushVarClanBit<2431>() && int4 == pushVarClanBit<2436>() && int5 == pushVarClanBit<2437>() && int6 == pushVarClanBit<2438>()) {
                int1 = 4;
            }
            break;
        case 44:
            if (int3 == pushVarClanBit<2440>() && int7 == pushVarClanBit<2441>() && int4 == pushVarClanBit<2446>() && int5 == pushVarClanBit<2447>() && int6 == pushVarClanBit<2448>()) {
                int1 = 4;
            }
            break;
        case 45:
            if (int3 == pushVarClanBit<2450>() && int7 == pushVarClanBit<2451>() && int4 == pushVarClanBit<2456>() && int5 == pushVarClanBit<2457>() && int6 == pushVarClanBit<2458>()) {
                int1 = 4;
            }
            break;
        case 51:
            if (int3 == pushVarClanBit<2510>() && int7 == pushVarClanBit<2511>() && int4 == pushVarClanBit<2516>() && int5 == pushVarClanBit<2517>() && int6 == pushVarClanBit<2518>()) {
                int1 = 4;
            }
            break;
    }
    return int1;
}
