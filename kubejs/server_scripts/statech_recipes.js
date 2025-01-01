// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // ------------------- //
    // -- STATECH COINS -- //
    // ------------------- //

    let common = kj('coin_common');
    let rare = kj('coin_rare');
    let legendary = kj('coin_legendary');
    let mythic = kj('coin_mythic');

    e.shapeless(rare, [ '9x ' + common ]).id(st('coin_rare_upgrade'));
    e.shapeless(legendary, [ '9x ' + rare ]).id(st('coin_legendary_upgrade'));
    e.shapeless(mythic, [ '9x ' + legendary ]).id(st('coin_mythic_upgrade'));
    e.shapeless('9x ' + legendary, [ mythic ]).id(st('coin_legendary_downgrade'));
    e.shapeless('9x ' + rare, [ legendary ]).id(st('coin_rare_downgrade'));
    e.shapeless('9x ' + common, [ rare ]).id(st('coin_common_downgrade'));
});