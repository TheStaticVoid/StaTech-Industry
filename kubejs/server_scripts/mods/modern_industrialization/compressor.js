ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let st = (id) => `statech:modern_industrialization/compressor/${id}`;

    const DELETED_RECIPE = [
        mi('materials/diamond/compressor/main'),
        mi('materials/emerald/compressor/main'),
        mi('materials/tungstensteel/compressor/main'),
        mi('compat/techreborn/compressor/_c_zinc_ingots_to_techreborn_zinc_plate'),
        mi('compressor/calorite_ingot_to_plate'),
        mi('vanilla_recipes/compressor/paper_with_sugarcane'),
        mi('compressor/desh_ingot_to_plate')
    ];
    DELETED_RECIPE.forEach(id => e.remove({id: id}));

    let compressor = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('compressor'),
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

    // -- DIAMOND PLATE -- //
    compressor(
        st('diamond_plate'),
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
        st('emerald_plate'),
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
        st('bricks'),
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
        st('rubber_sheets'),
        2,
        200,
        [
            { amount: 1, item: tr('rubber') }
        ],
        [
            { amount: 2, item: mi('rubber_sheet') }
        ]
    );

    // -- LAZURITE PLATE -- //
    compressor(
        st('lazurite_plate'),
        10,
        300,
        [
            { amount: 1, item: tr('lazurite_dust') }
        ],
        [
            { amount: 1, item: tr('lazurite_plate') }
        ]
    );

    // -- PAPER -- //
    compressor(
        st('paper'),
        2,
        100,
        [ { amount: 1, item: mc('sugar_cane') } ],
        [ { amount: 1, item: mc('paper') } ]
    );
})