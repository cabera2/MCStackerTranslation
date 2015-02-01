var ttLang='ko';

function mkLL(cssClass, label){
	return "<span class='"+cssClass+"'>"+label+":</span>";
}

function mkTT(tip){
	return " title=\"" +tip+"\"";
}

var specialTiles=new Array(["flowing_water","물"],
["water","정지된 물"],
["flowing_lava","용암"],
["lava","정지된 용암"],
["fire","불"]);

var items=new Array(["0","None"],
["stone","돌"],
["stone:1","화강암"],
["stone:2","부드러운 화강암"],
["stone:3","섬록암"],
["stone:4","부드러운 섬록암"],
["stone:5","안산암"],
["stone:6","부드러운 안산암"],
["grass","잔디 블록"],
["dirt","흙"],
["dirt:1","거친 흙"],
["dirt:2","회백토"],
["cobblestone","조약돌"],
["planks","참나무 목재"],
["planks:1","가문비나무 목재"],
["planks:2","자작나무 목재"],
["planks:3","정글 나무 목재"],
["planks:4","아카시아 나무 목재"],
["planks:5","짙은 참나무 목재"],
["sapling","참나무 묘목"],
["sapling:1","가문비나무 묘목"],
["sapling:2","자작나무 묘목"],
["sapling:3","정글 나무 묘목"],
["sapling:4","아카시아 나무 묘목"],
["sapling:5","짙은 참나무 묘목"],
["bedrock","기반암"],
["sand","모래"],
["sand:1","붉은 모래"],
["gravel","자갈"],
["gold_ore","금광석"],
["iron_ore","철광석"],
["coal_ore","석탄 광석"],
["log","참나무"],
["log:1","가문비나무"],
["log:2","자작나무"],
["log:3","정글 나무"],
["log:4","참나무 4"],
["log:5","참나무 5"],
["leaves","참나무 잎"],
["leaves:1","가문비나무 잎"],
["leaves:2","자작나무 잎"],
["leaves:3","정글 나무 잎"],
["leaves2","아카시아 잎"],
["leaves2:1","짙은 참나무 잎"],
["sponge","스펀지"],
["sponge:1","젖은 스펀지"],
["glass","유리"],
["stained_glass","하얀색 염색된 유리"],
["stained_glass:1","주황색 염색된 유리"],
["stained_glass:2","자홍색 염색된 유리"],
["stained_glass:3","하늘색 염색된 유리"],
["stained_glass:4","노란색 염색된 유리"],
["stained_glass:5","연두색 염색된 유리"],
["stained_glass:6","분홍색 염색된 유리"],
["stained_glass:7","회색 염색된 유리"],
["stained_glass:8","밝은 회색 염색된 유리"],
["stained_glass:9","청록색 염색된 유리"],
["stained_glass:10","보라색 염색된 유리"],
["stained_glass:11","파란색 염색된 유리"],
["stained_glass:12","갈색 염색된 유리"],
["stained_glass:13","초록색 염색된 유리"],
["stained_glass:14","빨간색 염색된 유리"],
["stained_glass:15","검정색 염색된 유리"],
["stained_glass_pane","하얀색 염색된 유리판"],
["stained_glass_pane:1","주황색 염색된 유리판"],
["stained_glass_pane:2","자홍색 염색된 유리판"],
["stained_glass_pane:3","하늘색 염색된 유리판"],
["stained_glass_pane:4","노란색 염색된 유리판"],
["stained_glass_pane:5","연두색 염색된 유리판"],
["stained_glass_pane:6","분홍색 염색된 유리판"],
["stained_glass_pane:7","회색 염색된 유리판"],
["stained_glass_pane:8","밝은 회색 염색된 유리판"],
["stained_glass_pane:9","청록색 염색된 유리판"],
["stained_glass_pane:10","보라색 염색된 유리판"],
["stained_glass_pane:11","파란색 염색된 유리판"],
["stained_glass_pane:12","갈색 염색된 유리판"],
["stained_glass_pane:13","초록색 염색된 유리판"],
["stained_glass_pane:14","빨간색 염색된 유리판"],
["stained_glass_pane:15","검정색 염색된 유리판"],
["lapis_ore","청금석 원석"],
["lapis_block","청금석 블록"],
["dispenser","발사기"],
["sandstone","사암"],
["sandstone:1","조각된 사암"],
["sandstone:2","부드러운 사암"],
["noteblock","노트 블록"],
["golden_rail","파워 레일"],
["detector_rail","디텍터 레일"],
["sticky_piston","끈끈이 피스톤"],
["web","거미줄"],
["tallgrass","키가 큰 풀 (마른 덤불)"],
["tallgrass:1","잔디"],
["tallgrass:2","고사리"],
["deadbush","마른 덤불"],
["piston","피스톤"],
["wool","양털"],
["wool:1","주황색 양털"],
["wool:2","자홍색 양털"],
["wool:3","하늘색 양털"],
["wool:4","노란색 양털"],
["wool:5","연두색 양털"],
["wool:6","분홍색 양털"],
["wool:7","회색 양털"],
["wool:8","밝은 회색 양털"],
["wool:9","청록색 양털"],
["wool:10","보라색 양털"],
["wool:11","파란색 양털"],
["wool:12","갈색 양털"],
["wool:13","초록색 양털"],
["wool:14","빨간색 양털"],
["wool:15","검정색 양털"],

["carpet","양탄자"],
["carpet:1","주황색 양탄자"],
["carpet:2","자홍색 양탄자"],
["carpet:3","하늘색 양탄자"],
["carpet:4","노란색 양탄자"],
["carpet:5","연두색 양탄자"],
["carpet:6","분홍색 양탄자"],
["carpet:7","회색 양탄자"],
["carpet:8","밝은 회색 양탄자"],
["carpet:9","청록색 양탄자"],
["carpet:10","보라색 양탄자"],
["carpet:11","파란색 양탄자"],
["carpet:12","갈색 양탄자"],
["carpet:13","초록색 양탄자"],
["carpet:14","빨간색 양탄자"],
["carpet:15","검정색 양탄자"],


["yellow_flower","민들레"],
["red_flower","양귀비"],
["red_flower:1","파란 난초"],
["red_flower:2","파꽃"],
["red_flower:4","빨간색 튤립"],
["red_flower:5","주황색 튤립"],
["red_flower:6","하얀색 튤립"],
["red_flower:7","분황색 튤립"],
["red_flower:8","데이지"],
["brown_mushroom","갈색 버섯"],
["red_mushroom","빨간색 버섯"],
["gold_block","금 블록"],
["iron_block","철 블록"],
["double_stone_slab","더블 돌 반 블록"],
["double_stone_slab:1","더블 사암 반 블록"],
["double_stone_slab:2","더블 목재 반 블록"],
["double_stone_slab:3","더블 조약돌 반 블록"],
["double_stone_slab:4","더블 벽돌 반 블록"],
["double_stone_slab:5","더블 석재 벽돌 반 블록"],
["double_stone_slab:6","더블 네더 벽돌 반 블록"],
["double_stone_slab:7","더블 석영 반 블록"],
["double_stone_slab:8","더블 부드러운 돌 반 블록"],
["double_stone_slab:9","더블 부드러운 사암 반 블록"],
["stone_slab","돌 반 블록"],
["stone_slab:1","사암 반 블록"],
["stone_slab:2","목재 반 블록"],
["stone_slab:3","조약돌 반 블록b"],
["stone_slab:4","벽돌 반 블록"],
["stone_slab:5","석재 벽돌 반 블록"],
["stone_slab:6","네더 벽돌 반 블록"],
["stone_slab:7","석영 반 블록"],
["brick_block","Brick"],
["tnt","TNT"],
["bookshelf","Bookshelf"],
["mossy_cobblestone","Mossy Cobblestone"],
["obsidian","Obsidian"],
["torch","Torch"],

["mob_spawner","Monster Spawner"],
["oak_stairs","Oak Wood Stairs"],
["chest","Chest"],
["diamond_ore","Diamond Ore"],
["diamond_block","Diamond Block"],
["crafting_table","Workbench"],
["farmland","Soil"],
["furnace","Furnace"],
["lit_furnace","Burning Furnace"],
["ladder","Ladder"],
["rail","Rails"],
["stone_stairs","Cobblestone Stairs"],
["lever","Lever"],
["stone_pressure_plate","Stone Pressure Plate"],
["wooden_pressure_plate","Wooden Pressure Plate"],
["redstone_ore","Redstone Ore"],
["redstone_torch","Redstone Torch (on)"],
["stone_button","Stone Button"],
["snow_layer","Snow"],
["ice","Ice"],
["snow","Snow Block"],
["cactus","Cactus"],
["clay","Clay"],
["jukebox","Jukebox"],
["fence","0ak Fence"],
["spruce_fence","Spruce Fence"],
["birch_fence","Birch Fence"],
["jungle_fence","Jungle Fence"],
["dark_oak_fence","Dark Oak Fence"],
["acacia_fence","Acacia Fence"],
["pumpkin","Pumpkin"],
["netherrack","Netherrack"],
["soul_sand","Soul Sand"],
["glowstone","Glowstone"],
["portal","Portal"],
["lit_pumpkin","Jack-O-Lantern"],
["trapdoor","Trapdoor"],
["monster_egg","Stone (Silverfish)"],
["monster_egg:1","Cobblestone (Silverfish)"],
["monster_egg:2","Stone Brick (Silverfish)"],
["monster_egg:3","Mossey Stone Brick (Silverfish)"],
["monster_egg:4","Cracked Stone (Silverfish)"],
["monster_egg:5","Chiseled Stone (Silverfish)"],
["stonebrick","Stone Brick"],
["stonebrick:1","Mossy Stone Brick"],
["stonebrick:2","Cracked Stone Brick"],
["stonebrick:3","Chiseled Stone Brick"],
["brown_mushroom_block","Brown Mushroom Cap"],
["red_mushroom_block","Red Mushroom Cap"],
["iron_bars","Iron Bars"],
["glass_pane","Glass Pane"],
["melon_block","Melon Block"],
["vine","Vines"],
["fence_gate","Oak Fence Gate"],
["spruce_fence_gate","Spruce Fence Gate"],
["birch_fence_gate","Birch Fence Gate"],
["jungle_fence_gate","Jungle Fence Gate"],
["dark_oak_fence_gate","Dark Oak Fence Gate"],
["acacia_fence_gate","Acacia Fence Gate"],
["brick_stairs","Brick Stairs"],
["stone_brick_stairs","Stone Brick Stairs"],
["mycelium","Mycelium"],
["waterlily","Lily Pad"],
["nether_brick","Nether Brick"],
["nether_brick_fence","Nether Brick Fence"],
["nether_brick_stairs","Nether Brick Stairs"],
["enchanting_table","Enchantment Table"],
["end_portal","End Portal"],
["end_portal_frame","End Portal Frame"],
["end_stone","End Stone"],
["dragon_egg","Dragon Egg"],
["redstone_lamp","Redstone Lamp (inactive)"],
["double_wooden_slab","Double Oak Wood Slab"],
["double_wooden_slab:1","Double Spruce Wood Slab"],
["double_wooden_slab:2","Double Birch Wood Slab"],
["double_wooden_slab:3","Double Jungle Wood Slab"],
["double_wooden_slab:4","Double Acacia Wood Slab"],
["double_wooden_slab:5","Double Dark Oak Wood Slab"],
["wooden_slab","Oak Wood Slab"],
["wooden_slab:1","Spruce Wood Slab"],
["wooden_slab:2","Birch Wood Slab"],
["wooden_slab:3","Jungle Wood Slab"],
["wooden_slab:4","Acacia Wood Slab"],
["wooden_slab:5","Dark Oak Wood Slab"],
["cocoa","Cocoa Plant"],
["sandstone_stairs","Sandstone Stairs"],
["emerald_ore","Emerald Ore"],
["ender_chest","Ender Chest"],
["tripwire_hook","Tripwire Hook"],
["emerald_block","Emerald Block"],
["spruce_stairs","Spruce Wood Stairs"],
["birch_stairs","Birch Wood Stairs"],
["jungle_stairs","Jungle Wood Stairs"],
["command_block","Command Block"],
["beacon","Beacon Block"],
["cobblestone_wall","Cobblestone Wall"],
["cobblestone_wall:1","Mossy Cobblestone Wall"],
["wooden_button","Wooden Button"],
["anvil","Anvil"],
["anvil:1","Anvil (Slightly Damaged)"],
["anvil:2","Anvil (Very Damaged)"],
["trapped_chest","Trapped Chest"],
["light_weighted_pressure_plate","Weighted Pressure Plate (light)"],
["heavy_weighted_pressure_plate","Weighted Pressure Plate (heavy)"],
["daylight_detector","Daylight Sensor"],
["redstone_block","Redstone Block"],
["quartz_ore","Nether Quartz Ore"],
["hopper","Hopper"],
["quartz_block","Quartz Block"],
["quartz_block:1","Chiseled Quartz Block"],
["quartz_block:2","Pillar Quartz Block"],
["quartz_stairs","Quartz Stairs"],
["activator_rail","Activator Rail"],
["dropper","Dropper"],
["stained_hardened_clay","하얀색 염색된 점토"],
["stained_hardened_clay:1","주황색 염색된 점토"],
["stained_hardened_clay:2","자홍색 염색된 점토"],
["stained_hardened_clay:3","하늘색 염색된 점토"],
["stained_hardened_clay:4","노란색 염색된 점토"],
["stained_hardened_clay:5","연두색 염색된 점토"],
["stained_hardened_clay:6","분홍색 염색된 점토"],
["stained_hardened_clay:7","회색 염색된 점토"],
["stained_hardened_clay:8","밝은 회색 염색된 점토"],
["stained_hardened_clay:9","청록색 염색된 점토"],
["stained_hardened_clay:10","보라색 염색된 점토"],
["stained_hardened_clay:11","파란색 염색된 점토"],
["stained_hardened_clay:12","갈색 염색된 점토"],
["stained_hardened_clay:13","초록색 염색된 점토"],
["stained_hardened_clay:14","빨간색 염색된 점토"],
["stained_hardened_clay:15","검정색 염색된 점토"],
["log2","Wood (Acacia Oak)"],
["log2:1","Wood (Dark Oak)"],
["acacia_stairs","Wooden Stairs (Acacia)"],
["dark_oak_stairs","Wooden Stairs (Dark Oak)"],
["slime","Slime Block"],
["barrier","Barrier"],
["iron_trapdoor","Iron Trap Door"],
["prismarine","Prismarine"],
["prismarine:1","Prismarine Bricks"],
["prismarine:2","Dark Prismarine"],
[" sea_lantern","Sea Lantern"],
["hay_block","Hay Bale"],
["hardened_clay","Hardened Clay"],
["coal_block","Block of Coal"],
["packed_ice","Packed Ice"],
["double_plant","Sunflower"],
["double_plant:1","Lilac"],
["double_plant:2","Double Tall Grass"],
["double_plant:3","Large Fern"],
["double_plant:4","Rose Bush"],
["double_plant:5","Peony"],
["red_sandstone","Red Sandstone"],
["red_sandstone:1","Red Sandstone (Chiseled)"],
["red_sandstone:2","Red Sandstone (Smooth)"],
["red_sandstone_stairs","Red Sandstone Stairs"],
["double_stone_slab2","Red Sandstone Slab (Double)"],
["stone_slab2","Red Sandstone Slab"],
["iron_shovel","Iron Shovel"],
["iron_pickaxe","Iron Pickaxe"],
["iron_axe","Iron Axe"],
["flint_and_steel","Flint and Steel"],
["apple","Apple"],
["bow","Bow"],
["arrow","Arrow"],
["coal","Coal"],
["coal:1","Charcoal"],
["diamond","Diamond"],
["iron_ingot","Iron Ingot"],
["gold_ingot","Gold Ingot"],
["iron_sword","Iron Sword"],
["wooden_sword","Wooden Sword"],
["wooden_shovel","Wooden Shovel"],
["wooden_pickaxe","Wooden Pickaxe"],
["wooden_axe","Wooden Axe"],
["stone_sword","Stone Sword"],
["stone_shovel","Stone Shovel"],
["stone_pickaxe","Stone Pickaxe"],
["stone_axe","Stone Axe"],
["diamond_sword","Diamond Sword"],
["diamond_shovel","Diamond Shovel"],
["diamond_pickaxe","Diamond Pickaxe"],
["diamond_axe","Diamond Axe"],
["stick","Stick"],
["bowl","Bowl"],
["mushroom_stew","Mushroom Soup"],
["golden_sword","Gold Sword"],
["golden_shovel","Gold Shovel"],
["golden_pickaxe","Gold Pickaxe"],
["golden_axe","Gold Axe"],
["string","String"],
["feather","Feather"],
["gunpowder","Sulphur"],
["wooden_hoe","Wooden Hoe"],
["stone_hoe","Stone Hoe"],
["iron_hoe","Iron Hoe"],
["diamond_hoe","Diamond Hoe"],
["golden_hoe","Gold Hoe"],
["wheat_seeds","Wheat Seeds"],
["wheat","Wheat"],
["bread","Bread"],
["leather_helmet","Leather Helmet"],
["leather_chestplate","Leather Chestplate"],
["leather_leggings","Leather Leggings"],
["leather_boots","Leather Boots"],
["chainmail_helmet","Chainmail Helmet"],
["chainmail_chestplate","Chainmail Chestplate"],
["chainmail_leggings","Chainmail Leggings"],
["chainmail_boots","Chainmail Boots"],
["iron_helmet","Iron Helmet"],
["iron_chestplate","Iron Chestplate"],
["iron_leggings","Iron Leggings"],
["iron_boots","Iron Boots"],
["diamond_helmet","Diamond Helmet"],
["diamond_chestplate","Diamond Chestplate"],
["diamond_leggings","Diamond Leggings"],
["diamond_boots","Diamond Boots"],
["golden_helmet","Gold Helmet"],
["golden_chestplate","Gold Chestplate"],
["golden_leggings","Gold Leggings"],
["golden_boots","Gold Boots"],
["flint","Flint"],
["porkchop","Raw Porkchop"],
["cooked_porkchop","Cooked Porkchop"],
["painting","Painting"],
["golden_apple","Golden Apple"],
["golden_apple:1","Enchanted Golden Apple"],
["sign","Sign"],
["wooden_door","Wooden Door"],
["spruce_door","Spruce Door"],
["birch_door","Birch Door"],
["jungle_door","Jungle  Door"],
["acacia_door","Acacia Door"],
["dark_oak_door","Dark Oak Door"],
["bucket","Bucket"],
["water_bucket","Water Bucket"],
["lava_bucket","Lava Bucket"],
["minecart","Minecart"],
["saddle","Saddle"],
["iron_door","Iron Door"],
["redstone","Redstone"],
["snowball","Snowball"],
["boat","Boat"],
["leather","Leather"],
["milk_bucket","Milk Bucket"],
["brick","Clay Brick"],
["clay_ball","Clay Balls"],
["reeds","Sugarcane"],
["paper","Paper"],
["book","Book"],
["slime_ball","Slimeball"],
["chest_minecart","Storage Minecart"],
["furnace_minecart","Powered Minecart"],
["egg","Egg"],
["compass","Compass"],
["fishing_rod","Fishing Rod"],
["clock","Clock"],
["glowstone_dust","Glowstone Dust"],
["fish","Raw Fish"],
["fish:1","Raw Salmon"],
["fish:2","Raw Clownfish"],
["fish:3","Raw Pufferish"],
["cooked_fish","Cooked Fish"],
["cooked_fish:1","Cooked Salmon"],
["dye","Ink Sack"],
["dye:1","Rose Red"],
["dye:2","Cactus Green"],
["dye:3","Coco Beans"],
["dye:4","Lapis Lazuli"],
["dye:5","Purple Dye"],
["dye:6","Cyan Dye"],
["dye:7","Light Gray Dye"],
["dye:8","Gray Dye"],
["dye:9","Pink Dye"],
["dye:10","Lime Dye"],
["dye:11","Dandelion Yellow"],
["dye:12","Light Blue Dye"],
["dye:13","Magenta Dye"],
["dye:14","Orange Dye"],
["dye:15","Bone Meal"],
["bone","Bone"],
["sugar","Sugar"],
["cake","Cake"],
["bed","Bed"],
["repeater","Redstone Repeater"],
["cookie","Cookie"],
["filled_map","Map"],
["shears","Shears"],
["melon","Melon"],
["pumpkin_seeds","Pumpkin Seeds"],
["melon_seeds","Melon Seeds"],
["beef","Raw Beef"],
["cooked_beef","Steak"],
["chicken","Raw Chicken"],
["cooked_chicken","Cooked Chicken"],
["rotten_flesh","Rotten Flesh"],
["ender_pearl","Ender Pearl"],
["blaze_rod","Blaze Rod"],
["ghast_tear","Ghast Tear"],
["gold_nugget","Gold Nugget"],
["nether_wart","Nether Wart Seeds"],
["potion","Water Bottle"],
["potion:16","Awkward Potion"],
["potion:32","Thick Potion"],
["potion:64","Mundane Potion"],
["potion:8193","Regeneration Potion (0:45)"],
["potion:8194","Swiftness Potion (3:00)"],
["potion:8195","Fire Resistance Potion (3:00)"],
["potion:8196","Poison Potion (0:45)"],
["potion:8197","Healing Potion"],
["potion:8198","Night Vision Potion (3:00)"],
["potion:8200","Weakness Potion (1:30)"],
["potion:8201","Strength Potion (3:00)"],
["potion:8202","Slowness Potion (1:30)"],
["potion:8203","Leaping Potion (3:00)"],
["potion:8204","Harming Potion"],
["potion:8205","Water Breathing Potion (3:00)"],
["potion:8206","Invisibility Potion (3:00)"],
["potion:8225","Regeneration Potion II (0:22)"],
["potion:8226","Swiftness Potion II (1:30)"],
["potion:8228","Poison Potion II (0:22)"],
["potion:8229","Healing Potion II"],
["potion:8233","Strength Potion II (1:30)"],
["potion:8235","Leaping Potion II (1:30)"],
["potion:8236","Harming Potion II"],
["potion:8257","Regeneration Potion (2:00)"],
["potion:8258","Swiftness Potion (8:00)"],
["potion:8259","Fire Resistance Potion (8:00)"],
["potion:8260","Poison Potion (2:00)"],
["potion:8262","Night Vision Potion (8:00)"],
["potion:8264","Weakness Potion (4:00)"],
["potion:8265","Strength Potion (8:00)"],
["potion:8266","Slowness Potion (4:00)"],
["potion:8269","Water Breathing Potion (8:00)"],
["potion:8270","Invisibility Potion (8:00)"],
["potion:8289","Regeneration Potion II (1:00)"],
["potion:8290","Swiftness Potion II (4:00)"],
["potion:8292","Poison Potion II (1:00)"],
["potion:8297","Strength Potion II (4:00)"],
["potion:16385","Regeneration Splash (0:33)"],
["potion:16386","Swiftness Splash (2:15)"],
["potion:16387","Fire Resistance Splash (2:15)"],
["potion:16388","Poison Splash (0:33)"],
["potion:16389","Healing Splash"],
["potion:16390","Night Vision Splash (2:15)"],
["potion:16392","Weakness Splash (1:07)"],
["potion:16393","Strength Splash (2:15)"],
["potion:16394","Slowness Splash (1:07)"],
["potion:16396","Harming Splash"],
["potion:16397","Breathing Splash (2:15)"],
["potion:16398","Invisibility Splash (2:15)"],
["potion:16417","Regeneration Splash II (0:16)"],
["potion:16418","Swiftness Splash II (1:07)"],
["potion:16420","Poison Splash II (0:16)"],
["potion:16421","Healing Splash II"],
["potion:16425","Strength Splash II (1:07)"],
["potion:16428","Harming Splash II"],
["potion:16449","Regeneration Splash (1:30)"],
["potion:16450","Swiftness Splash (6:00)"],
["potion:16451","Fire Resistance Splash (6:00)"],
["potion:16452","Poison Splash (1:30)"],
["potion:16454","Night Vision Splash (6:00)"],
["potion:16456","Weakness Splash (3:00)"],
["potion:16457","Strength Splash (6:00)"],
["potion:16458","Slowness Splash (3:00)"],
["potion:16461","Breathing Splash (6:00)"],
["potion:16462","Invisibility Splash (6:00)"],
["potion:16481","Regeneration Splash II (0:45)"],
["potion:16482","Swiftness Splash II (3:00)"],
["potion:16484","Poison Splash II (0:45)"],
["potion:16489","Strength Splash II (3:00)"],
["potion:7","Clear Potion (Unused)"],
["potion:15","Thin Potion (Unused)"],
["potion:23","Bungling Potion (Unused)"],
["potion:31","Debonair Potion (Unused)"],
["potion:39","Charming Potion (Unused)"],
["potion:47","Sparkling Potion (Unused)"],
["potion:55","Rank Potion (Unused)"],
["potion:63","Stinky Potion (Unused)"],
["potion:16391","Clear Splash (Unused)"],
["potion:16399","Thin Splash (Unused)"],
["potion:16407","Bungling Splash (Unused)"],
["potion:16415","Debonair Splash (Unused)"],
["potion:16423","Charming Splash (Unused)"],
["potion:16431","Sparkling Splash (Unused)"],
["potion:16439","Rank Splash (Unused)"],
["potion:16447","Stinky Splash (Unused)"],
["glass_bottle","Glass Bottle"],
["spider_eye","Spider Eye"],
["fermented_spider_eye","Fermented Spider Eye"],
["blaze_powder","Blaze Powder"],
["magma_cream","Magma Cream"],
["brewing_stand","Brewing Stand"],
["cauldron","Cauldron"],
["ender_eye","Eye of Ender"],
["speckled_melon","Glistering Melon"],
["spawn_egg:50","Spawn Egg Creeper"],
["spawn_egg:51","Spawn Egg Skeleton"],
["spawn_egg:52","Spawn Egg Spider"],
["spawn_egg:54","Spawn Egg Zombie"],
["spawn_egg:55","Spawn Egg Slime"],
["spawn_egg:56","Spawn Egg Ghast"],
["spawn_egg:57","Spawn Egg Pigman"],
["spawn_egg:58","Spawn Egg Enderman"],
["spawn_egg:59","Spawn Egg Cave Spider"],
["spawn_egg:60","Spawn Egg Silverfish"],
["spawn_egg:61","Spawn Egg Blaze"],
["spawn_egg:62","Spawn Egg Magma Cube"],
["spawn_egg:65","Spawn Egg Bat"],
["spawn_egg:66","Spawn Egg Witch"],
["spawn_egg:67","Spawn Egg Endermite"],
["spawn_egg:68","Spawn Egg Guardian"],
["spawn_egg:90","Spawn Egg Pig"],
["spawn_egg:91","Spawn Egg Sheep"],
["spawn_egg:92","Spawn Egg Cow"],
["spawn_egg:93","Spawn Egg Chicken"],
["spawn_egg:94","Spawn Egg Squid"],
["spawn_egg:95","Spawn Egg Wolf"],
["spawn_egg:96","Spawn Egg Mooshroom"],
["spawn_egg:98","Spawn Egg Ocelot"],
["spawn_egg:100","Spawn Egg Horse"],
["spawn_egg:101","Spawn Egg Rabbit"],
["spawn_egg:120","Spawn Egg Villager"],
["experience_bottle","Bottle o' Enchanting"],
["fire_charge","Fire Charge"],
["writable_book","Book and Quill"],
["written_book","Written Book"],
["emerald","Emerald"],
["item_frame","Item Frame"],
["flower_pot","Flower Pot"],
["carrot","Carrots"],
["potato","Potato"],
["baked_potato","Baked Potato"],
["poisonous_potato","Poisonous Potato"],
["map","Map"],
["golden_carrot","Golden Carrot"],
["skull","Mob Head (Skeleton)"],
["skull:1","Mob Head (Wither Skeleton)"],
["skull:2","Mob Head (Zombie)"],
["skull:3","Mob Head (Human)"],
["skull:4","Mob Head (Creeper)"],
["carrot_on_a_stick","Carrot on a Stick"],
["nether_star","Nether Star"],
["pumpkin_pie","Pumpkin Pie"],
["fireworks","Firework Rocket"],
["firework_charge","Firework Star"],
["enchanted_book","Enchanted Book"],
["comparator","Redstone Comparator"],
["netherbrick","Nether Brick"],
["quartz","Nether Quartz"],
["tnt_minecart","Minecart with TNT"],
["hopper_minecart","Minecart with Hopper"],
["prismarine_shard","Prismarine Shard"],
["prismarine_crystals","Prismarine Crystals"],
["rabbit","Raw Rabbit"],
["cooked_rabbit","Cooked Rabbit"],
["rabbit_stew","Rabbit Stew"],
["rabbit_foot","Rabbit's Foot"],
["rabbit_hide","Rabbit Hide"],
["armor_stand","Armor Stand"],
["iron_horse_armor","Iron Horse Armor"],
["golden_horse_armor","Gold Horse Armor"],
["diamond_horse_armor","Diamond Horse Armor"],
["lead","Lead"],
["name_tag","Name Tag"],
["command_block_minecart","Command Block Minecart"],
["mutton","Raw Mutton"],
["cooked_mutton","Cooked Mutton"],
["banner","Banner"],
["record_13","13 Disc"],
["record_cat","Cat Disc"],
["record_blocks","Blocks Disc"],
["record_chirp","Chirp Disc"],
["record_far","Far Disc"],
["record_mall","Mall Disc"],
["record_mellohi","Mellohi Disc"],
["record_stal","Stal Disc"],
["record_strad","Strad Disc"],
["record_ward","Ward Disc"],
["record_11","11 Disc"],
["record_wait","Wait Disc"]);


