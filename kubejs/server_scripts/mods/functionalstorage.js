// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:functionalstorage/${id}`;
    
    // -- FUNCTIONAL STORAGE REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        fs('copper_upgrade'),
        fs('gold_upgrade'),
        fs('diamond_upgrade'),
        fs('netherite_upgrade'),
        fs('iron_downgrade'),
        fs('dripping_upgrade'),
        fs('water_generator_upgrade'),
        fs('obsidian_upgrade'),
        mfs('placer_upgrade'),
        mfs('breaker_upgrade'),
        mfs('refill_upgrade'),
        mfs('dimensional_refill_upgrade'),
        mfs('speed_upgrade_augment'),
        fs('compacting_drawer'),
        fs('simple_compacting_drawer'),
        fs('compacting_framed_drawer'),
        fs('compacting_framed_drawer_from_simple'),
        fs('framed_simple_compacting_drawer'),
        fs('framed_simple_compacting_drawer_from_simple'),
        fs('armory_cabinet'),
        fs('fluid_1'),
        fs('fluid_2'),
        fs('fluid_4'),
        fs('framed_fluid_1'),
        fs('framed_fluid_2'),
        fs('framed_fluid_4')
    ]; 
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- ALUMINUM (COPPER) UPGRADE -- // 
    event.shaped(fs('copper_upgrade'), [
        'PDP'
    ],
    {
        D: '#functionalstorage:drawer',
        P: '#c:plates/aluminum'
    })
    .id(st('aluminum_upgrade')); 

    // -- STAINLESS STEEL (GOLD) UPGRADE -- // 
    event.shaped(fs('gold_upgrade'), [
        'PUP'
    ],
    {
        U: fs('copper_upgrade'),
        P: '#c:plates/stainless_steel'
    })
    .id(st('stainless_steel_upgrade')); 

    // -- TITANIUM (DIAMOND) UPGRADE -- // 
    event.shaped(fs('diamond_upgrade'), [
        'PUP'
    ],
    {
        U: fs('gold_upgrade'),
        P: '#c:plates/titanium'
    })
    .id(st('titanium_upgrade')); 

    // -- TUNGSTENSTEEL (NETHERITE) UPGRADE -- // 
    event.shaped(fs('netherite_upgrade'), [
        'PUP'
    ],
    {
        U: fs('diamond_upgrade'),
        P: '#c:plates/tungstensteel'
    })
    .id(st('tungstensteel_upgrade')); 

    // -- IRON DOWNGRADE -- // 
    event.shaped(fs('iron_downgrade'), [
        'PDP'
    ],
    {
        D: '#functionalstorage:drawer',
        P: '#c:plates/iron'
    })
    .id(st('iron_downgrade')); 

});
