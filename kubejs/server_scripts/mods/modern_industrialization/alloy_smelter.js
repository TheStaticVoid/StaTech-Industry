// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/alloy_smelter/${id}`;
    
    // -- RED ALLOY INGOT -- //
    alloySmelter(
        event,
        st('red_alloy_ingot'),
        4,
        200,
        [
            { amount: 1, tag: 'morered:red_alloyable_ingots' },
            { amount: 4, tag: 'c:dusts/redstone' }
        ],
        [ { amount: 1, item: mr('red_alloy_ingot') } ]
    );

    // -- NETHERITE INGOT -- //
    alloySmelter(
        event,
        st('netherite_ingot'),
        16,
        600,
        [
            { amount: 4, tag: 'c:ingots/gold' },
            { amount: 4, item: mc('netherite_scrap') }
        ],
        [ { amount: 1, item: mc('netherite_ingot') } ]
    );

    // -- COGNITIVE ALLOY INGOT -- //
    alloySmelter(
        event,
        st('cognitive_alloy'),
        4,
        200,
        [
            { amount: 1, tag: 'c:ingots/copper' },
            { amount: 4, item: xp('cognitive_amalgam') }
        ],
        [ { amount: 1, item: xp('cognitive_alloy') } ]
    );

    // -- BRASS INGOT -- //
    alloySmelter(
    event,
        st('brass_ingot'),
        4,
        200,
        [
            { amount: 1, tag: 'c:ingots/copper' },
            { amount: 1, tag: 'c:ingots/zinc' }
        ],
        [ { amount: 2, item: cr('brass_ingot') } ]
    );
/* 
    // -- REFINED IRON INGOT -- //
    alloySmelter(
    event,
        st('refined_iron_ingot'),
        16,
        200,
        [
            { amount: 4, item: tr('calcite_dust') },
            { amount: 1, tag: 'c:iron_ingots' }
        ],
        [ { amount: 1, item: tr('refined_iron_ingot') } ]
    );



    // -- INVAR INGOT -- //
    alloySmelter(
    event,
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
    event,
        st('bronze_ingot'),
        8,
        100,
        [
            { amount: 3, tag: 'c:copper_ingots' },
            { amount: 1, tag: 'c:tin_ingots' }
        ],
        [ { amount: 4, item: mi('bronze_ingot') } ]
    );

    // -- ELECTRUM INGOT -- //
    alloySmelter(
    event,
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
    event,
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
    event,
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
    event,
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
    event,
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
    event,
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
    event,
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
    event,
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
    event,
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
    event,
        st('refined_iron_block'),
        16,
        1800,
        [
            { amount: 36, tag: 'c:calcite_dusts' },
            { amount: 1, tag: 'c:iron_blocks' }
        ],
        [ { amount: 1, item: tr('refined_iron_storage_block') } ]
    ); */
});