// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', (event) => {
    let mobModel = (name) => {
        event
            .create(`${name}_model`)
            .rarity('Rare')
            .tag('kubejs:mob_models')
            .tooltip('§3Designates the output in the Mob Crusher');
    };

    let bossModel = (name) => {
        event
            .create(`${name}_model`)
            .rarity('Epic')
            .tag('kubejs:mob_models')
            .tag('kubejs:boss_models')
            .tooltip('§3Designates the output in the Boss Crusher');
    }

    mobModel('enderman');
    mobModel('zombie');
    mobModel('skeleton');
    mobModel('pig');
    mobModel('sheep');
    mobModel('cow');
    mobModel('chicken');
    mobModel('squid');
    mobModel('spider');
    mobModel('creeper');
    mobModel('slime');
    mobModel('ghast');
    mobModel('zombie_piglin');
    mobModel('magma_cube');
    mobModel('blaze');
    mobModel('wither_skeleton');
    mobModel('guardian');
    mobModel('witch');
    mobModel('rabbit');
    mobModel('phantom');

    bossModel('wither');
    bossModel('dragon');
    bossModel('warden');
});
