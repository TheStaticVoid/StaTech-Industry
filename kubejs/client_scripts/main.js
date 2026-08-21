// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

RecipeViewerEvents.removeEntries('item', (event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let ss = (id) => `sophisticatedstorage:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let cr = (id) => `create:${id}`;

    //    event.remove(['#sophisticatedstorage:all_storage']);
});

const armorsParts = ['helmet', 'chestplate', 'leggings', 'boots'];

const armorsMaterials = ['bronze', 'steel'];

const trimMaterials = [
    ['quartz', 0.1],
    ['iron_darker', 0.2],
    ['netherite', 0.3],
    ['redstone', 0.4],
    ['copper', 0.5],
    ['gold', 0.6],
    ['emerald', 0.7],
    ['diamond', 0.8],
    ['lapis', 0.9],
    ['amethyst', 1.0],
];

ClientEvents.generateAssets('after_mods', (event) => {
    armorsMaterials.forEach((material) => {
        armorsParts.forEach((part) => {
            const overrides = [];
            trimMaterials.forEach((trim) => {
                event.json(
                    `kubejs:models/item/${material}_${part}_${trim[0]}_trim.json`,
                    {
                        parent: 'minecraft:item/generated',
                        textures: {
                            layer0: `kubejs:item/${material}_${part}`,
                            layer1: `minecraft:trims/items/${part}_trim_${trim[0]}`,
                        },
                    }
                );
                overrides.push({
                    model: `kubejs:item/${material}_${part}_${trim[0]}_trim`,
                    predicate: {
                        trim_type: trim[1],
                    },
                });
            });

            event.json(`kubejs:models/item/${material}_${part}.json`, {
                parent: 'minecraft:item/generated',
                overrides,
                textures: {
                    layer0: `kubejs:item/${material}_${part}`,
                },
            });
        });
    });
});