var llCommandType="Command Type";
var ttCommandType="Choose which kind of command you wish to generate.";
var llResetForm="Reset Form";
var ttResetForm="These settings will be reset to the default.";
var llSaveAs="Save As New Command";
var ttSaveAs="These settings will be saved as a new command with no derivative relationship created.";
var llEnchantAll="Enchant Non-enchantables (Shows enchant options for all items)";
var ttEnchantAll="All item selections will allow enchantment options. You may need to reselect the item to show/hide the enchantment options.";
var llAddEntity="Add Entity";
var ttAddEntity="Add an entity to the bottom of the stack.";
var llSummonCoords="Summon Co-ordinates";
var llRelativeCoords="Relative Co-ordinates";
var ttRelativeCoords="Check if the entity is summoned at a location relative to the command block. Uncheck to summon the entity at a specific co-ordinate.";
var ttSummonX="The X position to summon the entity at.";
var ttSummonY="The Y position to summon the entity at.";
var ttSummonZ="The Z position to summon the entity at.";

var llSpawnCount="Spawn Count";
var ttSpawnCount="How many entities the spawner will spawn at one time.";
var llSpawnRange="Spawn Range";
var ttSpawnRange="The range of which the entities can spawn.";
var llRequiredPlayerRange="Required Player Range";
var ttRequiredPlayerRange="The range of which a player must be in for the spawner to start spawning entities.";
var llDelay="Delay";
var ttDelay="The number of ticks before entities spawn when a player is first detected.";
var llMinSpawnDelay="Min Spawn Delay";
var ttMinSpawnDelay="After the first spawn, this is the minimum amount of ticks before more entities can spawn.";
var llMaxSpawnDelay="Max Spawn Delay";
var ttMaxSpawnDelay="Similar to MinSpawnDelay. After the first spawn, this is the maximum amount of ticks before more entities can spawn.";
var llMaxNearbyEntities="Max Nearby Entities";
var ttMaxNearbyEntities="Checks the number of entities within the spawn range ('SpawnRange' tag). If the number of entities it detects is over the set MaxNearbyEntities number, it will not spawn more entities unless the amount of entities within the spawn range is decreased.";

