ServerEvents.recipes(e => {
    let st = (id) => `statech:artifacts/${id}`;
    let art = (id) => `artifacts:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    let nvgRecipe = {
        type: 'create:mixing',
        id: st('night_vision_goggles'),
        heatRequirement: 'heated',
        ingredients: [
            {
                item: mi('rubber_sheet')
            },
            {
                item: mi('rubber_sheet')
            },
            {
                item: mi('rubber_sheet')
            },
            {
                item: 'create:goggles'
            },
            {
                item: mi('steel_ring')
            },
            {
                item: mi('steel_ring')
            },
            {
                amount: 81000,
                fluid: 'create:potion',
                nbt: {
                    Bottle: 'REGULAR',
                    Potion: 'minecraft:night_vision'
                }
            }
        ],
        results: [
            {
                item: art('night_vision_goggles'),
                amount: 1
            }
        ]
    }
    e.custom(nvgRecipe);

    let beefRecipe = {
        type: mi('compressor'),
        eu: 8,
        duration: 1200,
        id: st('everlasting_beef'),
        item_inputs: 
        [
            { amount: 64, item: 'minecraft:porkchop' }
        ],
        item_outputs:
        [
            { amount: 1, item: art('everlasting_beef') }
        ]
    }
    e.custom(beefRecipe);

    e.shapeless(art('universal_attractor'), 'kibe:magnet');
    e.shapeless('kibe:magnet', art('universal_attractor'));
});