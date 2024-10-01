const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI')
const $Character = Java.loadClass('java.lang.Character')

// space for air, underscore (_) for any block. https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/multiblocks
const EXAMPLE_MULTIBLOCK = () => $PatchouliAPI.get().makeMultiblock(
    [
        [
            '     ',
            ' FFF ',
            ' F0F ',
            ' FFF ',
            '     ',
        ],
        [
            'SSSSS',
            'SWWWS',
            'SWWWS',
            'SWWWS',
            'SSSSS',
        ]
    ],
    // this is very cursed but it works
    new $Character('W'), Block.getBlock('minecraft:oak_planks'),
    new $Character('S'), Block.getBlock("minecraft:oak_stairs"),
    new $Character('F'), Block.getBlock("eidolon:brazier"),
    new $Character('0'), Block.getBlock("minecraft:cobblestone")
)

// allow server scripts to access
global.MULTIBLOCKS = {
    EXAMPLE: EXAMPLE_MULTIBLOCK
}

StartupEvents.init(event => {
    $PatchouliAPI.get().registerMultiblock(ResourceLocation('kubejs:example'), EXAMPLE_MULTIBLOCK())
    
})