var llPlayerName="Player Name";
var ttPlayerName="Enter a specific player's name.";
var llItemSelect="Item";
var ttItemSelect="Select the Item.";
var ttSearchFilter="Search/Filter";

var llEntity="Entity";
var ttEntity="Choose your Minecraft entity.";
var ttRemoveFromStack="Remove this entity from the stack. You need to keep at least one entity in the stack.";
var ttMoveUpStack="Move this entity up the stack.";
var ttMoveDownStack="Move this entity down the stack.";
var eeKeepOneEntity="You need to keep at least one entity";

var llCustomNameEntity="Name";
var ttCustomNameEntity="The custom name of this entity. Appears in player death messages and villager trading interfaces, as well as above the entity when your cursor is over it.";
var llUUIDLeast="UUIDLeast";
var ttUUIDLeast="The least significant bits of this entity's Universally Unique IDentifier. This is used for leashing mobs to this entity. Set both UUIDLeast and UUIDMost or none at all.";
var llUUIDMost="UUIDMost";
var ttUUIDMost="The most significant bits of this entity's Universally Unique IDentifier. This is used for leashing mobs to this entity. Set both UUIDLeast and UUIDMost or none at all.";

var llInvulnerable="Invulnerable";
var ttInvulnerable="Check if the entity should not take damage. This applies to living and nonliving entities alike: mobs will not take damage from any source (including potion effects), and cannot be moved by fishing rods, attacks, explosions, or projectiles, and objects such as vehicles and item frames cannot be destroyed unless their supports are removed. Note that these entities can be damaged by players in Creative mode.";

