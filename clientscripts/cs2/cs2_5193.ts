/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5193

function cs2_5193(): number {
    switch (varbit_hcape_p_city) {
        case 1:
            return varbit_hcape_p_tier_lum;
        case 2:
            return varbit_hcape_p_tier_var;
        case 3:
            return varbit_hcape_p_tier_fal;
    }
    return -1;
}
