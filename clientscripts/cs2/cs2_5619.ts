/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5619

function cs2_5619(intArg0: number): void {
    let int1: component = -1;
    let int2: component = -1;

    switch (intArg0) {
        case 0:
            int1 = Component.fmc_torch.n_layer;
            int2 = Component.fmc_torch.n_tendril;
            break;
        case 2:
            int1 = Component.fmc_torch.e_layer;
            int2 = Component.fmc_torch.e_tendril;
            break;
        case 4:
            int1 = Component.fmc_torch.s_layer;
            int2 = Component.fmc_torch.s_tendril;
            break;
        case 5:
            int1 = Component.fmc_torch.sw_layer;
            int2 = Component.fmc_torch.sw_tendril;
            break;
        case 6:
            int1 = Component.fmc_torch.w_layer;
            int2 = Component.fmc_torch.w_tendril;
            break;
        case 7:
            int1 = Component.fmc_torch.nw_layer;
            int2 = Component.fmc_torch.nw_tendril;
            break;
    }
    ifSetOnTimer(hook(cs2_5620, "II", [int1, int2]), int1);
}
