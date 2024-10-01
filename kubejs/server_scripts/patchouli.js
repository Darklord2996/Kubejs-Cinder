BlockEvents.rightClicked('minecraft:cobblestone', event => {
    if(event.getItem() != 'minecraft:iron_ingot' || event.getLevel().isClientSide()) {
        return
    }

    let pos = event.getBlock().getPos()
    let level = event.getLevel()

    let player = event.getEntity()

    // returns first valid rotation (net.minecraft.world.level.block.Rotation) that is valid, or null if none are valid
    let rotation = global.MULTIBLOCKS.EXAMPLE().validate(level, pos)
    if(rotation === null) {
        return
    }

    console.info('clicked on multiblock!')
    event.getPlayer().swing()
    console.log(pos)
    let valid = true
    for(let i = -1; i < 2; i++) {
            for(let k = -1; k < 2; k++) {
                if (i == 0 && k == 0) continue
                // console.log(level.getBlock(pos.offset(i, 0, k)).getEntityData()) //nbt
                // console.log(level.getBlockState(pos.offset(i, 0, k))) //blockstate aka block
                let nbt = level.getBlock(pos.offset(i, 0, k)).getEntityData()
                console.log(nbt)
                console.log(nbt.stack.id)
                console.log(nbt.stack.Count)
                if (nbt.stack.id != 'minecraft:oak_planks') { valid = false }
                if (nbt.stack.Count != 1) { valid = false }
            }
    }
    console.log(valid)
    if (!valid) { return }
    for(let i = -1; i < 2; i++) {
        for(let k = -1; k < 2; k++) {
            if (i == 0 && k == 0) continue
            // let block = Block.getBlock("eidolon:brazier")
            // block = level.getBlock(pos.offset(i, 0, k))
            // // block.defaultBlockState()
            // block.entityData.merge({stack:{Count:1,id:"minecraft:air",tag:{}}})
            // console.log(block)
            // console.log(block.entityData)
            level.setBlock(pos.offset(i, 0, k), Block.getBlock("minecraft:air").defaultBlockState(), 3)
            level.setBlock(pos.offset(i, 0, k), Block.getBlock("eidolon:brazier").defaultBlockState(), 3)
        }
}
    level.setBlock(pos, Block.getBlock('minecraft:iron_block').defaultBlockState(), 3)
})