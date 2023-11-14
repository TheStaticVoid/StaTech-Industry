// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:giselle_addon/${id}`;

    // -- GISELLE ADDON REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        ga('crafting/fuel_loader'),
        ga('crafting/automation_nasa_workbench'),
        ga('crafting/gravity_normalizer'),
        ga('crafting/enchanted_book_space_breathing')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- FUEL LOADER -- //
    event.shaped(ga('fuel_loader'), [
        'FFF',
        'PHP',
        'SCS'
    ],
    {
        S: '#c:stainless_steel_plates',
        P: mi('advanced_pump'),
        H: mi('turbo_machine_hull'),
        F: '#' + mi('fluid_pipes'),
        C: mi('digital_circuit')
    })
    .id(st('fuel_loader'));

    // -- AUTOMATION NASA WORKBENCH -- //
    event.shaped(ga('automation_nasa_workbench'), [
        'SWS',
        'MHM',
        'SCS'
    ],
    {
        S: '#c:stainless_steel_plates',
        W: ad('nasa_workbench'),
        M: mi('advanced_motor'),
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit')
    })
    .id(st('automation_nasa_workbench'));

    // -- GRAVITY NORMALIZER -- //
    event.shaped(ga('gravity_normalizer'), [
        'SBS',
        'DHD',
        'SCS'
    ],
    {
        S: '#c:stainless_steel_ingots',
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit'),
        B: ad('space_boots'),
        D: '#c:desh_blocks'
    })
    .id(st('gravity_normalizer'));

    // -- SPACE BREATHING BOOK -- //
    event.shaped(Item.of('minecraft:enchanted_book').enchant('ad_astra_giselle_addon:space_breathing', 1), [
        'MSM',
        'MBM',
        'MMM'
    ],
    {
        M: ad('moon_stone'),
        S: ad('netherite_space_suit'),
        B: 'minecraft:book'
    })
    .id(st('space_breathing_book'));
});

ServerEvents.tags('fluid', event => {
    // Remove the fuel tags added by the mod so the regular conversion of boosted
    // diesel -> rocket fuel is kept
    const FUELS = [
        mi('biodiesel'),
        mi('diesel'),
        tr('diesel'),
        tr('biofuel')
    ];
    FUELS.forEach(id => event.remove(ad('fuel'), id));
});