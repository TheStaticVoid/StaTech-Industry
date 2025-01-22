// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/greenhouse/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ap = (id) => `architects_palette:${id}`;
    let bl = (id) => `blockus:${id}`;
    let bg = (id) => `byg:${id}`;
    let cd = (id) => `culturaldelights:${id}`;
    let ec = (id) => `ecologics:${id}`;
    let ed = (id) => `expandeddelight:${id}`;
    let pr = (id) => `promenade:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let sp = (id) => `spectrum:${id}`;
    let tf = (id) => `twilightforest:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let greenhouse = (id, eu, duration, item_inputs, fluid_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('greenhouse'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;

        e.custom(newRecipe).id(id);
    }
    // This is all the saplings in the game with their corresponding logs and leaves
    const saplingLogList = [    
        // Sapling                              Log                             Leaves                                  Fluid
        [ mc('oak_sapling'),                    mc('oak_log'),                  mc('oak_leaves'),                       mc('water') ],
        [ mc('dark_oak_sapling'),               mc('dark_oak_log'),             mc('dark_oak_leaves'),                  mc('water') ],
        [ mc('spruce_sapling'),                 mc('spruce_log'),               mc('spruce_leaves'),                    mc('water') ],
        [ mc('birch_sapling'),                  mc('birch_log'),                mc('birch_leaves'),                     mc('water') ],
        [ mc('jungle_sapling'),                 mc('jungle_log'),               mc('jungle_leaves'),                    mc('water') ],
        [ mc('acacia_sapling'),                 mc('acacia_log'),               mc('acacia_leaves'),                    mc('water') ],
        [ mc('mangrove_propagule'),             mc('mangrove_log'),             mc('mangrove_leaves'),                  mc('water') ],
        [ mc('crimson_fungus'),                 mc('crimson_stem'),             mc('nether_wart_block'),                mi('blood') ],
        [ mc('warped_fungus'),                  mc('warped_stem'),              mc('warped_wart_block'),                mi('blood') ],
        [ ap('twisted_sapling'),                ap('twisted_log'),              ap('twisted_leaves'),                   mi('blood') ],
        [ bl('white_oak_sapling'),              bl('white_oak_sapling'),        bl('white_oak_leaves'),                 mc('water') ],
        [ bl('legacy_sapling'),                 bl('legacy_log'),               bl('legacy_leaves'),                    mc('water') ],
        [ bg('aspen_sapling'),                  bg('aspen_log'),                bg('aspen_leaves'),                     mc('water') ],
        [ bg('baobab_sapling'),                 bg('baobab_log'),               bg('baobab_leaves'),                    mc('water') ],
        [ bg('blue_enchanted_sapling'),         bg('blue_enchanted_log'),       bg('blue_enchanted_leaves'),            mc('water') ],
        [ bg('purple_bulbis_oddity'),           bg('bulbis_stem'),              bg('purple_bulbis_shell'),              mi('liquid_ender') ],
        [ bg('bulbis_oddity'),                  bg('bulbis_stem'),              bg('bulbis_shell'),                     mi('liquid_ender') ],
        [ bg('pink_cherry_sapling'),            bg('cherry_log'),               bg('pink_cherry_leaves'),               mc('water') ],
        [ bg('white_cherry_sapling'),           bg('cherry_log'),               bg('white_cherry_leaves'),              mc('water') ],
        [ bg('cika_sapling'),                   bg('cika_log'),                 bg('cika_leaves'),                      mc('water') ],
        [ bg('cypress_sapling'),                bg('cypress_log'),              bg('cypress_leaves'),                   mc('water') ],
        [ bg('ebony_sapling'),                  bg('ebony_log'),                bg('ebony_leaves'),                     mc('water') ],
        [ bg('ether_sapling'),                  bg('ether_log'),                bg('ether_leaves'),                     mc('water') ],
        [ bg('fir_sapling'),                    bg('fir_log'),                  bg('fir_leaves'),                       mc('water') ],
        [ bg('green_enchanted_sapling'),        bg('green_enchanted_log'),      bg('green_enchanted_leaves'),           mc('water') ],
        [ bg('holly_sapling'),                  bg('holly_log'),                bg('holly_leaves'),                     mc('water') ],
        [ bg('fungal_imparius'),                bg('fungal_imparius_stem'),     bg('fungal_imparius_block'),            mi('liquid_ender') ],
        [ bg('imparius_mushroom'),              bg('imparius_stem'),            bg('imparius_mushroom_block'),          mi('liquid_ender') ],
        [ bg('lament_sapling'),                 bg('lament_log'),               bg('lament_leaves'),                    mc('water') ],
        [ bg('indigo_jacaranda_sapling'),       bg('jacaranda_log'),            bg('indigo_jacaranda_leaves'),          mc('water') ],
        [ bg('jacaranda_sapling'),              bg('jacaranda_log'),            bg('jacaranda_leaves'),                 mc('water') ],
        [ bg('mahogany_sapling'),               bg('mahogany_log'),             bg('mahogany_leaves'),                  mc('water') ],
        [ bg('white_mangrove_sapling'),         bg('white_mangrove_log'),       bg('white_mangrove_leaves'),            mc('water') ],
        [ bg('red_maple_sapling'),              bg('maple_log'),                bg('red_maple_leaves'),                 mc('water') ],
        [ bg('silver_maple_sapling'),           bg('maple_log'),                bg('silver_maple_leaves'),              mc('water') ],
        [ bg('maple_sapling'),                  bg('maple_log'),                bg('maple_leaves'),                     mc('water') ],
        [ bg('nightshade_sapling'),             bg('nightshade_log'),           bg('nightshade_leaves'),                mi('liquid_ender') ],
        [ bg('palm_sapling'),                   bg('palm_log'),                 bg('palm_leaves'),                      mc('water') ],
        [ bg('palo_verde_sapling'),             bg('palo_verde_log'),           bg('palo_verde_leaves'),                mc('water') ],
        [ bg('pine_sapling'),                   bg('pine_log'),                 bg('pine_leaves'),                      mc('water') ],
        [ bg('rainbow_eucalyptus_sapling'),     bg('rainbow_eucalyptus_log'),   bg('rainbow_eucalyptus_leaves'),        mc('water') ],
        [ bg('redwood_sapling'),                bg('redwood_log'),              bg('redwood_leaves'),                   mc('water') ],
        [ bg('skyris_sapling'),                 bg('skyris_log'),               bg('skyris_leaves'),                    mc('water') ],
        [ bg('willow_sapling'),                 bg('willow_log'),               bg('willow_leaves'),                    mc('water') ],
        [ bg('witch_hazel_sapling'),            bg('witch_hazel_log'),          bg('witch_hazel_leaves'),               mc('water') ],
        [ bg('zelkova_sapling'),                bg('zelkova_log'),              bg('zelkova_leaves'),                   mc('water') ],
        [ bg('sythian_fungus'),                 bg('sythian_stem'),             bg('sythian_wart_block'),               mi('blood') ],
        [ bg('embur_wart'),                     bg('embur_pedu'),               bg('embur_gel_block'),                  mi('blood') ],
        [ bg('withering_oak_sapling'),          bg('withering_oak_log'),        bg('withering_oak_leaves'),             mi('blood') ],
        [ bg('araucaria_sapling'),              bg('pine_log'),                 bg('araucaria_leaves'),                 mc('water') ],
        [ bg('blue_spruce_sapling'),            mc('spruce_log'),               bg('blue_spruce_leaves'),               mc('water') ],
        [ bg('brown_birch_sapling'),            mc('birch_log'),                bg('brown_birch_leaves'),               mc('water') ],
        [ bg('brown_oak_sapling'),              mc('oak_log'),                  bg('brown_oak_leaves'),                 mc('water') ],
        [ bg('brown_zelkova_sapling'),          bg('zelkova_log'),              bg('brown_zelkova_leaves'),             mc('water') ],
        [ bg('joshua_sapling'),                 mc('oak_log'),                  bg('joshua_leaves'),                    mc('water') ],
        [ bg('orange_birch_sapling'),           mc('birch_log'),                bg('orange_birch_leaves'),              mc('water') ],
        [ bg('orange_oak_sapling'),             mc('oak_log'),                  bg('orange_oak_leaves'),                mc('water') ],
        [ bg('orange_spruce_sapling'),          mc('spruce_log'),               bg('orange_spruce_leaves'),             mc('water') ],
        [ bg('orchard_sapling'),                mc('oak_log'),                  bg('orchard_leaves'),                   mc('water') ],
        [ bg('red_birch_sapling'),              mc('birch_log'),                bg('red_birch_leaves'),                 mc('water') ],
        [ bg('red_oak_sapling'),                mc('oak_log'),                  bg('red_oak_leaves'),                   mc('water') ],
        [ bg('red_spruce_sapling'),             mc('spruce_log'),               bg('red_spruce_leaves'),                mc('water') ],
        [ bg('yellow_birch_sapling'),           mc('birch_log'),                bg('yellow_birch_leaves'),              mc('water') ],
        [ bg('yellow_spruce_sapling'),          mc('spruce_log'),               bg('yellow_spruce_leaves'),             mc('water') ],
        [ bg('soul_shroom'),                    bg('soul_shroom_stem'),         bg('soul_shroom_block'),                mi('blood') ],
        [ bg('death_cap'),                      mc('mushroom_stem'),            bg('death_cap_mushroom_block'),         mi('blood') ],
        [ bg('shulkren_fungus'),                bg('white_mushroom_stem'),      bg('shulkren_wart_block'),              mi('liquid_ender') ],
        [ bg('green_mushroom'),                 bg('white_mushroom_stem'),      bg('green_mushroom_block'),             mc('water') ],
        [ bg('weeping_milkcap'),                mc('mushroom_stem'),            bg('weeping_milkcap_mushroom_block'),   mc('water') ],
        [ bg('wood_blewit'),                    bg('brown_mushroom_stem'),      bg('wood_blewit_mushroom_block'),       mc('water') ],
        [ cd('avocado_sapling'),                cd('avocado_log'),              cd('avocado_leaves'),                   mc('water') ],
        [ ec('walnut_sapling'),                 ec('walnut_log'),               ec('walnut_leaves'),                    mc('water') ],
        [ ed('cinnamon_sapling'),               ed('cinnamon_log'),             mc('oak_leaves'),                       mc('water') ],
        [ pr('autumn_oak_sapling'),             mc('oak_log'),                  pr('autumn_oak_leaves'),                mc('water') ],
        [ pr('autumn_birch_sapling'),           mc('birch_log'),                pr('autumn_birch_leaves'),              mc('water') ],
        [ pr('pink_cherry_oak_sapling'),        pr('cherry_oak_log'),           pr('pink_cherry_oak_leaves'),           mc('water') ],
        [ pr('white_cherry_oak_sapling'),       pr('cherry_oak_log'),           pr('white_cherry_oak_leaves'),          mc('water') ],
        [ pr('palm_sapling'),                   pr('palm_log'),                 pr('palm_leaves'),                      mc('water') ],
        [ tr('rubber_sapling'),                 tr('rubber_log'),               tr('rubber_leaves'),                    mc('water') ],
        [ sp('orange_sapling'),                 sp('orange_log'),               sp('orange_leaves'),                    mc('water') ],
        [ sp('magenta_sapling'),                sp('magenta_log'),              sp('magenta_leaves'),                   mc('water') ],
        [ sp('light_blue_sapling'),             sp('light_blue_log'),           sp('light_blue_leaves'),                mc('water') ],
        [ sp('yellow_sapling'),                 sp('yellow_log'),               sp('yellow_leaves'),                    mc('water') ],
        [ sp('lime_sapling'),                   sp('lime_log'),                 sp('lime_leaves'),                      mc('water') ],
        [ sp('pink_sapling'),                   sp('pink_log'),                 sp('pink_leaves'),                      mc('water') ],
        [ sp('cyan_sapling'),                   sp('cyan_log'),                 sp('cyan_leaves'),                      mc('water') ],
        [ sp('purple_sapling'),                 sp('purple_log'),               sp('purple_leaves'),                    mc('water') ],
        [ sp('blue_sapling'),                   sp('blue_log'),                 sp('blue_leaves'),                      mc('water') ],
        [ sp('brown_sapling'),                  sp('brown_log'),                sp('brown_leaves'),                     mc('water') ],
        [ sp('green_sapling'),                  sp('green_log'),                sp('green_leaves'),                     mc('water') ],
        [ sp('red_sapling'),                    sp('red_log'),                  sp('red_leaves'),                       mc('water') ],
        [ sp('black_sapling'),                  sp('black_log'),                sp('black_leaves'),                     mc('water') ],
        [ sp('white_sapling'),                  sp('white_log'),                sp('white_leaves'),                     mc('water') ],
        [ sp('gray_sapling'),                   sp('gray_log'),                 sp('gray_leaves'),                      mc('water') ],
        [ sp('light_gray_sapling'),             sp('light_gray_log'),           sp('light_gray_leaves'),                mc('water') ],
        [ tf('twilight_oak_sapling'),           tf('twilight_oak_log'),         tf('twilight_oak_leaves'),              mc('water') ],
        [ tf('canopy_sapling'),                 tf('canopy_log'),               tf('canopy_leaves'),                    mc('water') ],
        [ tf('mangrove_sapling'),               tf('mangrove_root'),            tf('mangrove_leaves'),                  mc('water') ],
        [ tf('darkwood_sapling'),               tf('dark_log'),                 tf('dark_leaves'),                      mc('water') ],
        [ tf('hollow_oak_sapling'),             tf('twilight_oak_log'),         tf('twilight_oak_leaves'),              mc('water') ],
        [ tf('time_sapling'),                   tf('time_log'),                 tf('time_leaves'),                      mc('water') ],
        [ tf('transformation_sapling'),         tf('transformation_log'),       tf('transformation_leaves'),            mc('water') ],
        [ tf('mining_sapling'),                 tf('mining_log'),               tf('mining_leaves'),                    mc('water') ],
        [ tf('sorting_sapling'),                tf('sorting_log'),              tf('sorting_leaves'),                   mc('water') ],
        [ tf('rainbow_oak_sapling'),            tf('twilight_oak_log'),         tf('rainbow_oak_leaves'),               mc('water') ]
    ];

    // For every sapling, add a regular and bone meal variant of the recipe
    saplingLogList.forEach( woodType => {
        let sapling = woodType[0];
        let log = woodType[1];
        let leaves = woodType[2];
        let fluid = woodType[3];
        let id = `${log.split(':')[1]}_from_${sapling.split(':')[1]}`;

        // Fixes duplicate ID issue between the two palm logs
        if (log.split(':')[1] == 'palm_log' && log.split(':')[0] == 'byg')
            id += '_byg';
            
        greenhouse(
            st(id),
            8,
            1200,
            [ { amount: 1, item: sapling, probability: 0.0 } ],
            [ { amount: 100, fluid: fluid } ],
            [
                { amount: 8, item: log },
                { amount: 16, item: leaves },
                { amount: 1, item: sapling, probability: 0.5 },
            ]
        );

        fluid = mi(`nutrient_rich_${fluid.split(':')[1]}`);
        greenhouse(
            st(`${id}_bonemeal`),
            8,
            1200,
            [ { amount: 1, item: sapling, probability: 0.0 } ],
            [ { amount: 100, fluid: fluid } ],
            [
                { amount: 16, item: log },
                { amount: 32, item: leaves },
                { amount: 1, item: sapling }
            ]
        );
    });
});