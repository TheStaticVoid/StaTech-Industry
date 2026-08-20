// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:justhammers/${id}`;

    // -- JUST HAMMERS REMOVED REICPES -- //
    const JUST_HAMMERS_REMOVED_RECIPES = [
        jh('impact_core'),
        jh('reinforced_impact_core')
    ];
    JUST_HAMMERS_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- IMPACT CORE -- //
    event
        .shaped(jh('impact_core'), ['RRR', 'IHG', 'RRR'], {
            R: '#c:dusts/redstone',
            I: '#c:storage_blocks/iron',
            H: mi('steel_hammer'),
            G: '#c:storage_blocks/gold'
        })
        .id(st('impact_core'));
    
    // -- REINFORCED IMPACT CORE -- //
    event
        .shaped(jh('reinforced_impact_core'), ['RRR', 'DCA', 'RRR'], {
            R: '#c:storage_blocks/redstone',
            D: '#c:storage_blocks/diamond',
            C: jh('reinforced_core'),
            A: '#c:storage_blocks/aluminum'
        })
        .id(st('reinforced_impact_core'));
});

ServerEvents.tags('item', (event) => {
    const MATERIALS = [
        'stone',
        'iron',
        'gold',
        'diamond',
        'netherite'
    ];
    MATERIALS.forEach((material) => {
        event.add('kubejs:hammer/regular', jh(`${material}_hammer`));
        event.add('kubejs:hammer/impact', jh(`${material}_impact_hammer`));
        event.add('kubejs:hammer/reinforced', jh(`${material}_reinforced_hammer`));
        event.add('kubejs:hammer/reinforced_impact', jh(`${material}_reinforced_impact_hammer`));
        event.add('kubejs:hammer/destructor', jh(`${material}_destructor_hammer`));
    });
});