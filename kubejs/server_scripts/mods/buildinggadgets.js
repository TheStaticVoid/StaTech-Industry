// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:building_gadgets/${id}`;
    
    // -- BUILDING GADGETS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        bu('gadget_building'),
        bu('gadget_exchanging'),
        bu('gadget_copy_paste'),
        bu('gadget_destruction'),
        bu('template_manager')
    ]; 
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- BUILDING GADGET -- //
    event.shaped(bu('gadget_building'), [
        'IRI',
        'DCD',
        'ILI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        D: '#c:diamonds',
        C: mi('electronic_circuit'),
        L: '#c:lapis'
    })
    .id(st('gadget_building'));

    // -- EXCHANGING GADGET -- // 
    event.shaped(bu('gadget_exchanging'), [
        'IRI',
        'DCD',
        'IRI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        D: '#c:diamonds',
        C: mi('electronic_circuit')
    })
    .id(st('gadget_exchanging'));

    // -- COPY & PASTE GADGET -- //
    event.shaped(bu('gadget_copy_paste'), [
        'IRI',
        'ECE',
        'ILI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        E: '#c:emeralds',
        C: mi('electronic_circuit'),
        L: '#c:lapis'
    })
    .id(st('gadget_copy_paste'));

    // -- DESTRUCTION GADGET -- //
    event.shaped(bu('gadget_destruction'), [
        'IRI',
        'ECE',
        'ILI'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:redstone_dusts',
        E: '#c:ender_pearls',
        C: mi('electronic_circuit'),
        L: '#c:lapis'
    })
    .id(st('gadget_destruction'));

    // -- TEMPLATE MANAGER -- // 
    event.shaped(bu('template_manager'), [
        'GRG',
        'EFE',
        'GCG'
    ],
    {
        G: '#c:gold_plates',
        R: '#c:redstone_dusts',
        E: '#c:ender_pearls',
        C: mi('electronic_circuit'),
        F: mi('basic_machine_hull')
    })
    .id(st('template_manager'));
});