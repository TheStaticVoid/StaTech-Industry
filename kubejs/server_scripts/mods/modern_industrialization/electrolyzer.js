ServerEvents.recipes(e => {
    // -- UU Matter -- //
    e.custom({
        type: 'modern_industrialization:electrolyzer',
        duration: 2500,
        eu: 40,
        item_inputs: [
            {
                item: 'techreborn:uu_matter',
                amount: 1
            }
        ],
        fluid_outputs: [
            {
                fluid: 'modern_industrialization:uu_matter',
                amount: 1
            }
        ]
    });

    // -- ELECTROLYZING CLAY -- //
    e.custom({
        type: 'modern_industrialization:electrolyzer',
        eu: 32,
        duration: 1200,
        item_inputs: [
            {
                amount: 48,
                item: 'minecraft:clay_ball'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'modern_industrialization:aluminum_dust'
            },
            {
                amount: 2,
                item: 'modern_industrialization:sodium_dust'
            },
            {
                amount: 1,
                item: 'modern_industrialization:silicon_dust'
            }
        ]
    });

    // -- ELECTROLYZING SALT -- //
    e.custom({
        type: 'modern_industrialization:electrolyzer',
        eu: 16,
        duration: 400,
        item_inputs: [
            {
                amount: 2,
                tag: 'c:salt_dusts'
            }
        ],
        fluid_inputs: [
            {
                amount: 100,
                fluid: 'minecraft:water'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'modern_industrialization:sodium_dust'
            }
        ],
        fluid_outputs: [
            {
                amount: 125,
                fluid: 'modern_industrialization:chlorine'
            }
        ]
    });
});