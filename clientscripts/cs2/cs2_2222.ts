/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2222

function cs2_2222(intArg0: number): void {
    switch (intArg0) {
        case 13:
            logout();
            createCreaterequest(18);
            proc_loginscreen_setactivemenu(11);
            break;
        case 84:
            if (ifGetHide(Component.interface_669.component_669_13) == 1) {
                if (varc_1088 == 1) {
                    cs2_5635("dob", "set_members_dob.ws");
                } else {
                    cs2_5637();
                }
            } else {
                cs2_2715();
            }
            break;
    }
}
