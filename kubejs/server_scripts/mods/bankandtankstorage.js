// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------
ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let stBank = (id) => `statech:bankstorage/${id}`;
    let stTank = (id) => `statech:tankstorage/${id}`;
    event.remove({ id: 'bankstorage:bank_1'})
    event.custom({
        'type': 'bankstorage:copy_components_or_assign_uuid',
        'pattern': [
            'NIN',
            'ICI',
            'NIN'
        ],
        'key': {
            'N': {
                'tag': ('c:storage_blocks/coal')
            },
            'I': {
                'tag': ('c:storage_blocks/lignite_coal'),
            },
            'C': {
                'tag': 'c:barrels/wooden'
            }
        },
        'result': {
            'id': 'bankstorage:bank_1',
            'count': 1
        }
    }).id(stBank('bank_1'));
    
    event.remove({ id: 'tankstorage:tank_1'})
    event.shaped(
        Item.of('tankstorage:tank_1', 1),
        [
            'NIN',
            'LCL',
            'NIN'
        ],
        {
            N: '#c:storage_blocks/coal',
            I: '#c:glass_blocks',
            C: 'minecraft:bucket',
            L: '#c:storage_blocks/lignite_coal'
        }
    );
    
    // Adapted from Monifactory scripts, see https://github.com/ThePansmith/Monifactory/blob/main/kubejs/server_scripts/mods/Sophisticated_Storagevent.js

    const bankMaterials = [
        ['_1', null, null],
        ['_2', 'bronze', 'copper'],
        ['_3', 'steel', 'iron'],
        ['_4', 'aluminum', 'diamond'],
        ['_5', 'stainless_steel', 'annealed_copper'],
        ['_6', 'calorite', 'platinum'],
        ['_7', 'tungstensteel', 'iridium']
    ]
    
    bankMaterials.forEach((material, index) => {
        if (index == 0) return;

        let outputBank = `bankstorage:bank${material[0]}`
        let inputBank = `bankstorage:bank${bankMaterials[index - 1][0]}`
        
        event.remove({ mod: 'bankstorage', output: outputBank })
        event.custom({
            'type': 'bankstorage:copy_components_or_assign_uuid',
            'pattern': [
                'NIN',
                'ICI',
                'NIN'
            ],
            'key': {
                'N': {
                    'tag': (`c:storage_blocks/${material[1]}`)
                },
                'I': {
                    'tag': (`c:storage_blocks/${material[2]}`),
                },
                'C': {
                    'item': inputBank
                }
            },
            'result': {
                'count': 1,
                'id': outputBank
            }
        }).id(stBank(`${material[0]}upgrade`));
        
        let outputTank = `tankstorage:tank${material[0]}`
        let inputTank = `tankstorage:tank${bankMaterials[index - 1][0]}`
        
        event.remove({ mod: 'tankstorage', output: outputTank })
        event.custom({
            'type': 'tankstorage:tank_upgrade',
            'pattern': [
                'NIN',
                'ICI',
                'NIN'
            ],
            'key': {
                'N': {
                    'tag': (`c:storage_blocks/${material[1]}`)
                },
                'I': {
                    'tag': (`c:storage_blocks/${material[2]}`),
                },
                'C': {
                    'item': inputTank
                }
            },
            'result': {
                'count': 1,
                'id': outputTank
            }
        }).id(stTank(`${material[0]}upgrade`));
    });

    event.remove({ id: 'bankstorage:bank_link'})
    event.custom({
            'type': 'bankstorage:bank_link',
            'pattern': [
                ' B ',
                'AGA',
                'ESE'
            ],
            'key': {
                'B': {'tag': 'bankstorage:banks'},
                'A': {'item': 'minecraft:amethyst_shard'},
                'G': {'item': 'minecraft:glass'},
                'E': {'item': 'minecraft:ender_eye'},
                'S': {'item': 'minecraft:glow_ink_sac'}
            },
            'result': {
                'id': 'bankstorage:bank_link',
                'count': 1
            }
        }).id(stBank('bank_link'));

    event.remove({ id: 'tankstorage:tank_link'})
    event.custom({
            'type': 'tankstorage:tank_link',
            'pattern': [
                ' T ',
                'AGA',
                'ESE'
            ],
            'key': {
                'T': {'tag': 'tankstorage:tanks'},
                'A': {'item': 'minecraft:amethyst_shard'},
                'G': {'item': 'minecraft:glass'},
                'E': {'item': 'minecraft:ender_eye'},
                'S': {'item': 'minecraft:glow_ink_sac'}
            },
            'result': {
                'id': 'tankstorage:tank_link',
                'count': 1
            }
        }).id(stTank('tank_link'));
})

