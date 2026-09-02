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
            if (int3 == loadClanVarbit<2210>() && int7 == loadClanVarbit<2211>() && int4 == loadClanVarbit<2216>() && int5 == loadClanVarbit<2217>() && int6 == loadClanVarbit<2218>()) {
                int1 = 4;
            }
            break;
        case 101:
            if (int3 == loadClanVarbit<2220>() && int7 == loadClanVarbit<2221>() && int4 == loadClanVarbit<2226>() && int5 == loadClanVarbit<2227>() && int6 == loadClanVarbit<2228>()) {
                int1 = 4;
            }
            break;
        case 102:
            if (int3 == loadClanVarbit<2240>() && int7 == loadClanVarbit<2241>() && int4 == loadClanVarbit<2246>() && int5 == loadClanVarbit<2247>() && int6 == loadClanVarbit<2248>()) {
                int1 = 4;
            }
            break;
        case 103:
            if (int3 == loadClanVarbit<2190>() && int7 == loadClanVarbit<2191>() && int4 == loadClanVarbit<2196>() && int5 == loadClanVarbit<2197>() && int6 == loadClanVarbit<2198>()) {
                int1 = 4;
            }
            break;
        case 104:
            if (int3 == loadClanVarbit<2230>() && int7 == loadClanVarbit<2231>() && int4 == loadClanVarbit<2236>() && int5 == loadClanVarbit<2237>() && int6 == loadClanVarbit<2238>()) {
                int1 = 4;
            }
            break;
        case 105:
            if (int3 == loadClanVarbit<2200>() && int7 == loadClanVarbit<2201>() && int4 == loadClanVarbit<2206>() && int5 == loadClanVarbit<2207>() && int6 == loadClanVarbit<2208>()) {
                int1 = 4;
            }
            break;
        case 106:
            if (int3 == loadClanVarbit<2260>() && int7 == loadClanVarbit<2261>() && int4 == loadClanVarbit<2266>() && int5 == loadClanVarbit<2267>() && int6 == loadClanVarbit<2268>()) {
                int1 = 4;
            }
            break;
        case 107:
            if (int3 == loadClanVarbit<2270>() && int7 == loadClanVarbit<2271>() && int4 == loadClanVarbit<2276>() && int5 == loadClanVarbit<2277>() && int6 == loadClanVarbit<2278>()) {
                int1 = 4;
            }
            break;
        case 108:
            if (int3 == loadClanVarbit<2280>() && int7 == loadClanVarbit<2281>() && int4 == loadClanVarbit<2286>() && int5 == loadClanVarbit<2287>() && int6 == loadClanVarbit<2288>()) {
                int1 = 4;
            }
            break;
        case 109:
            if (int3 == loadClanVarbit<2250>() && int7 == loadClanVarbit<2251>() && int4 == loadClanVarbit<2256>() && int5 == loadClanVarbit<2257>() && int6 == loadClanVarbit<2258>()) {
                int1 = 4;
            }
            break;
        case 110:
            if (int3 == loadClanVarbit<2290>() && int7 == loadClanVarbit<2291>() && int4 == loadClanVarbit<2296>() && int5 == loadClanVarbit<2297>() && int6 == loadClanVarbit<2298>()) {
                int1 = 4;
            }
            break;
        case 111:
            if (int3 == loadClanVarbit<2300>() && int7 == loadClanVarbit<2301>() && int4 == loadClanVarbit<2306>() && int5 == loadClanVarbit<2307>() && int6 == loadClanVarbit<2308>()) {
                int1 = 4;
            }
            break;
        case 112:
            if (int3 == loadClanVarbit<2310>() && int7 == loadClanVarbit<2311>() && int4 == loadClanVarbit<2316>() && int5 == loadClanVarbit<2317>() && int6 == loadClanVarbit<2318>()) {
                int1 = 4;
            }
            break;
        case 113:
            if (int3 == loadClanVarbit<2320>() && int7 == loadClanVarbit<2321>() && int4 == loadClanVarbit<2326>() && int5 == loadClanVarbit<2327>() && int6 == loadClanVarbit<2328>()) {
                int1 = 4;
            }
            break;
        case 21:
            if (int3 == loadClanVarbit<2330>() && int7 == loadClanVarbit<2331>() && int4 == loadClanVarbit<2336>() && int5 == loadClanVarbit<2337>() && int6 == loadClanVarbit<2338>()) {
                int1 = 4;
            }
            break;
        case 22:
            if (int3 == loadClanVarbit<2340>() && int7 == loadClanVarbit<2341>() && int4 == loadClanVarbit<2346>() && int5 == loadClanVarbit<2347>() && int6 == loadClanVarbit<2348>()) {
                int1 = 4;
            }
            break;
        case 23:
            if (int3 == loadClanVarbit<2350>() && int7 == loadClanVarbit<2351>() && int4 == loadClanVarbit<2356>() && int5 == loadClanVarbit<2357>() && int6 == loadClanVarbit<2358>()) {
                int1 = 4;
            }
            break;
        case 24:
            if (int3 == loadClanVarbit<2360>() && int7 == loadClanVarbit<2361>() && int4 == loadClanVarbit<2366>() && int5 == loadClanVarbit<2367>() && int6 == loadClanVarbit<2368>()) {
                int1 = 4;
            }
            break;
        case 25:
            if (int3 == loadClanVarbit<2370>() && int7 == loadClanVarbit<2371>() && int4 == loadClanVarbit<2376>() && int5 == loadClanVarbit<2377>() && int6 == loadClanVarbit<2378>()) {
                int1 = 4;
            }
            break;
        case 26:
            if (int3 == loadClanVarbit<2380>() && int7 == loadClanVarbit<2381>() && int4 == loadClanVarbit<2386>() && int5 == loadClanVarbit<2387>() && int6 == loadClanVarbit<2388>()) {
                int1 = 4;
            }
            break;
        case 27:
            if (int3 == loadClanVarbit<2390>() && int7 == loadClanVarbit<2391>() && int4 == loadClanVarbit<2396>() && int5 == loadClanVarbit<2397>() && int6 == loadClanVarbit<2398>()) {
                int1 = 4;
            }
            break;
        case 28:
            if (int3 == loadClanVarbit<2400>() && int7 == loadClanVarbit<2401>() && int4 == loadClanVarbit<2406>() && int5 == loadClanVarbit<2407>() && int6 == loadClanVarbit<2408>()) {
                int1 = 4;
            }
            break;
        case 31:
            if (int3 == loadClanVarbit<2460>() && int7 == loadClanVarbit<2461>() && int4 == loadClanVarbit<2466>() && int5 == loadClanVarbit<2467>() && int6 == loadClanVarbit<2468>()) {
                int1 = 4;
            }
            break;
        case 32:
            if (int3 == loadClanVarbit<2470>() && int7 == loadClanVarbit<2471>() && int4 == loadClanVarbit<2476>() && int5 == loadClanVarbit<2477>() && int6 == loadClanVarbit<2478>()) {
                int1 = 4;
            }
            break;
        case 33:
            if (int3 == loadClanVarbit<2480>() && int7 == loadClanVarbit<2481>() && int4 == loadClanVarbit<2486>() && int5 == loadClanVarbit<2487>() && int6 == loadClanVarbit<2488>()) {
                int1 = 4;
            }
            break;
        case 34:
            if (int3 == loadClanVarbit<2490>() && int7 == loadClanVarbit<2491>() && int4 == loadClanVarbit<2496>() && int5 == loadClanVarbit<2497>() && int6 == loadClanVarbit<2498>()) {
                int1 = 4;
            }
            break;
        case 35:
            if (int3 == loadClanVarbit<2500>() && int7 == loadClanVarbit<2501>() && int4 == loadClanVarbit<2506>() && int5 == loadClanVarbit<2507>() && int6 == loadClanVarbit<2508>()) {
                int1 = 4;
            }
            break;
        case 41:
            if (int3 == loadClanVarbit<2410>() && int7 == loadClanVarbit<2411>() && int4 == loadClanVarbit<2416>() && int5 == loadClanVarbit<2417>() && int6 == loadClanVarbit<2418>()) {
                int1 = 4;
            }
            break;
        case 42:
            if (int3 == loadClanVarbit<2420>() && int7 == loadClanVarbit<2421>() && int4 == loadClanVarbit<2426>() && int5 == loadClanVarbit<2427>() && int6 == loadClanVarbit<2428>()) {
                int1 = 4;
            }
            break;
        case 43:
            if (int3 == loadClanVarbit<2430>() && int7 == loadClanVarbit<2431>() && int4 == loadClanVarbit<2436>() && int5 == loadClanVarbit<2437>() && int6 == loadClanVarbit<2438>()) {
                int1 = 4;
            }
            break;
        case 44:
            if (int3 == loadClanVarbit<2440>() && int7 == loadClanVarbit<2441>() && int4 == loadClanVarbit<2446>() && int5 == loadClanVarbit<2447>() && int6 == loadClanVarbit<2448>()) {
                int1 = 4;
            }
            break;
        case 45:
            if (int3 == loadClanVarbit<2450>() && int7 == loadClanVarbit<2451>() && int4 == loadClanVarbit<2456>() && int5 == loadClanVarbit<2457>() && int6 == loadClanVarbit<2458>()) {
                int1 = 4;
            }
            break;
        case 51:
            if (int3 == loadClanVarbit<2510>() && int7 == loadClanVarbit<2511>() && int4 == loadClanVarbit<2516>() && int5 == loadClanVarbit<2517>() && int6 == loadClanVarbit<2518>()) {
                int1 = 4;
            }
            break;
    }
    return int1;
}
