
ServerEvents.recipes(event => {
  const recipes = [
     {
         "output": "irons_spellbooks:lightning_upgrade_orb",
         "items": ['iceandfire:dragonsteel_lightning_ingot', 'iceandfire:dragonsteel_lightning_ingot', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:arcane_rune', 'irons_spellbooks:arcane_rune', 'irons_spellbooks:lightning_bottle', 'irons_spellbooks:lightning_bottle'],
         "sourceCost": 5000,
     },

    {
         "output": "irons_spellbooks:nature_upgrade_orb",
         "items": ['botania:rune_summer', 'irons_spellbooks:divine_pearl', 'botania:rune_spring', 'botania:rune_winter', 'botania:rune_autumn', 'irons_spellbooks:nature_rune', 'ars_elemental:earth_focus', 'irons_spellbooks:divine_pearl'],
         "sourceCost": 5000,
     },

    {
         "output": "irons_spellbooks:evocation_upgrade_orb",
         "items": ['minecraft:emerald_block', 'irons_spellbooks:evocation_rune', 'irons_spellbooks:divine_pearl', 'minecraft:totem_of_undying', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:evocation_rune', 'minecraft:emerald_block', 'minecraft:emerald_block'],
         "sourceCost": 5000,
     },

    {
         "output": "irons_spellbooks:blood_upgrade_orb",
         "items": ['irons_spellbooks:blood_rune', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:blood_vial', 'bloodmagic:apprenticebloodorb', 'bloodmagic:apprenticebloodorb', 'meds_and_herbs:bottled_blood', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:blood_rune'],
         "sourceCost": 5000,
     },

    {
         "output": "irons_spellbooks:ender_upgrade_orb",
         "items": ['iceandfire:dragonscales_black', 'irons_spellbooks:divine_pearl', 'minecraft:phantom_membrane', 'minecraft:end_crystal', 'tetra:dragon_sinew', 'minecraft:ender_eye', 'minecraft:ender_eye', 'iceandfire:dragonscales_black'],
         "sourceCost": 5000,
     },

    {
         "output": "irons_spellbooks:mana_upgrade_orb",
         "items": ['botania:manaweave_cloth', 'botania:rune_mana', 'irons_spellbooks:arcane_rune', 'botania:mana_powder', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:arcane_rune', 'botania:rune_mana', 'botania:rune_mana'],
         "sourceCost": 5000,
     },

    {
         "output": "irons_spellbooks:cooldown_upgrade_orb",
         "items": ['irons_spellbooks:cooldown_rune', 'eidolon:prestigious_palm', 'irons_spellbooks:divine_pearl', 'ars_elemental:mark_of_mastery', 'irons_spellbooks:cooldown_ring', 'botania:cosmetic_clock_eye', 'irons_spellbooks:cooldown_rune', 'irons_spellbooks:divine_pearl'],
         "sourceCost": 5000,
     },

    {
         "output": "irons_spellbooks:protection_upgrade_orb",
         "items": ['irons_spellbooks:protection_rune', Item.of('minecraft:iron_chestplate', '{Damage:0}'), Item.of('minecraft:iron_leggings', '{Damage:0}'), 'irons_spellbooks:divine_pearl', Item.of('minecraft:iron_boots', '{Damage:0}'), Item.of('minecraft:iron_helmet', '{Damage:0}'), 'irons_spellbooks:divine_pearl', 'irons_spellbooks:protection_rune'],
         "sourceCost": 5000,
     },

    {
         "output": "irons_spellbooks:fire_upgrade_orb",
         "items": ['irons_spellbooks:fire_rune', 'botania:rune_fire', 'iceandfire:dragonsteel_fire_ingot', 'irons_spellbooks:divine_pearl', 'botania:rune_fire', 'botania:rune_fire', 'botania:rune_fire', 'iceandfire:dragonsteel_fire_ingot'],
         "sourceCost": 5000,
     },

    {
         "output": "irons_spellbooks:ice_upgrade_orb",
         "items": ['iceandfire:dragonsteel_ice_ingot', 'botania:rune_water', 'irons_spellbooks:ice_rune', 'botania:rune_winter', 'irons_spellbooks:divine_pearl', 'botania:rune_water', 'botania:rune_winter', 'irons_spellbooks:ice_rune'],
         "sourceCost": 5000,
     },

    {
         "output": "irons_spellbooks:holy_upgrade_orb",
         "items": ['irons_spellbooks:holy_rune', 'eidolon:holy_symbol', 'minecraft:golden_carrot', 'irons_spellbooks:divine_pearl', 'minecraft:glistering_melon_slice', 'minecraft:golden_apple', 'irons_spellbooks:holy_rune', 'irons_spellbooks:divine_pearl'],
         "sourceCost": 5000,
     },

    

  ]

  recipes.forEach((recipe) => {
    var temp_items = [];
    recipe.items.forEach((item) => {
      temp_items.push({ "item": item });
    });
    var tempitem = {
      "type": "ars_nouveau:enchanting_apparatus",
      "reagent": {
        "item": "irons_spellbooks:upgrade_orb"
      },
      "pedestalItems": temp_items,
      "output": recipe.output,
      "sourceCost": recipe.sourceCost,
      "count": "1"
    }
    event.custom(tempitem);
  });
})
