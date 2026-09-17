// GENERATED - do not edit by hand.
// Ambient declarations for decompiled CS2 clientscripts.
// Regenerate with: tools cs2 declarations <dir>

/** The five global integer arrays scripts share. */
declare const array0: number[];
declare const array1: number[];
declare const array2: number[];
declare const array3: number[];
declare const array4: number[];

/** Allocates one of the global arrays. */
declare function defineArray(array: number, elementType: number, size: number): void;

/**
 * Binds a callback to a component event.
 *
 * `spec` is the compiler's type string, one character per bound
 * argument - `i` int, `s` string, `I` component, `o` obj, and so on -
 * with a trailing `Y` when a trigger list follows.
 */
declare function hook(
    script: Function,
    spec: string,
    args: unknown[],
    triggers?: number[],
): unknown;

/** Clears a component event. */
declare function noHook(spec: string): unknown;

/** Throws away a value a call left on the stack. */
declare function discard(value: unknown): void;

/** `x != 0`, compiled as the dedicated truthiness branch. */
declare function isTruthy(value: number): boolean;

/** `x == 0`, compiled as the dedicated truthiness branch. */
declare function isFalsy(value: number): boolean;

/** An unstructured jump, used where a script's shape has no direct form. */
declare function goto(label: string): void;

/**
 * Composite values, spelled out rather than left as packed integers.
 * Each one packs straight back to the integer the bytecode holds.
 *
 * An id goes through its gameval constant instead - `Obj.abyssal_whip`,
 * `Component.chatbox.dialogue` - which says what it is without a
 * wrapper. Only `colour` and `coord` are still written this way, having
 * no name to carry them; the rest are here because an older dump wrote
 * them and still has to compile.
 */
declare function component(interfaceId: number, component?: number): number;
declare function coord(x: number, y?: number, level?: number): number;
declare function tile(x: number, y?: number, plane?: number): number;
declare function obj(id: number): number;
declare function item(id: number): number;
declare function npc(id: number): number;
declare function loc(id: number): number;
declare function seq(id: number): number;
declare function spotanim(id: number): number;
declare function enumId(id: number): number;
declare function struct(id: number): number;
declare function param(id: number): number;
declare function inv(id: number): number;
declare function stat(id: number): number;
declare function skill(id: number): number;
declare function colour(rgb: number): number;
declare function graphic(id: number): number;
declare function interfaceId(id: number): number;
declare function sound(id: number): number;
declare function midi(id: number): number;
declare function cursor(id: number): number;
declare function mapelement(id: number): number;
declare function quest(id: number): number;
declare function worldmap(id: number): number;
declare function model(id: number): number;

/**
 * A clientscript referred to by id rather than called. The script's own
 * function is the name, so renaming the function renames the reference.
 */
declare function scriptId(script: Function | number): number;

/** What an integer means, where the corpus agrees on one thing. */
type obj = number;
type npc = number;
type loc = number;
type seq = number;
type spotanim = number;
type Enum = number;
type struct = number;
type param = number;
type inv = number;
type graphic = number;
type Interface = number;
type component = number;
type sound = number;
type midi = number;
type cursor = number;
type mapelement = number;
type quest = number;
type worldmap = number;
type model = number;
type coord = number;
type stat = number;
type colour = number;

/** The type codes a compiler writes into `enumOp` and hook formats. */
declare const type_int: number;
declare const type_boolean: number;
declare const type_string: number;
declare const type_obj: number;
declare const type_npc: number;
declare const type_loc: number;
declare const type_component: number;
declare const type_coord: number;
declare const type_graphic: number;
declare const type_enum: number;
declare const type_seq: number;
declare const type_spotanim: number;
declare const type_stat: number;
declare const type_colour: number;
declare const type_struct: number;
declare const type_midi: number;
declare const type_sound: number;
declare const type_inv: number;
declare const type_model: number;
declare const type_interface: number;
declare const type_mapelement: number;

/**
 * What the client substitutes into a hook's arguments when it fires it.
 * A hook is bound long before it runs, so these stand in for the values
 * that only exist at the moment of the event.
 */
/** mouse x when the event fired (-2147483647) */ declare const event_mousex: number;
/** mouse y when the event fired (-2147483646) */ declare const event_mousey: number;
/** the component the event came from (-2147483645) */ declare const event_com: component;
/** which of the component's options was clicked (-2147483644) */ declare const event_opindex: number;
/** the slot within the source component (-2147483643) */ declare const event_comsubid: number;
/** the component the event was aimed at (-2147483642) */ declare const event_com2: component;
/** the slot within that component (-2147483641) */ declare const event_comsubid2: number;
/** the key that was pressed (-2147483640) */ declare const event_keycode: number;
/** the character it typed (-2147483639) */ declare const event_keychar: number;

/**
 * The params a `*_PARAM` opcode yields a string for; every other id yields an int.
 *
 * A param's type belongs to its param definition rather than to any script, and the
 * bytecode of a lookup does not say which stack it pushed onto - so this is the one thing
 * about compiling this folder that no script's own source states. It is what lets the
 * folder be compiled back with nothing but the folder; see docs/cache-source.md.
 */
type StringParam =
    | 528
    | 529
    | 530
    | 531
    | 555
    | 556
    | 596
    | 690
    | 714
    | 715
    | 716
    | 717
    | 718
    | 734
    | 738
    | 792
    | 845
    | 846
    | 849
    | 857
    | 924
    | 925
    | 935
    | 941
    | 948
    | 949
    | 950
    | 951
    | 1077
    | 1078
    | 1089
    | 1090
    | 1139
    | 1140
    | 1150
    | 1151
    | 1152
    | 1160
    | 1211
    | 1212
    | 1264
    | 1265
    | 1266
    | 1273
    | 1274
    | 1275
    | 1276
    | 1277
    | 1278
    | 1279
    | 1280
    | 1281
    | 1291
    | 1292
    | 1315
    | 1342
    | 1343
    | 1367
    | 1368
    | 1419
    | 1427
    | 1447
    | 1463
    | 1464
    | 1566
    | 1570
    | 1574
    | 1578
    | 1615
    | 1879
    | 1880
    | 1899
    | 1900
    | 1902
    | 1903
    | 1905
    | 1906
    | 1908
    | 1909
    | 1930
    | 1931
    | 1974
    | 1975
    | 1985
    | 1986
    | 1987
    | 1994
    | 1995
    | 2095
    | 2102
    | 2103
    | 2104
    | 2105
    | 2106
    | 2107
    | 2108
    | 2109
    | 2110
    | 2111
    | 2112
    | 2113
    | 2114
    | 2115
    | 2116
    | 2184
    | 2210
    | 2211
    | 2216
    | 2225
    | 2251
    | 2252
    | 2253
    | 2254
    | 2255
    | 2256
    | 2257
    | 2258
    | 2259
    | 2260
    | 2358
    | 2376
    | 2377
    | 2380
    | 2392
    | 2522
    | 2524
    | 2533
    | 2548
    | 2551
    | 2559
    | 2560;

