ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let byg = (id) => `byg:${id}`;
    let crate = (id) => `create:${id}`; // mispelled on purpose ;)

    const REMOVED_RECIPES = [
        mi('quarry/bronze'),
        mi('quarry/gold'),
        mi('quarry/steel'),
        mi('quarry/stainless_steel')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    let quarry = (eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('quarry'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;

        e.custom(newRecipe);
    }

    // -- BRONZE DRILL -- //
    quarry(
        4,
        600,
        [
            { amount: 1, item: mi('bronze_drill'), probability: 0.04 }
        ],
        [
            { amount: 1, item: mc('iron_ore'), probability: 0.4 },
            { amount: 1, item: mc('coal_ore'), probability: 0.4 },
            { amount: 1, item: mi('lignite_coal_ore'), probability: 0.24 },
            { amount: 1, item: mc('copper_ore'), probability: 0.24 },
            { amount: 1, item: mi('tin_ore'), probability: 0.3 },
            { amount: 1, item: mc('gold_ore'), probability: 0.15 },
            { amount: 1, item: mi('lead_ore'), probability: 0.15 },
            { amount: 1, item: mc('redstone_ore'), probability: 0.2 },
            { amount: 1, item: crate('zinc_ore'), probability: 0.2 },
            { amount: 1, item: tr('silver_ore'), probability: 0.2 },
            { amount: 1, item: tr('galena_ore'), probability: 0.3 }
        ]
    );

    // -- GOLD DRILL -- //
    quarry(
        16,
        600,
        [
            { amount: 1, item: mi('gold_drill'), probability: 0.1 }
        ],
        [
            { amount: 64, item: mc('netherrack') },
            { amount: 16, item: mc('blackstone'), probability: 0.25 },
            { amount: 16, item: mc('basalt'), probability: 0.25 },
            { amount: 20, item: mc('soul_soil'), probability: 0.1 },
            { amount: 5, item: mc('magma_block'), probability: 0.1 },
            { amount: 20, item: mc('soul_sand'), probability: 0.25 },
            { amount: 1, item: mc('ancient_debris'), probability: 0.05 },
            { amount: 16, item: mc('glowstone'), probability: 0.15 },
            { amount: 8, item: mc('nether_quartz_ore'), probability: 0.15 },
            { amount: 1, item: mc('nether_gold_ore'), probability: 0.25 },
            { amount: 1, item: byg('emeraldite_ore'), probability: 0.1 },
            { amount: 1, item: byg('pendorite_ore'), probability: 0.1 },
            { amount: 1, item: byg('anthracite_ore'), probability: 0.15 },
            { amount: 1, item: tr('cinnabar_ore'), probability: 0.1 },
            { amount: 1, item: tr('pyrite_ore'), probability: 0.15 },
            { amount: 1, item: tr('sphalerite_ore'), probability: 0.15}
        ]
    );

    // -- STEEL -- //
    quarry(
        12,
        600,
        [
            { amount: 1, item: mi('steel_drill'), probability: 0.04 }
        ],
        [
            { amount: 1, item: mi('antimony_ore'), probability: 0.2 },
            { amount: 1, item: mc('diamond_ore'), probability: 0.12 },
            { amount: 1, item: mc('lapis_ore'), probability: 0.1 },
            { amount: 1, item: mi('lead_ore'), probability: 0.25 },
            { amount: 1, item: mi('nickel_ore'), probability: 0.18 },
            { amount: 1, item: mi('bauxite_ore'), probability: 0.4 },
            { amount: 1, item: mi('salt_ore'), probability: 0.12 },
            { amount: 1, item: mc('emerald_ore'), probability: 0.1 },
            { amount: 1, item: mi('quartz_ore'), probability: 0.2 },
            { amount: 1, item: tr('ruby_ore'), probability: 0.15 },
            { amount: 1, item: tr('sapphire_ore'), probability: 0.15 }
        ]
    );

    // -- STAINLESS STEEL -- //
    quarry(
        64,
        600,
        [
            { amount: 1, item: mi('stainless_steel_drill'), probability: 0.04 }
        ],
        [
            { amount: 1, item: mi('titanium_ore'), probability: 0.15 },
            { amount: 1, item: mi('tungsten_ore'), probability: 0.20 },
            { amount: 1, item: mi('mozanite_ore'), probability: 0.25 },
            { amount: 1, item: mi('platinum_ore'), probability: 0.12 },
            { amount: 1, item: tr('sheldonite_ore'), probability: 0.12 },
            { amount: 1, item: tr('peridot_ore'), probability: 0.25 },
            { amount: 1, item: tr('sodalite_ore'), probability: 0.25 }
        ]
    );
});