// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

// Custom geocluster sample block creation created with the aid of 
// EnigmaQuip in the KubeJS discord.
// https://discord.com/channels/303440391124942858/1131980718763933778/1131980718763933778
const $SampleBlock = Java.loadClass('dev.sterner.geocluster.common.blocks.SampleBlock');
const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties');
const $Geocluster = Java.loadClass('dev.sterner.geocluster.Geocluster');

let DeshSampleBlock;
let OstrumSampleBlock;
let CaloriteSampleBlock;
let IceSampleBlock;
let CheeseSampleBlock;
let PyriteSampleBlock;

StartupEvents.registry('block', e => {
    DeshSampleBlock = e.createCustom('desh_ore_sample', () => new $SampleBlock());
    OstrumSampleBlock = e.createCustom('ostrum_ore_sample', () => new $SampleBlock());
    CaloriteSampleBlock = e.createCustom('calorite_ore_sample', () => new $SampleBlock());
    IceSampleBlock = e.createCustom('ice_ore_sample', () => new $SampleBlock());
    CheeseSampleBlock = e.createCustom('cheese_ore_sample', () => new $SampleBlock());
    PyriteSampleBlock = e.createCustom('pyrite_ore_sample', () => new $SampleBlock());
});

StartupEvents.registry('item', e => {
    e.createCustom('desh_ore_sample', () => new $BlockItem(DeshSampleBlock.get(), new $IProperties().tab($Geocluster.GROUP)));
    e.createCustom('ostrum_ore_sample', () => new $BlockItem(OstrumSampleBlock.get(), new $IProperties().tab($Geocluster.GROUP)));
    e.createCustom('calorite_ore_sample', () => new $BlockItem(CaloriteSampleBlock.get(), new $IProperties().tab($Geocluster.GROUP)));
    e.createCustom('ice_ore_sample', () => new $BlockItem(IceSampleBlock.get(), new $IProperties().tab($Geocluster.GROUP)));
    e.createCustom('cheese_ore_sample', () => new $BlockItem(CheeseSampleBlock.get(), new $IProperties().tab($Geocluster.GROUP)));
    e.createCustom('pyrite_ore_sample', () => new $BlockItem(PyriteSampleBlock.get(), new $IProperties().tab($Geocluster.GROUP)));
});