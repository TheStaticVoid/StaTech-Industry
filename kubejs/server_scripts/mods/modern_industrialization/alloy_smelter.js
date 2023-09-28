// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let st = (id) => `statech:modern_industrialization/alloy_smelter/${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let alloySmelter = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('alloy_smelter'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;

        e.custom(newRecipe).id(id);
    }

    // -- REFINED IRON INGOT -- //
    alloySmelter(
        st('refined_iron_ingot'),
        16,
        200,
        [
            { amount: 4, item: tr('calcite_dust') },
            { amount: 1, tag: 'c:iron_ingots' }
        ],
        [ { amount: 1, item: tr('refined_iron_ingot') } ]
    );

    // -- NETHERITE INGOT -- //
    alloySmelter(
        st('netherite_ingot'),
        16,
        600,
        [
            { amount: 4, tag: 'c:gold_ingots' },
            { amount: 4, item: mc('netherite_scrap') }
        ],
        [ { amount: 1, item: mc('netherite_ingot') } ]
    );

    // -- INVAR INGOT -- //
    alloySmelter(
        st('invar_ingot'),
        8,
        200,
        [
            { amount: 3, tag: 'c:iron_ingots' },
            { amount: 1, tag: 'c:nickel_ingots' }
        ],
        [ { amount: 4, item: mi('invar_ingot') } ]
    );

    // -- BRONZE INGOT -- //
    alloySmelter(
        st('bronze_ingot'),
        8,
        100,
        [
            { amount: 3, tag: 'c:copper_ingots' },
            { amount: 1, tag: 'c:tin_ingots' }
        ],
        [ { amount: 4, item: mi('bronze_ingot') } ]
    );

    // -- BRASS INGOT -- //
    alloySmelter(
        st('brass_ingot'),
        16,
        200,
        [
            { amount: 3, tag: 'c:copper_ingots' },
            { amount: 1, tag: 'c:zinc_ingots' }
        ],
        [ { amount: 4, item: tr('brass_ingot') } ]
    );

    // -- ELECTRUM INGOT -- //
    alloySmelter(
        st('electrum_ingot'),
        16,
        200,
        [
            { amount: 2, tag: 'c:gold_ingots' },
            { amount: 2, tag: 'c:silver_ingots' }
        ],
        [ { amount: 4, item: mi('electrum_ingot') } ]
    );

    // -- CUPRONICKEL INGOT -- //
    alloySmelter(
        st('cupronickel_ingot'),
        16,
        200,
        [
            { amount: 1, tag: 'c:copper_ingots' },
            { amount: 1, tag: 'c:nickel_ingots' }
        ],
        [ { amount: 2, item: mi('cupronickel_ingot') } ]
    ); 
	
	// -- BATTERY ALLOY -- //
	alloySmelter(
        st('battery_alloy'),
		8,
		200,
		[
			{ amount: 1, tag: 'c:lead_ingots' },
			{ amount: 1, tag: 'c:antimony_ingots' }
		],
		[ { amount: 2, item: mi('battery_alloy_ingot') } ]
	);

    // -- BATTERY ALLOY BLOCK -- //
    alloySmelter(
        st('battery_alloy_block'),
        8,
        1800,
        [
            { amount: 1, tag: 'c:lead_blocks' },
            { amount: 1, tag: 'c:antimony_blocks' }
        ],
        [ { amount: 2, item: mi('battery_alloy_block') } ]
    );

    // -- BRASS BLOCK -- //
    alloySmelter(
        st('brass_block'),
        16,
        1800,
        [
            { amount: 3, tag: 'c:copper_blocks' },
            { amount: 1, tag: 'c:zinc_blocks' }
        ],
        [ { amount: 4, item: tr('brass_storage_block') } ]
    );

    // -- BRONZE BLOCK -- //
    alloySmelter(
        st('bronze_block'),
        8,
        1800,
        [
            { amount: 3, tag: 'c:copper_blocks' },
            { amount: 1, tag: 'c:tin_blocks' }
        ],
        [ { amount: 4, item: mi('bronze_block') } ]
    );

    // -- CUPRONICKEL BLOCK -- //
    alloySmelter(
        st('cupronickel_block'),
        16,
        1800,
        [ 
            { amount: 1, tag: 'c:copper_blocks' },
            { amount: 1, tag: 'c:nickel_blocks' }
        ],
        [ { amount: 2, item: mi('cupronickel_block') } ]
    );

    // -- ELECTRUM BLOCK -- //
    alloySmelter(
        st('electrum_block'),
        16,
        1800,
        [
            { amount: 2, tag: 'c:gold_blocks' },
            { amount: 2, tag: 'c:silver_blocks' }
        ],
        [ { amount: 4, item: mi('electrum_block') } ]
    );

    // -- INVAR BLOCK -- //
    alloySmelter(
        st('invar_block'),
        8,
        1800,
        [
            { amount: 3, tag: 'c:iron_blocks' },
            { amount: 1, tag: 'c:nickel_blocks' },
        ],
        [ { amount: 4, item: mi('invar_block') } ]
    );

    // -- REFINED IRON BLOCK -- //
    alloySmelter(
        st('refined_iron_block'),
        16,
        1800,
        [
            { amount: 36, tag: 'c:calcite_dusts' },
            { amount: 1, tag: 'c:iron_blocks' }
        ],
        [ { amount: 1, item: tr('refined_iron_storage_block') } ]
    );
});