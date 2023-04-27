ServerEvents.recipes(e => {
    
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let st = (id) => `statech:modern_industrialization/alloy_smelter/${id}`;

    let alloySmelter = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('alloy_smelter'),
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

    // -- REFINED IRON INGOT -- //
    alloySmelter(
        st('refined_iron_ingot'),
        16,
        300,
        [
            { amount: 4, item: tr('calcite_dust') },
            { amount: 1, tag: 'c:iron_ingots' }
        ],
        [
            { amount: 1, item: tr('refined_iron_ingot') }
        ]
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
        [
            { amount: 1, item: mc('netherite_ingot') }
        ]
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
        [
            { amount: 4, item: mi('invar_ingot') }
        ]
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
        [
            { amount: 4, item: mi('bronze_ingot') }
        ]
    );

    // -- BRASS INGOT -- //
    alloySmelter(
        st('brass_ingot'),
        16,
        300,
        [
            { amount: 3, tag: 'c:copper_ingots' },
            { amount: 1, tag: 'c:zinc_ingots' }
        ],
        [
            { amount: 4, item: tr('brass_ingot') }
        ]
    );

    // -- ELECTRUM INGOT -- //
    alloySmelter(
        st('electrum_ingot'),
        16,
        300,
        [
            { amount: 2, tag: 'c:gold_ingots' },
            { amount: 2, tag: 'c:silver_ingots' }
        ],
        [
            { amount: 4, item: mi('electrum_ingot') }
        ]
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
        [
            { amount: 2, item: mi('cupronickel_ingot') }
        ]
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
		[
			{ amount: 2, item: mi('battery_alloy_ingot') }
		]
	);
});