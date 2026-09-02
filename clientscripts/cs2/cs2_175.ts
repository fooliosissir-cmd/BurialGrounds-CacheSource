/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_175

function cs2_175(intArg0: number, intArg1: number): void {
    if (varp_tutorial < 1000) {
        mes("You can't do this while in the tutorial.");
        return;
    }

    if (varbit_task_priority_mode == 1) {
        mes("You cannot change your chat filters while you are in the tutorial as you might miss important messages that will help with your progress.");
        return;
    }

    switch (intArg0) {
        case 1:
            if (varc_chat_view == intArg1 && getWindowMode() >= 2) {
                varc_chat_view = -1;
                proc_subchanged();
            } else if (varc_chat_view == -1) {
                varc_chat_view = intArg1;
                proc_subchanged();
            } else {
                varc_chat_view = intArg1;
            }
            switch (intArg1) {
                case 0:
                case 2:
                    varc_1651 = 0;
                    chatSetMode(0);
                    cs2_1558(false);
                    break;
                case 4:
                    varc_1651 = 1;
                    chatSetMode(1);
                    cs2_1558(false);
                    break;
                case 7:
                    varc_1651 = 2;
                    chatSetMode(2);
                    cs2_1558(false);
                    break;
            }
            cs2_181(varc_chat_view);
            cs2_178();
            rebuildchatbox();
            cs2_89();
            break;
        case 2:
            cs2_184(intArg1, 0);
            cs2_178();
            rebuildchatbox();
            cs2_89();
            break;
        case 3:
            if (intArg1 == 3 && friendCount() < 0) {
                mes("The friends list is still loading, your selection won't take effect immediately.");
            }
            cs2_184(intArg1, 1);
            cs2_178();
            rebuildchatbox();
            cs2_89();
            break;
        case 4:
            cs2_184(intArg1, 2);
            cs2_178();
            rebuildchatbox();
            cs2_89();
            break;
        case 5:
            cs2_184(intArg1, 3);
            cs2_178();
            rebuildchatbox();
            cs2_89();
            break;
    }
}
