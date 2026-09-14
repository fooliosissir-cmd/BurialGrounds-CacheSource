/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_clanchat_chat_load]

function lobbyscreen_pane_clanchat_chat_load(intArg0: component): void {
    ifSetOnFriendTransmit(hook(clientscript_lobbyscreen_pane_clanchat_chat_build, "I", [intArg0]), intArg0);
    ifSetOnClanTransmit(hook(clientscript_lobbyscreen_pane_clanchat_chat_build, "I", [intArg0]), intArg0);
    ifSetOnChatTransmit(hook(clientscript_lobbyscreen_pane_clanchat_chat_build, "I", [intArg0]), intArg0);
    ifSetOnClanChannelTransmit(hook(clientscript_lobbyscreen_pane_clanchat_chat_build, "I", [intArg0]), intArg0);
    ifSetOnClanSettingsTransmit(hook(clientscript_lobbyscreen_pane_clanchat_chat_build, "I", [intArg0]), intArg0);
    proc_lobbyscreen_pane_clanchat_chat_build(intArg0);
}
