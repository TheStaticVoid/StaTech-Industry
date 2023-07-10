let ALLOY_SMELTER;

MIMachineEvents.registerRecipeTypes(e => {
    ALLOY_SMELTER = e.register('alloy_smelter')
        .withItemInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
    e.craftingSingleBlock(
        // General parameters
        'Alloy Smelter', // English Name
        'alloy_smelter', // Internal Name
        ALLOY_SMELTER, // recipe type
        ['electric'], // list of tiers (can be bronze/steel/electric)

        // GUI Configuration
        170, // background height (or -1 for default value)
        e.progressBar(85, 25, 'arrow'), // progress bar
        e.efficiencyBar(42, 60), // efficiency bar
        e.energyBar(14, 27), // energy bar

        // Slot Configuration
        2, // Item input count
        1, // Item output count
        0, // fluid input count
        0, // fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids.
        items => items.addSlots(42, 27, 2, 1).addSlots(115, 27, 1, 1), fluids => {},
        
        // Model configuration
        true, // front overlay?
        false, // top overlay?
        false, // side overlay?
    );
});