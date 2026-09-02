/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tog_update_interface]

function tog_update_interface(): void {
    ifSetText(tostring(varbit_tog_tears_collected), Component.tog_water_bowl.count);

    if (varbit_tog_tears_collected == 0) {
        ifSetModel(-1, Component.tog_water_bowl.drip);
    } else if (varbit_tog_tears_collected == 1) {
        ifSetModel(Model.model_6545, Component.tog_water_bowl.drip);
    } else if (varbit_tog_tears_collected < 4) {
        ifSetModel(Model.model_6547, Component.tog_water_bowl.drip);
    } else if (varbit_tog_tears_collected < 7) {
        ifSetModel(Model.model_6548, Component.tog_water_bowl.drip);
    } else if (varbit_tog_tears_collected < 11) {
        ifSetModel(Model.model_6549, Component.tog_water_bowl.drip);
    } else if (varbit_tog_tears_collected < 16) {
        ifSetModel(Model.model_6550, Component.tog_water_bowl.drip);
    } else if (varbit_tog_tears_collected < 22) {
        ifSetModel(Model.model_6551, Component.tog_water_bowl.drip);
    } else if (varbit_tog_tears_collected < 29) {
        ifSetModel(Model.model_6552, Component.tog_water_bowl.drip);
    } else if (varbit_tog_tears_collected < 37) {
        ifSetModel(Model.model_6553, Component.tog_water_bowl.drip);
    } else if (varbit_tog_tears_collected < 46) {
        ifSetModel(Model.model_6554, Component.tog_water_bowl.drip);
    } else {
        ifSetModel(Model.model_6546, Component.tog_water_bowl.drip);
    }

    if (varbit_tog_time_left_tenths == 0) {
        ifSetModel(-1, Component.tog_water_bowl.time_bar);
    } else if (varbit_tog_time_left_tenths == 1) {
        ifSetModel(Model.model_6557, Component.tog_water_bowl.time_bar);
    } else if (varbit_tog_time_left_tenths == 2) {
        ifSetModel(Model.model_6559, Component.tog_water_bowl.time_bar);
    } else if (varbit_tog_time_left_tenths == 3) {
        ifSetModel(Model.model_6560, Component.tog_water_bowl.time_bar);
    } else if (varbit_tog_time_left_tenths == 4) {
        ifSetModel(Model.model_6561, Component.tog_water_bowl.time_bar);
    } else if (varbit_tog_time_left_tenths == 5) {
        ifSetModel(Model.model_6562, Component.tog_water_bowl.time_bar);
    } else if (varbit_tog_time_left_tenths == 6) {
        ifSetModel(Model.model_6563, Component.tog_water_bowl.time_bar);
    } else if (varbit_tog_time_left_tenths == 7) {
        ifSetModel(Model.model_6564, Component.tog_water_bowl.time_bar);
    } else if (varbit_tog_time_left_tenths == 8) {
        ifSetModel(Model.model_6565, Component.tog_water_bowl.time_bar);
    } else if (varbit_tog_time_left_tenths == 9) {
        ifSetModel(Model.model_6566, Component.tog_water_bowl.time_bar);
    } else {
        ifSetModel(Model.model_6558, Component.tog_water_bowl.time_bar);
    }
}
