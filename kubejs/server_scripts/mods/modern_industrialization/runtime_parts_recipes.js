ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/auto_gen/${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //

    // CUTTING MACHINE, 1 mb LUBCRICANT
/*     let cuttingMachine = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('cutting_machine'),
            eu: eu,
            duration: duration,
            fluid_inputs: [
                { amount: 1, fluid: mi('lubricant') }
            ]
        }
        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    } */

    // COMPRESSOR
/*     let compressor = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('compressor'),
            eu: eu,
            duration: duration
        }
        if (item_inputs) 
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    } */

    // BENDING MACHINE
    let bending = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: ei('bending_machine'),
            duration: duration,
            eu: eu
        }
        if (item_inputs) 
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    }

    // VACUUM FREEZER // THIS SHOULD BE ADDED BACK, would make tiered VF recipes
/*     let vacuumFreezer = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('vacuum_freezer'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;
        
        e.custom(newRecipe).id(id);
    } */

    // WIREMILL
/*     let wiremill = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('wiremill'),
            eu: eu,
            duration: duration
        }
        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    } */

    // PACKER
/*     let packer = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('packer'),
            eu: eu,
            duration: duration
        }
        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    } */

    // ASSEMBLER
/*     let assembler = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('assembler'),
            eu: eu,
            duration: duration
        }
        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe).id(id);
    } */

    

    const MACHINE_FUNCTIONS = {};

    // -- MATERIAL TIERS -- //

    const MATERIAL_TIERS = [
        {
            tier: 'SOFT',
            materials: [
                'zinc', 
                'polytetrafluoroethylene'
            ]
        },
        {
            tier: 'HARD',
            materials: [
                'desh', 
                'ostrum'
            ]
        },
        {
            tier: 'VERY_HARD',
            materials: [
                'calorite',
                'enderium'
            ]
        },
        {
            tier: 'EXTREMELY_HARD',
            materials: [
                'tungstensteel'
            ]
        }
    ];

    const TIERS = [
        { name: 'SOFT', duration: 100 },
        { name: 'HARD', duration: 200 },
        { name: 'VERY_HARD', duration: 400 },
        { name: 'EXTREMELY_HARD', duration: 800 }
    ];

    // -- RECIPE FORMAT -- //

    TIERS.forEach(function(tier) {
        var name = tier.name;
        var duration = tier.duration;
        MACHINE_FUNCTIONS[name] = {
/*             cutting: function(output, input, result) { return cuttingMachine(output, 2, duration, input, result); },
            compressor: function(output, input, result) { return compressor(output, 2, duration, input, result); },
            wiremill: function(output, input, result) { return wiremill(output, 2, duration, input, result); },
            packer: function(output, input, result) { return packer(output, 2, duration, input, result); }, */
            bending: function(output, input, result) { return bending(output, 2, duration/2, input, result); },
/*             vacuumfreeze: function(output, input, result) { return vacuumFreezer(output, 32, duration*0.8, input, result); },
            assembler: function(output, itemInputs, itemOutputs, fluidInputs, fluidOutputs) {
                return assembler(output, 2, duration, itemInputs, itemOutputs, fluidInputs, fluidOutputs); 
            }*/
        };
    });

    const COMMON_PARTS = [
        {
            suffix: '_rod',
            machine: 'cutting',
            itemInputsPrefix: [{ amount: 1, tag: 'c:ingots/' }],
            fluidInputs: [],
            outputAmount: 2
        },
        {
            suffix: '_bolt',
            machine: 'cutting',
            itemInputsPrefix: [{ amount: 1, tag: 'c:rods/' }],
            fluidInputs: [],
            outputAmount: 2
        },
        {
            suffix: '_plate',
            machine: 'compressor',
            itemInputsPrefix: [{ amount: 1, tag: 'c:ingots/' }],
            fluidInputs: [],
            outputAmount: 1
        },
        {
            suffix: '_curved_plate',
            machine: 'compressor',
            itemInputsPrefix: [{ amount: 1, tag: 'c:plates/' }],
            fluidInputs: [],
            outputAmount: 1
        },
        {
            suffix: '_ring',
            machine: 'compressor',
            itemInputsPrefix: [{ amount: 1, tag: 'c:rods/' }],
            fluidInputs: [],
            outputAmount: 1
        },
        {
            suffix: '_wire',
            machine: 'wiremill',
            itemInputsPrefix: [{ amount: 1, tag: 'c:plates/' }],
            fluidInputs: [],
            outputAmount: 2
        },
        {
            suffix: '_blade',
            machine: 'packer',
            itemInputsPrefix: [
                { amount: 2, tag: 'c:curved_plates/' },
                { amount: 1, tag: 'c:rods/' }
            ],
            fluidInputs: [],
            outputAmount: 4
        },
        {
            suffix: '_large_plate',
            machine: 'packer',
            itemInputsPrefix: [{ amount: 4, tag: 'c:plates/' }],
            fluidInputs: [],
            outputAmount: 1
        },
        {
            suffix: '_ingot',
            machine: 'vacuumfreeze',
            itemInputsPrefix: [{ amount: 1, tag: 'c:hot_ingots/' }],
            fluidInputs: [],
            outputAmount: 1
        },
        {
            suffix: '_gear',
            machine: 'assembler',
            itemInputsPrefix: [
                { amount: 4, tag: 'c:plates/' },
                { amount: 1, tag: 'c:rings/' }
            ],
            fluidInputs: [
                { amount: 100, fluid: mi('soldering_alloy') }
            ],
            outputAmount: 1
        },
        {
            suffix: '_rotor',
            machine: 'assembler',
            itemInputsPrefix: [
                { amount: 4, tag: 'c:blades/' },
                { amount: 1, tag: 'c:rings/' }
            ],
            fluidInputs: [
                { amount: 100, fluid: mi('soldering_alloy') }
            ],
            outputAmount: 1
        },
        {
            suffix: '_drill_head',
            machine: 'assembler',
            itemInputsPrefix: [
                { amount: 1, tag: 'c:plates/' },
                { amount: 2, tag: 'c:curved_plates/' },
                { amount: 1, tag: 'c:rods/' },
                { amount: 2, tag: 'c:gears/' }
            ],
            fluidInputs: [
                { amount: 75, fluid: mi('soldering_alloy') }
            ],
            outputAmount: 1
        },
        {
            suffix: '_cable',
            machine: 'assembler',
            itemInputsPrefix: [{ amount: 3, tag: 'c:wires/' }],
            fluidInputsVariants: [
                [{ amount: 6, fluid: mi('styrene_butadiene_rubber') }],
                [{ amount: 30, fluid: mi('synthetic_rubber') }]
            ],
            outputAmount: 3
        }
    ];

    // -- RECIPE GENERATING LOOP -- //

    MATERIAL_TIERS.forEach(function(tierObj) {
        var machineMap = MACHINE_FUNCTIONS[tierObj.tier];

        tierObj.materials.forEach(function(material) {
            COMMON_PARTS.forEach(function(part) {
                var outputId = mi(material + part.suffix);

                if (Item.exists(outputId)) {
                    var machineFunction = machineMap[part.machine];
                    var itemInputs = (part.itemInputsPrefix || []).map(function(input) {
                        return { amount: input.amount, tag: input.tag + material };
                    });
                    var itemOutputs = [{ amount: part.outputAmount, item: outputId }];
                    var fluidOutputs = part.fluidOutputs || [];

                    // Assembler with fluid variants
/*                     if (Array.isArray(part.fluidInputsVariants)) {
                        part.fluidInputsVariants.forEach(function(fluidInputs, index) {
                            machineFunction(
                                st(part.machine + '/' + material + part.suffix + '_variant' + (index + 1)),
                                itemInputs,
                                itemOutputs,
                                fluidInputs,
                                fluidOutputs
                            );
                        });
                    
                    // General recipe generation
                    } else {
                        var fluidInputs = part.fluidInputs || [];

                        machineFunction(
                            st(part.machine + '/' + material + part.suffix),
                            itemInputs,
                            itemOutputs,
                            fluidInputs,
                            fluidOutputs
                        );
                    } */
                    // Bending machine addendum
                    if (part.machine === 'compressor' &&
                        (part.suffix === '_curved_plate' || part.suffix === '_ring')) {

                        var bendingFn = machineMap['bending'];
                        if (bendingFn) {
                            bendingFn(
                                st('bending/' + material + part.suffix),
                                itemInputs,
                                itemOutputs
                            );
                        }
                    }
                }
            });
        });
    });    
});