// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/compressor/${id}`;

    // -- COMPRESSOR REMOVED RECIPES -- //
    const DELETED_RECIPE = [
        mi('materials/diamond/compressor/main'),
        mi('materials/emerald/compressor/main'),
        mi('materials/tungstensteel/compressor/main'),
        mi('compat/techreborn/compressor/_c_zinc_ingots_to_techreborn_zinc_plate'),
        mi('compressor/calorite_ingot_to_plate'),
        mi('vanilla_recipes/compressor/paper_with_sugarcane'),
        mi('compressor/desh_ingot_to_plate'),
        mi('compat/techreborn/compressor/techreborn_lazurite_dust_to_techreborn_lazurite_plate')
    ];
    DELETED_RECIPE.forEach(id => event.remove({id: id}));

    // -- NETHERITE NUGGET -> NETHERITE INGOT -- //
    compressor(
        event,
        st('netherite_ingot'),
        32,
        200,
        [ { amount: 9, item: tr('netherite_nugget') } ],
        [ { amount: 1, item: mc('netherite_ingot') } ]
    );
    
    // -- PIZZA DOUGH -- //
    compressor(
        event,
        st('pizza_dough'),
        2,
        200,
        [ { amount: 1, tag: 'c:dough' } ],
        [ { amount: 1, item: kj('pizza_dough') } ]
    );

    // -- DIAMOND PLATE -- //
    compressor(
        event,
        st('diamond_plate'),
        48,
        400,
        [ { amount: 1, item: mc('diamond') } ],
        [ { amount: 1, item: mi('diamond_plate') } ]
    )

    // -- EMERALD PLATE -- //
    compressor(
        event,
        st('emerald_plate'),
        48,
        400,
        [ { amount: 1, item: mc('emerald') } ],
        [ { amount: 1, item: mi('emerald_plate') } ]
    );

    // -- BRICKS -- //
    compressor(
        event,
        st('bricks'),
        2,
        300,
        [ { amount: 4, item: mc('brick') } ],
        [ { amount: 1, item: mc('bricks') } ]
    );

    // -- FIRE CLAY BRICKS -- //
    compressor(
        event,
        st('fire_clay_bricks'),
        2,
        300,
        [ { amount: 4, item: mi('fire_clay_brick') } ],
        [ { amount: 1, item: mi('fire_clay_bricks') } ]
    );

    // -- STONE -- //
    compressor(
        event,
        st('stone'),
        2,
        200,
        [ { amount: 4, item: mi('stone_dust') } ],
        [ { amount: 1, item: mc('stone') } ]
    );

    // -- RUBBER SHEETS -- //
    compressor(
        event,
        st('rubber_sheets'),
        2,
        200,
        [ { amount: 1, item: tr('rubber') } ],
        [ { amount: 2, item: mi('rubber_sheet') } ]
    );

    // -- LAZURITE PLATE -- //
    compressor(
        event,
        st('lazurite_plate'),
        10,
        300,
        [ { amount: 1, item: tr('lazurite_dust') } ],
        [ { amount: 1, item: tr('lazurite_plate') } ]
    );

    // -- PAPER -- //
    compressor(
        event,
        st('paper'),
        2,
        100,
        [ { amount: 1, item: mc('sugar_cane') } ],
        [ { amount: 1, item: mc('paper') } ]
    );
})