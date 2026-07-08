// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

MIMaterialEvents.addMaterials(event => {
    event.createMaterial('Cobalt', 'cobalt', 0x0100b0,
        builder => {
            builder
                .materialSet('shiny')
                .addParts('tiny_dust', 'dust', 'crushed_dust', 'hot_ingot', 'ingot', 'nugget', 'plate', 'curved_plate', 'rod', 'ring', 'bolt', 'gear', 'drill', 'drill_head', 'blade', 'rotor')
                .ore({
                    'generate': false,
                    'ore_set': 'diamond'
                })
                .block('iron')
                .rawMetal('copper', true).rawMetal('iron', false)
                .defaultRecipes();
        });


    event.createMaterial('Desh', 'desh', 0xe9ba5d,
        builder => {
            builder
                .hardness('average')
				.addParts('plate', 'hot_ingot', 'ingot', 'rod', 'gear', 'ring', 'bolt', 'curved_plate', 'drill', 'drill_head', 'dust')
                .machineCasing(12.0)
                .pipeCasing(12.0)
                .ore({
                    'generate': false,
                    'ore_set': 'iron'
                })
                .block('iron')
                .rawMetal('copper', true).rawMetal('copper', false)
                .defaultRecipes()
        });

    event.createMaterial('Ostrum', 'ostrum', 0xbd7666,
        builder => {
            builder
                .hardness('average')
				.addParts('plate', 'hot_ingot', 'ingot', 'rod', 'gear', 'ring', 'bolt', 'curved_plate', 'drill', 'drill_head', 'dust')
                .machineCasing(12.0)
                .pipeCasing(12.0)
                .ore({
                    'generate': false,
                    'ore_set': 'iron'
                })
                .block('iron')
                .rawMetal('copper', true).rawMetal('copper', false)
                .defaultRecipes()
        });

        event.createMaterial('Tungstensteel', 'tungstensteel', 0x677680,
        builder => {
            builder
                .hardness('very_hard')
				.addParts('plate', 'hot_ingot', 'ingot', 'rod', 'gear', 'ring', 'coil', 'bolt', 'large_plate', 'curved_plate', 'wire')
                .barrel('Tungstensteel Barrel', 'tungstensteel_barrel', 32768)
                .tank('Tungstensteel Tank', 'tungstensteel_tank', 2048)
                .cable('ev')
                .block('iron')
                .machineCasing(12.0)
                .pipeCasing(12.0)
                .defaultRecipes()
        });
    
    event.createMaterial('Calorite', 'calorite', 0xb63044,
        builder => {
            builder
                .hardness('hard')
				.addParts('plate', 'hot_ingot', 'ingot', 'rod', 'gear', 'ring', 'blade', 'bolt', 'curved_plate', 'dust')
                .machineCasing(12.0)
                .pipeCasing(12.0)
                .ore({
                    'generate': false,
                    'ore_set': 'iron'
                })
                .block('iron')
                .rawMetal('copper', true).rawMetal('copper', false)
                .defaultRecipes()
        });
    
    event.createMaterial('Zinc', 'zinc', 0xb9e9c1,
        builder => {
            builder
                .hardness('soft')
				.addParts('rod', 'ring', 'gear', 'curved_plate', 'plate', 'bolt', 'drill_head', 'drill', 'tiny_dust', 'dust')
				.defaultRecipes()
				.addExternalPart('ingot', 'create:zinc_ingot')
        });
    
    event.createMaterial('Clay', 'clay', 0xa3acc7,
        builder => {
            builder
                .hardness('soft')
				.addParts('dust', 'tiny_dust')
                .addExternalPart('ingot', 'minecraft:clay_ball')
                .defaultRecipes();
            
        });
    
    event.createMaterial('Stone', 'stone', 0x767676,
        builder => {
            builder
                .hardness('hard')
				.addParts('dust', 'tiny_dust')
        });    

    event.createMaterial('Dark Ashes', 'dark_ashes', 0x292828,
        builder => {
            builder
                .hardness('hard')
				.addParts('dust', 'tiny_dust')
        });  

    event.createMaterial('Calcite', 'calcite', 0xefedf0,
        builder => {
            builder
                .hardness('average')
				.addParts('dust')
        });
    
    event.createMaterial('Tuff', 'tuff', 0x8a8774,
        builder => {
            builder
                .hardness('average')
				.addParts('dust')
        });

    event.createMaterial('Fluorite', 'fluorite', 0xe4ed9b,
        builder => {
            builder
                .hardness('average')
				.addParts('dust', 'tiny_dust')
                .ore({
                    'generate': true,
                    'ore_set': 'nether_gold',
                    'vein_size': 4,
                    'veins_per_chunk': 5,
                    'max_y': 90
                })
                .rawMetal('copper', true).rawMetal('iridium', false)
                .defaultRecipes()
        });
    
    event.createMaterial('Polytetrafluoroethylene (PTFE)', 'polytetrafluoroethylene', 0x364768,
        builder => {
            builder
                .hardness('soft')
				.addParts('ingot', 'nugget', 'dust', 'tiny_dust', 'plate', 'curved_plate', 'gear', 'ring', 'rod', 'bolt')
                .specialCasing('Chemically Inert PTFE Casing', 'chemically_inert_ptfe_casing', 8.0)
                .pipeCasing(8.0)
                .block('iron')
                .defaultRecipes();
	    });
    
    event.createMaterial('Acrylonitrile Butadiene Styrene (ABS)', 'acrylonitrile_butadiene_styrene', 0xfcefd6,
        builder => {
            builder
                .hardness('soft')
				.addParts('ingot', 'dust', 'plate', 'curved_plate')
                .block('iron')
                .defaultRecipes();
	    });

    event.createMaterial('Enderium', 'enderium', 0x105e51,
        builder => {
            builder
                .hardness('hard')
                .addParts('ingot', 'nugget', 'hot_ingot', 'plate', 'gear', 'ring', 'rod', 'bolt')
                .block('iron')
                .machineCasing(12.0)
                .pipeCasing(12.0)
                .defaultRecipes();
        });

    event.createMaterial('Moon Ice', 'moon_ice', 0x62bbf7,
        builder => {
            builder
                .hardness('hard')
                .addParts('dust', 'tiny_dust')
                .ore({
                    'generate': false,
                    'ore_set': 'nether_gold'
                })
                .rawMetal('copper', true).rawMetal('iridium', false)
                .defaultRecipes();
        });    

    event.createMaterial('Entro', 'entro', 0x3ed19b,
        builder => {
            builder
                .hardness('average')
                .materialSet('shiny')
                .addParts('plate')
                .addExternalPart('ingot', 'extendedae:entro_ingot')
                .defaultRecipes();
        });

    event.createMaterial('Sky Bronze', 'sky_bronze', 0xa47b48,
        builder => {
            builder
                .hardness('hard')
                .addParts('plate')
                .addExternalPart('ingot', 'megacells:sky_bronze_ingot')
                .addExternalPart('block', 'megacells:sky_bronze_block')
                .defaultRecipes();
        });

    event.createMaterial('Sky Steel', 'sky_steel', 0x262726,
        builder => {
            builder
                .hardness('hard')
                .addParts('plate')
                .addExternalPart('ingot', 'megacells:sky_steel_ingot')
                .addExternalPart('block', 'megacells:sky_steel_block')
                .defaultRecipes();
        });

    event.createMaterial('Sapphire', 'sapphire', 0x4873f2,
        builder => {
            builder
                .hardness('hard')
                .materialSet('shiny')
                .addParts('plate', 'dust', 'crushed_dust', 'gem')
                .ore({
                    'generate': true,
                    'ore_set': 'diamond',
                    'vein_size': 3,
                    'veins_per_chunk': 4,
                    'max_y': 24
                })
                .rawMetal('copper') 
                .defaultRecipes();
        });    

    event.createMaterial('Peridot', 'peridot', 0x59f261,
        builder => {
            builder
                .hardness('hard')
                .materialSet('shiny')
                .addParts('plate', 'dust', 'crushed_dust', 'gem')
                .ore({
                    'generate': true,
                    'ore_set': 'diamond',
                    'vein_size': 3,
                    'veins_per_chunk': 4,
                    'max_y': 24
                })
                .rawMetal('copper') 
                .defaultRecipes();
        }); 

    event.createMaterial('Ruby', 'corundum', 0xfc3232, // Name is corundum because modifyMaterial doesn't allow for adding ores
        builder => {
            builder
                .hardness('hard')
                .materialSet('shiny')
                .addParts('plate', 'crushed_dust', 'gem')
                .addExternalPart('dust', 'modern_industrialization:ruby_dust')
                .ore({
                    'generate': true,
                    'ore_set': 'diamond',
                    'vein_size': 3,
                    'veins_per_chunk': 4,
                    'max_y': 24
                })
                .rawMetal('copper')
                .defaultRecipes(); 
        });
        
    event.createMaterial('Boron Trioxide', 'boron_trioxide', 0x878376,
        builder => {
            builder
                .hardness('hard')
                .materialSet('shiny')
                .addParts('dust', 'tiny_dust')
                .defaultRecipes();
        });
        
    event.createMaterial('Kernite', 'kernite', 0xc2d7e8, // Ore for boron
        builder => {
            builder
                .hardness('hard')
                .addParts('dust', 'tiny_dust', 'crushed_dust')
                .ore({
                    'generate': false,
                    'ore_set': 'iron'
                })
                .rawMetal('iron', true).rawMetal('copper', false)
                .defaultRecipes();
        });

    event.createMaterial('Lithium Hydride', 'lithium_hydride', 0x00034a,
        builder => {
            builder
                .hardness('average')
                .materialSet('dull')
                .addParts('dust', 'tiny_dust')
                .defaultRecipes();
        });

    event.createMaterial('Lithium Tetrafluoroborate', 'lithium_tetrafluoroborate', 0x9cc777,
        builder => {
            builder
                .hardness('average')
                .materialSet('dull')
                .addParts('dust', 'tiny_dust')
                .defaultRecipes();
        });

    event.createMaterial('Lithium Fluoride', 'lithium_fluoride', 0xcccccc,
        builder => {
            builder
                .hardness('average')
                .materialSet('shiny')
                .addParts('dust', 'tiny_dust')
                .defaultRecipes();
        });
});

MIMaterialEvents.modifyMaterial('beryllium', event => {
    event.builder.addParts('hot_ingot')
});

MIMaterialEvents.modifyMaterial('gold', event => {
    event.builder.addParts('wire')
});

MIMaterialEvents.modifyMaterial('electrum', event => {
    event.builder.addParts('rod')
});
MIMaterialEvents.modifyMaterial('iron', event => {
    event.builder.addParts('wire')
});