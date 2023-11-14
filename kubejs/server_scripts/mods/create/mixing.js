// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:create/mixing/${id}`;
    
    // Remove the create compat recipe for ae2 mixing
    event.remove( {type: cr('mixing'), output: ae('fluix_crystal') });
    event.remove( {type: cr('mixing'), output: xp('xp_berries_seeds') });

    // -- XP BERRIES SEEDS FIX -- //
    createMixing(
        event,
        st('xp_berries_seeds'),
        'none',
        [
            { tag: 'xps:seeds_list' },
            { tag: 'xps:seeds_list' },
            { tag: 'xps:seeds_list' },
            { tag: 'xps:seeds_list' },
            { item: mc('nether_wart') },
            { item: mc('nether_wart') },
            { item: mc('amethyst_shard') },
            { item: xp('soul_copper_nugget') },
            { fluid: xp('xp_fluid'), amount: 81000 },

        ],
        [ { item: xp('xp_berries_seeds'), count: 6 } ]
    );

    // -- BRONZE INGOT -- //
    createMixing(
        event,
        st('bronze_ingot'),
        'heated',
        [
            { tag: 'c:raw_copper_ores' },
            { tag: 'c:raw_copper_ores' },
            { tag: 'c:raw_copper_ores' },
            { tag: 'c:raw_tin_ores' }
        ],
        [ { item: mi('bronze_ingot'), count: 2 } ]
    );

    // -- BRONZE DUST -- //
    createMixing(
        event,
        st('bronze_dust'),
        'none',
        [
            { tag: 'c:copper_dusts' },
            { tag: 'c:copper_dusts' },
            { tag: 'c:copper_dusts' },
            { tag: 'c:tin_dusts' }
        ],
        [ { item: mi('bronze_dust'), count: 2 } ]
    );

    // -- FIRE CLAY DUST -- //
    createMixing(
        event,
        st('fire_clay_dust'),
        'none',
        [
            { item: mi('clay_dust') },
            { item: mi('clay_dust') },
            { tag: 'c:brick_dusts' },
            { tag: 'c:brick_dusts' }
        ],
        [ { item: mi('fire_clay_dust'), count: 2 } ]
    );
});