var llInLove="In Love";
var ttInLove="Ticks until the mob loses its breeding hearts and stops searching for a mate. Leave blank when not searching for a mate.";
var llAge="Age";
var ttAge="The age of the mob in ticks. Set to a negative number if it is a baby. Set to 0 or above if the mob is an adult. Values above 0 are the number of ticks before this mob can breed again.";
var llForcedlAge="Forced Age";
var ttForcedlAge="A value of age which will be assigned to this mob when it grows up. Incremented when a baby mob is fed.";
var llOwner="Owner";
var ttOwner="Name of the player that owns this mob. Empty string if no owner.";
var llOwnerUUID="Owner UUID";
var ttOwnerUUID="UUID of the player that owns this mob.";
var llSitting="Sitting";
var ttSitting="Check this if the mob is sitting.";

var llInGround="In Ground";
var ttInGround="If the Projectile is in the ground or hit the ground already. Flying arrows can't be picked up.";
var llPickup="Pickup";
var llPickup0="cannot be picked up";
var llPickup1="can be picked up by players in survival or creative";
var llPickup2="can only be picked up by players in creative";
var ttPickup="Options regarding if the arrow can be picked up.";
var llPlayerPickup="Player Pickup";
var ttPlayerPickup="If pickup is not used, and this is checked, the arrow can be picked up by players.";
var llArrowLife="Life";
var ttArrowLife="Increments each tick when an arrow is not moving; resets to 0 if it moves. When it ticks to 1200, the arrow despawns.";
var llArrowDamage="Damage";
var ttArrowDamage="Damage dealt by the arrow, in half-hearts.";
var llExplosionPower="Explosion Power";
var ttExplosionPower="The power and size of the explosion created by the fireball upon impact. Default value 1.";
var llOwnerName="Owner Name";
var ttOwnerName="The name of the player this projectile was thrown by.";
var llPotionAppearance="Potion";
var ttPotionAppearance="The appearance  of the potion that was thrown. Click the Status Effects check box to make a custom potion effect.";

var llArmorBody="Body";
var llArmorLeftArm="Left Arm";
var llArmorRightArm="Right Arm";
var llArmorLeftLeg="Left Leg";
var llArmorRightLeg="Right Leg";
var llArmorHead="Head";
var llPose="Pose";
var llArmorRotation="Rotation";

var llDisabledSlots="Disabled Slots";
/*var llArmorDisableHand="Hand";
var llArmorDisableBoot="Boot";
var llArmorDisableLeg="Leg";
var llArmorDisableChest="Chest";
var llArmorDisableHead="Head";*/
var disabledSlots=new Array("Hand","Boot","Leg","Chest","Head");

var llArmorOperationRemove="Remove";
var llArmorOperationReplace="Replace";
var llArmorOperationPlace="Place";
var llDisabledFor=" disabled for "; //forms a sentence like 'Replace disabled for Leg'
var llShowArms="Show Arms";
var ttShowArms="Shows wooden arms on the ArmorStand.";
var llSmall="Small";
var ttSmall="A small ArmorStand the size of a baby zombie.";
var llMarker="Marker";
var ttMarker="ArmorStand's size will be set to 0, making it invisible and have a tiny hitbox.";
var llInvisible="Invisible";
var ttInvisible="The armour stand is invisible, but the armor on it is not.";
var llNoBasePlate="No Base Place";
var ttNoBasePlate="ArmorStand will not display the base beneath it.";
var llNoGravity="No Gravity";
var ttNoGravity="If checked the ArmorStand will not fall if summoned up in the air.";
var llBaseRotation="Base Rotation";
var ttBaseRotation="The rotation angle of the entire ArmorStand.";
var llPersistence="Persistence Required";
var ttPersistence="Check to prevent the entity from despawning.";

var llHangUpsideDown="Hang Upside";
var ttHangUpsideDown="The bat is summoned upside down. This has no effect if the player is too close or the bat is not under a block.";
var llChickenJockey="Chicken Jockey";
var ttChickenJockey="Whether or not the chicken is a jockey for a baby zombie. Set if the chicken can naturally despawn. Other effects are unknown. Baby zombies can still control a ridden chicken even if this is not checked.";
var llPowered="Powered";
var ttPowered="Set if the creeper is charged from being struck by lightning. Creates a blue aura surrounding the creeper. Charged creepers have a bigger explosion radius, but this can be overridden buy the Explosion Radius setting.";
var llIgnited="Ignited";
var ttIgnited="Check if the creeper has been ignited by a Flint and Steel.";
var llExplosionRadius="Explosion Radius";
var ttExplosionRadius="The radius of the explosion. The default 3.";
var llFuse="Fuse";
var ttFuse="The number of ticks before the creeper will explode (does not affect creepers that fall and explode upon impacting their victim). The default is 30.";
var llCarried="Carried";
var ttCarried="Item the Enderman is carrying.";
var llLifeTime="Life Time";
var ttLifeTime="How long the Endermite has existed in ticks. Disappears when this reaches around 2400.";

var llBlock="Block";
var ttBlock="The Block that is falling.";
var llTileEntityData="Tile Entity Data";
var ttTileEntityData="Optional. The tags of the tile entity for this block.";
var llTime="Time";
var ttTime="The number of ticks the entity has existed. If set to 0, the moment it ticks to 1, it will vanish if the block at its location has a different ID than the entity's TileID. If the block at its location has the same ID as its TileID when Time ticks from 0 to 1, the block will instead be deleted, and the entity will continue to fall, having overwritten it.";
var llDropItem="Drop Item";
var ttDropItem="Check if the block should drop an item that can be picked up when it breaks.";
var llHurtEntities="Hurt Entities";
var ttHurtEntities="Check if the block should hurt entities it falls on.";
var llFallHurtMax="Fall Hurt Max";
var ttFallHurtMax="The maximum number of hit points of damage to inflict on entities that intersect this FallingSand. For vanilla FallingSand, always 40 (20 hearts).";
var llFallHurtAmount="Fall Hurt Amount";
var ttFallHurtAmount="Multiplied by the FallDistance to calculate the amount of damage to inflict. For vanilla FallingSand, always 2.";

var llFWLifeTime="Life Time";
var ttFWLifeTime="The number of ticks before this fireworks rocket explodes.";
var llElder="Elder";
var ttElder="Check if the Guardian is an Elder Guardian.";
var llExplosionPower="Explosion Power";
var ttExplosionPower="The radius of the explosion created by the fireballs this Ghast fires. 1 is the default.";

var llItemAge="Age";
var ttItemAge="The number of ticks the item has been 'untouched'. After 6000 ticks (5 minutes) the item is destroyed. If set to -32768, the Age will not decrease, thus the item will not automatically despawn.";
var llItemHealth="Health";
var ttItemHealth="The health of the item, which starts at 5. Items take damage from fire, lava, falling anvils, and explosions. The item is destroyed when its health reaches 0.";
var llItemPickupDelay="Pickup Delay";
var ttItemPickupDelay="The number of ticks the item cannot be picked up. Decreases by 1 per tick. If set to 32767, the PickupDelay will not decrease, thus the item can never be picked up.";
var llItemOwner="Owner";
var ttItemOwner="If not an empty string, only the named player will be able to pick up this item, until it is within 10 seconds of despawning. Used to prevent the wrong player from picking up the spawned item entity.";
var llItemThrower="Thrower";
var ttItemThrower="Set to the name of the player who dropped the item, if dropped by a player. Used by the 'Diamonds to you!' achievement.";

var llSlimeSize="Size";
var ttSlimeSize="The size of the slime/magmacube. Note that this value is zero-based, so 0 is the smallest slime, 1 is the next larger, etc. The sizes that spawn naturally are 0, 1, and 3.";
var llWasOnGround="Was On Ground";
var ttWasOnGround="Check if slime is touching the ground.";
var llCatType="Cat Type";
var ttCatType="The type of ocelot/cat this is.";
var llBaby="Baby";
var ttBaby="Check if this is a baby.";
var llAnger="Anger";
var ttAnger="Ticks until the Zombie Pigman becomes neutral. -32,768 to 0 for neutral Zombie Pigmen; 1 to 32,767 for angry Zombie Pigmen.";
var llSaddle="Saddle";
var ttSaddle="Check if the pig has a saddle.";
var llPrimedTNTFuse="Fuse";
var ttPrimedTNTFuse="Ticks until explosion. Default and maximum is 80 (4 seconds).";
var llRabbitType="Rabbit Type";
var ttRabbitType="Determines the skin of the rabbit. Also determines if rabbit should be hostile.";
var llMoreCarrotTicks="More Carrot Ticks";
var ttMoreCarrotTicks="Formerly used for the ticks until the rabbit will 'eat' planted carrots. Depletes every tick until it reaches 0. Was set to a certain value upon eating planted carrots. (UNTESTED)";
var llSaltAndPepper="Salt &amp; Pepper";
var llBlackAndWhite="Black &amp; White";
var llKillerRabbit="Killer Rabbit";
var llSheared="Sheared";
var ttSheared="Check if the sheep has been shorn.";
var llSheepColor="Color";
var ttSheepColor="The color of the sheep.";

