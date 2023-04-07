ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let astra = (id) => `ad_astra:${id}`;
    let tr = (id) => `techreborn:${id}`;

    let centrifuge = (eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('centrifuge'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe);
    }

    // -- CENTRIFUGE ICE SHARD -- //
    centrifuge(
        32,
        300,
        [
            { amount: 16, item: astra('ice_shard') }
        ],
        null,
        null,
        [
            { amount: 50, fluid: mi('helium_3') }
        ]
    );

    // -- CENTRIFUGE MOON SAND -- //
    centrifuge(
        32,
        600,
        [
            { amount: 24, item: astra('moon_sand') }
        ],
        null,
        null,
        [
            { amount: 5, fluid: mi('helium_3') }
        ]
    );

    // -- CENTRIFUGE GLOWSTONE -- //
    centrifuge(
        32,
        1800,
        [
            { amount: 16, item: mc('glowstone_dust') }
        ],
        [
            { amount: 8, item: mc('glowstone_dust') },
            { amount: 1, item: mi('sulfur_dust') }
        ],
        null,
        [
            { amount: 100, fluid: mi('helium') }
        ]
    );

    // -- CENTRIFUGE REDSTONE -- //
    centrifuge(
        32,
        4000,
        [
            { amount: 16, item: tr('endstone_dust') }
        ],
        [
            { amount: 12, item: mc('sand') },
            { amount: 1, item: mi('tungsten_tiny_dust') }
        ],
        null,
        [
            { amount: 100, fluid: mi('helium') },
            { amount: 1, fluid: mi('helium_3') }
        ]
    );

    // -- CENTRIFUGE LAPIS -- //
    centrifuge(
        64,
        1500,
        [
            { amount: 4, item: mc('lapis_lazuli') }
        ],
        [
            { amount: 3, item: tr('lazurite_dust') },
            { amount: 1, item: tr('pyrite_small_dust') },
            { amount: 1, item: tr('calcite_small_dust') },
            { amount: 2, item: tr('sodalite_small_dust') }
        ],
        null,
        null
    )
})