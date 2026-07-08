// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:megacells/${id}`;

    const ingotsToPlates = [
        ['sky_steel_ingot', 'sky_steel_plate'],
        ['sky_bronze_ingot', 'sky_bronze_plate']
    ]

    // -- REPLACE INGOTS INTO PLATES FOR CELLS -- //
    ingotsToPlates.forEach(([ingot, plate]) => {
        event.replaceInput(
            { id: /megacells:cells.*/ },
            `megacells:${ingot}`,
            `modern_industrialization:${plate}`
        )
    })

    // -- MEGA CELLS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        mg('transform/sky_bronze_ingot'),
        mg('transform/sky_steel_ingot'),
        mg('transform/sky_osmium_ingot'),
        mg('transform/sky_osmium_ingot'),
        mg('crafting/sky_osmium_ingot_from_sky_osmium_block'),
        mg('crafting/sky_osmium_block'),
        mg('crafting/bulk_cell_component')
    ];
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));
    
    event.custom({
        type: 'ae2:transform',
        circumstance: {
            'type': 'fluid',
            'tag': 'minecraft:lava'
        },
        ingredients: [
            {'item': 'ae2:charged_certus_quartz_crystal'},
            {'tag': 'c:ingots/annealed_copper'},
            {'item': 'ae2:sky_stone_block'}
        ],
        result: {
            'count': 2,
            'id': mg('sky_bronze_ingot')
        }
    })
    .id(mg('transform/sky_bronze_ingot'));
    
    event.custom({
        type: 'ae2:transform',
        circumstance: {
            'type': 'fluid',
            'tag': 'minecraft:lava'
        },
        ingredients: [
            {'item': ae('charged_certus_quartz_crystal')},
            {'tag': 'c:ingots/stainless_steel'},
            {'item': ae('sky_stone_block')}
        ],
        result: {
            'count': 2,
            'id': mg('sky_steel_ingot')
        }
    })
    .id(mg('transform/sky_steel_ingot'));

    event.custom({
        type: 'extendedae:crystal_assembler',
        input_items: [
            {
                ingredient: { item: ae('logic_processor_press') }
            },
            {
                amount: 4,
                ingredient: { item: mi('sky_steel_plate') }
            },
            {
                amount: 4,
                ingredient: { item: mi('sky_bronze_plate') }
            }
        ],
        output: {
            id: mg('accumulation_processor_press'),
            count: 1
        }
    })
    .id(st('accumulation_processor_press'));
});

MoreJS.villagerTrades(event => {

    event.removeModdedTypedTrades("ae2:fluix_researcher", 5);

});