var llSkeletonType="Skeleton Type";
var ttSkeletonType="The type of Skeleton.";

var llProfession="Profession";
var ttProfession="The texture used for this villager. This also influences trading options.";

var llCareer="Career";
var ttCareer="The ID of this villager's career. This also influences trading options and the villager's name in the GUI (if it does not have a CustomName). If 0, the next time offers are refreshed, the game will assign a new Career and reset CareerLevel to 1.";



var llCareerLevel="Career Level";
var ttCareerLevel="The current level of this villager's trading options. Influences the trading options generated by the villager; if it is greater than their career's maximum level, no new offers are generated. Increments when a trade causes offers to be refreshed. If 0, the next trade to do this will assign a new Career and set CareerLevel to 1. Set to a high enough level and there will be no new trades to release (Career must be set to 1 or above).";
var llWilling="Willing";
var ttWilling="Check if the villager is willing to mate. Becomes true after certain trades (those which would cause offers to be refreshed), and false after mating.";

var llFarmer="Farmer";
var llLibrarian="Librarian";
var llPriest="Priest";
var llBlacksmith="Blacksmith";
var llButcher="Butcher";
var llGeneric="Generic";
var llNotSet="Not Set";
var llFletcher="Fletcher";
var llFisherman="Fisherman";
var llShepherd="Shepherd";
var llCleric="Cleric";
var llToolSmith="Tool Smith";
var llArmorer="Armorer";
var llWeaponSmith="Weapon Smith";
var llLeatherworker="Leatherworker";
var llRecipes="Recipes";
var llMakeOffer="Make Offer";
var ttMakeOffer="Create a trade for this Villager.";

var llRewardXP="Reward XP";
var ttRewardXP="Check if this trade will provide XP orb drops.";
var llMaxUses="Max Uses";
var ttMaxUses="The maximum number of times this trade can be used before it is disabled. Increases by a random amount from 2 to 12 when offers are refreshed.";
var llUses="Uses";
var ttUses="The number of times this trade has been used. The trade becomes disabled when this is greater or equal to maxUses.";
var llBuyA="Buy A (cost)";
var llBuyB="Buy B (cost)";
var ttBuy="The Item the Player will give to the Villager";
var llBuyCount="Count";
var ttBuyCount="Number of items the player has to give to the Villager.";
var ttSecondaryTrade="The secondary trade item is optional.";
var llSell="Sell";
var ttSell="The Item the Villager will give to the player";
var llRemoveOffer="Remove Offer";
var ttRemoveOffer="Remove this a trade from the Villager.";
var llCustomDisplayTile="Custom Display Tile";
var ttCustomDisplayTile="Check to display the custom tile in this minecart.";
var llDisplayTile="Display Tile";
var ttDisplayTile="The custom display tile.";
var llDisplayOffset="Display Offset";
var ttDisplayOffset="The offset of the block displayed in the minecart. Positive values move the block upwards, while negative values move it downwards. A value of 16 will move the block up by exactly one multiple of its height.";

var llPushX="Push X";
var ttPushX="Force along X axis, used for smooth acceleration/deceleration.";
var llPushZ="Push Z";
var ttPushZ="Force along Z axis, used for smooth acceleration/deceleration.";
var llFuel="Fuel";
var ttFuel="The number of ticks until the minecart runs out of fuel.";
var llTransferCooldown="Transfer Cooldown";
var ttTransferCooldown="Time until the next transfer, between 1 and 8, or 0 if there is no transfer.";
var llMinecartTNTFuse="TNT Fuse";
var ttMinecartTNTFuse="Ticks until explosion or -1 if deactivated.";
var llCommand="Command";
var ttCommand="The command entered into the command block.";


var llMineCartSpawnerInstructions="<b>Instructions</b>" //Contains HTML tags
+"<ol><li>Open <a href='./' target='_blank'>MCStacker</a> in a new tab in your browser</li>"
+"<li>Choose Spawner for the Command Type</li>"
+"<li>Change the spawn settings to suit your needs</li>"
+"<li>Create the thing you want the MinecartSpawner to spawn</li>"
+"<li>Copy and paste the command from the other tab into the field below.</li></ol>";
var llSpawnDataTag="Spawn Data Tag";
var ttSpawnDataTag="Enter an MCStacker Spawner command unedited into this field.";

var llPlayerCreated="Player Created";
var ttPlayerCreated="Check if this golem was created by a player.";

var llInvulTime="Invulnerable Time";
var ttInvulTime="The number of ticks of invulnerability left after being initially created. 0 once invulnerability has expired.";
var llAngry="Angry";
var ttAngry="Check if the wolf is angry.";
var llCollarColor="Collar Color";
var ttCollarColor="The dye color of this wolf's collar. Present even for wild wolves (but does not render); default value is 14.";
var llXPValue="XP Value"; 
var ttXPValue="The amount of experience the orb gives when picked up.";
var llXPHealth="XP Health";
var ttXPHealth="The health of the orb, which starts at 5. Orbs take damage from fire, lava, falling anvils, and explosions. The orb is destroyed when its health reaches 0.";
var llIsVillager="Villager Zombie";
var ttIsVillager="Check if this zombie is an infected villager.";
var llConversionTime="Conversion Time";
var ttConversionTime="-1 when not being converted back to a villager, positive for the number of ticks until conversion back into a villager. The regeneration effect will parallel this.";
var llCanBreakDoors="Can Break Doors";
var ttCanBreakDoors="Check if the zombie can break doors.";
var llReinforcementChance="Reinforcement Chance";
var ttReinforcementChance="Chance that a zombie will spawn another zombie when attacked.";

var llXMotion="X Motion";
var llYMotion="Y Motion";
var llZMotion="Z Motion";
var ttMotion="X,Y,Z motion values must be formatted as decimals. Examples 0.0, -0.9, 1.0 -1.0. You should set all 3 values or none at all.";
var llCopyMotion="Copy XYZ to all other entities";
var ttCopyMotion="This button will copy these motion values into the motion values for the rest of the stack. This is required so that the entire stack moves in the same direction.";



var llCanPlaceOn="Can Place On";
var ttCanPlaceOn="For Adventure Mode. Select which blocks this item can be placed on. Note: block subtypes are not available.";
var ttCanPlaceAdd="Add a block this item can be placed on.";
var ttCanPlaceChoose="Choose which blocks this item can be placed on"; 

var llCanDestroy="Can Destroy";
var ttCanDestroy="For Adventure Mode. Select which blocks this item can destroy. Note: block subtypes are not available.";
var ttCanDestroyAdd="Add a block this item can destroy.";
var ttCanDestroyChoose="Choose which blocks this item can destroy.";


var llHideFlags="Hide Flags";
var ttHideFlags="Choose which attributes to hide for this item.";
var llEnchantments="Enchantments";
var llModifiers="Modifiers";
var llUnbreakable="Unbreakable";
var ttHideEnchants="Hide the Enchantments tooltip for this item.";
var ttHideModifiers="Hide the Attribute Modifiers tooltip for this item.";
var ttHideUnbreakable="Hide the Unbreakable tooltip for this item.";
var ttHideCanDestroy="Hide the 'Can Destroy' tooltip for this item.";
var ttHideCanPlaceOn="Hide the 'Can Place On' tooltip for this item.";
var ttRemoveBlock="Remove this Block.";

var llAttributeModifiers="Attribute Modifiers";
var ttAttributeModifiers="Display Attribute Modifier settings.";
var llAmount="Amount";
var ttAmount="The amount to apply for this attribute modifier"
var llOperation="Operation";
var ttOperation="A Modifier's Operation dictates how it modifies an Attribute's Base value. Three operations exist, '+- amount', '+- amount % (additive)', and '+- amount % (multiplicative)'. The mathematical behavior is as follows: Operation 0: Increment X by Amount, Operation 1: Increment Y by X * Amount, Operation 2: Y = Y * (1 + Amount) (equivalent to Increment Y by Y * Amount). The game first sets X = Base, then executes all Operation 0 modifiers, then sets Y = X, then executes all Operation 1 modifiers, and finally executes all Operation 2 modifiers."
var llOperation0="(0) +- amount";
var llOperation1="(1) +- amount % (additive)";
var llOperation2="(2) +- amount % (multiplicative)";

var ttAttributeModifiersArray = new Array("The maximum health of this mob/player (in half-hearts); determines the highest Health they may be healed to.",
"The range in blocks within which a mob with this attribute will target players or other mobs to track. Exiting this range will cause the mob to cease following the player/mob. Actual value used by most mobs is 16; for Zombies it is 40.",
"The chance to resist knockback from attacks, explosions, and projectiles. 1.0 is 100% chance for resistance.",
"Speed of movement in some unknown metric. The mob/player's maximum speed in blocks/second is a bit over 43 times this value, but can be affected by various conditions.","Damage dealt by attacks, in half-hearts.");


var llStatusEffects="Status Effects";
var ttStatusEffects="Make multiple potion/status effects.";
var llAmplifier="Amplifier";
var ttAmplifier="The potion effect level. 0 is level 1.";
var llDurationSecs="Duration (secs)";
var ttDurationSecs="The number of seconds before the effect wears off. MCStacker converts this to ticks.";
var llHideParticles="Hide particles";
var ttHideParticles="Make the particle effects for the potion/status effect invisible.";
//Numbers represent effect id (do not change the number)
var statusEffects=new Array(["1","Speed"],["2","Slowness"],["3","Haste"],["4","Mining Fatigue"],["5","Strength"],["6","Instant Health"],["7","Instant Damage"],["8","Jump Boost"],["9","Nausea"],["10","Regeneration"],["11","Resistance"],["12","Fire Resistance"],["13","Water Breathing"],["14","Invisibility"],["15","Blindness"],["16","Night Vision"],["17","Hunger"],["18","Weakness"],["19","Poison"],["20","Wither"],["21","Health Boost"],["22","Absorption"],["23","Saturation"]);



var llHolding="Holding";
var ttHolding="The item being held by the Mob or ArmorStand. Depending on the type of entity, this may not render, but may drop when mob is killed depending on the drop chance (does not apply to ArmorStands).";
var llHead="Head";
var ttHead="The item in the head slot of the Mob or ArmorStand. Depending on the type of entity and item, this may not render, but may drop when mob is killed depending on the drop chance (does not apply to ArmorStands).";
var llBody="Body";
var ttBody="The item in the body slot of the Mob or ArmorStand. Depending on the type of entity and item, this may not render, but may drop when mob is killed depending on the drop chance (does not apply to ArmorStands).";
var llLeg="Leg";
var ttLeg="The item in the leg slot of the Mob or ArmorStand. Depending on the type of entity and item, this may not render, but may drop when mob is killed depending on the drop chance (does not apply to ArmorStands).";
var llBoot="Boot";
var ttBoot="The item in the boot slot of the Mob or ArmorStand. Depending on the type of entity and item, this may not render, but may drop when mob is killed depending on the drop chance (does not apply to ArmorStands)."
var llSlot="Slot";