/** `ACTIVECHATPHRASE_PREPARE` (opcode 187) */
declare function activeChatPhrasePrepare<Operand = void>(arg0: number | boolean): void;
/** `ACTIVECHATPHRASE_SENDCLAN` (opcode 922) */
declare function activeChatPhraseSendClan<Operand = void>(): void;
/** `ACTIVECHATPHRASE_SENDCLANCHANNEL_AFFINED` (opcode 285) */
declare function activeChatPhraseSendClanChannelAffined<Operand = void>(): void;
/** `ACTIVECHATPHRASE_SENDCLANCHANNEL_LISTENED` (opcode 663) */
declare function activeChatPhraseSendClanChannelListened<Operand = void>(): void;
/** `ACTIVECHATPHRASE_SENDPRIVATE` (opcode 909) */
declare function activeChatPhraseSendprivate<Operand = void>(arg0: string): void;
/** `ACTIVECHATPHRASE_SENDPUBLIC` (opcode 329) */
declare function activeChatPhraseSendpublic<Operand = void>(): void;
/** `ACTIVECHATPHRASE_SETDYNAMICINT` (opcode 109) */
declare function activeChatPhraseSetdynamicint<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `ACTIVECHATPHRASE_SETDYNAMICOBJ` (opcode 217) */
declare function activeChatPhraseSetdynamicobj<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `ACTIVECLANCHANNEL_FIND_AFFINED` (opcode 347) */
declare function activeClanChannelFindAffined<Operand = void>(): number;
/** `ACTIVECLANCHANNEL_FIND_LISTENED` (opcode 884) */
declare function activeClanChannelFindListened<Operand = void>(): number;
/** `ACTIVECLANCHANNEL_GETCLANNAME` (opcode 370) */
declare function activeClanChannelGetClanName<Operand = void>(): string;
/** `ACTIVECLANCHANNEL_GETRANKKICK` (opcode 907) */
declare function activeClanChannelGetRankKick<Operand = void>(): number;
/** `ACTIVECLANCHANNEL_GETUSERCOUNT` (opcode 399) */
declare function activeClanChannelGetUserCount<Operand = void>(): number;
/** `ACTIVECLANCHANNEL_GETUSERDISPLAYNAME` (opcode 444) */
declare function activeClanChannelGetUserDisplayName<Operand = void>(arg0: number | boolean): string;
/** `ACTIVECLANCHANNEL_GETUSERRANK` (opcode 673) */
declare function activeClanChannelGetUserRank<Operand = void>(arg0: number | boolean): number;
/** `ACTIVECLANCHANNEL_GETUSERSLOT` (opcode 897) */
declare function activeClanChannelGetUserSlot<Operand = void>(arg0: string): number;
/** `ACTIVECLANCHANNEL_GETUSERWORLD` (opcode 23) */
declare function activeClanChannelGetUserWorld<Operand = void>(arg0: number | boolean): number;
/** `ACTIVECLANCHANNEL_GETRANKTALK` (opcode 489) */
declare function activeClanChannelGetranktalk<Operand = void>(): number;
/** `ACTIVECLANCHANNEL_GETSORTEDUSERSLOT` (opcode 5) */
declare function activeClanChannelGetsorteduserslot<Operand = void>(): void;
/** `ACTIVECLANCHANNEL_KICKUSER` (opcode 350) */
declare function activeClanChannelKickUser<Operand = void>(arg0: number | boolean): void;
/** `ACTIVECLANSETTINGS_FIND_AFFINED` (opcode 452) */
declare function activeClanSettingsFindAffined<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_FIND_LISTENED` (opcode 833) */
declare function activeClanSettingsFindListened<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_GETAFFINEDCOUNT` (opcode 706) */
declare function activeClanSettingsGetAffinedCount<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME` (opcode 541) */
declare function activeClanSettingsGetAffinedDisplayName<Operand = void>(arg0: number | boolean): string;
/** `ACTIVECLANSETTINGS_GETAFFINEDRANK` (opcode 166) */
declare function activeClanSettingsGetAffinedRank<Operand = void>(arg0: number | boolean): number;
/** `ACTIVECLANSETTINGS_GETAFFINEDSLOT` (opcode 557) */
declare function activeClanSettingsGetAffinedSlot<Operand = void>(arg0: string): number;
/** `ACTIVECLANSETTINGS_GETCLANNAME` (opcode 815) */
declare function activeClanSettingsGetClanName<Operand = void>(): string;
/** `ACTIVECLANSETTINGS_GETRANKKICK` (opcode 894) */
declare function activeClanSettingsGetRankKick<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_GETAFFINEDEXTRAINFO` (opcode 861) */
declare function activeClanSettingsGetaffinedextrainfo<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): number;
/** `ACTIVECLANSETTINGS_GETAFFINEDJOINRUNEDAY` (opcode 838) */
declare function activeClanSettingsGetaffinedjoinruneday<Operand = void>(arg0: number | boolean): number;
/** `ACTIVECLANSETTINGS_GETALLOWUNAFFINED` (opcode 843) */
declare function activeClanSettingsGetallowunaffined<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_GETBANNEDCOUNT` (opcode 411) */
declare function activeClanSettingsGetbannedcount<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_GETBANNEDDISPLAYNAME` (opcode 746) */
declare function activeClanSettingsGetbanneddisplayname<Operand = void>(arg0: number | boolean): string;
/** `ACTIVECLANSETTINGS_GETCOINSHARE` (opcode 200) */
declare function activeClanSettingsGetcoinshare<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT` (opcode 962) */
declare function activeClanSettingsGetcurrentownerSlot<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_GETRANKLOOTSHARE` (opcode 549) */
declare function activeClanSettingsGetranklootshare<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_GETRANKTALK` (opcode 91) */
declare function activeClanSettingsGetranktalk<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_GETREPLACEMENTOWNER_SLOT` (opcode 7) */
declare function activeClanSettingsGetreplacementownerSlot<Operand = void>(): number;
/** `ACTIVECLANSETTINGS_GETSORTEDAFFINEDSLOT` (opcode 956) */
declare function activeClanSettingsGetsortedaffinedslot<Operand = void>(): void;
/** `ADDPERCENT` (opcode 890) */
declare function addpercent<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `AFFILIATE` (opcode 25) */
declare function affiliate<Operand = void>(): number;
/** `APPEND` (opcode 286) */
declare function append<Operand = void>(arg0: string, arg1: string): string;
/** `APPEND_CHAR` (opcode 701) */
declare function appendChar<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): string;
/** `APPEND_NUM` (opcode 310) */
declare function appendNum<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): string;
/** `APPEND_SIGNNUM` (opcode 573) */
declare function appendSignnum<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): string;
/** `APPLET_HASFOCUS` (opcode 781) */
declare function appletHasFocus<Operand = void>(): number;
/** `ARRAY_SORT` (opcode 87) */
declare function arraySort<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `AUTOSETUP_BLACKFLAGLAST` (opcode 773) */
declare function autosetupBlackflaglast<Operand = void>(): void;
/** `AUTOSETUP_DOSETUP` (opcode 1005) */
declare function autosetupDosetup<Operand = void>(): [number, number];
/** `AUTOSETUP_GETLEVEL` (opcode 952) */
declare function autosetupGetLevel<Operand = void>(): number;
/** `AUTOSETUP_SETCUSTOM` (opcode 312) */
declare function autosetupSetCustom<Operand = void>(): void;
/** `AUTOSETUP_SETHIGH` (opcode 398) */
declare function autosetupSetHigh<Operand = void>(): void;
/** `AUTOSETUP_SETLOW` (opcode 225) */
declare function autosetupSetLow<Operand = void>(): void;
/** `AUTOSETUP_SETMIN` (opcode 955) */
declare function autosetupSetMin<Operand = void>(): void;
/** `AUTOSETUP_SETMEDIUM` (opcode 837) */
declare function autosetupSetmedium<Operand = void>(): void;
/** `BAS_GETANIM_READY` (opcode 456) */
declare function basGetAnimReady<Operand = void>(arg0: number | boolean): number;
/** `BASECOLOUR` (opcode 156) */
declare function baseColour<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `BASEIDKIT` (opcode 613) */
declare function baseIdkit<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `BOOST_ADVERT_AVAILABLE` (opcode 337) */
declare function boostAdvertAvailable<Operand = void>(arg0: string): number;
/** `BOOST_ADVERT_EXISTS` (opcode 420) */
declare function boostAdvertExists<Operand = void>(arg0: string): number;
/** `BOOST_ADVERT_LAUNCH` (opcode 63) */
declare function boostAdvertLaunch<Operand = void>(arg0: string): void;
/** `BUG_REPORT` (opcode 558) */
declare function bugReport<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): void;
/** `CAM2_ISENABLED` (opcode 151) */
declare function cam2IsEnabled<Operand = void>(): number;
/** `CAM_DEC_X` (opcode 868) */
declare function camDecX<Operand = void>(): void;
/** `CAM_DEC_Y` (opcode 8) */
declare function camDecY<Operand = void>(): void;
/** `CAM_FOLLOWCOORD` (opcode 722) */
declare function camFollowcoord<Operand = void>(arg0: coord | boolean): void;
/** `CAM_FORCEANGLE` (opcode 144) */
declare function camForceAngle<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CAM_GETANGLE_XA` (opcode 493) */
declare function camGetAngleXa<Operand = void>(): number;
/** `CAM_GETANGLE_YA` (opcode 161) */
declare function camGetAngleYa<Operand = void>(): number;
/** `CAM_GETFOLLOWHEIGHT` (opcode 931) */
declare function camGetfollowheight<Operand = void>(): number;
/** `CAM_INC_X` (opcode 893) */
declare function camIncX<Operand = void>(): void;
/** `CAM_INC_Y` (opcode 483) */
declare function camIncY<Operand = void>(): void;
/** `CAM_LOOKAT` (opcode 99) */
declare function camLookat<Operand = void>(arg0: coord | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `CAM_MOVEALONG` (opcode 107) */
declare function camMovealong<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: number | boolean, arg5: number | boolean): void;
/** `CAM_MOVETO` (opcode 570) */
declare function camMoveto<Operand = void>(arg0: coord | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `CAM_RESET` (opcode 940) */
declare function camReset<Operand = void>(): void;
/** `CAM_SETFOLLOWHEIGHT` (opcode 155) */
declare function camSetfollowheight<Operand = void>(arg0: number | boolean): void;
/** `CAM_SMOOTHRESET` (opcode 396) */
declare function camSmoothreset<Operand = void>(): void;
/** `CC_CALLONRESIZE` (opcode 694) */
declare function ccCallonresize<Operand = void>(): void;
/** `CC_CLEAROPS` (opcode 611) */
declare function ccClearops<Operand = void>(): void;
/** `CC_CLEARSCRIPTHOOKS` (opcode 702) */
declare function ccClearscripthooks<Operand = void>(): void;
/** `CC_CREATE` (opcode 113) */
declare function ccCreate<Operand = void>(arg0: component | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `CC_DELETE` (opcode 981) */
declare function ccDelete<Operand = void>(): void;
/** `CC_DELETEALL` (opcode 572) */
declare function ccDeleteAll<Operand = void>(arg0: component | boolean): void;
/** `CC_DRAGPICKUP` (opcode 259) */
declare function ccDragpickup<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_FIND` (opcode 677) */
declare function ccFind<Operand = void>(arg0: component | boolean, arg1: number | boolean): number;
/** `CC_GET2DANGLE` (opcode 723) */
declare function ccGet2dangle<Operand = void>(): number;
/** `CC_GETCOLOUR` (opcode 451) */
declare function ccGetColour<Operand = void>(): number;
/** `CC_GETFONTGRAPHIC` (opcode 160) */
declare function ccGetFontGraphic<Operand = void>(): number;
/** `CC_GETGRAPHIC` (opcode 449) */
declare function ccGetGraphic<Operand = void>(): number;
/** `CC_GETHEIGHT` (opcode 796) */
declare function ccGetHeight<Operand = void>(): number;
/** `CC_GETHIDE` (opcode 747) */
declare function ccGetHide<Operand = void>(): number;
/** `CC_GETID` (opcode 620) */
declare function ccGetId<Operand = void>(): number;
/** `CC_GETINVCOUNT` (opcode 3) */
declare function ccGetInvCount<Operand = void>(): number;
/** `CC_GETINVOBJECT` (opcode 36) */
declare function ccGetInvObject<Operand = void>(): number;
/** `CC_GETLAYER` (opcode 204) */
declare function ccGetLayer<Operand = void>(): number;
/** `CC_GETMODEL` (opcode 664) */
declare function ccGetModel<Operand = void>(): number;
/** `CC_GETMODELANGLE_X` (opcode 491) */
declare function ccGetModelAngleX<Operand = void>(): number;
/** `CC_GETMODELANGLE_Y` (opcode 555) */
declare function ccGetModelAngleY<Operand = void>(): number;
/** `CC_GETMODELANGLE_Z` (opcode 648) */
declare function ccGetModelAngleZ<Operand = void>(): number;
/** `CC_GETMODELZOOM` (opcode 0) */
declare function ccGetModelZoom<Operand = void>(): number;
/** `CC_GETOP` (opcode 75) */
declare function ccGetOp<Operand = void>(arg0: number | boolean): string;
/** `CC_GETOPBASE` (opcode 125) */
declare function ccGetOpBase<Operand = void>(): string;
/** `CC_GETPARENTLAYER` (opcode 626) */
declare function ccGetParentLayer<Operand = void>(): number;
/** `CC_GETSCROLLHEIGHT` (opcode 829) */
declare function ccGetScrollHeight<Operand = void>(): number;
/** `CC_GETSCROLLWIDTH` (opcode 680) */
declare function ccGetScrollWidth<Operand = void>(): number;
/** `CC_GETSCROLLX` (opcode 494) */
declare function ccGetScrollX<Operand = void>(): number;
/** `CC_GETSCROLLY` (opcode 755) */
declare function ccGetScrollY<Operand = void>(): number;
/** `CC_GETTARGETMASK` (opcode 467) */
declare function ccGetTargetMask<Operand = void>(): number;
/** `CC_GETTEXT` (opcode 979) */
declare function ccGetText<Operand = void>(): string;
/** `CC_GETTRANS` (opcode 34) */
declare function ccGetTrans<Operand = void>(): number;
/** `CC_GETWIDTH` (opcode 545) */
declare function ccGetWidth<Operand = void>(): number;
/** `CC_GETX` (opcode 797) */
declare function ccGetX<Operand = void>(): number;
/** `CC_GETY` (opcode 523) */
declare function ccGetY<Operand = void>(): number;
/** `CC_GETCHARINDEXATPOS` (opcode 707) */
declare function ccGetcharindexatpos<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CC_GETCHARPOSATINDEX` (opcode 989) */
declare function ccGetcharposatindex<Operand = void>(arg0: number | boolean): [number, number];
/** `CC_GETFONTMETRICS` (opcode 137) */
declare function ccGetfontmetrics<Operand = void>(): number;
/** `CC_GETGRAPHICDIMENSIONS` (opcode 472) */
declare function ccGetgraphicdimensions<Operand = void>(): [number, number];
/** `CC_GETMODELXOF` (opcode 97) */
declare function ccGetmodelxof<Operand = void>(): number;
/** `CC_GETMODELYOF` (opcode 728) */
declare function ccGetmodelyof<Operand = void>(): number;
/** `CC_LOADENTITYMODEL` (opcode 740) */
declare function ccLoadEntityModel<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CC_NPC_SETCUSTOMBODYMODEL` (opcode 588) */
declare function ccNpcSetCustomBodyModel<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_NPC_SETCUSTOMHEADMODEL` (opcode 999) */
declare function ccNpcSetCustomHeadModel<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_NPC_SETCUSTOMRECOL` (opcode 167) */
declare function ccNpcSetCustomRecol<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_NPC_SETCUSTOMRETEX` (opcode 250) */
declare function ccNpcSetCustomRetex<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_PARAM` (opcode 832) */
declare function ccParam<Operand = void>(arg0: param | boolean): any;
/** `CC_RESUME_PAUSEBUTTON` (opcode 502) */
declare function ccResumePauseButton<Operand = void>(): void;
/** `CC_SENDTOBACK` (opcode 584) */
declare function ccSendtoback<Operand = void>(): void;
/** `CC_SENDTOFRONT` (opcode 993) */
declare function ccSendtofront<Operand = void>(): void;
/** `CC_SET2DANGLE` (opcode 196) */
declare function ccSet2dangle<Operand = void>(arg0: number | boolean): void;
/** `CC_SETALPHA` (opcode 209) */
declare function ccSetAlpha<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETASPECT` (opcode 341) */
declare function ccSetAspect<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_SETCLICKMASK` (opcode 924) */
declare function ccSetClickMask<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETCOLOUR` (opcode 274) */
declare function ccSetColour<Operand = void>(arg0: colour | boolean): void;
/** `CC_SETGRAPHIC` (opcode 415) */
declare function ccSetGraphic<Operand = void>(arg0: graphic | boolean): void;
/** `CC_SETGRAPHICSHADOW` (opcode 751) */
declare function ccSetGraphicShadow<Operand = void>(arg0: number | boolean): void;
/** `CC_SETHIDE` (opcode 112) */
declare function ccSetHide<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETLINKACTIVECLANCHANNEL` (opcode 505) */
declare function ccSetLinkActiveClanChannel<Operand = void>(callback: unknown): void;
/** `CC_SETMODEL` (opcode 872) */
declare function ccSetModel<Operand = void>(arg0: model | boolean): void;
/** `CC_SETMODELANGLE` (opcode 528) */
declare function ccSetModelAngle<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: number | boolean, arg5: number | boolean): void;
/** `CC_SETMODELANIM` (opcode 32) */
declare function ccSetModelAnim<Operand = void>(arg0: number | boolean): void;
/** `CC_SETMODEL_ITEMCONTAINER` (opcode 928) */
declare function ccSetModelItemContainer<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `CC_SETMODELLIGHTING` (opcode 591) */
declare function ccSetModelLighting<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `CC_SETMODELLIGHTING_SUNROTATION` (opcode 314) */
declare function ccSetModelLightingSunrotation<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_SETMODELORIGIN` (opcode 24) */
declare function ccSetModelOrigin<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_SETMODELTINT` (opcode 911) */
declare function ccSetModelTint<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `CC_SETMODELZOOM` (opcode 159) */
declare function ccSetModelZoom<Operand = void>(arg0: number | boolean): void;
/** `CC_SETMOUSEOVERCURSOR` (opcode 219) */
declare function ccSetMouseOverCursor<Operand = void>(arg0: cursor | boolean): void;
/** `CC_SETNPCHEAD` (opcode 542) */
declare function ccSetNpcHead<Operand = void>(arg0: npc | boolean): void;
/** `CC_SETNPCMODEL` (opcode 470) */
declare function ccSetNpcModel<Operand = void>(arg0: npc | boolean): void;
/** `CC_SETOBJECT` (opcode 13) */
declare function ccSetObject<Operand = void>(arg0: obj | boolean, arg1: number | boolean): void;
/** `CC_SETOBJECT_ALWAYSNUM` (opcode 998) */
declare function ccSetObjectAlwaysNum<Operand = void>(arg0: obj | boolean, arg1: number | boolean): void;
/** `CC_SETOBJECT_NONUM` (opcode 412) */
declare function ccSetObjectNonum<Operand = void>(arg0: obj | boolean, arg1: number | boolean): void;
/** `CC_SETOBJECT_WEARCOL` (opcode 878) */
declare function ccSetObjectWearCol<Operand = void>(arg0: obj | boolean, arg1: number | boolean): void;
/** `CC_SETOBJECT_WEARCOL_ALWAYSNUM` (opcode 834) */
declare function ccSetObjectWearColAlwaysNum<Operand = void>(arg0: obj | boolean, arg1: number | boolean): void;
/** `CC_SETOBJECT_WEARCOL_NONUM` (opcode 173) */
declare function ccSetObjectWearColNonum<Operand = void>(arg0: obj | boolean, arg1: number | boolean): void;
/** `CC_SETONCAMFINISHED` (opcode 440) */
declare function ccSetOnCamFinished<Operand = void>(callback: unknown): void;
/** `CC_SETONCHATTRANSMIT` (opcode 807) */
declare function ccSetOnChatTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONCLANCHANNELTRANSMIT` (opcode 59) */
declare function ccSetOnClanChannelTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONCLANSETTINGSTRANSMIT` (opcode 916) */
declare function ccSetOnClanSettingsTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONCLICK` (opcode 813) */
declare function ccSetOnClick<Operand = void>(callback: unknown): void;
/** `CC_SETONCLICKREPEAT` (opcode 708) */
declare function ccSetOnClickRepeat<Operand = void>(callback: unknown): void;
/** `CC_SETONDRAG` (opcode 705) */
declare function ccSetOnDrag<Operand = void>(callback: unknown): void;
/** `CC_SETONDRAGCOMPLETE` (opcode 392) */
declare function ccSetOnDragComplete<Operand = void>(callback: unknown): void;
/** `CC_SETONFRIENDTRANSMIT` (opcode 323) */
declare function ccSetOnFriendTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONHOLD` (opcode 158) */
declare function ccSetOnHold<Operand = void>(callback: unknown): void;
/** `CC_SETONINVTRANSMIT` (opcode 191) */
declare function ccSetOnInvTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONKEY` (opcode 695) */
declare function ccSetOnKey<Operand = void>(callback: unknown): void;
/** `CC_SETONMISCTRANSMIT` (opcode 841) */
declare function ccSetOnMiscTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONMOUSELEAVE` (opcode 665) */
declare function ccSetOnMouseLeave<Operand = void>(callback: unknown): void;
/** `CC_SETONMOUSEOVER` (opcode 1) */
declare function ccSetOnMouseOver<Operand = void>(callback: unknown): void;
/** `CC_SETONMOUSEREPEAT` (opcode 207) */
declare function ccSetOnMouseRepeat<Operand = void>(callback: unknown): void;
/** `CC_SETONOP` (opcode 457) */
declare function ccSetOnOp<Operand = void>(callback: unknown): void;
/** `CC_SETONOPT` (opcode 525) */
declare function ccSetOnOpt<Operand = void>(callback: unknown): void;
/** `CC_SETONRELEASE` (opcode 374) */
declare function ccSetOnRelease<Operand = void>(callback: unknown): void;
/** `CC_SETONRESIZE` (opcode 652) */
declare function ccSetOnResize<Operand = void>(callback: unknown): void;
/** `CC_SETONSCROLLWHEEL` (opcode 615) */
declare function ccSetOnScrollWheel<Operand = void>(callback: unknown): void;
/** `CC_SETONSTATTRANSMIT` (opcode 886) */
declare function ccSetOnStatTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONSTOCKTRANSMIT` (opcode 490) */
declare function ccSetOnStockTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONTARGETENTER` (opcode 991) */
declare function ccSetOnTargetEnter<Operand = void>(callback: unknown): void;
/** `CC_SETONTARGETLEAVE` (opcode 892) */
declare function ccSetOnTargetLeave<Operand = void>(callback: unknown): void;
/** `CC_SETONTIMER` (opcode 957) */
declare function ccSetOnTimer<Operand = void>(callback: unknown): void;
/** `CC_SETONVARCLANTRANSMIT` (opcode 544) */
declare function ccSetOnVarClanTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONVARTRANSMIT` (opcode 697) */
declare function ccSetOnVarTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONVARCSTRTRANSMIT` (opcode 70) */
declare function ccSetOnVarcStrTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETONVARCTRANSMIT` (opcode 315) */
declare function ccSetOnVarcTransmit<Operand = void>(callback: unknown): void;
/** `CC_SETOP` (opcode 671) */
declare function ccSetOp<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): void;
/** `CC_SETOPBASE` (opcode 275) */
declare function ccSetOpBase<Operand = void>(arg0: string): void;
/** `CC_SETOPCHAR` (opcode 66) */
declare function ccSetOpChar<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_SETOPCURSOR` (opcode 176) */
declare function ccSetOpCursor<Operand = void>(arg0: number | boolean, arg1: cursor | boolean): void;
/** `CC_SETOPKEY` (opcode 895) */
declare function ccSetOpKey<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: number | boolean, arg5: number | boolean, arg6: number | boolean, arg7: number | boolean, arg8: number | boolean, arg9: number | boolean, arg10: number | boolean): void;
/** `CC_SETOPTCHAR` (opcode 749) */
declare function ccSetOptChar<Operand = void>(arg0: number | boolean): void;
/** `CC_SETOPTKEY` (opcode 67) */
declare function ccSetOptKey<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_SETOUTLINE` (opcode 317) */
declare function ccSetOutline<Operand = void>(arg0: number | boolean): void;
/** `CC_SETPARAM` (opcode 606) */
declare function ccSetParam<Operand = void>(arg0: param | boolean, arg1: number | boolean): void;
/** `CC_SETPARAM_INT` (opcode 497) */
declare function ccSetParamInt<Operand = void>(arg0: param | boolean, arg1: number | boolean): void;
/** `CC_SETPARAM_STRING` (opcode 639) */
declare function ccSetParamString<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): void;
/** `CC_SETPAUSETEXT` (opcode 806) */
declare function ccSetPauseText<Operand = void>(arg0: string): void;
/** `CC_SETPLAYERHEAD_SELF` (opcode 186) */
declare function ccSetPlayerHeadSelf<Operand = void>(): void;
/** `CC_SETPLAYERMODEL` (opcode 133) */
declare function ccSetPlayerModel<Operand = void>(arg0: number | boolean): void;
/** `CC_SETPLAYERMODEL_SELF` (opcode 443) */
declare function ccSetPlayerModelSelf<Operand = void>(): void;
/** `CC_SETPOSITION` (opcode 847) */
declare function ccSetPosition<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `CC_SETRECOL` (opcode 589) */
declare function ccSetRecol<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `CC_SETRETEX` (opcode 579) */
declare function ccSetRetex<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `CC_SETSCROLLPOS` (opcode 126) */
declare function ccSetScrollPos<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_SETSCROLLSIZE` (opcode 28) */
declare function ccSetScrollSize<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `CC_SETSIZE` (opcode 140) */
declare function ccSetSize<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `CC_SETTARGETOPCURSOR` (opcode 659) */
declare function ccSetTargetOpCursor<Operand = void>(arg0: cursor | boolean): void;
/** `CC_SETTEXT` (opcode 972) */
declare function ccSetText<Operand = void>(arg0: string): void;
/** `CC_SETTEXTALIGN` (opcode 546) */
declare function ccSetTextAlign<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `CC_SETTEXTFONT` (opcode 351) */
declare function ccSetTextFont<Operand = void>(arg0: graphic | boolean): void;
/** `CC_SETTEXTSHADOW` (opcode 103) */
declare function ccSetTextShadow<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETTRANS` (opcode 320) */
declare function ccSetTrans<Operand = void>(arg0: number | boolean): void;
/** `CC_SETVIDEO_GRAPHIC` (opcode 513) */
declare function ccSetVideoGraphic<Operand = void>(): void;
/** `CC_SETVIDEO_TEXT` (opcode 100) */
declare function ccSetVideoText<Operand = void>(): void;
/** `CC_SETDRAGDEADTIME` (opcode 223) */
declare function ccSetdragdeadtime<Operand = void>(arg0: number | boolean): void;
/** `CC_SETDRAGDEADZONE` (opcode 764) */
declare function ccSetdragdeadzone<Operand = void>(arg0: number | boolean): void;
/** `CC_SETDRAGGABLE` (opcode 68) */
declare function ccSetdraggable<Operand = void>(arg0: component | boolean, arg1: number | boolean): void;
/** `CC_SETDRAGRENDERBEHAVIOUR` (opcode 345) */
declare function ccSetdragrenderbehaviour<Operand = void>(arg0: number | boolean): void;
/** `CC_SETFILL` (opcode 402) */
declare function ccSetfill<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETFONTMONO` (opcode 476) */
declare function ccSetfontmono<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETHFLIP` (opcode 185) */
declare function ccSethflip<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETLINEDIRECTION` (opcode 965) */
declare function ccSetlinedirection<Operand = void>(arg0: number | boolean): void;
/** `CC_SETLINEWID` (opcode 124) */
declare function ccSetlinewid<Operand = void>(arg0: number | boolean): void;
/** `CC_SETMAXLINES` (opcode 77) */
declare function ccSetmaxlines<Operand = void>(arg0: number | boolean): void;
/** `CC_SETMODELORTHOG` (opcode 363) */
declare function ccSetmodelorthog<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETNOCLICKTHROUGH` (opcode 787) */
declare function ccSetnoclickthrough<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETONDIALOGABORT` (opcode 883) */
declare function ccSetondialogabort<Operand = void>(callback: unknown): void;
/** `CC_SETONSUBCHANGE` (opcode 719) */
declare function ccSetonsubchange<Operand = void>(callback: unknown): void;
/** `CC_SETTARGETCURSORS` (opcode 627) */
declare function ccSettargetcursors<Operand = void>(arg0: cursor | boolean, arg1: cursor | boolean): void;
/** `CC_SETTARGETVERB` (opcode 466) */
declare function ccSettargetverb<Operand = void>(arg0: string): void;
/** `CC_SETTEXTANTIMACRO` (opcode 644) */
declare function ccSettextantimacro<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETTILING` (opcode 406) */
declare function ccSettiling<Operand = void>(arg0: boolean | boolean): void;
/** `CC_SETVFLIP` (opcode 599) */
declare function ccSetvflip<Operand = void>(arg0: boolean | boolean): void;
/** `CHAR_ISALPHA` (opcode 801) */
declare function charIsAlpha<Operand = void>(arg0: number | boolean): number;
/** `CHAR_ISALPHANUMERIC` (opcode 150) */
declare function charIsalphanumeric<Operand = void>(arg0: number | boolean): number;
/** `CHAR_ISNUMERIC` (opcode 934) */
declare function charIsnumeric<Operand = void>(arg0: number | boolean): number;
/** `CHAR_ISPRINTABLE` (opcode 638) */
declare function charIsprintable<Operand = void>(arg0: number | boolean): number;
/** `CHAR_TOLOWERCASE` (opcode 977) */
declare function charTolowercase<Operand = void>(arg0: number | boolean): number;
/** `CHAR_TOUPPERCASE` (opcode 153) */
declare function charTouppercase<Operand = void>(arg0: number | boolean): number;
/** `CHATCAT_FINDPHRASEBYSHORTCUT` (opcode 188) */
declare function chatCatFindphrasebyshortcut<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CHATCAT_FINDSUBCATBYSHORTCUT` (opcode 208) */
declare function chatCatFindsubcatbyshortcut<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CHATCAT_GETDESC` (opcode 927) */
declare function chatCatGetDesc<Operand = void>(arg0: number | boolean): string;
/** `CHATCAT_GETPHRASE` (opcode 604) */
declare function chatCatGetPhrase<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CHATCAT_GETPHRASECOUNT` (opcode 10) */
declare function chatCatGetPhraseCount<Operand = void>(arg0: number | boolean): number;
/** `CHATCAT_GETPHRASESHORTCUT` (opcode 994) */
declare function chatCatGetPhraseShortcut<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CHATCAT_GETSUBCAT` (opcode 988) */
declare function chatCatGetSubCat<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CHATCAT_GETSUBCATCOUNT` (opcode 946) */
declare function chatCatGetSubCatCount<Operand = void>(arg0: number | boolean): number;
/** `CHATCAT_GETSUBCATSHORTCUT` (opcode 713) */
declare function chatCatGetSubCatShortcut<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CHAT_GETFILTER_PRIVATE` (opcode 792) */
declare function chatGetFilterPrivate<Operand = void>(): number;
/** `CHAT_GETFILTER_PUBLIC` (opcode 860) */
declare function chatGetFilterPublic<Operand = void>(): number;
/** `CHAT_GETFILTER_TRADE` (opcode 839) */
declare function chatGetFilterTrade<Operand = void>(): number;
/** `CHAT_GETHISTORYCLAN` (opcode 622) */
declare function chatGethistoryclan<Operand = void>(arg0: number | boolean): string;
/** `CHAT_GETHISTORYLENGTH` (opcode 961) */
declare function chatGethistorylength<Operand = void>(): number;
/** `CHAT_GETHISTORYMESSAGE` (opcode 231) */
declare function chatGethistorymessage<Operand = void>(arg0: number | boolean): string;
/** `CHAT_GETHISTORYNAME` (opcode 789) */
declare function chatGethistoryname<Operand = void>(arg0: number | boolean): string;
/** `CHAT_GETHISTORYPHRASE` (opcode 335) */
declare function chatGethistoryphrase<Operand = void>(arg0: number | boolean): number;
/** `CHAT_GETHISTORYTYPE` (opcode 681) */
declare function chatGethistorytype<Operand = void>(arg0: number | boolean): number;
/** `CHAT_GETPREVUID` (opcode 272) */
declare function chatGetprevuid<Operand = void>(arg0: number | boolean): number;
/** `CHATLINE_GETEFFECTFLAGS` (opcode 482) */
declare function chatLineGeteffectflags<Operand = void>(arg0: number | boolean): number;
/** `CHATLINE_GETSIMPLENAME` (opcode 867) */
declare function chatLineGetsimplename<Operand = void>(arg0: number | boolean): string;
/** `CHATLINE_GETUID` (opcode 327) */
declare function chatLineGetuid<Operand = void>(arg0: number | boolean): number;
/** `CHATPHRASE_FIND` (opcode 711) */
declare function chatPhraseFind<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): number;
/** `CHATPHRASE_FINDNEXT` (opcode 830) */
declare function chatPhraseFindNext<Operand = void>(): number;
/** `CHATPHRASE_FINDRESTART` (opcode 227) */
declare function chatPhraseFindrestart<Operand = void>(): void;
/** `CHATPHRASE_GETTEXT` (opcode 328) */
declare function chatPhraseGetText<Operand = void>(arg0: number | boolean): string;
/** `CHATPHRASE_GETAUTORESPONSE` (opcode 661) */
declare function chatPhraseGetautoresponse<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CHATPHRASE_GETAUTORESPONSECOUNT` (opcode 958) */
declare function chatPhraseGetautoresponsecount<Operand = void>(arg0: number | boolean): number;
/** `CHATPHRASE_GETDYNAMICCOMMAND` (opcode 324) */
declare function chatPhraseGetdynamiccommand<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CHATPHRASE_GETDYNAMICCOMMANDCOUNT` (opcode 795) */
declare function chatPhraseGetdynamiccommandcount<Operand = void>(arg0: number | boolean): number;
/** `CHATPHRASE_GETDYNAMICCOMMANDPARAM_ENUM` (opcode 349) */
declare function chatPhraseGetdynamiccommandparamEnum<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): number;
/** `CHAT_PLAYERNAME` (opcode 309) */
declare function chatPlayerName<Operand = void>(): string;
/** `CHAT_PLAYERNAME_UNFILTERED` (opcode 292) */
declare function chatPlayerNameUnfiltered<Operand = void>(): string;
/** `CHAT_SENDABUSEREPORT` (opcode 257) */
declare function chatSendAbuseReport<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean, arg3: number | string | bigint | boolean): void;
/** `CHAT_SENDPRIVATE` (opcode 743) */
declare function chatSendprivate<Operand = void>(arg0: string, arg1: string): void;
/** `CHAT_SENDPUBLIC` (opcode 134) */
declare function chatSendpublic<Operand = void>(arg0: string): void;
/** `CHAT_SETFILTER` (opcode 424) */
declare function chatSetFilter<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `CHAT_SETMODE` (opcode 118) */
declare function chatSetMode<Operand = void>(arg0: number | boolean): void;
/** `CLAN_GETCHATCOUNT` (opcode 1002) */
declare function clanGetChatCount<Operand = void>(): number;
/** `CLAN_GETCHATDISPLAYNAME` (opcode 765) */
declare function clanGetChatDisplayName<Operand = void>(): string;
/** `CLAN_GETCHATMINKICK` (opcode 346) */
declare function clanGetChatMinKick<Operand = void>(): number;
/** `CLAN_GETCHATRANK` (opcode 854) */
declare function clanGetChatRank<Operand = void>(): number;
/** `CLAN_GETCHATUSERNAME` (opcode 699) */
declare function clanGetChatUserName<Operand = void>(arg0: number | boolean): string;
/** `CLAN_GETCHATUSERNAME_UNFILTERED` (opcode 580) */
declare function clanGetChatUserNameUnfiltered<Operand = void>(arg0: number | boolean): string;
/** `CLAN_GETCHATUSERRANK` (opcode 394) */
declare function clanGetChatUserRank<Operand = void>(arg0: number | boolean): number;
/** `CLAN_GETCHATUSERWORLD` (opcode 587) */
declare function clanGetChatUserWorld<Operand = void>(arg0: number | boolean): number;
/** `CLAN_GETCHATUSERWORLDNAME` (opcode 943) */
declare function clanGetChatUserWorldName<Operand = void>(arg0: number | boolean): string;
/** `CLAN_GETCHATOWNERNAME` (opcode 338) */
declare function clanGetchatownername<Operand = void>(): string;
/** `CLAN_ISSELF` (opcode 802) */
declare function clanIsself<Operand = void>(arg0: number | boolean): number;
/** `CLAN_JOINCHAT` (opcode 293) */
declare function clanJoinChat<Operand = void>(arg0: string): void;
/** `CLAN_KICKUSER` (opcode 421) */
declare function clanKickUser<Operand = void>(arg0: string): void;
/** `CLAN_LEAVECHAT` (opcode 682) */
declare function clanLeaveChat<Operand = void>(): void;
/** `CLANPROFILE_FIND` (opcode 559) */
declare function clanProfileFind<Operand = void>(): number;
/** `CLANFORUMQFC_TOSTRING` (opcode 454) */
declare function clanforumqfcTostring<Operand = void>(arg0: bigint): string;
/** `CLEARBIT` (opcode 873) */
declare function clearBit<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `CLIENTCLOCK` (opcode 80) */
declare function clientClock<Operand = void>(): number;
/** `COMLEVEL_ACTIVE` (opcode 139) */
declare function comlevelActive<Operand = void>(): number;
/** `COMPARE` (opcode 810) */
declare function compare<Operand = void>(arg0: string, arg1: string): number;
/** `COORD` (opcode 389) */
declare function coord<Operand = void>(): number;
/** `COORD_CLAMPTOSCENE_ORDEFAULT` (opcode 365) */
declare function coordClamptosceneOrDefault<Operand = void>(arg0: number | boolean): void;
/** `COORDX` (opcode 93) */
declare function coordX<Operand = void>(arg0: coord | boolean): number;
/** `COORDY` (opcode 298) */
declare function coordY<Operand = void>(arg0: coord | boolean): number;
/** `COORDZ` (opcode 536) */
declare function coordZ<Operand = void>(arg0: coord | boolean): number;
/** `CREATE_AVAILABLEREQUEST` (opcode 654) */
declare function createAvailablerequest<Operand = void>(arg0: string): void;
/** `CREATE_CONNECT_REPLY` (opcode 498) */
declare function createConnectReply<Operand = void>(): number;
/** `CREATE_CONNECTREQUEST` (opcode 362) */
declare function createConnectrequest<Operand = void>(): void;
/** `CREATE_CREATEREQUEST` (opcode 686) */
declare function createCreateRequest<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean, arg3: number | string | bigint | boolean): void;
/** `CREATE_EMAIL_VALIDATE_REPLY` (opcode 742) */
declare function createEmailValidateReply<Operand = void>(): number;
/** `CREATE_GET_EMAIL` (opcode 357) */
declare function createGetEmail<Operand = void>(): string;
/** `CREATE_REPLY` (opcode 92) */
declare function createReply<Operand = void>(): number;
/** `CREATE_SETUNDER13` (opcode 885) */
declare function createSetUnder13<Operand = void>(): void;
/** `CREATE_STEP_REACHED` (opcode 684) */
declare function createStepReached<Operand = void>(arg0: number | boolean): void;
/** `CREATE_UNDER13` (opcode 569) */
declare function createUnder13<Operand = void>(): number;
/** `DATE_ISLEAPYEAR` (opcode 877) */
declare function dateIsleapyear<Operand = void>(arg0: number | boolean): number;
/** `DATE_MINUTES` (opcode 55) */
declare function dateMinutes<Operand = void>(): number;
/** `DATE_MINUTES_FROMRUNEDAY` (opcode 256) */
declare function dateMinutesFromruneday<Operand = void>(arg0: number | boolean): number;
/** `DATE_RUNEDAY` (opcode 519) */
declare function dateRuneday<Operand = void>(): number;
/** `DATE_RUNEDAY_FROMDATE` (opcode 636) */
declare function dateRunedayFromDate<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): number;
/** `DATE_RUNEDAY_TODATE` (opcode 17) */
declare function dateRunedayTodate<Operand = void>(arg0: number | boolean): [number, number, number];
/** `DATE_YEAR` (opcode 793) */
declare function dateYear<Operand = void>(): number;
/** `DEFAULTMINIMENU` (opcode 431) */
declare function defaultminimenu<Operand = void>(): void;
/** `DETAIL_ANTIALIASING` (opcode 269) */
declare function detailAntialiasing<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_ANTIALIASING_DEFAULT` (opcode 380) */
declare function detailAntialiasingDefault<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_BGSOUNDVOL` (opcode 417) */
declare function detailBgsoundvol<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_BLOOM` (opcode 564) */
declare function detailBloom<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_BRIGHTNESS` (opcode 849) */
declare function detailBrightness<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_BUILDAREA` (opcode 376) */
declare function detailBuildArea<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_CPUUSAGE` (opcode 90) */
declare function detailCpuusage<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_CUSTOMCURSORS` (opcode 181) */
declare function detailCustomcursors<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_FLICKERING_ON` (opcode 71) */
declare function detailFlickeringOn<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_FOG_ON` (opcode 685) */
declare function detailFogOn<Operand = void>(arg0: number | boolean): void;
/** `DETAILGET_ANTIALIASING` (opcode 782) */
declare function detailGetAntialiasing<Operand = void>(): number;
/** `DETAILGET_ANTIALIASING_DEFAULT` (opcode 458) */
declare function detailGetAntialiasingDefault<Operand = void>(): number;
/** `DETAILGET_BGSOUNDVOL` (opcode 919) */
declare function detailGetBgsoundvol<Operand = void>(): number;
/** `DETAILGET_BLOOM` (opcode 752) */
declare function detailGetBloom<Operand = void>(): number;
/** `DETAILGET_BRIGHTNESS` (opcode 848) */
declare function detailGetBrightness<Operand = void>(): number;
/** `DETAILGET_BUILDAREA` (opcode 582) */
declare function detailGetBuildArea<Operand = void>(): number;
/** `DETAILGET_CANCHOOSESAFEMODE` (opcode 737) */
declare function detailGetCanchoosesafemode<Operand = void>(): number;
/** `DETAILGET_CHOSESAFEMODE` (opcode 423) */
declare function detailGetChosesafemode<Operand = void>(): number;
/** `DETAILGET_CPUUSAGE` (opcode 804) */
declare function detailGetCpuusage<Operand = void>(): number;
/** `DETAILGET_CUSTOMCURSORS` (opcode 387) */
declare function detailGetCustomcursors<Operand = void>(): number;
/** `DETAILGET_DEFAULTTOOLKIT` (opcode 240) */
declare function detailGetDefaultToolkit<Operand = void>(): number;
/** `DETAILGET_FLICKERING_ON` (opcode 585) */
declare function detailGetFlickeringOn<Operand = void>(): number;
/** `DETAILGET_FOG_ON` (opcode 193) */
declare function detailGetFogOn<Operand = void>(): number;
/** `DETAILGET_GROUNDBLENDING` (opcode 419) */
declare function detailGetGroundblending<Operand = void>(): number;
/** `DETAILGET_GROUNDDECOR_ON` (opcode 268) */
declare function detailGetGrounddecorOn<Operand = void>(): number;
/** `DETAILGET_HARDSHADOWS` (opcode 390) */
declare function detailGetHardshadows<Operand = void>(): number;
/** `DETAILGET_IDLEANIMS` (opcode 794) */
declare function detailGetIdleanims<Operand = void>(): number;
/** `DETAILGET_IDLEANIMS_MANY` (opcode 254) */
declare function detailGetIdleanimsMany<Operand = void>(): number;
/** `DETAILGET_LIGHTDETAIL_HIGH` (opcode 891) */
declare function detailGetLightdetailHigh<Operand = void>(): number;
/** `DETAILGET_LOADINGSCREENTYPE` (opcode 132) */
declare function detailGetLoadingscreentype<Operand = void>(): number;
/** `DETAILGET_LOGINVOL` (opcode 353) */
declare function detailGetLoginVol<Operand = void>(): number;
/** `DETAILGET_MAXSCREENSIZE` (opcode 714) */
declare function detailGetMaxScreenSize<Operand = void>(): number;
/** `DETAILGET_MUSICVOL` (opcode 942) */
declare function detailGetMusicVol<Operand = void>(): number;
/** `DETAILGET_PARTICLES` (opcode 712) */
declare function detailGetParticles<Operand = void>(): number;
/** `DETAILGET_REMOVEROOFS_OPTION` (opcode 983) */
declare function detailGetRemoveroofsOption<Operand = void>(): number;
/** `DETAILGET_SAFEMODE` (opcode 42) */
declare function detailGetSafemode<Operand = void>(): number;
/** `DETAILGET_SKYDETAIL` (opcode 581) */
declare function detailGetSkydetail<Operand = void>(): number;
/** `DETAILGET_SOUNDVOL` (opcode 828) */
declare function detailGetSoundVol<Operand = void>(): number;
/** `DETAILGET_SPEECHVOL` (opcode 971) */
declare function detailGetSpeechvol<Operand = void>(): number;
/** `DETAILGET_SPOTSHADOWS_ON` (opcode 646) */
declare function detailGetSpotshadowsOn<Operand = void>(): number;
/** `DETAILGET_STEREO` (opcode 26) */
declare function detailGetStereo<Operand = void>(): number;
/** `DETAILGET_TEXTURING` (opcode 418) */
declare function detailGetTexturing<Operand = void>(): number;
/** `DETAILGET_TOOLKIT` (opcode 725) */
declare function detailGetToolkit<Operand = void>(): number;
/** `DETAILGET_TOOLKIT_DEFAULT` (opcode 734) */
declare function detailGetToolkitDefault<Operand = void>(): number;
/** `DETAILGET_WATERDETAIL_HIGH` (opcode 487) */
declare function detailGetWaterDetailHigh<Operand = void>(): number;
/** `DETAIL_GROUNDBLENDING` (opcode 464) */
declare function detailGroundblending<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_GROUNDDECOR_ON` (opcode 372) */
declare function detailGrounddecorOn<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_HARDSHADOWS` (opcode 270) */
declare function detailHardshadows<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_IDLEANIMS` (opcode 553) */
declare function detailIdleanims<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_IDLEANIMS_MANY` (opcode 537) */
declare function detailIdleanimsMany<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_LIGHTDETAIL_HIGH` (opcode 281) */
declare function detailLightdetailHigh<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_LOADINGSCREENTYPE` (opcode 817) */
declare function detailLoadingscreentype<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_LOGINVOL` (opcode 455) */
declare function detailLoginVol<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_MAXSCREENSIZE` (opcode 568) */
declare function detailMaxScreenSize<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_MUSICVOL` (opcode 276) */
declare function detailMusicVol<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_PARTICLES` (opcode 703) */
declare function detailParticles<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_REMOVEROOFS_OPTION` (opcode 484) */
declare function detailRemoveroofsOption<Operand = void>(arg0: boolean | boolean): void;
/** `DETAIL_REMOVEROOFS_OPTION_OVERRIDE` (opcode 992) */
declare function detailRemoveroofsOptionOverride<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_SKYDETAIL` (opcode 332) */
declare function detailSkydetail<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_SOUNDVOL` (opcode 358) */
declare function detailSoundVol<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_SPEECHVOL` (opcode 632) */
declare function detailSpeechvol<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_SPOTSHADOWS_ON` (opcode 226) */
declare function detailSpotshadowsOn<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_STEREO` (opcode 383) */
declare function detailStereo<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_TEXTURING` (opcode 218) */
declare function detailTexturing<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_TOOLKIT` (opcode 348) */
declare function detailToolkit<Operand = void>(arg0: number | boolean): void;
/** `DETAIL_TOOLKIT_DEFAULT` (opcode 261) */
declare function detailToolkitDefault<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `DETAIL_WATERDETAIL_HIGH` (opcode 232) */
declare function detailWaterDetailHigh<Operand = void>(arg0: number | boolean): void;
/** `DETAILCANMOD_ANTIALIASING` (opcode 621) */
declare function detailcanmodAntialiasing<Operand = void>(): number;
/** `DETAILCANMOD_BLOOM` (opcode 610) */
declare function detailcanmodBloom<Operand = void>(): number;
/** `DETAILCANMOD_BUILDAREA` (opcode 221) */
declare function detailcanmodBuildArea<Operand = void>(): number;
/** `DETAILCANMOD_CHARSHADOWS` (opcode 129) */
declare function detailcanmodCharshadows<Operand = void>(): number;
/** `DETAILCANMOD_DEFAULTTOOLKIT` (opcode 258) */
declare function detailcanmodDefaultToolkit<Operand = void>(): number;
/** `DETAILCANMOD_FOG` (opcode 563) */
declare function detailcanmodFog<Operand = void>(): number;
/** `DETAILCANMOD_GROUNDBLENDING` (opcode 504) */
declare function detailcanmodGroundblending<Operand = void>(): number;
/** `DETAILCANMOD_GROUNDDECOR` (opcode 761) */
declare function detailcanmodGrounddecor<Operand = void>(): number;
/** `DETAILCANMOD_MAXSCREENSIZE` (opcode 446) */
declare function detailcanmodMaxScreenSize<Operand = void>(): number;
/** `DETAILCANMOD_PARTICLES` (opcode 803) */
declare function detailcanmodParticles<Operand = void>(): number;
/** `DETAILCANMOD_SKYDETAIL` (opcode 821) */
declare function detailcanmodSkydetail<Operand = void>(): number;
/** `DETAILCANMOD_SPOTSHADOWS` (opcode 640) */
declare function detailcanmodSpotshadows<Operand = void>(): number;
/** `DETAILCANMOD_TEXTURING` (opcode 938) */
declare function detailcanmodTexturing<Operand = void>(): number;
/** `DETAILCANMOD_TOOLKIT_DEFAULT` (opcode 850) */
declare function detailcanmodToolkitDefault<Operand = void>(): number;
/** `DETAILCANMOD_WATERDETAIL` (opcode 635) */
declare function detailcanmodWaterDetail<Operand = void>(): number;
/** `DETAILCANSET_ANTIALIASING` (opcode 900) */
declare function detailcansetAntialiasing<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_BLOOM` (opcode 501) */
declare function detailcansetBloom<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_BUILDAREA` (opcode 571) */
declare function detailcansetBuildArea<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_CHARSHADOWS` (opcode 1001) */
declare function detailcansetCharshadows<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_DEFAULTTOOLKIT` (opcode 779) */
declare function detailcansetDefaultToolkit<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_FOG` (opcode 409) */
declare function detailcansetFog<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_GROUNDBLENDING` (opcode 865) */
declare function detailcansetGroundblending<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_GROUNDDECOR` (opcode 114) */
declare function detailcansetGrounddecor<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_MAXSCREENSIZE` (opcode 921) */
declare function detailcansetMaxScreenSize<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_PARTICLES` (opcode 876) */
declare function detailcansetParticles<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_SKYDETAIL` (opcode 53) */
declare function detailcansetSkydetail<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_SPOTSHADOWS` (opcode 58) */
declare function detailcansetSpotshadows<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_TEXTURING` (opcode 33) */
declare function detailcansetTexturing<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_TOOLKIT_DEFAULT` (opcode 616) */
declare function detailcansetToolkitDefault<Operand = void>(arg0: number | boolean): number;
/** `DETAILCANSET_WATERDETAIL` (opcode 442) */
declare function detailcansetWaterDetail<Operand = void>(arg0: number | boolean): number;
/** `DOCHEAT` (opcode 565) */
declare function docheat<Operand = void>(arg0: string): void;
/** `EMAIL_VALIDATION_ADD_NEW_ADDRESS` (opcode 511) */
declare function emailValidationAddNewAddress<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean, arg3: number | string | bigint | boolean): void;
/** `EMAIL_VALIDATION_CHANGE_ADDRESS` (opcode 121) */
declare function emailValidationChangeAddress<Operand = void>(arg0: string, arg1: string): void;
/** `EMAIL_VALIDATION_SUBMIT_CODE` (opcode 364) */
declare function emailValidationSubmitCode<Operand = void>(arg0: string): void;
/** `ENUM_GETOUTPUTCOUNT` (opcode 533) */
declare function enumGetoutputcount<Operand = void>(arg0: Enum | boolean): number;
/** `ENUM_GETREVERSECOUNT` (opcode 149) */
declare function enumGetreversecount<Operand = void>(arg0: number | boolean, arg1: Enum | boolean, arg2: number | boolean): number;
/** `ENUM_GETREVERSECOUNT_STRING` (opcode 438) */
declare function enumGetreversecountString<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): number;
/** `ENUM_GETREVERSEINDEX` (opcode 904) */
declare function enumGetreverseindex<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: Enum | boolean, arg3: number | boolean, arg4: number | boolean): number;
/** `ENUM_GETREVERSEINDEX_STRING` (opcode 86) */
declare function enumGetreverseindexString<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean, arg3: number | string | bigint | boolean): number;
/** `ENUM_HASOUTPUT` (opcode 60) */
declare function enumHasoutput<Operand = void>(arg0: number | boolean, arg1: Enum | boolean, arg2: number | boolean): number;
/** `ENUM_HASOUTPUT_STRING` (opcode 840) */
declare function enumHasoutputString<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): number;
/** `ENUM` (opcode 540) */
declare function enumOp<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: Enum | boolean, arg3: number | boolean): any;
/** `ENUM_STRING` (opcode 820) */
declare function enumString<Operand = void>(arg0: Enum | boolean, arg1: number | boolean): string;
/** `ESCAPE` (opcode 49) */
declare function escape<Operand = void>(arg0: string): string;
/** `FORMAT_DATETIME_FROM_MINUTES` (opcode 339) */
declare function formatDateTimeFromMinutes<Operand = void>(arg0: number | boolean): string;
/** `FORMATMINIMENU` (opcode 6) */
declare function formatminimenu<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: graphic | boolean, arg5: graphic | boolean, arg6: graphic | boolean, arg7: graphic | boolean, arg8: graphic | boolean, arg9: number | boolean, arg10: number | boolean, arg11: number | boolean): void;
/** `FRIEND_ADD` (opcode 609) */
declare function friendAdd<Operand = void>(arg0: string): void;
/** `FRIEND_COUNT` (opcode 183) */
declare function friendCount<Operand = void>(): number;
/** `FRIEND_DEL` (opcode 914) */
declare function friendDel<Operand = void>(arg0: string): void;
/** `FRIEND_GETNAME` (opcode 252) */
declare function friendGetName<Operand = void>(arg0: number | boolean): [string, string];
/** `FRIEND_GETRANK` (opcode 732) */
declare function friendGetRank<Operand = void>(arg0: number | boolean): number;
/** `FRIEND_GETSLOTFROMNAME` (opcode 520) */
declare function friendGetSlotFromName<Operand = void>(arg0: string): number;
/** `FRIEND_GETWORLD` (opcode 51) */
declare function friendGetWorld<Operand = void>(arg0: number | boolean): number;
/** `FRIEND_GETWORLDNAME` (opcode 767) */
declare function friendGetWorldName<Operand = void>(arg0: number | boolean): string;
/** `FRIEND_GETWORLDFLAGS` (opcode 562) */
declare function friendGetworldflags<Operand = void>(arg0: number | boolean): number;
/** `FRIEND_IS_REFERRER` (opcode 656) */
declare function friendIsReferrer<Operand = void>(arg0: number | boolean): number;
/** `FRIEND_PLATFORM` (opcode 880) */
declare function friendPlatform<Operand = void>(arg0: number | boolean): number;
/** `FRIEND_SETRANK` (opcode 647) */
declare function friendSetRank<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): void;
/** `FRIEND_TEST` (opcode 879) */
declare function friendTest<Operand = void>(arg0: string): number;
/** `FROMDATE` (opcode 618) */
declare function fromDate<Operand = void>(arg0: number | boolean): string;
/** `FROMBILLING` (opcode 655) */
declare function frombilling<Operand = void>(): number;
/** `FULLSCREEN_ENTER` (opcode 785) */
declare function fullScreenEnter<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `FULLSCREEN_EXIT` (opcode 175) */
declare function fullScreenExit<Operand = void>(): void;
/** `FULLSCREEN_GETMODE` (opcode 596) */
declare function fullScreenGetMode<Operand = void>(arg0: number | boolean): [number, number];
/** `FULLSCREEN_LASTMODE` (opcode 691) */
declare function fullScreenLastMode<Operand = void>(): number;
/** `FULLSCREEN_MODECOUNT` (opcode 141) */
declare function fullScreenModeCount<Operand = void>(): number;
/** `GENDER` (opcode 657) */
declare function gender<Operand = void>(): number;
/** `GET_ACTIVE_MINIMENU_ENTRY` (opcode 115) */
declare function getActiveMinimenuEntry<Operand = void>(): [number, string, string, string];
/** `GET_ACTIVE_MINIMENU_INVSLOT` (opcode 1008) */
declare function getActiveMinimenuInvslot<Operand = void>(): [number, number, number];
/** `GET_COL_TAG` (opcode 874) */
declare function getColTag<Operand = void>(arg0: number | boolean): string;
/** `GET_CURRENTCURSOR` (opcode 980) */
declare function getCurrentcursor<Operand = void>(): number;
/** `GETDEFAULTWINDOWMODE` (opcode 617) */
declare function getDefaultWindowMode<Operand = void>(): number;
/** `GET_DISPLAYNAME_WITHEXTRAS` (opcode 812) */
declare function getDisplayNameWithextras<Operand = void>(): string;
/** `GET_ENTITY_BOUNDING_BOX` (opcode 95) */
declare function getEntityBoundingBox<Operand = void>(): [number, number, number, number, number];
/** `GETENTITYOVERHEADIF` (opcode 282) */
declare function getEntityOverHeadIf<Operand = void>(): number;
/** `GET_ENTITY_OVERLAY_HEIGHT` (opcode 669) */
declare function getEntityOverlayHeight<Operand = void>(): number;
/** `GET_ENTITY_SAY` (opcode 378) */
declare function getEntitySay<Operand = void>(): string;
/** `GET_ENTITY_SCREEN_POSITION` (opcode 330) */
declare function getEntityScreenPosition<Operand = void>(arg0: number | boolean): [number, number, number];
/** `GET_LOC_BOUNDING_BOX` (opcode 69) */
declare function getLocBoundingBox<Operand = void>(): [number, number, number, number, number];
/** `GET_LOC_OVERLAY_HEIGHT` (opcode 433) */
declare function getLocOverlayHeight<Operand = void>(): number;
/** `GET_LOC_SCREEN_POSITION` (opcode 439) */
declare function getLocScreenPosition<Operand = void>(arg0: number | boolean): [number, number, number];
/** `GET_MINIMENU_LENGTH` (opcode 50) */
declare function getMinimenuLength<Operand = void>(): [number, number];
/** `GET_MINIMENU_TARGET` (opcode 814) */
declare function getMinimenuTarget<Operand = void>(): [number, string, string];
/** `GET_MOUSEX` (opcode 243) */
declare function getMouseX<Operand = void>(): number;
/** `GET_MOUSEY` (opcode 308) */
declare function getMouseY<Operand = void>(): number;
/** `GET_MOUSEBUTTONS` (opcode 453) */
declare function getMousebuttons<Operand = void>(): [number, number, number];
/** `GET_NPC_NAME` (opcode 660) */
declare function getNpcName<Operand = void>(): string;
/** `GET_NPC_STAT` (opcode 248) */
declare function getNpcStat<Operand = void>(arg0: number | boolean): [number, number];
/** `GET_NPC_VISLEVEL` (opcode 165) */
declare function getNpcVislevel<Operand = void>(arg0: number | boolean): number;
/** `GET_OBJ_BOUNDING_BOX` (opcode 517) */
declare function getObjBoundingBox<Operand = void>(): [number, number, number, number, number];
/** `GET_OBJ_OVERLAY_HEIGHT` (opcode 295) */
declare function getObjOverlayHeight<Operand = void>(): number;
/** `GET_OBJ_SCREEN_POSITION` (opcode 450) */
declare function getObjScreenPosition<Operand = void>(arg0: number | boolean): [number, number, number];
/** `GET_SECOND_MINIMENU_ENTRY` (opcode 366) */
declare function getSecondMinimenuEntry<Operand = void>(): [number, string, string, string];
/** `GET_SELFYANGLE` (opcode 426) */
declare function getSelfyangle<Operand = void>(): number;
/** `GETWINDOWMODE` (opcode 297) */
declare function getWindowMode<Operand = void>(): number;
/** `GETCLIPBOARD` (opcode 853) */
declare function getclipboard<Operand = void>(): string;
/** `GETDIRECTORYPICKERRESULT` (opcode 435) */
declare function getdirectorypickerresult<Operand = void>(): [number, string];
/** `GETHOSTNAME` (opcode 951) */
declare function gethostname<Operand = void>(): string;
/** `GETPREFERENCEFILE` (opcode 973) */
declare function getpreferencefile<Operand = void>(arg0: number | boolean): [string, string];
/** `HAS_SIGNONKEY` (opcode 447) */
declare function hasSignonKey<Operand = void>(): number;
/** `HSVTORGB` (opcode 586) */
declare function hsvtorgb<Operand = void>(arg0: number | boolean): number;
/** `IF_CALLONRESIZE` (opcode 197) */
declare function ifCallonresize<Operand = void>(arg0: component | boolean): void;
/** `IF_CLEAROPS` (opcode 512) */
declare function ifClearops<Operand = void>(arg0: component | boolean): void;
/** `IF_CLEARSCRIPTHOOKS` (opcode 64) */
declare function ifClearscripthooks<Operand = void>(arg0: component | boolean): void;
/** `IF_CLOSE` (opcode 574) */
declare function ifClose<Operand = void>(): void;
/** `IF_CLOSESUBCLIENT` (opcode 291) */
declare function ifCloseSubClient<Operand = void>(arg0: number | boolean): void;
/** `IF_CREATE` (opcode 29) */
declare function ifCreate<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_BUTTON1` (opcode 305) */
declare function ifDebugButton1<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_BUTTON10` (opcode 906) */
declare function ifDebugButton10<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_BUTTON2` (opcode 653) */
declare function ifDebugButton2<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_BUTTON3` (opcode 561) */
declare function ifDebugButton3<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_BUTTON4` (opcode 294) */
declare function ifDebugButton4<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_BUTTON5` (opcode 819) */
declare function ifDebugButton5<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_BUTTON6` (opcode 251) */
declare function ifDebugButton6<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_BUTTON7` (opcode 31) */
declare function ifDebugButton7<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_BUTTON8` (opcode 778) */
declare function ifDebugButton8<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_BUTTON9` (opcode 266) */
declare function ifDebugButton9<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DEBUG_GETNAME` (opcode 738) */
declare function ifDebugGetName<Operand = void>(arg0: Interface | boolean): string;
/** `IF_DEBUG_GETOPENIFCOUNT` (opcode 271) */
declare function ifDebugGetOpenIfCount<Operand = void>(): number;
/** `IF_DEBUG_GETOPENIFID` (opcode 342) */
declare function ifDebugGetOpenIfId<Operand = void>(arg0: number | boolean): number;
/** `IF_DEBUG_GETCOMCOUNT` (opcode 136) */
declare function ifDebugGetcomcount<Operand = void>(arg0: Interface | boolean): number;
/** `IF_DEBUG_GETCOMNAME` (opcode 40) */
declare function ifDebugGetcomname<Operand = void>(arg0: Interface | boolean, arg1: number | boolean): string;
/** `IF_DEBUG_GETSERVERTRIGGERS` (opcode 307) */
declare function ifDebugGetservertriggers<Operand = void>(arg0: Interface | boolean, arg1: number | boolean): number;
/** `IF_DEBUG_TARGET` (opcode 445) */
declare function ifDebugTarget<Operand = void>(arg0: Interface | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `IF_DELETEALL` (opcode 986) */
declare function ifDeleteAll<Operand = void>(arg0: number | boolean): void;
/** `IF_DRAGPICKUP` (opcode 18) */
declare function ifDragpickup<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_FIND` (opcode 333) */
declare function ifFind<Operand = void>(arg0: component | boolean): number;
/** `IF_GET2DANGLE` (opcode 624) */
declare function ifGet2dangle<Operand = void>(arg0: component | boolean): number;
/** `IF_GETCOLOUR` (opcode 798) */
declare function ifGetColour<Operand = void>(arg0: component | boolean): number;
/** `IF_GETFONTGRAPHIC` (opcode 870) */
declare function ifGetFontGraphic<Operand = void>(arg0: component | boolean): number;
/** `IF_GET_GAMESCREEN` (opcode 811) */
declare function ifGetGamescreen<Operand = void>(): number;
/** `IF_GETGRAPHIC` (opcode 169) */
declare function ifGetGraphic<Operand = void>(arg0: component | boolean): number;
/** `IF_GETHEIGHT` (opcode 953) */
declare function ifGetHeight<Operand = void>(arg0: component | boolean): number;
/** `IF_GETHIDE` (opcode 578) */
declare function ifGetHide<Operand = void>(arg0: component | boolean): number;
/** `IF_GETINVCOUNT` (opcode 373) */
declare function ifGetInvCount<Operand = void>(arg0: component | boolean): number;
/** `IF_GETINVOBJECT` (opcode 808) */
declare function ifGetInvObject<Operand = void>(arg0: component | boolean): number;
/** `IF_GETLAYER` (opcode 135) */
declare function ifGetLayer<Operand = void>(arg0: component | boolean): number;
/** `IF_GETMODEL` (opcode 864) */
declare function ifGetModel<Operand = void>(arg0: component | boolean): number;
/** `IF_GETMODELANGLE_X` (opcode 461) */
declare function ifGetModelAngleX<Operand = void>(arg0: component | boolean): number;
/** `IF_GETMODELANGLE_Y` (opcode 436) */
declare function ifGetModelAngleY<Operand = void>(arg0: component | boolean): number;
/** `IF_GETMODELANGLE_Z` (opcode 96) */
declare function ifGetModelAngleZ<Operand = void>(arg0: component | boolean): number;
/** `IF_GETMODELZOOM` (opcode 38) */
declare function ifGetModelZoom<Operand = void>(arg0: component | boolean): number;
/** `IF_GETNEXTSUBID` (opcode 1000) */
declare function ifGetNextSubId<Operand = void>(arg0: component | boolean): number;
/** `IF_GETOP` (opcode 164) */
declare function ifGetOp<Operand = void>(arg0: number | boolean, arg1: component | boolean): string;
/** `IF_GETOPBASE` (opcode 996) */
declare function ifGetOpBase<Operand = void>(arg0: component | boolean): string;
/** `IF_GETPARENTLAYER` (opcode 692) */
declare function ifGetParentLayer<Operand = void>(arg0: component | boolean): number;
/** `IF_GETSCROLLHEIGHT` (opcode 978) */
declare function ifGetScrollHeight<Operand = void>(arg0: component | boolean): number;
/** `IF_GETSCROLLWIDTH` (opcode 496) */
declare function ifGetScrollWidth<Operand = void>(arg0: component | boolean): number;
/** `IF_GETSCROLLX` (opcode 932) */
declare function ifGetScrollX<Operand = void>(arg0: component | boolean): number;
/** `IF_GETSCROLLY` (opcode 428) */
declare function ifGetScrollY<Operand = void>(arg0: component | boolean): number;
/** `IF_GETTARGETMASK` (opcode 704) */
declare function ifGetTargetMask<Operand = void>(arg0: component | boolean): number;
/** `IF_GETTEXT` (opcode 748) */
declare function ifGetText<Operand = void>(arg0: component | boolean): string;
/** `IF_GETTRANS` (opcode 912) */
declare function ifGetTrans<Operand = void>(arg0: component | boolean): number;
/** `IF_GETWIDTH` (opcode 263) */
declare function ifGetWidth<Operand = void>(arg0: component | boolean): number;
/** `IF_GETX` (opcode 710) */
declare function ifGetX<Operand = void>(arg0: component | boolean): number;
/** `IF_GETY` (opcode 170) */
declare function ifGetY<Operand = void>(arg0: component | boolean): number;
/** `IF_GETCHARINDEXATPOS` (opcode 163) */
declare function ifGetcharindexatpos<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): number;
/** `IF_GETCHARPOSATINDEX` (opcode 52) */
declare function ifGetcharposatindex<Operand = void>(arg0: number | boolean, arg1: component | boolean): [number, number];
/** `IF_GETFONTMETRICS` (opcode 543) */
declare function ifGetfontmetrics<Operand = void>(arg0: component | boolean): number;
/** `IF_GETGRAPHICDIMENSIONS` (opcode 997) */
declare function ifGetgraphicdimensions<Operand = void>(arg0: component | boolean): [number, number];
/** `IF_GETMODELXOF` (opcode 721) */
declare function ifGetmodelxof<Operand = void>(arg0: component | boolean): number;
/** `IF_GETMODELYOF` (opcode 463) */
declare function ifGetmodelyof<Operand = void>(arg0: component | boolean): number;
/** `IF_HASSUB` (opcode 888) */
declare function ifHasSub<Operand = void>(arg0: component | boolean): number;
/** `IF_HASSUBMODAL` (opcode 448) */
declare function ifHasSubModal<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `IF_HASSUBOVERLAY` (opcode 331) */
declare function ifHasSubOverlay<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `IF_NPC_SETCUSTOMBODYMODEL` (opcode 941) */
declare function ifNpcSetCustomBodyModel<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_NPC_SETCUSTOMHEADMODEL` (opcode 948) */
declare function ifNpcSetCustomHeadModel<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_NPC_SETCUSTOMRECOL` (opcode 882) */
declare function ifNpcSetCustomRecol<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_NPC_SETCUSTOMRETEX` (opcode 736) */
declare function ifNpcSetCustomRetex<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_OPENSUBCLIENT` (opcode 360) */
declare function ifOpenSubClient<Operand = void>(arg0: component | boolean, arg1: Interface | boolean): void;
/** `IF_RESUME_PAUSEBUTTON` (opcode 326) */
declare function ifResumePauseButton<Operand = void>(arg0: component | boolean): void;
/** `IF_SENDTOBACK` (opcode 246) */
declare function ifSendtoback<Operand = void>(arg0: component | boolean): void;
/** `IF_SENDTOFRONT` (opcode 515) */
declare function ifSendtofront<Operand = void>(arg0: component | boolean): void;
/** `IF_SET2DANGLE` (opcode 205) */
declare function ifSet2dangle<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETALPHA` (opcode 368) */
declare function ifSetAlpha<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETASPECT` (opcode 434) */
declare function ifSetAspect<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETCLICKMASK` (opcode 224) */
declare function ifSetClickMask<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETCOLOUR` (opcode 816) */
declare function ifSetColour<Operand = void>(arg0: colour | boolean, arg1: component | boolean): void;
/** `IF_SETGRAPHIC` (opcode 529) */
declare function ifSetGraphic<Operand = void>(arg0: graphic | boolean, arg1: component | boolean): void;
/** `IF_SETGRAPHICSHADOW` (opcode 131) */
declare function ifSetGraphicShadow<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETHIDE` (opcode 590) */
declare function ifSetHide<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETMODEL` (opcode 488) */
declare function ifSetModel<Operand = void>(arg0: model | boolean, arg1: component | boolean): void;
/** `IF_SETMODELANGLE` (opcode 605) */
declare function ifSetModelAngle<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: number | boolean, arg5: number | boolean, arg6: component | boolean): void;
/** `IF_SETMODELANIM` (opcode 690) */
declare function ifSetModelAnim<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETMODEL_ITEMCONTAINER` (opcode 744) */
declare function ifSetModelItemContainer<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: component | boolean): void;
/** `IF_SETMODELLIGHTING` (opcode 203) */
declare function ifSetModelLighting<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: component | boolean): void;
/** `IF_SETMODELLIGHTING_SUNROTATION` (opcode 598) */
declare function ifSetModelLightingSunrotation<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETMODELORIGIN` (opcode 862) */
declare function ifSetModelOrigin<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETMODELTINT` (opcode 82) */
declare function ifSetModelTint<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: component | boolean): void;
/** `IF_SETMODELZOOM` (opcode 527) */
declare function ifSetModelZoom<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETMOUSEOVERCURSOR` (opcode 786) */
declare function ifSetMouseOverCursor<Operand = void>(arg0: cursor | boolean, arg1: component | boolean): void;
/** `IF_SETNPCHEAD` (opcode 857) */
declare function ifSetNpcHead<Operand = void>(arg0: npc | boolean, arg1: component | boolean): void;
/** `IF_SETNPCMODEL` (opcode 845) */
declare function ifSetNpcModel<Operand = void>(arg0: npc | boolean, arg1: component | boolean): void;
/** `IF_SETOBJECT` (opcode 388) */
declare function ifSetObject<Operand = void>(arg0: obj | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETOBJECT_ALWAYSNUM` (opcode 552) */
declare function ifSetObjectAlwaysNum<Operand = void>(arg0: obj | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETOBJECT_NONUM` (opcode 72) */
declare function ifSetObjectNonum<Operand = void>(arg0: obj | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETOBJECT_WEARCOL` (opcode 518) */
declare function ifSetObjectWearCol<Operand = void>(arg0: obj | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETOBJECT_WEARCOL_ALWAYSNUM` (opcode 898) */
declare function ifSetObjectWearColAlwaysNum<Operand = void>(arg0: obj | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETOBJECT_WEARCOL_NONUM` (opcode 352) */
declare function ifSetObjectWearColNonum<Operand = void>(arg0: obj | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETONCAMFINISHED` (opcode 630) */
declare function ifSetOnCamFinished<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONCHATTRANSMIT` (opcode 683) */
declare function ifSetOnChatTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONCLANCHANNELTRANSMIT` (opcode 111) */
declare function ifSetOnClanChannelTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONCLANSETTINGSTRANSMIT` (opcode 401) */
declare function ifSetOnClanSettingsTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONCLANTRANSMIT` (opcode 625) */
declare function ifSetOnClanTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONCLICK` (opcode 881) */
declare function ifSetOnClick<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONCLICKREPEAT` (opcode 287) */
declare function ifSetOnClickRepeat<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONDRAG` (opcode 478) */
declare function ifSetOnDrag<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONDRAGCOMPLETE` (opcode 926) */
declare function ifSetOnDragComplete<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONFRIENDTRANSMIT` (opcode 76) */
declare function ifSetOnFriendTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONHOLD` (opcode 143) */
declare function ifSetOnHold<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONINVTRANSMIT` (opcode 809) */
declare function ifSetOnInvTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONKEY` (opcode 730) */
declare function ifSetOnKey<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONMISCTRANSMIT` (opcode 416) */
declare function ifSetOnMiscTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONMOUSELEAVE` (opcode 600) */
declare function ifSetOnMouseLeave<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONMOUSEOVER` (opcode 968) */
declare function ifSetOnMouseOver<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONMOUSEREPEAT` (opcode 753) */
declare function ifSetOnMouseRepeat<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONOP` (opcode 172) */
declare function ifSetOnOp<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONOPT` (opcode 508) */
declare function ifSetOnOpt<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONRELEASE` (opcode 382) */
declare function ifSetOnRelease<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONRESIZE` (opcode 321) */
declare function ifSetOnResize<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONSCROLLWHEEL` (opcode 550) */
declare function ifSetOnScrollWheel<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONSTATTRANSMIT` (opcode 486) */
declare function ifSetOnStatTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONSTOCKTRANSMIT` (opcode 947) */
declare function ifSetOnStockTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONTARGETENTER` (opcode 758) */
declare function ifSetOnTargetEnter<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONTARGETLEAVE` (opcode 770) */
declare function ifSetOnTargetLeave<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONTIMER` (opcode 300) */
declare function ifSetOnTimer<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONVARCLANTRANSMIT` (opcode 105) */
declare function ifSetOnVarClanTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONVARTRANSMIT` (opcode 244) */
declare function ifSetOnVarTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONVARCSTRTRANSMIT` (opcode 768) */
declare function ifSetOnVarcStrTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONVARCTRANSMIT` (opcode 189) */
declare function ifSetOnVarcTransmit<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETOP` (opcode 255) */
declare function ifSetOp<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): void;
/** `IF_SETOPBASE` (opcode 289) */
declare function ifSetOpBase<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): void;
/** `IF_SETOPCHAR` (opcode 222) */
declare function ifSetOpChar<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETOPCURSOR` (opcode 122) */
declare function ifSetOpCursor<Operand = void>(arg0: number | boolean, arg1: cursor | boolean, arg2: component | boolean): void;
/** `IF_SETOPKEY` (opcode 739) */
declare function ifSetOpKey<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: component | boolean): void;
/** `IF_SETOPTCHAR` (opcode 127) */
declare function ifSetOptChar<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETOPTKEY` (opcode 903) */
declare function ifSetOptKey<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETOUTLINE` (opcode 344) */
declare function ifSetOutline<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETPARAM_INT` (opcode 369) */
declare function ifSetParamInt<Operand = void>(arg0: param | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETPARAM_STRING` (opcode 198) */
declare function ifSetParamString<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): void;
/** `IF_SETPAUSETEXT` (opcode 790) */
declare function ifSetPauseText<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): void;
/** `IF_SETPLAYERHEAD_SELF` (opcode 783) */
declare function ifSetPlayerHeadSelf<Operand = void>(arg0: component | boolean): void;
/** `IF_SETPLAYERMODEL` (opcode 547) */
declare function ifSetPlayerModel<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETPLAYERMODEL_SELF` (opcode 499) */
declare function ifSetPlayerModelSelf<Operand = void>(arg0: component | boolean): void;
/** `IF_SETPOSITION` (opcode 937) */
declare function ifSetPosition<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: component | boolean): void;
/** `IF_SETRECOL` (opcode 194) */
declare function ifSetRecol<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: component | boolean): void;
/** `IF_SETRETEX` (opcode 950) */
declare function ifSetRetex<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: component | boolean): void;
/** `IF_SETSCROLLPOS` (opcode 825) */
declare function ifSetScrollPos<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETSCROLLSIZE` (opcode 628) */
declare function ifSetScrollSize<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETSIZE` (opcode 982) */
declare function ifSetSize<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: component | boolean): void;
/** `IF_SETTARGETOPCURSOR` (opcode 805) */
declare function ifSetTargetOpCursor<Operand = void>(arg0: cursor | boolean, arg1: component | boolean): void;
/** `IF_SETTEXT` (opcode 724) */
declare function ifSetText<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): void;
/** `IF_SETTEXTALIGN` (opcode 741) */
declare function ifSetTextAlign<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: component | boolean): void;
/** `IF_SETTEXTFONT` (opcode 85) */
declare function ifSetTextFont<Operand = void>(arg0: graphic | boolean, arg1: component | boolean): void;
/** `IF_SETTEXTSHADOW` (opcode 689) */
declare function ifSetTextShadow<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETTRANS` (opcode 763) */
declare function ifSetTrans<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETVIDEO_GRAPHIC` (opcode 479) */
declare function ifSetVideoGraphic<Operand = void>(arg0: component | boolean): void;
/** `IF_SETVIDEO_TEXT` (opcode 206) */
declare function ifSetVideoText<Operand = void>(arg0: component | boolean): void;
/** `IF_SETDRAGDEADTIME` (opcode 413) */
declare function ifSetdragdeadtime<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETDRAGDEADZONE` (opcode 98) */
declare function ifSetdragdeadzone<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETDRAGGABLE` (opcode 899) */
declare function ifSetdraggable<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: component | boolean): void;
/** `IF_SETDRAGRENDERBEHAVIOUR` (opcode 495) */
declare function ifSetdragrenderbehaviour<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETFILL` (opcode 918) */
declare function ifSetfill<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETFONTMONO` (opcode 316) */
declare function ifSetfontmono<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETHFLIP` (opcode 774) */
declare function ifSethflip<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETLINEDIRECTION` (opcode 760) */
declare function ifSetlinedirection<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETLINEWID` (opcode 530) */
declare function ifSetlinewid<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETMAXLINES` (opcode 432) */
declare function ifSetmaxlines<Operand = void>(arg0: number | boolean, arg1: component | boolean): void;
/** `IF_SETMODELORTHOG` (opcode 824) */
declare function ifSetmodelorthog<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETNOCLICKTHROUGH` (opcode 668) */
declare function ifSetnoclickthrough<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETONDIALOGABORT` (opcode 179) */
declare function ifSetondialogabort<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETONSUBCHANGE` (opcode 532) */
declare function ifSetonsubchange<Operand = void>(callback: unknown, component: number): void;
/** `IF_SETTARGETCURSORS` (opcode 896) */
declare function ifSettargetcursors<Operand = void>(arg0: cursor | boolean, arg1: cursor | boolean, arg2: component | boolean): void;
/** `IF_SETTARGETVERB` (opcode 583) */
declare function ifSettargetverb<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): void;
/** `IF_SETTEXTANTIMACRO` (opcode 651) */
declare function ifSettextantimacro<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETTILING` (opcode 460) */
declare function ifSettiling<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IF_SETVFLIP` (opcode 503) */
declare function ifSetvflip<Operand = void>(arg0: boolean | boolean, arg1: component | boolean): void;
/** `IGNORE_ADD` (opcode 177) */
declare function ignoreAdd<Operand = void>(arg0: string): void;
/** `IGNORE_ADD_TEMP` (opcode 954) */
declare function ignoreAddTemp<Operand = void>(arg0: string): void;
/** `IGNORE_COUNT` (opcode 735) */
declare function ignoreCount<Operand = void>(): number;
/** `IGNORE_DEL` (opcode 871) */
declare function ignoreDel<Operand = void>(arg0: string): void;
/** `IGNORE_GETNAME` (opcode 284) */
declare function ignoreGetName<Operand = void>(arg0: number | boolean): [string, string];
/** `IGNORE_GETNAME_UNFILTERED` (opcode 37) */
declare function ignoreGetNameUnfiltered<Operand = void>(arg0: number | boolean): string;
/** `IGNORE_IS_TEMP` (opcode 629) */
declare function ignoreIsTemp<Operand = void>(arg0: number | boolean): number;
/** `IGNORE_TEST` (opcode 966) */
declare function ignoreTest<Operand = void>(arg0: string): number;
/** `INTERPOLATE` (opcode 190) */
declare function interpolate<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: number | boolean): number;
/** `INV_FREESPACE` (opcode 20) */
declare function invFreespace<Operand = void>(arg0: number | boolean): number;
/** `INV_GETNUM` (opcode 138) */
declare function invGetNum<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `INV_GETTOOLTIP` (opcode 1006) */
declare function invGetTooltip<Operand = void>(arg0: inv | boolean, arg1: number | boolean): string;
/** `INV_GETOBJ` (opcode 180) */
declare function invGetobj<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `INV_OTHER_GETTOOLTIP` (opcode 1007) */
declare function invOtherGetTooltip<Operand = void>(arg0: inv | boolean, arg1: number | boolean): string;
/** `INV_SIZE` (opcode 157) */
declare function invSize<Operand = void>(arg0: number | boolean): number;
/** `INV_STOCKBASE` (opcode 192) */
declare function invStockBase<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `INV_TOTAL` (opcode 485) */
declare function invTotal<Operand = void>(arg0: inv | boolean, arg1: obj | boolean): number;
/** `INV_TOTALPARAM` (opcode 696) */
declare function invTotalparam<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `INV_TOTALPARAM_STACK` (opcode 524) */
declare function invTotalparamStack<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `INVOTHER_GETNUM` (opcode 720) */
declare function invotherGetNum<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `INVOTHER_GETOBJ` (opcode 612) */
declare function invotherGetobj<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `INVOTHER_TOTAL` (opcode 771) */
declare function invotherTotal<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `INVPOW` (opcode 776) */
declare function invpow<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `IS_APPLET` (opcode 359) */
declare function isApplet<Operand = void>(): number;
/** `IS_GAMESCREEN_STATE` (opcode 1004) */
declare function isGamescreenState<Operand = void>(): number;
/** `IS_NPC_ACTIVE` (opcode 634) */
declare function isNpcActive<Operand = void>(): number;
/** `IS_NPC_VISIBLE` (opcode 322) */
declare function isNpcVisible<Operand = void>(): number;
/** `IS_TARGETED_ENTITY` (opcode 852) */
declare function isTargetedEntity<Operand = void>(): number;
/** `ITEM_FIND_PARAMINT` (opcode 754) */
declare function itemFindParamInt<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean, arg3: number | string | bigint | boolean): number;
/** `ITEM_FIND_PARAMSTR` (opcode 264) */
declare function itemFindParamStr<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean, arg3: number | string | bigint | boolean): number;
/** `JAVA_VERSION_SUPPORTED` (opcode 826) */
declare function javaVersionSupported<Operand = void>(): number;
/** `KEYHELD_ALT` (opcode 290) */
declare function keyheldAlt<Operand = void>(): number;
/** `KEYHELD_CTRL` (opcode 759) */
declare function keyheldCtrl<Operand = void>(): number;
/** `KEYHELD_SHIFT` (opcode 334) */
declare function keyheldShift<Operand = void>(): number;
/** `LOAD_CLAN_VAR_LONG` (opcode 215) */
declare function loadClanVarLong<Operand = void>(): bigint;
/** `LOAD_CLAN_VAR_STRING` (opcode 995) */
declare function loadClanVarString<Operand = void>(): string;
/** `LOBBY_ENTERLOBBY` (opcode 19) */
declare function lobbyEnterLobby<Operand = void>(arg0: string, arg1: string): void;
/** `LOBBY_ENTERLOBBYREPLY` (opcode 945) */
declare function lobbyEnterLobbyReply<Operand = void>(): number;
/** `LOBBY_ENTERLOBBY_SOCIAL_NETWORK` (opcode 506) */
declare function lobbyEnterLobbySocialNetwork<Operand = void>(arg0: number | boolean): void;
/** `LOBBY_ENTERGAME` (opcode 182) */
declare function lobbyEntergame<Operand = void>(): void;
/** `LOBBY_ENTERGAMEREPLY` (opcode 422) */
declare function lobbyEntergamereply<Operand = void>(): number;
/** `LOBBY_LEAVELOBBY` (opcode 242) */
declare function lobbyLeaveLobby<Operand = void>(): void;
/** `LOGIN_CANCEL` (opcode 509) */
declare function loginCancel<Operand = void>(): void;
/** `LOGIN_CONTINUE` (opcode 273) */
declare function loginContinue<Operand = void>(): void;
/** `LOGIN_DISALLOWRESULT` (opcode 551) */
declare function loginDisallowResult<Operand = void>(): number;
/** `LOGIN_DISALLOWTRIGGER` (opcode 917) */
declare function loginDisallowTrigger<Operand = void>(): number;
/** `LOGIN_HOPTIME` (opcode 9) */
declare function loginHopTime<Operand = void>(): number;
/** `LOGIN_INPROGRESS` (opcode 875) */
declare function loginInprogress<Operand = void>(): number;
/** `LOGIN_LAST_TRANSFER_REPLY` (opcode 666) */
declare function loginLastTransferReply<Operand = void>(): [number, number, number];
/** `LOGIN_QUEUE_POSITION` (opcode 44) */
declare function loginQueuePosition<Operand = void>(): number;
/** `LOGIN_REPLY_WORLD_ALT` (opcode 1003) */
declare function loginReplyWorldAlt<Operand = void>(): number;
/** `LOGIN_REQUEST` (opcode 831) */
declare function loginRequest<Operand = void>(arg0: string, arg1: string): void;
/** `LOGIN_REQUEST_SOCIAL_NETWORK` (opcode 869) */
declare function loginRequestSocialNetwork<Operand = void>(arg0: number | boolean): void;
/** `LOGIN_RESETREPLY` (opcode 171) */
declare function loginResetReply<Operand = void>(): void;
/** `LOWERCASE` (opcode 556) */
declare function lowercase<Operand = void>(arg0: string): string;
/** `MAP_ISOWNER` (opcode 214) */
declare function mapIsowner<Operand = void>(arg0: string): number;
/** `MAP_LANG` (opcode 202) */
declare function mapLang<Operand = void>(): number;
/** `MAP_MEMBERS` (opcode 336) */
declare function mapMembers<Operand = void>(): number;
/** `MAP_QUICKCHAT` (opcode 427) */
declare function mapQuickChat<Operand = void>(): number;
/** `MAP_WORLD` (opcode 601) */
declare function mapWorld<Operand = void>(): number;
/** `MAX` (opcode 750) */
declare function max<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `MEC_CATEGORY` (opcode 976) */
declare function mecCategory<Operand = void>(arg0: mapelement | boolean): number;
/** `MEC_GRAPHIC` (opcode 631) */
declare function mecGraphic<Operand = void>(arg0: mapelement | boolean): number;
/** `MEC_PARAM` (opcode 230) */
declare function mecParam<Operand = void>(arg0: mapelement | boolean, arg1: param | boolean): any;
/** `MEC_TEXT` (opcode 985) */
declare function mecText<Operand = void>(arg0: mapelement | boolean): string;
/** `MEC_TEXTSIZE` (opcode 757) */
declare function mecTextSize<Operand = void>(arg0: mapelement | boolean): number;
/** `MES` (opcode 471) */
declare function mes<Operand = void>(arg0: string): void;
/** `MES_TYPED` (opcode 913) */
declare function mesTyped<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): void;
/** `MIN` (opcode 538) */
declare function min<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `MINIMENU_SETMAXENTRIES` (opcode 964) */
declare function minimenuSetmaxentries<Operand = void>(arg0: number | boolean): void;
/** `MINIMENUOPEN` (opcode 61) */
declare function minimenuopen<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `MOVECOORD` (opcode 48) */
declare function moveCoord<Operand = void>(arg0: coord | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): number;
/** `NC_PARAM` (opcode 425) */
declare function ncParam<Operand = void>(arg0: npc | boolean, arg1: param | boolean): any;
/** `NOOP` (opcode 429) */
declare function noop<Operand = void>(): void;
/** `NOT` (opcode 534) */
declare function not<Operand = void>(arg0: number | boolean): number;
/** `NOTIFY_ACCOUNTCREATED` (opcode 477) */
declare function notifyAccountcreated<Operand = void>(): void;
/** `NOTIFY_ACCOUNTCREATESTARTED` (opcode 672) */
declare function notifyAccountcreatestarted<Operand = void>(): void;
/** `NPC_TYPE` (opcode 974) */
declare function npcType<Operand = void>(): number;
/** `OBJECT_PARAM` (opcode 935) */
declare function objectParam<Operand = void>(arg0: number | boolean, arg1: param | boolean): any;
/** `OC_CERT` (opcode 94) */
declare function ocCert<Operand = void>(arg0: obj | boolean): number;
/** `OC_COST` (opcode 89) */
declare function ocCost<Operand = void>(arg0: obj | boolean): number;
/** `OC_FIND` (opcode 800) */
declare function ocFind<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): number;
/** `OC_FINDNEXT` (opcode 623) */
declare function ocFindNext<Operand = void>(): number;
/** `OC_FINDRESTART` (opcode 146) */
declare function ocFindrestart<Operand = void>(): void;
/** `OC_ICURSOR` (opcode 45) */
declare function ocIcursor<Operand = void>(arg0: obj | boolean, arg1: number | boolean): number;
/** `OC_IOP` (opcode 949) */
declare function ocIop<Operand = void>(arg0: obj | boolean, arg1: number | boolean): string;
/** `OC_MEMBERS` (opcode 822) */
declare function ocMembers<Operand = void>(arg0: obj | boolean): number;
/** `OC_MINIMENU_COLOUR` (opcode 213) */
declare function ocMinimenuColour<Operand = void>(arg0: obj | boolean): number;
/** `OC_MINIMENU_COLOUR_OVERRIDDEN` (opcode 481) */
declare function ocMinimenuColourOverridden<Operand = void>(arg0: obj | boolean): number;
/** `OC_MULTISTACKSIZE` (opcode 249) */
declare function ocMultiStackSize<Operand = void>(arg0: obj | boolean): number;
/** `OC_NAME` (opcode 385) */
declare function ocName<Operand = void>(arg0: obj | boolean): string;
/** `OC_OP` (opcode 128) */
declare function ocOp<Operand = void>(arg0: obj | boolean, arg1: number | boolean): string;
/** `OC_PARAM` (opcode 120) */
declare function ocParam<Operand = void>(arg0: obj | boolean, arg1: param | boolean): any;
/** `OC_STACKABLE` (opcode 905) */
declare function ocStackable<Operand = void>(arg0: obj | boolean): number;
/** `OC_UNCERT` (opcode 313) */
declare function ocUncert<Operand = void>(arg0: obj | boolean): number;
/** `OC_WEARPOS` (opcode 22) */
declare function ocWearPos<Operand = void>(arg0: obj | boolean): number;
/** `OC_WEARPOS2` (opcode 756) */
declare function ocWearpos2<Operand = void>(arg0: obj | boolean): number;
/** `OC_WEARPOS3` (opcode 384) */
declare function ocWearpos3<Operand = void>(arg0: obj | boolean): number;
/** `OPCOUNT` (opcode 437) */
declare function opCount<Operand = void>(): number;
/** `OPPLAYER` (opcode 162) */
declare function opPlayer<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): void;
/** `OPENDIRECTORYPICKER` (opcode 400) */
declare function opendirectorypicker<Operand = void>(arg0: string): void;
/** `OPENURL` (opcode 577) */
declare function openurl<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): void;
/** `OPENURL_NOLOGIN` (opcode 355) */
declare function openurlNoLogin<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): void;
/** `OPENURL_SHIM` (opcode 343) */
declare function openurlShim<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean, arg3: number | string | bigint | boolean): void;
/** `OPPLAYERT` (opcode 637) */
declare function opplayert<Operand = void>(arg0: string): void;
/** `PARAHEIGHT` (opcode 469) */
declare function paraheight<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): number;
/** `PARAHEIGHT_EXTRA` (opcode 1009) */
declare function paraheightExtra<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): number;
/** `PARAWIDTH` (opcode 43) */
declare function parawidth<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): number;
/** `PLAYERMEMBER` (opcode 262) */
declare function playerMember<Operand = void>(): number;
/** `PLAYERCOUNTRY` (opcode 667) */
declare function playercountry<Operand = void>(): number;
/** `PLAYERDEMO` (opcode 619) */
declare function playerdemo<Operand = void>(): number;
/** `PLAYERMOD` (opcode 81) */
declare function playermod<Operand = void>(): number;
/** `PLAYERMODLEVEL` (opcode 718) */
declare function playermodlevel<Operand = void>(): number;
/** `POW` (opcode 645) */
declare function pow<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `PROFILE_CPU` (opcode 930) */
declare function profileCpu<Operand = void>(): number;
/** `PROFILE_TOOLKIT` (opcode 30) */
declare function profileToolkit<Operand = void>(): number;
/** `PUSH_VARCLAN` (opcode 717) */
declare function pushVarClan<Operand = void>(): number;
/** `PUSH_VARCLANBIT` (opcode 220) */
declare function pushVarClanBit<Operand = void>(): number;
/** `PUSH_VARCLANSETTING` (opcode 73) */
declare function pushVarClanSetting<Operand = void>(): number;
/** `PUSH_VARCLANSETTINGBIT` (opcode 147) */
declare function pushVarClanSettingBit<Operand = void>(): number;
/** `PUSH_VARCLANSETTING_LONG` (opcode 83) */
declare function pushVarClanSettingLong<Operand = void>(): bigint;
/** `PUSH_VARCLANSETTING_STRING` (opcode 910) */
declare function pushVarClanSettingString<Operand = void>(): string;
/** `QUEST_ALLREQMET` (opcode 152) */
declare function questAllreqmet<Operand = void>(): void;
/** `QUEST_FINISHED` (opcode 963) */
declare function questFinished<Operand = void>(): void;
/** `QUEST_GETNAME` (opcode 791) */
declare function questGetName<Operand = void>(arg0: quest | boolean): string;
/** `QUEST_GETSORTNAME` (opcode 889) */
declare function questGetSortName<Operand = void>(arg0: quest | boolean): string;
/** `QUEST_GETDIFFICULTY` (opcode 468) */
declare function questGetdifficulty<Operand = void>(): void;
/** `QUEST_GETMEMBERS` (opcode 863) */
declare function questGetmembers<Operand = void>(): void;
/** `QUEST_PARAM` (opcode 62) */
declare function questParam<Operand = void>(arg0: quest | boolean, arg1: param | boolean): any;
/** `QUEST_POINTS` (opcode 608) */
declare function questPoints<Operand = void>(): void;
/** `QUEST_POINTSREQ` (opcode 846) */
declare function questPointsreq<Operand = void>(): void;
/** `QUEST_POINTSREQ_MET` (opcode 967) */
declare function questPointsreqMet<Operand = void>(): void;
/** `QUEST_QUESTREQ` (opcode 642) */
declare function questQuestreq<Operand = void>(arg0: number | boolean): void;
/** `QUEST_QUESTREQ_COUNT` (opcode 14) */
declare function questQuestreqCount<Operand = void>(arg0: quest | boolean): number;
/** `QUEST_QUESTREQ_MET` (opcode 856) */
declare function questQuestreqMet<Operand = void>(arg0: number | boolean): void;
/** `QUEST_STARTED` (opcode 12) */
declare function questStarted<Operand = void>(): void;
/** `QUEST_STATREQ_COUNT` (opcode 102) */
declare function questStatreqCount<Operand = void>(arg0: quest | boolean): number;
/** `QUEST_STATREQ_LEVEL` (opcode 39) */
declare function questStatreqLevel<Operand = void>(arg0: number | boolean): void;
/** `QUEST_STATREQ_MET` (opcode 592) */
declare function questStatreqMet<Operand = void>(arg0: number | boolean): void;
/** `QUEST_STATREQ_STAT` (opcode 614) */
declare function questStatreqStat<Operand = void>(arg0: number | boolean): void;
/** `QUEST_TYPE` (opcode 842) */
declare function questType<Operand = void>(): void;
/** `QUEST_VARBITREQ_COUNT` (opcode 11) */
declare function questVarbitreqCount<Operand = void>(arg0: quest | boolean): number;
/** `QUEST_VARBITREQ_DESC` (opcode 835) */
declare function questVarbitreqDesc<Operand = void>(arg0: number | boolean, arg1: number | boolean): string;
/** `QUEST_VARBITREQ_MET` (opcode 858) */
declare function questVarbitreqMet<Operand = void>(arg0: number | boolean): void;
/** `QUEST_VARPREQ_COUNT` (opcode 698) */
declare function questVarpreqCount<Operand = void>(arg0: quest | boolean): number;
/** `QUEST_VARPREQ_DESC` (opcode 302) */
declare function questVarpreqDesc<Operand = void>(arg0: number | boolean, arg1: number | boolean): string;
/** `QUEST_VARPREQ_MET` (opcode 299) */
declare function questVarpreqMet<Operand = void>(arg0: number | boolean): void;
/** `QUIT` (opcode 716) */
declare function quit<Operand = void>(): void;
/** `RANDOM` (opcode 675) */
declare function random<Operand = void>(arg0: number | boolean): number;
/** `RANDOM_SOUND_PITCH` (opcode 729) */
declare function randomSoundPitch<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `RANDOMINC` (opcode 851) */
declare function randominc<Operand = void>(arg0: number | boolean): number;
/** `REBOOTTIMER` (opcode 715) */
declare function reboottimer<Operand = void>(): number;
/** `REMOVETAGS` (opcode 41) */
declare function removetags<Operand = void>(arg0: string): string;
/** `RESET_MYPLAYER_ANIMS` (opcode 245) */
declare function resetMyplayerAnims<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `RESUME_CLANFORUMQFCDIALOG` (opcode 101) */
declare function resumeClanforumqfcdialog<Operand = void>(arg0: string): void;
/** `RESUME_COUNTDIALOG` (opcode 117) */
declare function resumeCountDialog<Operand = void>(arg0: string): void;
/** `RESUME_HSLDIALOG` (opcode 238) */
declare function resumeHsldialog<Operand = void>(arg0: number | boolean): void;
/** `RESUME_NAMEDIALOG` (opcode 216) */
declare function resumeNameDialog<Operand = void>(arg0: string): void;
/** `RESUME_OBJDIALOG` (opcode 304) */
declare function resumeObjdialog<Operand = void>(arg0: number | boolean): void;
/** `RESUME_STRINGDIALOG` (opcode 4) */
declare function resumeStringDialog<Operand = void>(arg0: string): void;
/** `RUNENERGY_VISIBLE` (opcode 944) */
declare function runenergyVisible<Operand = void>(): number;
/** `RUNWEIGHT_VISIBLE` (opcode 866) */
declare function runweightVisible<Operand = void>(): number;
/** `SCALE` (opcode 277) */
declare function scale<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): number;
/** `SELF_PLAYER_UID` (opcode 554) */
declare function selfPlayerUid<Operand = void>(): number;
/** `SEQ_PARAM` (opcode 404) */
declare function seqParam<Operand = void>(arg0: seq | boolean, arg1: param | boolean): any;
/** `SETBIT` (opcode 119) */
declare function setBit<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `SETDEFAULTWINDOWMODE` (opcode 649) */
declare function setDefaultWindowMode<Operand = void>(arg0: number | boolean): void;
/** `SETENTITYOVERHEADIF` (opcode 430) */
declare function setEntityOverHeadIf<Operand = void>(arg0: number | boolean): void;
/** `SETGENDER` (opcode 325) */
declare function setGender<Operand = void>(arg0: number | boolean): void;
/** `SETWINDOWMODE` (opcode 818) */
declare function setWindowMode<Operand = void>(arg0: number | boolean): void;
/** `SETDEFAULTCURSORS` (opcode 110) */
declare function setdefaultcursors<Operand = void>(arg0: cursor | boolean, arg1: cursor | boolean): void;
/** `SETHARDCODEDOPCURSORS` (opcode 65) */
declare function sethardcodedopcursors<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `SETOBJ` (opcode 925) */
declare function setobj<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `SETRECOLPALETTE` (opcode 234) */
declare function setrecolpalette<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `SETUP_MESSAGEBOX` (opcode 211) */
declare function setupMessageBox<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: number | boolean, arg5: number | boolean, arg6: number | boolean, arg7: number | boolean, arg8: number | boolean, arg9: number | boolean, arg10: number | boolean): void;
/** `SOUND_JINGLE` (opcode 920) */
declare function soundJingle<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `SOUND_JINGLE_VOLUME` (opcode 145) */
declare function soundJingleVolume<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `SOUND_SONG` (opcode 855) */
declare function soundSong<Operand = void>(arg0: midi | boolean): void;
/** `SOUND_SONG_VOLUME` (opcode 780) */
declare function soundSongVolume<Operand = void>(arg0: midi | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `SOUND_SPEECH_VOLUME` (opcode 959) */
declare function soundSpeechVolume<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `SOUND_SYNTH` (opcode 2) */
declare function soundSynth<Operand = void>(arg0: sound | boolean, arg1: number | boolean, arg2: number | boolean): void;
/** `SOUND_SYNTH_RATE` (opcode 535) */
declare function soundSynthRate<Operand = void>(arg0: sound | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: number | boolean): void;
/** `SOUND_SYNTH_VOLUME` (opcode 784) */
declare function soundSynthVolume<Operand = void>(arg0: sound | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `SOUND_VORBIS_PLAY` (opcode 762) */
declare function soundVorbisPlay<Operand = void>(arg0: number | boolean): void;
/** `SOUND_VORBIS_PRELOAD` (opcode 174) */
declare function soundVorbisPreload<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `SOUND_VORBIS_RATE` (opcode 395) */
declare function soundVorbisRate<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean, arg4: number | boolean): void;
/** `SOUND_VORBIS_STOP` (opcode 88) */
declare function soundVorbisStop<Operand = void>(arg0: number | boolean): void;
/** `SOUND_VORBIS_VOLUME` (opcode 516) */
declare function soundVorbisVolume<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `SPLINE_ADDPOINT` (opcode 46) */
declare function splineAddPoint<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: coord | boolean, arg3: number | boolean, arg4: coord | boolean, arg5: number | boolean, arg6: number | boolean): void;
/** `SPLINE_LENGTH` (opcode 595) */
declare function splineLength<Operand = void>(arg0: number | boolean): number;
/** `SPLINE_NEW` (opcode 567) */
declare function splineNew<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `STAFFMODLEVEL` (opcode 727) */
declare function staffmodlevel<Operand = void>(): number;
/** `STAT` (opcode 301) */
declare function stat<Operand = void>(arg0: stat | boolean): number;
/** `STAT_BASE` (opcode 340) */
declare function statBase<Operand = void>(arg0: stat | boolean): number;
/** `STAT_VISIBLE_XP` (opcode 772) */
declare function statVisibleXp<Operand = void>(arg0: stat | boolean): number;
/** `STOCKMARKET_GETOFFERCOMPLETEDCOUNT` (opcode 480) */
declare function stockmarketGetoffercompletedcount<Operand = void>(arg0: number | boolean): number;
/** `STOCKMARKET_GETOFFERCOMPLETEDGOLD` (opcode 687) */
declare function stockmarketGetoffercompletedgold<Operand = void>(arg0: number | boolean): number;
/** `STOCKMARKET_GETOFFERCOUNT` (opcode 27) */
declare function stockmarketGetoffercount<Operand = void>(arg0: number | boolean): number;
/** `STOCKMARKET_GETOFFERITEM` (opcode 602) */
declare function stockmarketGetofferitem<Operand = void>(arg0: number | boolean): number;
/** `STOCKMARKET_GETOFFERPRICE` (opcode 575) */
declare function stockmarketGetofferprice<Operand = void>(arg0: number | boolean): number;
/** `STOCKMARKET_GETOFFERTYPE` (opcode 414) */
declare function stockmarketGetoffertype<Operand = void>(arg0: number | boolean): number;
/** `STOCKMARKET_ISOFFERADDING` (opcode 361) */
declare function stockmarketIsofferadding<Operand = void>(arg0: number | boolean): number;
/** `STOCKMARKET_ISOFFEREMPTY` (opcode 650) */
declare function stockmarketIsofferempty<Operand = void>(arg0: number | boolean): number;
/** `STOCKMARKET_ISOFFERFINISHED` (opcode 984) */
declare function stockmarketIsofferfinished<Operand = void>(arg0: number | boolean): number;
/** `STOCKMARKET_ISOFFERSTABLE` (opcode 733) */
declare function stockmarketIsofferstable<Operand = void>(arg0: number | boolean): number;
/** `STRING_INDEXOF_CHAR` (opcode 593) */
declare function stringIndexofChar<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): number;
/** `STRING_INDEXOF_STRING` (opcode 844) */
declare function stringIndexofString<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): number;
/** `STRING_LENGTH` (opcode 247) */
declare function stringLength<Operand = void>(arg0: string): number;
/** `STRINGWIDTH` (opcode 459) */
declare function stringWidth<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): number;
/** `STRUCT_PARAM` (opcode 594) */
declare function structParam<Operand = void>(arg0: struct | boolean, arg1: param | boolean): any;
/** `SUBSTRING` (opcode 108) */
declare function subString<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): string;
/** `TESTBIT` (opcode 278) */
declare function testBit<Operand = void>(arg0: number | boolean, arg1: number | boolean): number;
/** `TEXT_GENDER` (opcode 709) */
declare function textGender<Operand = void>(arg0: string, arg1: string): string;
/** `TEXT_SWITCH` (opcode 15) */
declare function textSwitch<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean, arg2: number | string | bigint | boolean): string;
/** `TOSTRING` (opcode 688) */
declare function tostring<Operand = void>(arg0: number | boolean): string;
/** `TOSTRING_LOCALISED` (opcode 280) */
declare function tostringLocalised<Operand = void>(arg0: number | boolean, arg1: number | boolean): string;
/** `UNKNOWN_COMMAND_5019` (opcode 462) */
declare function unknownCommand5019<Operand = void>(arg0: number | boolean): string;
/** `UNUSED_CLAN_OP` (opcode 104) */
declare function unusedClanOp<Operand = void>(arg0: number | boolean): void;
/** `UNUSED_LOGIN_GLOBAL_BOOL` (opcode 643) */
declare function unusedLoginGlobalBool<Operand = void>(): number;
/** `UNUSED_PACKET_SEND_STRING` (opcode 990) */
declare function unusedPacketSendString<Operand = void>(arg0: string): void;
/** `UNUSED_PACKET_SET_GLOBAL_BYTE` (opcode 777) */
declare function unusedPacketSetGlobalByte<Operand = void>(): number;
/** `USERDETAIL_DOB` (opcode 407) */
declare function userDetailDob<Operand = void>(): number;
/** `USERDETAIL_LOBBY_CCEXPIRY` (opcode 679) */
declare function userDetailLobbyCcexpiry<Operand = void>(): number;
/** `USERDETAIL_LOBBY_DOBREQUESTED` (opcode 769) */
declare function userDetailLobbyDobrequested<Operand = void>(): number;
/** `USERDETAIL_LOBBY_EMAILSTATUS` (opcode 54) */
declare function userDetailLobbyEmailStatus<Operand = void>(): number;
/** `USERDETAIL_LOBBY_GRACEEXPIRY` (opcode 522) */
declare function userDetailLobbyGraceexpiry<Operand = void>(): number;
/** `USERDETAIL_LOBBY_JCOINS_BALANCE` (opcode 887) */
declare function userDetailLobbyJcoinsBalance<Operand = void>(): number;
/** `USERDETAIL_LOBBY_LASTLOGINADDRESS` (opcode 78) */
declare function userDetailLobbyLastloginaddress<Operand = void>(): string;
/** `USERDETAIL_LOBBY_LASTLOGINDAY` (opcode 236) */
declare function userDetailLobbyLastloginday<Operand = void>(): number;
/** `USERDETAIL_LOBBY_LOYALTY_BALANCE` (opcode 375) */
declare function userDetailLobbyLoyaltyBalance<Operand = void>(): number;
/** `USERDETAIL_LOBBY_LOYALTY_ENABLED` (opcode 265) */
declare function userDetailLobbyLoyaltyEnabled<Operand = void>(): number;
/** `USERDETAIL_LOBBY_MEMBERSHIP` (opcode 148) */
declare function userDetailLobbyMembership<Operand = void>(): [number, number, number];
/** `USERDETAIL_LOBBY_MEMBERSSTATS` (opcode 253) */
declare function userDetailLobbyMembersstats<Operand = void>(): number;
/** `USERDETAIL_LOBBY_PLAYAGE` (opcode 393) */
declare function userDetailLobbyPlayage<Operand = void>(): number;
/** `USERDETAIL_LOBBY_RECOVERYDAY` (opcode 379) */
declare function userDetailLobbyRecoveryday<Operand = void>(): number;
/** `USERDETAIL_LOBBY_UNREADMESSAGES` (opcode 241) */
declare function userDetailLobbyUnreadmessages<Operand = void>(): number;
/** `USERDETAIL_QUICKCHAT` (opcode 201) */
declare function userDetailQuickChat<Operand = void>(): number;
/** `USERFLOWFLAGS` (opcode 391) */
declare function userflowflagsOp<Operand = void>(): [number, number];
/** `VALIDATECACHEDIRECTORY` (opcode 521) */
declare function validatecachedirectory<Operand = void>(arg0: string): number;
/** `VIDEO_ADVERT_ALLOW_SKIP` (opcode 576) */
declare function videoAdvertAllowSkip<Operand = void>(): void;
/** `VIDEO_ADVERT_FORCE_REMOVE` (opcode 507) */
declare function videoAdvertForceRemove<Operand = void>(): void;
/** `VIDEO_ADVERT_HAS_FINISHED` (opcode 106) */
declare function videoAdvertHasFinished<Operand = void>(): number;
/** `VIDEOADVERT_ISSUPPORTED` (opcode 548) */
declare function videoAdvertIssupported<Operand = void>(): number;
/** `VIDEO_ADVERT_PLAY` (opcode 766) */
declare function videoAdvertPlay<Operand = void>(arg0: number | boolean): number;
/** `VIEWPORT_CLAMPFOV` (opcode 47) */
declare function viewportClampfov<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `VIEWPORT_GETZOOM` (opcode 403) */
declare function viewportGetZoom<Operand = void>(): [number, number];
/** `VIEWPORT_GETEFFECTIVESIZE` (opcode 936) */
declare function viewportGeteffectivesize<Operand = void>(): [number, number];
/** `VIEWPORT_GETFOV` (opcode 283) */
declare function viewportGetfov<Operand = void>(): [number, number];
/** `VIEWPORT_SETZOOM` (opcode 745) */
declare function viewportSetZoom<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `VIEWPORT_SETFOV` (opcode 607) */
declare function viewportSetfov<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `WORLDLIST_AUTOWORLD` (opcode 658) */
declare function worldListAutoworld<Operand = void>(): void;
/** `WORLDLIST_FETCH` (opcode 233) */
declare function worldListFetch<Operand = void>(): number;
/** `WORLDLIST_NEXT` (opcode 915) */
declare function worldListNext<Operand = void>(): [number, number, number, number, number, string, string, string];
/** `WORLDLIST_PINGWORLDS` (opcode 678) */
declare function worldListPingworlds<Operand = void>(arg0: boolean | boolean): void;
/** `WORLDLIST_SORT` (opcode 296) */
declare function worldListSort<Operand = void>(arg0: number | boolean, arg1: number | boolean, arg2: number | boolean, arg3: number | boolean): void;
/** `WORLDLIST_SPECIFIC` (opcode 960) */
declare function worldListSpecific<Operand = void>(arg0: number | boolean): [number, number, number, number, string, string, string];
/** `WORLDLIST_SPECIFIC_THISWORLD` (opcode 303) */
declare function worldListSpecificThisworld<Operand = void>(): number;
/** `WORLDLIST_START` (opcode 212) */
declare function worldListStart<Operand = void>(): [number, number, number, number, number, string, string, string];
/** `WORLDLIST_SWITCH` (opcode 239) */
declare function worldListSwitch<Operand = void>(arg0: number | string | bigint | boolean, arg1: number | string | bigint | boolean): number;
/** `WORLDMAP_CLOSEMAP` (opcode 210) */
declare function worldMapCloseMap<Operand = void>(): void;
/** `WORLDMAP_COORDINMAP` (opcode 975) */
declare function worldMapCoordinmap<Operand = void>(arg0: coord | boolean, arg1: worldmap | boolean): number;
/** `WORLDMAP_DISABLEELEMENT` (opcode 901) */
declare function worldMapDisableelement<Operand = void>(arg0: mapelement | boolean, arg1: boolean | boolean): void;
/** `WORLDMAP_DISABLEELEMENTCATEGORY` (opcode 288) */
declare function worldMapDisableelementcategory<Operand = void>(arg0: number | boolean, arg1: number | boolean): void;
/** `WORLDMAP_DISABLEELEMENTS` (opcode 475) */
declare function worldMapDisableelements<Operand = void>(arg0: boolean | boolean): void;
/** `WORLDMAP_FINDNEARESTELEMENT` (opcode 514) */
declare function worldMapFindnearestelement<Operand = void>(arg0: mapelement | boolean, arg1: coord | boolean): number;
/** `WORLDMAP_FLASHELEMENT` (opcode 970) */
declare function worldMapFlashelement<Operand = void>(arg0: mapelement | boolean): void;
/** `WORLDMAP_FLASHELEMENTCATEGORY` (opcode 662) */
declare function worldMapFlashelementcategory<Operand = void>(arg0: number | boolean): void;
/** `WORLDMAP_GETCONFIGORIGIN` (opcode 405) */
declare function worldMapGetConfigOrigin<Operand = void>(arg0: worldmap | boolean): [number, number];
/** `WORLDMAP_GETCONFIGSIZE` (opcode 306) */
declare function worldMapGetConfigSize<Operand = void>(arg0: worldmap | boolean): [number, number];
/** `WORLDMAP_GETCONFIGZOOM` (opcode 923) */
declare function worldMapGetConfigZoom<Operand = void>(arg0: worldmap | boolean): number;
/** `WORLDMAP_GETDISPLAYCOORD` (opcode 603) */
declare function worldMapGetDisplayCoord<Operand = void>(arg0: coord | boolean): [number, number];
/** `WORLDMAP_GETDISPLAYPOSITION` (opcode 560) */
declare function worldMapGetDisplayPosition<Operand = void>(): [number, number];
/** `WORLDMAP_GETMAP` (opcode 397) */
declare function worldMapGetMap<Operand = void>(arg0: coord | boolean): number;
/** `WORLDMAP_GETMAPNAME` (opcode 726) */
declare function worldMapGetMapName<Operand = void>(arg0: worldmap | boolean): string;
/** `WORLDMAP_GETSIZE` (opcode 16) */
declare function worldMapGetSize<Operand = void>(): [number, number];
/** `WORLDMAP_GETZOOM` (opcode 731) */
declare function worldMapGetZoom<Operand = void>(): number;
/** `WORLDMAP_GETCURRENTMAP` (opcode 775) */
declare function worldMapGetcurrentmap<Operand = void>(): number;
/** `WORLDMAP_GETDISABLEELEMENT` (opcode 35) */
declare function worldMapGetdisableelement<Operand = void>(arg0: mapelement | boolean): number;
/** `WORLDMAP_GETDISABLEELEMENTCATEGORY` (opcode 74) */
declare function worldMapGetdisableelementcategory<Operand = void>(arg0: number | boolean): number;
/** `WORLDMAP_GETDISABLEELEMENTS` (opcode 969) */
declare function worldMapGetdisableelements<Operand = void>(): number;
/** `WORLDMAP_GETSOURCECOORD` (opcode 260) */
declare function worldMapGetsourcecoord<Operand = void>(arg0: coord | boolean): [number, number];
/** `WORLDMAP_GETSOURCEPOSITION` (opcode 823) */
declare function worldMapGetsourceposition<Operand = void>(): [number, number];
/** `WORLDMAP_ISLOADED` (opcode 676) */
declare function worldMapIsloaded<Operand = void>(): number;
/** `WORLDMAP_JUMPTODISPLAYCOORD` (opcode 410) */
declare function worldMapJumptodisplaycoord<Operand = void>(arg0: coord | boolean): void;
/** `WORLDMAP_JUMPTOSOURCECOORD` (opcode 441) */
declare function worldMapJumptosourcecoord<Operand = void>(arg0: coord | boolean): void;
/** `WORLDMAP_LISTELEMENT_NEXT` (opcode 674) */
declare function worldMapListelementNext<Operand = void>(): [number, number];
/** `WORLDMAP_LISTELEMENT_START` (opcode 788) */
declare function worldMapListelementStart<Operand = void>(): [number, number];
/** `WORLDMAP_SETMAP` (opcode 84) */
declare function worldMapSetMap<Operand = void>(arg0: worldmap | boolean): void;
/** `WORLDMAP_SETMAP_COORD` (opcode 228) */
declare function worldMapSetMapCoord<Operand = void>(arg0: worldmap | boolean, arg1: coord | boolean): void;
/** `WORLDMAP_SETMAP_COORD_OVERRIDE` (opcode 641) */
declare function worldMapSetMapCoordOverride<Operand = void>(arg0: worldmap | boolean, arg1: coord | boolean): void;
/** `WORLDMAP_SETZOOM` (opcode 386) */
declare function worldMapSetZoom<Operand = void>(arg0: number | boolean): void;
/** `WRITECONSOLE` (opcode 318) */
declare function writeconsole<Operand = void>(arg0: string): void;
