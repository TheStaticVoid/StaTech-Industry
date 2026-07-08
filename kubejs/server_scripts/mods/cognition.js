// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:cognition/${id}`;
    
    // -- BUILDING GADGETS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        xp('cognitive_flux'),
        xp('cognitive_alloy')        
    ]; 
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // --  -- // 
/*     event.shaped(bg('template_manager'), [
        'GRG',
        'EFE',
        'GCG'
    ],
    {
        G: '#c:plates/gold',
        R: '#c:dusts/redstone',
        E: '#c:ender_pearls',
        C: mi('electronic_circuit'),
        F: mi('basic_machine_hull')
    })
    .id(st('template_manager')); */
});