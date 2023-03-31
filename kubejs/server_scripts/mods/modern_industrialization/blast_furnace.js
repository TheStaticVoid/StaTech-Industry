ServerEvents.recipes(e => {
    const REMOVED_RECIPES = [
        'modern_industrialization:materials/blast_furnace/steel',
        'modern_industrialization:materials/aluminum/blast_furnace/dust',
        'modern_industrialization:materials/aluminum/blast_furnace/tiny_dust'
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- UNCOOKED STEEL DUST -> STEEL INGOT -- //
    e.custom({
        type: 'modern_industrialization:blast_furnace',
        eu: 2,
        duration: 1200,
        item_inputs: [
            {
                item: 'modern_industrialization:uncooked_steel_dust',
                amount: 1
            }
        ],
        item_outputs: [
            {
                item: 'modern_industrialization:steel_ingot',
                amount: 1
            }
        ]
    });

    // -- REFINED IRON INGOT -> STEEL INGOT -- //
    e.custom({
        type: 'modern_industrialization:blast_furnace',
        eu: 16,
        duration: 40,
        item_inputs: [
            {
                tag: 'c:refined_iron_ingots',
                amount: 1
            },
            {
                tag: 'c:carbon_dusts',
                amount: 1
            }
        ],
        item_outputs: [
            {
                item: 'modern_industrialization:steel_ingot',
                amount: 1
            }
        ]
    });

    // -- ALUMINUM EBF -- //
    e.custom({
        type: 'modern_industrialization:blast_furnace',
        duration: 600,
        eu: 32,
        item_inputs: [
            {
                amount: 1,
                item: 'modern_industrialization:aluminum_dust'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'modern_industrialization:aluminum_ingot'
            }
        ]
    });
});