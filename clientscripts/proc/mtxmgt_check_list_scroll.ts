/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,mtxmgt_check_list_scroll]

function mtxmgt_check_list_scroll(intArg0: component, intArg1: component): void {
    let int2: number = ifGetY(intArg1) + ifGetHeight(intArg1);
    let int3: number = 0;

    if (ifGetScrollY(Component.interface_1311.component_1311_74) + ifGetHeight(Component.interface_1311.component_1311_43) < int2) {
        int3 = min(ifGetY(intArg0), ifGetScrollHeight(Component.interface_1311.component_1311_74));
        scrollbar_resize(Component.interface_1311.component_1311_78, Component.interface_1311.component_1311_74, int3);
    }
}
