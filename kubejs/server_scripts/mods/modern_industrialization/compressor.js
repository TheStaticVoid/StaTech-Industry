ServerEvents.recipes(e => {
    const DELETED_RECIPE = [
        'modern_industrialization:materials/diamond/compressor/main',
        'modern_industrialization:materials/emerald/compressor/main',
        'modern_industrialization:vanilla_recipes/compressor/paper_with_sugarcane'
    ];
    DELETED_RECIPE.forEach(id => e.remove({id: id}));

    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tr = (id) => `techreborn:${id}`;

    let compressor = (eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('compressor'),
            eu: eu,
            duration: duration
        }

        if (item_inputs) 
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe);
    }

    // -- DIAMOND PLATE -- //
    compressor(
        48,
        400,
        [
            { amount: 1, item: mc('diamond') }
        ],
        [
            { amount: 1, item: mi('diamond_plate') }
        ]
    )

    // -- EMERALD PLATE -- //
    compressor(
        48,
        400,
        [
            { amount: 1, item: mc('emerald') }
        ],
        [
            { amount: 1, item: mi('emerald_plate') }
        ]
    );

    // -- BRICKS -- //
    compressor(
        2,
        300,
        [
            { amount: 4, item: mc('brick') }
        ],
        [
            { amount: 1, item: mc('bricks') }
        ]
    );

    // -- RUBBER SHEETS -- //
    compressor(
        2,
        200,
        [
            { amount: 1, item: tr('rubber') }
        ],
        [
            { amount: 4, item: mi('rubber_sheet') }
        ]
    );

    // -- LAZURITE PLATE -- //
    compressor(
        10,
        300,
        [
            { amount: 1, item: tr('lazurite_dust') }
        ],
        [
            { amount: 1, item: tr('lazurite_plate') }
        ]
    );
})