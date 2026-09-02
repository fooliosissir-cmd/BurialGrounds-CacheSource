/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2988

function cs2_2988(intArg0: number): void {
    let str0: string = "null";
    let str1: string = "null";
    let str2: string = "null";
    let int1: number = -1;
    let int2: number = -1;
    let int3: number = -1;
    let int4: number = -1;
    let int5: model = -1;

    switch (intArg0) {
        case 4718660:
            if (varbit_ecosystem_basic_found == 0) {
                return;
            }
            str0 = "Common jadinko";
            str1 = "The most abundant form of jadinko. The common jadinkos lack the magical properties of their counterparts; however, they are the easiest of all the jadinkos to attract." + "<br>" + "<br>" + "These jadinkos are caught with marasamaw plants.";
            str2 = "To attract common jadinkos:" + "<br>" + "<br>" + "grow any of the vine flowers.";
            int5 = Model.model_62244;
            break;
        case 4718659:
            if (varbit_ecosystem_shadow_found == 0) {
                return;
            }
            str0 = "Shadow jadinko";
            str1 = "This species of jadinko is particularly sinister, tied as it is with darkness. Shadow jadinkos produce shadow vines which are useful for those who want to be more stealthy when hunting." + "<br>" + "<br>" + "These jadinkos are caught by tracking.";
            str2 = "To attract shadow jadinkos:" + "<br>" + "<br>" + "grow red vine flowers and build an abandoned house.";
            int5 = Model.model_62253;
            break;
        case 4718658:
            if (varbit_ecosystem_diseased_found == 0) {
                return;
            }
            str0 = "Diseased jadinko";
            str1 = "The diseased jadinko is a sorry sort of creature, corrupted by some unknown illness that it can never shake. That's unfortunate for the jadinko, but fortunate for the hunter, because the corrupt vines these creatures produce can be made into juju hunter potions that are invaluable for hunting in the habitat." + "<br>" + "<br>" + "These jadinkos are caught by tracking.";
            str2 = "To attract diseased jadinkos:" + "<br>" + "<br>" + "grow a banana tree and build a boneyard.";
            int5 = Model.model_62251;
            break;
        case 4718657:
            if (varbit_ecosystem_igneous_found == 0) {
                return;
            }
            str0 = "Igneous jadinko";
            str1 = "The igneous jadinko have a great affinity with the earth. They dwell beneath the stones, unless attracted by the sweet scent of lergberry and oranges. Their vines are particularly useful for those who wish to gather herbs more efficiently." + "<br>" + "<br>" + "These jadinkos are caught with marasamaw plants.";
            str2 = "To attract igneous jadinkos:" + "<br>" + "<br>" + "grow a lergberry bush, an orange tree, a blue vine plant and construct a thermal vent.";
            int5 = Model.model_62249;
            break;
        case 4718656:
            if (varbit_ecosystem_carniverous_found == 0) {
                return;
            }
            str0 = "Cannibal jadinko";
            str1 = "These jadinko prey on other jadinkos. They roam the habitat looking for other creatures to snack on. Unlike other jadinkos, the cannibal jadinko's magic is located not in the vine, but in its teeth. The plant teeth can be used to make a deliciously tasty gumbo, if mixed with the right herbs." + "<br>" + "<br>" + "These jadinkos are caught with marasamaw plants.";
            str2 = "To attract cannibal jadinkos:" + "<br>" + "<br>" + "grow a kalferberry bush, a green vine flower, construct tall grass and be sure to have used the juju hunter potion on the flower.";
            int5 = Model.model_62241;
            break;
        case 4718665:
            if (varbit_ecosystem_aquatic_found == 0) {
                return;
            }
            str0 = "Aquatic jadinko";
            str1 = "The aquatic jadinko rarely comes out on land, but, when it does, it's highly sought after by the discerning hunter. The vines that grow from this creature's back can be used to create a juju fishing potion that allows you to catch the elusive baron shark." + "<br>" + "<br>" + "These jadinkos are caught with marasamaw plants.";
            str2 = "To attract aquatic jadinkos:" + "<br>" + "<br>" + "grow a kalferberry bush, an apple tree, a red vine flower and construct a pond. You must also be under the effects of a juju hunter potion.";
            int5 = Model.model_62250;
            break;
        case 4718664:
            if (varbit_ecosystem_amphibian_found == 0) {
                return;
            }
            str0 = "Amphibious jadinko";
            str1 = "The amphibious jadinko is as at home on land as it is in water. These creatures may be slimy and froggish, but their oily vines can be extremely useful. When combined with the appropriate herb, their vines can be used to create potions that attract wood spirits when you are woodcutting, making a lumberjack's life significantly easier." + "<br>" + "<br>" + "These jadinkos are caught with marasamaw plants.";
            str2 = "To attract amphibian jadinkos:" + "<br>" + "<br>" + "grow a lergberry bush, a blue flower and construct a pond.";
            int5 = Model.model_62243;
            break;
        case 4718663:
            if (varbit_ecosystem_carrion_found == 0) {
                return;
            }
            str0 = "Carrion jadinko";
            str1 = "The carrion jadinko is probably the least pleasant of the jadinko species. They scavenge on the leftovers of other creatures and feast cannibalistically on the remains of other hunted jadinkos. The vines that these creatures produce are particularly pungent and rot rather nicely to create supercompost.";
            str2 = "To attract carrion jadinkos:" + "<br>" + "<br>" + "grow a kalferberry bush, a green vine flower and build a boneyard.";
            int5 = Model.model_62248;
            break;
        case 4718662:
            if (varbit_ecosystem_camouflaged_found == 0) {
                return;
            }
            str0 = "Camouflaged jadinko";
            str1 = "The camouflaged jadinko is a stealthy critter that takes great delight in hiding itself in foliage. The magic of its striped vines is particularly odd and cannot be turned into a potion; however, Papa Mambo has mentioned that he has uses for these vines." + "<br>" + "<br>" + "These jadinkos are caught by tracking.";
            str2 = "To attract camouflaged jadinkos:" + "<br>" + "<br>" + "grow a lergberry bush and build standing stones. In addition, you must be under the effects of the juju hunter potion.";
            int5 = Model.model_62245;
            break;
        case 4718661:
            if (varbit_ecosystem_draconic_found == 0) {
                return;
            }
            str0 = "Draconic jadinko";
            str1 = "While not dragons, these rare and elusive creatures certainly resemble them. They are powerful beasts with a deep connection to the earth: so deep that their vines can be used to create powerful potions that attracts the mining spirits of stone." + "<br>" + "<br>" + "These jadinkos are caught with marasamaw plants.";
            str2 = "To attract draconic jadinkos:" + "<br>" + "<br>" + "grow a lergberry bush, a red vine flower and build a dark pit. In addition you will need to be under the influence of the juju hunter potion.";
            int5 = Model.model_62238;
            break;
        default:
            str1 = "Coming soon";
            break;
    }
    ifSetHide(true, Component.interface_72.component_72_56);
    ifSetHide(false, Component.interface_72.component_72_58);
    ifSetText(str0, Component.interface_72.component_72_60);
    ifSetText(str1, Component.interface_72.component_72_61);
    ifSetText(str2, Component.interface_72.component_72_62);
    ifSetModel(int5, Component.interface_72.component_72_59);
}
