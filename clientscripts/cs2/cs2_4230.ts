/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4230

function cs2_4230(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    if (intArg0 < 1) {
        ifSetModel(Model.model_20542, Component.interface_495.component_495_2);
        ifSetModel(Model.model_20542, Component.interface_495.component_495_15);
        ifSetModel(Model.model_20542, Component.interface_495.component_495_28);
        ifSetModel(Model.model_20542, Component.interface_495.component_495_41);
    } else {
        ifSetModel(Model.model_20544, Component.interface_495.component_495_2);
        ifSetModel(Model.model_20544, Component.interface_495.component_495_15);
        ifSetModel(Model.model_20544, Component.interface_495.component_495_28);
        ifSetModel(Model.model_20544, Component.interface_495.component_495_41);
    }

    if (intArg1 < 1) {
        ifSetModel(Model.model_20542, Component.interface_495.component_495_3);
        ifSetModel(Model.model_20542, Component.interface_495.component_495_16);
        ifSetModel(Model.model_20542, Component.interface_495.component_495_29);
        ifSetModel(Model.model_20542, Component.interface_495.component_495_42);
    } else {
        ifSetModel(Model.model_20545, Component.interface_495.component_495_3);
        ifSetModel(Model.model_20545, Component.interface_495.component_495_16);
        ifSetModel(Model.model_20545, Component.interface_495.component_495_29);
        ifSetModel(Model.model_20545, Component.interface_495.component_495_42);
    }

    if (intArg2 < 1) {
        ifSetModel(Model.model_20542, Component.interface_495.component_495_4);
        ifSetModel(Model.model_20542, Component.interface_495.component_495_17);
        ifSetModel(Model.model_20542, Component.interface_495.component_495_30);
        ifSetModel(Model.model_20542, Component.interface_495.component_495_43);
    } else {
        ifSetModel(Model.model_20543, Component.interface_495.component_495_4);
        ifSetModel(Model.model_20543, Component.interface_495.component_495_17);
        ifSetModel(Model.model_20543, Component.interface_495.component_495_30);
        ifSetModel(Model.model_20543, Component.interface_495.component_495_43);
    }

    if (intArg4 != 10) {
        ifSetModel(Model.model_20542, Component.interface_495.component_495_53);
    } else if (intArg3 < 1) {
        ifSetModel(Model.model_20542, Component.interface_495.component_495_53);
    }
    ifSetText(tostring(intArg0), Component.interface_495.component_495_57);
    ifSetText(tostring(intArg0), Component.interface_495.component_495_60);
    ifSetText(tostring(intArg0), Component.interface_495.component_495_63);
    ifSetText(tostring(intArg0), Component.interface_495.component_495_66);
    ifSetText(tostring(intArg1), Component.interface_495.component_495_58);
    ifSetText(tostring(intArg1), Component.interface_495.component_495_61);
    ifSetText(tostring(intArg1), Component.interface_495.component_495_64);
    ifSetText(tostring(intArg1), Component.interface_495.component_495_67);
    ifSetText(tostring(intArg2), Component.interface_495.component_495_59);
    ifSetText(tostring(intArg2), Component.interface_495.component_495_62);
    ifSetText(tostring(intArg2), Component.interface_495.component_495_65);
    ifSetText(tostring(intArg2), Component.interface_495.component_495_68);

    if (intArg4 != 10) {
        ifSetText("0", Component.interface_495.component_495_69);
    } else {
        ifSetText(tostring(intArg3), Component.interface_495.component_495_69);
    }
}