var llPersistenceRequired="Persistence Required";
var ttPersistenceRequired="Check if the mob must not despawn naturally.";
var llCanPickUpLoot="Can Pick Up Loot";
var ttCanPickUpLoot="Check if the mob can pick up loot (wear armor it picks up, use weapons it picks up).";
var llNoAI="No AI";
var ttNoAI="Check to disable the AI for the mob. The mob will not attempt to move and cannot move, to the extent of not falling when normally able.";
var llSilent="Silent";
var ttSilent="This entity will not make sound.";
var llRotation="Rotation";
var llYaw="Yaw";
var ttYaw="The entity's rotation clockwise around the Y axis (called yaw). Due west is 0. Does not exceed 360 degrees.";
var llPitch="Pitch";
var ttPitch="The entity's declination from the horizon (called pitch). Horizontal is 0. Positive values look downward. Does not exceed positive or negative 90 degrees.";
var llLeashToUUIDLeast="Leash To UUIDLeast";
var ttLeashToUUIDLeast="The least significant bits of the Universally Unique IDentifier of the entity this leash connects to.";
var llLeashToUUIDMost="Leash To UUIDMost";
var ttLeashToUUIDMost="The most significant bits of the Universally Unique IDentifier of the entity this leash connects to.";
var llHealF="HealF(health)";
var ttHealF="Amount of health the entity has. A value of 1 is half a heart.";
var llMaxHealth="Max Health";
var ttMaxHealth="";
var llFollowRange="Follow Range";
var ttFollowRange="";
var llKnockbackResistance="Knockback Resistance";
var ttKnockbackResistance="";
var llMovementSpeed="Movement Speed";
var ttMovementSpeed="";
var llAttackDamage="Attack Damage";
var ttAttackDamage="";
var llInvulnerable="Invulnerable";
var ttInvulnerable="Check if the entity should not take damage. This applies to living and non-living entities alike: mobs will not take damage from any source (including potion effects), and cannot be moved by fishing rods, attacks, explosions, or projectiles, and objects such as vehicles and item frames cannot be destroyed unless their supports are removed. Note that these entities can be damaged by players in Creative mode.";

var llHorseType="Horse Type";
var ttHorseType="The type of the horse.";
var llHorse="Horse";
var llDonkey="Donkey";
var llMule="Mule";
var llZombieHorse="Zombie";
var llSkeletonHorse="Skeleton";
var llBred="Bred";
var ttBred="Unknown. Remains 0 after breeding. Causes horse to become persistent.";
var llEatingHaystack="Eating Haystack";
var ttEatingHaystack="Check if the horse is grazing";
var llTame="Tame";
var ttTame="Check if the horse is tamed. Mobs will not be able to ride a tamed horse if it has no saddle.";
var llJumpStrength="Jump Strength";
var ttJumpStrength="Horse jump strength. Default is 0.7 Maximum is 2.";
var llTemper="Temper";
var ttTemper="Ranges from 0 to 100; increases with feeding. Higher values make a horse easier to tame.";
var llHasSaddle="Has Saddle";
var ttHasSaddle="Check if the horse has a saddle.";
var llNone="None";
var llArmorItem="Armor Item";
var ttArmorItem="The armor item worn by this horse.";
var llIron="Iron";
var llGold="Gold";
var llDiamond="Diamond";
var llHasChests="Has Chests";
var ttHasChests="Check if the Donkey/Mule has chests.";
var llVariant="Variant";
var ttVariant="The variant of the horse. Determines colors and patterns.";
var llHorseColors=new Array("White","Creamy","Chestnut","Brown","Black","Gray","Dark Brown");
var llHorseMarkings=new Array("None","White","White Field","White Dots","Black Dots");
var llInvisibleHorse="Invisible Horse";




var llSkullOwner="Skull Owner";
var llPlayerSkull="Player Skull";
var ttChooseHead="Choose a Player Skull or one of the preselected heads.";
var ttSkullOwnerName="Enter a Minecraft player's name.";


var llLevel="Level";
var ttLevel="The Enchantment Level. Maximum is 127."
var llUnbreakable="Unbreakable";
var llItemOptions="Equipment Enchantments and other options";
var llDamage="Damage";
var ttDamage="Set the amount of Damage this item has taken.";
var llEnableColors="Enable Custom Colors";
var llColor="Color";
var llBannerTag="Banner Data Tag";
var ttBannerTag="Enter a valid Banner Data Tag";
var llBannerInstruction="Head over to <a href='http://www.needcoolshoes.com/banner' target='_blank'>http://www.needcoolshoes.com/banner</a> to generate the banner code. Copy and paste the entire unedited /give command from that website into the box above.";
var llFlightDuration="Flight Duration";
var ttFlightDuration="Rough distance (in blocks) that the rocket travels depending on the flight duration: 1 = 12-21 blocks, 2 = 23-38 blocks, 3 = 40-57 blocks, with a few misfiring at 35 and 36 blocks.";
var llAddExplosion="Add Explosion";
var ttAddExplosion="Add an explosion to the firework.";
var llSmallBall="Small Ball";
var llLargeBall="Large Ball";
var llStar="Star";
var llCreeper="Creeper";
var llBurst="Burst";
var ttExplosionType="The explosion type.";
var llFlicker="Flicker";
var ttFlicker="Check if this explosion will have the twinkle effect.";
var llTrail="Trail";
var ttTrail="Check if this explosion will have the trail effect.";
var llRemoveExplosion="Remove";
var ttRemoveExplosion="Remove this explosion from the firework.";
var ttAddColor="Add a color to the explosion.";
var ttRemoveColor="Remove a color from the explosion.";
var llFadeColor="Fade";
var ttAddFadeColor="Add a fade color to the explosion.";
var ttRemoveFadeColor="Remove a fade color from the explosion."; 
var eeFireWorkColorError="You need at least one color";
var ttHexColor="Choose a hexadecimal color code. Hexadecimal codes are converted into a valid Minecraft color code";




var llBlockCoords = "Block Co-ordinates";
var llEndBlockCoords = "Opposite Corner Block Co-ordinates";
var ttRelativeBlock = "Check if the block is at a location relative to the command block. Uncheck if the block is at a specific co-ordinate."
var ttBlockX = "The X position of the block";
var ttBlockY = "The Y position of the block";
var ttBlockZ = "The Z position of the block";
var ttBlockEX = "The opposite corner X position to fill to";
var ttBlockEY = "The opposite corner Y position to fill to";
var ttBlockEZ = "The opposite corner Z position to fill to";
var llBlockHandling = "Old Block Handling";
var ttSetBlockhandling="destroy - The old block drops both itself and its contents (as if destroyed by a player). Plays the appropriate block breaking noise.\n\nkeep - Only air blocks will be changed (non-air blocks will be 'kept').\n\nreplace - The old block drops neither itself nor any contents. Plays no sound.";
var ttFillBlockhandling="destroy - Replaces all blocks (including air) in the fill region with the specified block, dropping the replaced blocks and block contents as entities as if they had been mined.\n\nhollow - Replaces only blocks on the outer edge of the fill region with the specified block. Inner blocks are changed to air, dropping their contents as entities but not themselves.\n\nkeep - Replaces only air blocks in the fill region with the specified block.\n\noutline - Replaces only blocks on the outer edge of the fill region with the specified block. Inner blocks are not affected.\n\nreplace - Replaces all blocks (including air) in the fill region with the specified block, without dropping blocks or block contents as entities. Optionally, instead of specifying a data tag for the replacing block, block id and data values may be specified to limit which blocks are replaced.";


var llBlock="Block";
var ttTileSelect="Tile/Block Select";
var llReplaceBlock="Replace Block";
var llDataValue="Data Value";
var ttDataValue="Data Value for this block";
var ttBlockDataDV="Data Values do not affect the blockdata command but may affect the Data Tag options available to you.";
var llCustomName="Custom Name";
var ttCustomName="Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual '@' when using commands such as 'say' and 'tell'.";
var llLock="Lock";
var ttLock="Optional. When not blank, prevents the container from being opened unless the opener is holding an item whose name matches this string.";
var llTextLine="Text Line";
var ttTextLine="Text to be displayed";

var llSuccessCountName = "SuccessCountName";
var ttSuccessCountName = "Player name to store success of the last command. Can be a player selector but may only have one resulting target.";
var llSuccessCountObjective = "SuccessCountObjective";
var ttSuccessCountObjective = "Objective's name to store the success of the last command.";
var llAffectedBlocksName = "AffectedBlocksName";
var ttAffectedBlocksName = "Player name to store how many blocks were modified in the last command. Can be a player selector but may only have one resulting target.";
var llAffectedBlocksObjective = "AffectedBlocksObjective";
var ttAffectedBlocksObjective = "Objective's name to store how many blocks were modified in the last command.";
var llAffectedEntitiesName = "AffectedEntitiesName";
var ttAffectedEntitiesName = "Player name to store how many entities were altered in the last command. Can be a player selector but may only have one resulting target.";
var llAffectedEntitiesObjective = "AffectedEntitiesObjective";
var ttAffectedEntitiesObjective = "Objective's name to store how many entities were altered in the last command.";
var llAffectedItemsName = "AffectedItemsName";
var ttAffectedItemsName = "Player name to store how many items were altered in the last command. Can be a player selector but may only have one resulting target.";
var llAffectedItemsObjective = "AffectedItemsObjective";
var ttAffectedItemsObjective = "Objective's name to store how many items were altered in the last command.";
var llQueryResultName = "QueryResultName";
var ttQueryResultName = "Player name to store the query result of the last command. Can be a player selector but may only have one resulting target.";
var llQueryResultObjective = "QueryResultObjective";
var ttQueryResultObjective = "Objective's name to store the query result of the last command.";
var llBeaconLevels="Levels";
var ttBeaconLevels="The number of levels available from the pyramid.";
var llPrimaryEffect="Primary Effect";
var ttBeaconEffect="The status effect selected";
var llSecondaryEffect="Secondary Effect";
var llOutputSignal="OutputSignal";
var ttOutputSignal="Represents the strength of the analog signal output by this redstone comparator. Likely used because the block itself uses its four bits of metadata to determine its rotation, powered state, and subtraction mode state, and comparators can hold a specific amount of power even in circuits without redstone wire.";

