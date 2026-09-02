/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1709

function cs2_1709(intArg0: stat): number {
    let int1: number = 0;

    switch (intArg0) {
        case 0:
            if (varbit_5944 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 5 + 5;
                } else {
                    int1 = int1 + 5;
                }
            } else if (varbit_5947 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 10 + 5;
                } else {
                    int1 = int1 + 10;
                }
            } else if (varbit_5953 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 15 + 5;
                } else {
                    int1 = int1 + 15;
                }
            }
            if (varbit_5967 == 1) {
                int1 = int1 + 15;
            }
            if (varbit_5968 == 1) {
                int1 = int1 + 20;
            }
            break;
        case 2:
            if (varbit_5943 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 5 + 5;
                } else {
                    int1 = int1 + 5;
                }
            } else if (varbit_5946 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 10 + 5;
                } else {
                    int1 = int1 + 10;
                }
            } else if (varbit_5952 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 15 + 5;
                } else {
                    int1 = int1 + 15;
                }
            }
            if (varbit_5967 == 1) {
                int1 = int1 + 18;
            }
            if (varbit_5968 == 1) {
                int1 = int1 + 23;
            }
            break;
        case 1:
            if (varbit_5942 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 5 + 5;
                } else {
                    int1 = int1 + 5;
                }
            } else if (varbit_5945 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 10 + 5;
                } else {
                    int1 = int1 + 10;
                }
            } else if (varbit_5951 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 15 + 5;
                } else {
                    int1 = int1 + 15;
                }
            } else if (varbit_7769 == 1) {
                int1 = int1 + 25;
            } else if (varbit_7381 == 1) {
                int1 = int1 + 25;
            }
            if (varbit_5967 == 1) {
                int1 = int1 + 20;
            }
            if (varbit_5968 == 1) {
                int1 = int1 + 25;
            }
            break;
        case 4:
            if (varbit_5960 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 5 + 5;
                } else {
                    int1 = int1 + 5;
                }
            } else if (varbit_5962 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 10 + 5;
                } else {
                    int1 = int1 + 10;
                }
            } else if (varbit_5964 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 15 + 5;
                } else {
                    int1 = int1 + 15;
                }
            } else if (varbit_7381 == 1) {
                int1 = int1 + 20;
            }
            break;
        case 6:
            if (varbit_5961 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 5 + 5;
                } else {
                    int1 = int1 + 5;
                }
            } else if (varbit_5963 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 10 + 5;
                } else {
                    int1 = int1 + 10;
                }
            } else if (varbit_5965 == 1) {
                if (invGetobj(94, 2) == Obj.rand_reward_amulet_of_hopelessness) {
                    int1 = int1 + 15 + 5;
                } else {
                    int1 = int1 + 15;
                }
            } else if (varbit_7769 == 1) {
                int1 = int1 + 20;
            }
            break;
    }
    return int1;
}
