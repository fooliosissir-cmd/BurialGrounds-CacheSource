/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,cruc_rewards_init]

function cruc_rewards_init(): void {
    proc_cruc_rewards_tab_select(1);
    varc_cruc_rewards_jingle_antispam = 0;
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 1), Component.cruc_rewards.title_name_1);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 1)), Component.cruc_rewards.cost_value_1);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 2), Component.cruc_rewards.title_name_2);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 2)), Component.cruc_rewards.cost_value_2);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 3), Component.cruc_rewards.title_name_3);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 3)), Component.cruc_rewards.cost_value_3);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 4), Component.cruc_rewards.title_name_4);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 4)), Component.cruc_rewards.cost_value_4);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 5), Component.cruc_rewards.title_name_5);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 5)), Component.cruc_rewards.cost_value_5);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 6), Component.cruc_rewards.title_name_6);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 6)), Component.cruc_rewards.cost_value_6);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 7), Component.cruc_rewards.title_name_7);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 7)), Component.cruc_rewards.cost_value_7);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 8), Component.cruc_rewards.title_name_8);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 8)), Component.cruc_rewards.cost_value_8);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 9), Component.cruc_rewards.title_name_9);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 9)), Component.cruc_rewards.cost_value_9);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 10), Component.cruc_rewards.title_name_10);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 10)), Component.cruc_rewards.cost_value_10);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 11), Component.cruc_rewards.title_name_11);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 11)), Component.cruc_rewards.cost_value_11);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 12), Component.cruc_rewards.title_name_12);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 12)), Component.cruc_rewards.cost_value_12);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 13), Component.cruc_rewards.title_name_13);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 13)), Component.cruc_rewards.cost_value_13);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 14), Component.cruc_rewards.title_name_14);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 14)), Component.cruc_rewards.cost_value_14);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 15), Component.cruc_rewards.title_name_15);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 15)), Component.cruc_rewards.cost_value_15);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 16), Component.cruc_rewards.title_name_16);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 16)), Component.cruc_rewards.cost_value_16);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 17), Component.cruc_rewards.title_name_17);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 17)), Component.cruc_rewards.cost_value_17);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 18), Component.cruc_rewards.title_name_18);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 18)), Component.cruc_rewards.cost_value_18);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 19), Component.cruc_rewards.title_name_19);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 19)), Component.cruc_rewards.cost_value_19);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_death_titles, 20), Component.cruc_rewards.title_name_20);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_title_costs, 20)), Component.cruc_rewards.cost_value_20);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_jingle_names, 1), Component.cruc_rewards.jingle_name_1);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_jingle_costs, 1)), Component.cruc_rewards.jingle_cost_1);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_jingle_names, 2), Component.cruc_rewards.jingle_name_2);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_jingle_costs, 2)), Component.cruc_rewards.jingle_cost_2);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_jingle_names, 3), Component.cruc_rewards.jingle_name_3);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_jingle_costs, 3)), Component.cruc_rewards.jingle_cost_3);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_jingle_names, 4), Component.cruc_rewards.jingle_name_4);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_jingle_costs, 4)), Component.cruc_rewards.jingle_cost_4);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_jingle_names, 5), Component.cruc_rewards.jingle_name_5);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_jingle_costs, 5)), Component.cruc_rewards.jingle_cost_5);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_jingle_names, 6), Component.cruc_rewards.jingle_name_6);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_jingle_costs, 6)), Component.cruc_rewards.jingle_cost_6);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_jingle_names, 7), Component.cruc_rewards.jingle_name_7);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_jingle_costs, 7)), Component.cruc_rewards.jingle_cost_7);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_jingle_names, 8), Component.cruc_rewards.jingle_name_8);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_jingle_costs, 8)), Component.cruc_rewards.jingle_cost_8);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_jingle_names, 9), Component.cruc_rewards.jingle_name_9);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_jingle_costs, 9)), Component.cruc_rewards.jingle_cost_9);
    ifSetText(enumOp(type_int, type_string, Enum.cruc_jingle_names, 10), Component.cruc_rewards.jingle_name_10);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_jingle_costs, 10)), Component.cruc_rewards.jingle_cost_10);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_extra_costs, 1)), Component.cruc_rewards.extra_cost_1);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_extra_costs, 2)), Component.cruc_rewards.extra_cost_2);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_extra_costs, 3)), Component.cruc_rewards.extra_cost_3);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_extra_costs, 4)), Component.cruc_rewards.extra_cost_4);
    ifSetText(tostring(enumOp(type_int, type_int, Enum.cruc_extra_costs, 5)), Component.cruc_rewards.extra_cost_5);
    cs2_6277(1, 1, 1);
}