var llSuccessCount="SuccessCount";
var ttSuccessCount="Represents the strength of the analog signal output by redstone comparators attached to this command block. Only updated when the command block is activated with a redstone signal.";
var llLastOutput="LastOutput";
var ttLastOutput="The last line of output generated by the command block. Still stored even if the gamerule commandBlockOutput is false. Appears in the GUI of the block when right-clicked, and includes a timestamp of when the output was produced.";
var llTrackOutput="TrackOutput"; 
var ttTrackOutput="Determines whether or not the LastOutput will be stored.";
var llBurnTime="BurnTime";
var ttBurnTime="Number of ticks left before the current fuel runs out.";
var llCookTime="CookTime"; 
var ttCookTime="Number of ticks the item has been smelting for. The item finishes smelting when this value reaches 200 (10 seconds). Is reset to 0 if BurnTime reaches 0.";
var llCookTimeTotal="CookTimeTotal";
var ttCookTimeTotal="Number of ticks It takes for the item to be smelted.";
var llFlowerPot="Flower Pot Item";
var ttFlowerPot="Block and item IDs other than plants may be used, but not all will render. This determines the item dropped by the pot when destroyed.";
var llJukebox="Jukebox Item";
var ttJukebox="Items other than records may be used. This determines the item dropped by the jukebox when destroyed.";


var llAddSpawnPotential="Add Spawn Potential";
var llWeight="Weight";
var ttWeight="The chance that this spawn will be picked as compared to other spawn weights. Must be non-negative and at least 1";
var llSpawnData="Summon Command";
var ttSpawnData="Copy and paste a summon command from MCStacker into this field. The summon command will be converted into a SpawnPotential data tag.";
var llRemoveSpawnPotential="Remove";
var ttRemoveSpawnPotential="Remove this Spawn Potential";
var llNote="Note"; 
var ttNote="Pitch (number of right-clicks).";
var llSkullType="Skull Type";
var ttSkullType="The type of Skull or Head";
var ttHeadGenerator="In the Player Name field you can type in a player's name or paste in a command generated from Dragnoz's <a href='http://www.dragnoz.com/custom-head-block-generator/' target='_blank'>Custom Head Block Generator</a>. MCStacker will extract what it needs from it.";
var llRotation="Rotation";
var ttRotation="The orientation. Only needed for skulls placed on the ground.";
var llItem="Item";
var llSlotNo="Slot Number";
var ttSlotNo="Select the slot number for the targeted container block. Do not choose a slot number that exceeds the limit of the container.";
var llCount="Count";
var ttCount="The number of items in this slot of the container. Do not exceed the maximum stack count. The maximum for most items is 64."
var llName="Name";
var ttName="Name the item.";
var llLore="Lore";
var ttLore="Give the item 'Lore'. Lines are separated with commas.";
var llDropChance="Drop Chance";
var ttDropChance="The chance of the mob dropping this item when killed.";
var llDropChanceDefault="Default";
var ttDropChanceUndamaged="Undamaged";
var ttDropChanceCount="Equipped Mobs: The amount of items this mob will drop if it drops. Item Summon: The amount to summon. Villager Trade: Number of items the Villager will sell/buy. Give Command: The amount to give";

var ttAnyCommand="Use this to share commands that do something interesting.";

var llBlack="Black";
var llRed="Red";
var llGreen="Green";
var llBrown="Brown";
var llDarkBlue="Dark Blue";
var llPurple="Purple";
var llCyan="Cyan";
var llLightGray="Light Gray";
var llGray="Gray";
var llPink="Pink";
var llLime="Lime";
var llYellow="Yellow";
var llLightBlue="Light Blue";
var llMagenta="Magenta";
var llOrange="Orange";
var llWhite="White";


//Enchantments (Don't change the numbers)
enchantables[0][0] ="Protection";
enchantables[1][0] ="Fire Protection";
enchantables[2][0] ="Feather Falling";
enchantables[3][0] ="Blast Protection";
enchantables[4][0] ="Projectile Protection";
enchantables[5][0] ="Respiration";
enchantables[6][0] ="Aqua Affinity";
enchantables[7][0] ="Thorns";
enchantables[8][0] ="Depth Strider";
enchantables[16][0] ="Sharpness";
enchantables[17][0] ="Smite";
enchantables[18][0] ="Bane of Anthropods";
enchantables[19][0] ="Knockback";
enchantables[20][0] ="Fire Aspect";
enchantables[21][0] ="Looting";
enchantables[32][0] ="Efficiency";
enchantables[33][0] ="Silk Touch";
enchantables[34][0] ="Unbreaking";
enchantables[35][0] ="Fortune";
enchantables[48][0] ="Power";
enchantables[49][0] ="Punch";
enchantables[50][0] ="Flame";
enchantables[51][0] ="Infinity";
enchantables[61][0] ="Luck of the Sea";
enchantables[62][0] ="Lure";






//Written Books
var llWrittenBook="Written Book";
var llTitle="Title";
var ttTitle="Enter the title of the book.";
var llAuthor="Author";
var ttAuthor="Enter the author of the book.";
var llGeneration="Generation";
var ttGeneration="Choose generation of the book. Copy of copy or tattered books cannot be copied";
var llOriginal="Original";
var llCopyOfOriginal="Copy of Original";
var llCopyOfCopy="Copy of Copy";
var llTattered="Tattered";
var llAddPage="Add Page";
var ttAddPage="Add a Page to the book. Books must have no more than 50 pages.";
var llRemovePage="Remove Page";
var ttRemovePage="Remove this page from the book";

var llAddSection="Add Section";
var ttAddSection="Text with unique properties are split into sections where they can be formatted and have hover and click events set. Click to add a new text section.";

var llBookText="Text";
var ttBookText="The text for this section. Word wrap is automatic. To make a new line in the section, type in &#92;n This is like pushing the enter key.";
var llRemoveSection="Remove Section";
var ttRemoveSection="Remove this text section.";
var llTextColor="Text Color";
var ttTextColor="Set the color of the text in this section.";
var llTextStyle="Text Style";
var llBold="Bold";
var llItalic="Italic";
var llUnderlined="Underlined";
var llStrikethrough="Strikethrough";
var llObfuscated="Obfuscated";
var llHoverEvent="Hover Event";
var llClickEvent="Click Event";
var ttHoverActionType="Choose if the hover event should run a command, show text, open a URL, change page, show an item, or show an achievement";
var ttClickActionType="Choose if the click event should run a command, show text, open a URL, change page, show an item, or show an achievement."; 
var ttClickHoverAction="The command to run, URL to open, page to change to, or item, text or achievement to show for the click/hover event. Leave it blank if you don't need it. Note: very long commands fail to work as they are subject to the same command length restrictions as the chat bar.";











//for 'replaceitem entity' command
var restrictions=new Array("armor stands, mobs, and players (though not all mobs will show or make use of the items)","armor stands and mobs (though not all mobs will show or make use of the items)","players","horses, donkeys, and mules. The item must be a saddle","horses, The item must be a type of horse armor","donkeys and mules with chests (THIS DOES NOT WORK. Possible bug in MC)","villagers");

//Forms a sentence like: This slot is only for mobs. Make sure you have targeted the appropriate entity.
var restrictionPart1="This slot is only for ";
var restrictionPart2=". Make sure you have targeted the appropriate entity.";

var ttSpecifySlot="Specify the slot for the selected entity.";
var ttSlotNoEntity="Select the slot number for the targeted entity ";

//Target Selector
var llSpecificPlayer="Specific Player";
var llNearestPlayer="Nearest Player";
var llAllPlayers="All Players";
var llRandomPlayer="Random Player";
var llEntityPlayer="Entity/Player";

var targetTypes = new Array(['specific', llSpecificPlayer],['nearest',llNearestPlayer],['all',llAllPlayers],['random',llRandomPlayer],['entity',llEntityPlayer]);

var ttTargetEntityType="Choose the Type of Entity or leave blank.";
var llPlayer="Player"; 

var llDirectionX="Direction X";
var ttDirectionX="Number blocks in the positive 'x' direction (i.e., east) from the value you entered in the X field.  Negative values do not work";
var llDirectionY="Direction Y";
var ttDirectionY="Number blocks in the positive 'y' direction (i.e., upwards) from the value you entered in the Y field.  Negative values do not work";
var llDirectionZ="Direction Z";
var ttDirectionZ="Number blocks in the positive 'z' direction (i.e., south) from the value you entered in the Z field.  Negative values do not work";
 
 
var llMinRadius="Minimum Radius";
var ttMinRadius="Selects only targets more than this value(in blocks) from the command's execution";
var llMaxRadius="Maximum Radius";
var ttMaxRadius="Selects only targets less than this value(in blocks) from the command's execution";
var llTarget="Target";
var ttTarget="Choose the type of target selector.";
 
var ttCountTargets="Selects only the specified number of targets from qualifying targets.";
var llCountDirection="Count Direction";
var llNearest="Nearest";
var ttNearest="If multiple players/entities are selected, They are usually selected from order of closest to the execution co-ordinates. This is the default.";
var llFarthest="Farthest";
var ttFarthest="Targets are selected in order of farthest to the execution co-ordinates";
var ttTargetX="The X value of the command's execution co-ordinate. Tilde (~) is not allowed here.";
var ttTargetY="The Y value of the command's execution co-ordinate. Tilde (~) is not allowed here.";
var ttTargetZ="The Z value of the command's execution co-ordinate. Tilde (~) is not allowed here.";
var llSelectionArea="Selection Area";
var llRadiusSelection="Radius";
var ttRadiusSelection="The targets are selected from the radius of the execution co-ordinate.";
var llVolumeSelection="Volume";
var ttVolumeSelection="The targets are selected from the execution co-ordinate to the Direction XYZ lengths.";
var llGameMode="Game Mode";
var ttGameMode="Players are selected from the specified game mode.";
var llAllModes="All Modes";
var llSurvival="Survival";
var llCreative="Creative";
var llAdventure="Adventure";
var llSpectator="Spectator";
var llMinimumXPLevel="Minimum XP Level";
var ttMinimumXPLevel="Selects only targets with no less than the specified experience levels.";
var llMaximumXPLevel="Maximum XP Level";
var ttMaximumXPLevel="Selects only targets with no more than the specified experience levels.";
var llMinimumVerticalRotation="Minimum Vertical Rotation";
var ttMinimumVerticalRotation="Selects only targets with the specified minimum vertical rotation. Vertical rotation values vary from -90.0 facing straight up to 90.0 facing straight down (thus vertical rotation values increase with rotation downwards).";
var llMaximumVerticalRotation="Maximum Vertical Rotation";
var ttMaximumVerticalRotation="Selects only targets with the specified maximum vertical rotation. Vertical rotation values vary from -90.0 facing straight up to 90.0 facing straight down (thus vertical rotation values increase with rotation downwards).";
var llMinimumHorizontalRotation="Minimum Horizontal Rotation";
var ttMinimumHorizontalRotation="Selects only targets with the specified minimum horizontal rotation. Horizontal rotation values vary from -180.0 (facing due north), to -90.0 (facing due east), to 0.0 (facing due south), to 90.0 (facing due west), to 179.9 (just west of due north) before wrapping back to -180.0 (thus horizontal rotation values increase with rotation to the right, or clockwise viewed from above).";
var llMaximumHorizontalRotation="Maximum Horizontal Rotation";
var ttMaximumHorizontalRotation="Selects only targets with the specified maximum horizontal rotation. Horizontal rotation values vary from -180.0 (facing due north), to -90.0 (facing due east), to 0.0 (facing due south), to 90.0 (facing due west), to 179.9 (just west of due north) before wrapping back to -180.0 (thus horizontal rotation values increase with rotation to the right, or clockwise viewed from above).";
var llTeam="Team";
var ttTeam="Specify the team name if targeting players by team.";
var llNotThisTeam="Not this team";
var ttNotThisTeam="Check if you want to select players not on this team.";
var llNotOnAnyTeam="Not on any team";
var ttNotOnAnyTeam="Check if you want to select players not on any team.";
var llEntityPlayerName="Entity/Player Name";
var ttEntityPlayerName="Players and Entities with custom names can be targeted with this.";
var llNotThisName="Not This Name";
var ttNotThisName="Check to select Players and Entities that do not have this name.";
var llTargetEntityType="Entity Type";
var llNotThisEntity="Not This Entity";
var ttNotThisEntity="Check to select Entities that are not of this type.";
var llAddScoreObjective="Add Score Objective";
var ttAddScoreObjective="Target players or entities by score objectives.";
var llScoreObjectiveName="Score Objective Name";
var ttScoreObjectiveName="Set the score name here if targeting players by their score. No Spaces are allowed. (Requires Scoreboard objectives to be set up).";
var ttRemoveScoreObjective="Remove this score objective";
var llMinScore="Minimum Score";
var ttMinScore="Selects only targets with no less than the specified score. (Requires Scoreboard objectives to be set up).";
var llMaxScore="Maximum Score";
var ttMaxScore="Selects only targets with no more than the specified score. (Requires Scoreboard objectives to be set up).";

