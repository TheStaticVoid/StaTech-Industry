ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let crate = (id) => `create:${id}`; // mispelled on purpose ;)
    let ed = (id) => `expandeddelight:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let sp = (id) => `spectrum:${id}`;
    let st = (id) => `statech:modern_industrialization/macerator/${id}`;

    let macerator = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('macerator'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe);
    }

    // -- WHEAT DOUGH -- //
    macerator(
        st('wheat_flour'),
        2,
        200,
        [
            { amount: 1, item: mc('wheat') }
        ],
        [
            { amount: 2, item: crate('wheat_flour') }
        ]
    );

    // -- SALT DUST -- //
    macerator(
        st('ground_salt'),
        2,
        100,
        [
            { amount: 1, item: ed('salt_rock') }
        ],
        [
            { amount: 1, item: ed('ground_salt') }
        ]
    );

    // -- CALCITE DUST -- //
    macerator(
        st('calcite_dust'),
        8,
        100,
        [
            { amount: 1, item: mc('calcite') }
        ],
        [
            { amount: 2, item: tr('calcite_dust') }
        ]   
    );

    // -- RAW PLATINUM FROM SHELDONITE ORE -- //
    macerator(
        st('raw_platinum'),
        2,
        200,
        [
            { amount: 1, tag: 'c:sheldonite_ores' }
        ],
        [
            { amount: 3, item: mi('raw_platinum') }
        ]
    );

    // -- OBSIDIAN -- //
    macerator(
        st('obsidian_dust'),
        8,
        1200,
        [
            { amount: 1, item: mc('obsidian') }
        ],
        [
            { amount: 4, item: tr('obsidian_dust') }
        ]
    );

    // -- RAW ZINC -- //
    macerator(
        st('raw_zinc'),
        2,
        200,
        [
            { amount: 1, tag: 'c:zinc_ores' }
        ],
        [
            { amount: 3, item: 'create:raw_zinc'}
        ]
    );

    // -- ZINC DUST -- //
    macerator(
        st('zinc_dust'),
        2,
        200,
        [
            { amount: 1, tag: 'c:raw_zinc_ores' }
        ],
        [
            { amount: 1, item: tr('zinc_dust') },
            { amount: 1, item: tr('zinc_dust'), probability: 0.50 }
        ]
    );

    // -- FLAX TO STRING -- //
    macerator(
        st('flax_to_string'),
        2,
        200,
        [ { amount: 1, item: 'supplementaries:flax' } ],
        [
            { amount: 2, item: 'minecraft:string' },
            { amount: 1, item: 'minecraft:string', probability: 0.25 }
        ]
    );

    // -- SPECTRUM POWDERS -- //
    macerator(
        st('topaz_powder_from_cluster'),
        2,
        200,
        [ { amount: 1, item: sp('topaz_cluster') } ],
        [ { amount: 16, item: sp('topaz_powder') } ]
    );
    macerator(
        st('topaz_powder_from_block'),
        2,
        200,
        [ { amount: 1, item: sp('topaz_block') } ],
        [ { amount: 4, item: sp('topaz_powder') } ]
    );
    macerator(
        st('topaz_powder_from_small_bud'),
        2,
        200,
        [ { amount: 1, item: sp('small_topaz_bud') } ],
        [ { amount: 4, item: sp('topaz_powder') } ]
    );
    macerator(
        st('topaz_powder_from_shard'),
        2,
        200,
        [ { amount: 1, item: sp('topaz_shard') } ],
        [ { amount: 2, item: sp('topaz_powder') } ]
    );
    macerator(
        st('topaz_powder_from_medium_bud'),
        2,
        200,
        [ { amount: 1, item: sp('medium_topaz_bud') } ],
        [ { amount: 6, item: sp('topaz_powder') } ]
    );
    macerator(
        st('topaz_powder_from_large_bud'),
        2,
        200,
        [ { amount: 1, item: sp('large_topaz_bud') } ],
        [ { amount: 8, item: sp('topaz_powder') } ]
    );

    macerator(
        st('amethyst_powder_from_cluster'),
        2,
        200,
        [ { amount: 1, item: mc('amethyst_cluster') } ],
        [ { amount: 16, item: sp('amethyst_powder') } ]
    );
    macerator(
        st('amethyst_powder_from_block'),
        2,
        200,
        [ { amount: 1, item: mc('amethyst_block') } ],
        [ { amount: 4, item: sp('amethyst_powder') } ]
    );
    macerator(
        st('amethyst_powder_from_small_bud'),
        2,
        200,
        [ { amount: 1, item: mc('small_amethyst_bud') } ],
        [ { amount: 4, item: sp('amethyst_powder') } ]
    );
    macerator(
        st('amethyst_powder_from_shard'),
        2,
        200,
        [ { amount: 1, item: mc('amethyst_shard') } ],
        [ { amount: 2, item: sp('amethyst_powder') } ]
    );
    macerator(
        st('amethyst_powder_from_medium_bud'),
        2,
        200,
        [ { amount: 1, item: mc('medium_amethyst_bud') } ],
        [ { amount: 6, item: sp('amethyst_powder') } ]
    );
    macerator(
        st('amethyst_powder_from_large_bud'),
        2,
        200,
        [ { amount: 1, item: mc('large_amethyst_bud') } ],
        [ { amount: 8, item: sp('amethyst_powder') } ]
    );

    macerator(
        st('citrine_powder_from_cluster'),
        2,
        200,
        [ { amount: 1, item: sp('citrine_cluster') } ],
        [ { amount: 16, item: sp('citrine_powder') } ]
    );
    macerator(
        st('citrine_powder_from_block'),
        2,
        200,
        [ { amount: 1, item: sp('citrine_block') } ],
        [ { amount: 4, item: sp('citrine_powder') } ]
    );
    macerator(
        st('citrine_powder_from_small_bud'),
        2,
        200,
        [ { amount: 1, item: sp('small_citrine_bud') } ],
        [ { amount: 4, item: sp('citrine_powder') } ]
    );
    macerator(
        st('citrine_powder_from_shard'),
        2,
        200,
        [ { amount: 1, item: sp('citrine_shard') } ],
        [ { amount: 2, item: sp('citrine_powder') } ]
    );
    macerator(
        st('citrine_powder_from_medium_bud'),
        2,
        200,
        [ { amount: 1, item: sp('medium_citrine_bud') } ],
        [ { amount: 6, item: sp('citrine_powder') } ]
    );
    macerator(
        st('citrine_powder_from_large_bud'),
        2,
        200,
        [ { amount: 1, item: sp('large_citrine_bud') } ],
        [ { amount: 8, item: sp('citrine_powder') } ]
    );

    // -- QUITOXIC POWDER -- //
    macerator(
        st('quitoxic_powder'),
        2,
        200,
        [ { amount: 1, item: sp('quitoxic_reeds') } ],
        [ { amount: 2, item: sp('quitoxic_powder') } ]
    );

    // -- ONYX POWDER -- //
    macerator(
        st('onyx_powder'),
        2,
        200,
        [ { amount: 1, item: sp('onyx_shard') } ],
        [ { amount: 2, item: sp('onyx_powder') } ]
    );
    macerator(
        st('onyx_powder_from_onyx_block'),
        2,
        200,
        [ { amount: 1, item: sp('onyx_block') } ],
        [ { amount: 4, item: sp('onyx_powder') } ]
    );

    // -- FIERY POWDER -- //
    macerator(
        st('fiery_powder'),
        2,
        200,
        [ { amount: 1, item: sp('blazing_crystal') } ],
        [ { amount: 16, item: sp('fiery_powder') } ]
    );

    // -- BLIZZARD POWDER -- //
    macerator(
        st('fiery_powder'),
        2,
        200,
        [ { amount: 1, item: sp('frostbite_crystal') } ],
        [ { amount: 16, item: sp('blizzard_powder') } ]
    );

    // -- AMARANTH GRAINS -- //
    macerator(
        st('amaranth_grains'),
        2,
        200,
        [ { amount: 1, item: sp('amaranth_bushel') } ],
        [ { amount: 2, item: sp('amaranth_grains') } ]
    );

    // -- COPPER FROM VERIDIUM -- //
    macerator(
        st('copper_dust_from_veridium'),
        2,
        200,
        [ { amount: 1, item: crate('veridium') } ],
        [ 
            { amount: 1, item: mi('copper_dust') },
            { amount: 1, item: mi('copper_dust'), probability: 0.5 }
        ]
    );

    // -- ZINC DUST ROM ASURINE -- //
    macerator(
        st('zinc_dust_from_asurine'),
        2,
        200,
        [ { amount: 1, item: crate('asurine') } ],
        [ 
            { amount: 1, item: tr('zinc_dust') },
            { amount: 1, item: tr('zinc_dust'), probability: 0.5 }
        ]
    );

    // -- GOLD DUST FROM OCHRUM -- //
    macerator(
        st('gold_dust_from_asurine'),
        2,
        200,
        [ { amount: 1, item: crate('ochrum') } ],
        [
            { amount: 1, item: mi('gold_dust') },
            { amount: 1, item: mi('gold_dust'), probability: 0.5 }
        ]
    );

    // -- IRON DUST FROM CRIMSITE -- //
    macerator(
        st('iron_dust_from_crimsite'),
        2,
        200,
        [ { amount: 1, item: crate('crimsite') } ],
        [
            { amount: 1, item: mi('iron_dust') },
            { amount: 1, item: mi('iron_dust'), probability: 0.5 }
        ]
    );

    // -- QUARTZ DUST FROM RAW QUARTZ BLOCK -- //
    macerator(
        st('quartz_dust_from_quartz_block'),
        2,
        200,
        [ { amount: 1, item: 'byg:raw_quartz_block' } ],
        [
            { amount: 1, item: mi('quartz_dust') },
            { amount: 1, item: mi('quartz_dust'), probability: 0.5 }
        ]
    );
});