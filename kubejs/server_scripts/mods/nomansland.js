// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('worldgen/biome', event => {

    event.add('c:is_cold/overworld', [
        nm('frozen_shore'),
        nm('frozen_woods'),
        nm('maple_grove'),
        nm('maple_grove'),
        nm('dark_taiga'),
        nm('bog')
    ]);

    event.add('c:is_hot/overworld', [
        nm('tropical_beach'),
        nm('prairie'),
        nm('lush_river'),
        nm('desert_river'),
        nm('bayou')
    ]);
});

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:nomansland/${id}`;

    // -- NO MANS LAND REMOVED REICPES -- //
    const NOMANSLAND_REMOVED_RECIPES = [
        mc('mushroom_stew'),
        mc('smoker'),
        fd('cooking/mushroom_stew'),
        fd('cooking/mushroom_rice'),
        nm('integration/farmersdelight/pancake'),
        su('integration/pancake_fd'),
        nm('food/salmon_and_pesto_gnocchi')
    ];
    NOMANSLAND_REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));


    //-------------------------//
    // --- SHAPED CRAFTING --- //
    //-------------------------//


    // -- SMOKER -- //
    event.shaped(mc('smoker'), [
        ' L ',
        'LFL',
        ' L '
    ],
    {
        F: mc('furnace'),
        L: '#minecraft:logs'
    })
    .id(st('smoker'));


    //----------------------------//
    // --- SHAPELESS CRAFTING --- //
    //----------------------------//


    // -- MUSHROOM STEW -- //
    event.shapeless(
    Item.of(mc('mushroom_stew'), 1),
    [
        '2x #nomansland:edible_mushrooms',
        mc('bowl')
    ])
    .id(st('mushroom_stew_shaped'));

    // -- PANCAKE -- //
    event.shapeless(
    Item.of(su('pancake'), 2),
    [
        '#c:drinks/milk',
        '#c:foods/dough',
        mc('egg'),
        '#supplementaries:pancake_syrup'
    ])
    .id(st('pancake'));

    //---------------------//
    // ----- COOKING ----- //
    //---------------------//


    // -- MUSHROOM RICE -- //
    event.custom({
    "type": fd('cooking'),
    "experience": 1.0,
    "ingredients": [
        {
        "tag": "nomansland:edible_mushrooms"
        },
        {
        "tag": "nomansland:edible_mushrooms"
        },
        {
        "tag": "c:crops/rice"
        },
        {
        "type": "neoforge:compound",
        "children": [
            {
            "item": mc('potato')
            },
            {
            "item": mc('carrot')
            }
        ]
        }
    ],
    "recipe_book_tab": "meals",
    "result": {
        "count": 1,
        "id": fd('mushroom_rice')
    }
    })
    .id(st('mushroom_rice'));

    // -- MUSHROOM STEW ALT -- //
    event.custom({
    "type": fd('cooking'),
    "container": {
        "count": 1,
        "id": "minecraft:bowl"
    },
    "experience": 1.0,
    "ingredients": [
        {
        "tag": "nomansland:edible_mushrooms"
        },
        {
        "tag": "nomansland:edible_mushrooms"
        }
    ],
    "recipe_book_tab": "meals",
    "result": {
        "count": 1,
        "id": mc('mushroom_stew')
    }
    })
    .id(st('mushroom_stew_alt'));

    // -- SALMON AND PESTO GNOCCHI -- //
    event.custom({
    "type": fd('cooking'),
    "container": {
        "count": 1,
        "id": "minecraft:bowl"
    },
    "experience": 1.0,
    "ingredients": [
        {
        "item": nm('pesto_bottle')
        },
        {
        "item": mc('potato')
        },
        {
        "tag": 'c:foods/dough'
        },
        {
        "item": fd('salmon_slice')
        }
    ],
    "recipe_book_tab": "meals",
    "result": {
        "count": 1,
        "id": nm('salmon_and_pesto_gnocchi')
    }
    })
    .id(st('salmon_and_pesto_gnocchi'));

    //-----------------//
    // ---- MIXER ---- //
    //-----------------//

    // -- MUNDANE TILES -- //
    mixer(
        event,
        st('mundane_tiles'),
        2,
        200,
        [ 
            { amount: 2, item: nm('cobblestone_bricks') },
            { amount: 2, item: mc('white_terracotta') }
        ],
        [ { amount: 4, item: nm('mundane_tiles') } ]
    );

    // -- SILTSTONE -- //
    mixer(
        event,
        st('siltstone'),
        2,
        200,
        [ 
            { amount: 2, item: nm('silt') },
            { amount: 2, item: mc('andesite') }
        ],
        [ { amount: 3, item: nm('siltstone') } ]
    );

    // -- COARSE BRICKS -- //
    mixer(
        event,
        st('coarse_bricks'),
        2,
        200,
        [ 
            { amount: 2, item: mc('coarse_dirt') },
            { amount: 2, item: mc('brick') }
        ],
        [ { amount: 2, item: nm('coarse_bricks') } ]
    );

    // -- MOSSY COARSE BRICKS -- //
    mixer(
        event,
        st('mossy_coarse_bricks'),
        2,
        200,
        [ 
            { amount: 1, item: nm('coarse_bricks') },
            { amount: 1, item: mc('moss_block') }
        ],
        [ { amount: 1, item: nm('mossy_coarse_bricks') } ]
    );

    // -- MOSSY COARSE BRICKS FROM VINE -- //
    mixer(
        event,
        st('mossy_coarse_bricks_vine'),
        2,
        200,
        [ 
            { amount: 1, item: nm('coarse_bricks') },
            { amount: 1, item: mc('vine') }
        ],
        [ { amount: 1, item: nm('mossy_coarse_bricks') } ]
    );

    // -- MOSSY COARSE BRICKS FROM NML -- //
    mixer(
        event,
        st('mossy_coarse_bricks_nml'),
        2,
        200,
        [ 
            { amount: 1, item: nm('coarse_bricks') },
            { amount: 4, tag: 'nomansland:alternative_moss' }
        ],
        [ { amount: 1, item: nm('mossy_coarse_bricks') } ]
    );

    // -- EARTHEN TILES -- //
    mixer(
        event,
        st('earthen_tiles'),
        2,
        200,
        [ 
            { amount: 2, item: mc('packed_mud') },
            { amount: 2, item: mc('terracotta') }
        ],
        [ { amount: 4, item: nm('earthen_tiles') } ]
    );

    // -- DROSS TILES -- //
    mixer(
        event,
        st('dross_tiles'),
        2,
        200,
        [ 
            { amount: 2, item: mc('polished_tuff') },
            { amount: 2, item: nm('silt') }
        ],
        [ { amount: 4, item: nm('dross_tiles') } ]
    );

    // -- SILT -- //
    mixer(
        event,
        st('silt'),
        2,
        200,
        [ 
            { amount: 2, item: mc('clay_ball') },
            { amount: 2, item: mc('mud') }
        ],
        [ { amount: 3, item: nm('silt') } ]
    );

    // -- COARSE SILT -- //
    mixer(
        event,
        st('coarse_silt'),
        2,
        200,
        [ 
            { amount: 2, item: nm('silt') },
            { amount: 2, item: mc('gravel') }
        ],
        [ { amount: 4, item: nm('coarse_silt') } ]
    );

    //---------------------------//
    // ---- CUTTING MACHINE ---- //
    //---------------------------//

    // -- CHISELED SILTSTONE -- //
    cuttingMachine(
        event,
        st('chiseled_siltstone'),
        2,
        200,
        [ { amount: 1, item: nm('polished_siltstone') } ],
        [ { amount: 1, item: nm('chiseled_siltstone') } ]
    );

    //------------------//
    // ---- PACKER ---- //
    //------------------//

    // -- SILT BRICKS -- //
    packer(
        event,
        st('silt_bricks'),
        2,
        100,
        [ { amount: 4, item: nm('silt') } ],
        [ { amount: 4, item: nm('silt_bricks') } ]
    );

    // -- THATCH -- //
    packer(
        event,
        st('thatch'),
        2,
        100,
        [ { amount: 4, item: nm('dried_grass') } ],
        [ { amount: 3, item: nm('thatch') } ]
    );

    // -- THATCH ALT -- //
    packer(
        event,
        st('thatch_alt'),
        2,
        100,
        [ { amount: 4, item: mc('wheat') } ],
        [ { amount: 2, item: nm('thatch') } ]
    );

});