//MCStacker Save
var monthNames = new Array("Jan", "Feb", "Ma", 
"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec");
var llHome="Home";
var ttHome="Introduction";
var llHelp="Help";
var ttHelp="Information about how to use the MCStacker command management system.";
var llMyCommands="My Commands";
var ttMyCommands="List all of the commands you created.";
var llNews="News";
var ttNews="News and Changelog";
var llSearchBrowse="Search / Browse";
var ttSearchBrowse="Search and browse commands created by other users.";
var llLikes="Likes";
var ttLikes="List all of the commands that I liked.";
var llDiscuss="Discuss";
var ttDiscuss="Notifications of new comments on commands you've created, commands you've commented on or commands you've liked.";
var llAccountSettings="Account Settings";
var ttAccountSettings="Your account settings for changing your email and password.";
var llSignOut="Sign Out";
var llSignIn="Sign In";
var eeNotSignedIn="You are not currently signed in.";
var ttCommandTypeSearch="Search by this command type.";
var llAny="Any";
var llAnyCommand="Any Command";
var llSearchBy="Search By";
var ttSearchBy="Narrow down your search by choosing to search only some parts of the saved information.";
var llTitleDescCreator="Title, Description or Creator";
var llDescription="Description";
var llCreator="Creator";
var llTag="Tag";
var llDerivativesByID="Derivatives (by id)";
var llComments="Comments";
var llSearchText="Search Text";
var ttSearchText="Search for text in saved commands. Leave blank to browse all commands. Advanced boolean search strings are accepted. A leading plus (+) sign indicates that this word must be present in every result returned. A leading minus (-) sign indicates that this word must not be present in any result returned. ( ) Parentheses are used to group words into sub expressions. A phrase that is enclosed in double quotes matches only results that contain this phrase literally.";
var llSortColName="Name";
var llSortColDescription="Description";
var llSortColType="Type";
var llSortColCreator="Creator";
var llSortColModified="Modified";
var llSortColLikes="Likes";
var llSortColPublic="Public";
var llSortColAllowComments="Allow Comments";
var eeNoSavedCommands="You have no saved commands. Create a command below and choose the 'Save As New Command' button.";
var ttPrivate="Unchecking this will make your command private. Only you will be able to see it."; 
var ttDisallowComments="Unchecking this will prevent others from commenting on the command. Existing comments will still be displayed";
var llChangePassword="Change Password";
var ttChangePassword="Change your password";
var llCurrentPassword="Current Password";
var llNewPassword="New Password";
var llConfirmNewPassword="Confirm New Password";
var ttNewPassword="The supplied password must be between 6 and 64 characters and can only contain numbers, letters, dashes, or underscores.";
var eePasswordMismatch="Your passwords do not match.";
var llUpdateEmail="Update Email Address";
var ttUpdateEmail="Change your email address";
var llNewEmailAddress="New Email Address";
var ttNewEmailAddress="Enter a valid email address.";
var llUsername="Username";
var llPassword="Password";
var llRegister="Register a new account";
var ttRegister="Register a new account. You will need to provide a valid email address and a unique user name.";
var llForgotPassword="Forgot your password";
var ttForgotPassword="Click to reset your password.";
var llConfirmPassword="Confirm Password";
var llEmail="Email";
var ttNewUsername="The supplied user name must be between 3 and 16 characters and can only contain numbers, letters, dashes, underscores or @";
var llPasswordReset="Password Reset";
var llEnterEmail="Enter the email that you supplied when you created your account. MCStacker will reset your password and email it to you.";
var llMarkdown="markdown";
var llCharactersRemaining="Characters remaining.";
var llPublic="Public";
var llAllowComments="Allow Comments";
var llTags="Tags";

var ttTags="Tags are used for searching. Enter up to 10 words to describe this command. Separate tag words with commas(,)";
var llSave="Save";
var ttSave="Save this command. All changes made in command generator will be saved and will overwrite the previous settings. This action can not be undone."; 
var llCancel="Cancel"; 
var ttCancel="Cancel this edit."; 
var ttCommandTitle="Give the command a concise and descriptive title.";
var ttCommandDescription="Describe what the command does and what it is for.";
var ttCommentBox="Write a comment for this command.";
var llTagLimitExceeded="Tag limit exceeded";
var ttRemoveThisTag="Remove this tag.";
var llReportProblem="Report a Problem";
var ttReportInstructions="Use this form to report a problem with this command. For example: bugs, commands that crash Minecraft, or offensive user created content.";
var llProblem="Problem";
var ttReportEmail="This field is optional. Provide your email address if you wish to be contacted about the report.";
var llCancelReport="Cancel";
var ttCancelReport="Cancel this report.";
var llSubmitReport="Submit Report";
var ttSubmitReport="Submit this report.";
var eeReportResponse="Thanks for your report. This issue will be assessed and actioned.";
var eeCloneResponse="The command has been cloned to your account and you can now edit it.";
var eeMissingDetails="You need to give this command a title and description before it can be saved.";
var ttSearchByTag="Search commands with this tag.";
var llCreatedBy="Created by";//Forms a sentence like 'Created by @PyroStunts'
//Following two variables form a sentence like 'This command is Derived from OP Zombie by @PyroStunts'
var llDerivedFrom="This command is Derived from"
var llBy="by";
var llLike="Like"
var llUnlike="Unlike";
var llComment="Comment";
var ttComments="Read and write comments about this command.";
var llCloneCommand="Clone Command";
var ttCloneCommand="Clone this command to your account. This is how you make derivative commands."
var ttLikeUnlike="Like this command to save it to your 'Likes' list. Unlike it remove it from your 'Likes' list.";
var llEdit="Edit";
var ttEdit="Edit details and settings for this command.";
var llDelete="Delete";
var ttDelete="Delete this command and all related information associated with it. This can't be undone. All comments, favs and derivative relationships (but not commands derived from this command) will be cleared.";
var llClearDerivativeParent="Clear Derivative (parent)";
var ttClearDerivativeParent="Delete the derivative relationship this command has to it's parent command. This can't be undone. It is a good idea to do this if you have significantly modified this command so much that it no longer has anything in common with the parent command.";
var llClearDerivativeChildren="Clear Derivative (children)";
var ttClearDerivativeChildren="Delete the derivative relationship this command has to commands that were derived from it. This can't be undone. This affects commands from other users. New commands may continue to be cloned from this command while it is public. It is a good idea to do this if you have significantly modified the command so much that any commands derived from it no longer have anything in common.";
var llSearchDerivatives="Search Derivatives";
var ttSearchDerivatives="Search for all direct derivatives of this command.";
var llReport="Report";
var ttReport="Report a problem with this command. You can report bugs, commands that crash Minecraft, or offensive content/comments.";
var ttDeleteComment="You may delete this comment if you wrote it or you are the creator of the command. This can't be undone."
var llHideComments="Hide Comments";
var ttHideComments="Hide the comments.";
var llPostComment="Post Comment";
var ttPostComment="Post a comment about this command.";
var llDeleteAllComments="Delete All Comments";
var ttDeleteAllComments="Delete all comments associated with this command. This can't be undone.";
var eeDeleteAllComments="Are you sure you want to delete all comments associated with this command? This action can not be undone.";
var eeDeleteAllCommentsResponse="Comments Removed";
var ttPostThisComment="Post this comment.";
var llShareLink="Share Link";
var eeConfirmDelete="You are about to permanently delete this command. All comments and likes associated with this command will be removed also. Click OK to permanently delete this command.";
var eeSignInRequired="You need to sign in to save a command.";
var ttShowHide="Hide/Show details of this entity";

//XML editor
var llEditXML="XML Editor";
var ttEditXML="Edit the XML for this command. This is an advanced feature that requires some basic XML skills.";
var llExportXML="Export XML";
var ttExportXML="Export the current settings from this command into the XML editor.";
var llImportXML="Import XML";
var ttImportXML="Import the XML from the editor into MCStacker. Ensure the the XML is valid otherwise it will not work.";
var llCloseXML="Close XML Editor";
var ttCloseXML="Close the XML Editor. Import your edits before closing if you wish to keep them.";


//Pages
var ppNews="news.html";
var ppHelp="help.html";
var ppAbout="about.html";
var ppTerms="termsandprivacy.html";

var ttCommandSign="The command to run when the sign is clicked by the player. Signs can execute up to four different commands. You can leave this blank if not required.";

var llSignLineMode="Mode";
var ttSignLineMode="Choose the mode for this line in the sign. Can display text,an entity's name with a target selector or the score for an objective";
var ttTargetSignLine="Enter a target selector into this field. The sign will display the name of the entity that qualifies as the target";
var llObjectiveName="Objective";
var ttObjectiveName="Enter the name of the scoreboard objective";
