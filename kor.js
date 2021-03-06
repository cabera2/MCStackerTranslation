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
["red_flower:3","푸른 삼백초"], 
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
["brick_block","벽돌"],
["tnt","TNT"],
["bookshelf","책장"],
["mossy_cobblestone","이끼 낀 돌"],
["obsidian","흑요석"],
["torch","횃불"],

["mob_spawner","몬스터 스포너"],
["oak_stairs","참나무 계단"],
["chest","상자"],
["diamond_ore","다이아몬드 원석"],
["diamond_block","다이아몬드 블록"],
["crafting_table","작업대"],
["farmland","경작지"],
["furnace","화로"],
["lit_furnace","불 켜진 화로"],
["ladder","사다리"],
["rail","레일"],
["stone_stairs","석재 계단"],
["lever","레버"],
["stone_pressure_plate","돌 감압판"],
["wooden_pressure_plate","나무 감압판"],
["redstone_ore","레드스폰 광석"],
["redstone_torch","레드스톤 횃불 (켜짐)"],
["stone_button","돌 버튼"],
["snow_layer","눈"],
["ice","얼음"],
["snow","눈 블록"],
["cactus","선인장"],
["clay","점토"],
["jukebox","주크박스"],
["fence","참나무 울타리"],
["spruce_fence","가문비나무 울타리"],
["birch_fence","자작나무 울타리"],
["jungle_fence","정글 나무 울타리"],
["dark_oak_fence","짙은 참나무 울타리"],
["acacia_fence","아카시아 나무 울타리"],
["pumpkin","호박"],
["netherrack","네더랙"],
["soul_sand","소울 샌드"],
["glowstone","발광석"],
["portal","포탈"],
["lit_pumpkin","잭 오 랜턴"],
["trapdoor","다락문"],
["monster_egg","돌 몬스터 알"],
["monster_egg:1","조약돌 몬스터 알"],
["monster_egg:2","석재 벽돌 몬스터 알"],
["monster_egg:3","이끼 낀 석재 벽돌 몬스터 알"],
["monster_egg:4","금 간 석재 벽돌 몬스터 알"],
["monster_egg:5","조각된 석재 벽돌 몬스터 알"],
["stonebrick","석재 벽돌"],
["stonebrick:1","이끼 낀 석재 벽돌"],
["stonebrick:2","금 간 석재 벽돌"],
["stonebrick:3","조각된 석재 벽돌"],
["brown_mushroom_block","갈색 버섯 블록"],
["red_mushroom_block","빨간색 버섯 블록"],
["iron_bars","철창"],
["glass_pane","유리판"],
["melon_block","수박 블록"],
["vine","덩쿨"],
["fence_gate","참나무 울타리 문"],
["spruce_fence_gate","가문비나무 울타리 문"],
["birch_fence_gate","자작나무 울타리 문"],
["jungle_fence_gate","정글 나무 울타리 문"],
["dark_oak_fence_gate","짙은 참나무 울타리 문"],
["acacia_fence_gate","아카시아 나무 울타리 문"],
["brick_stairs","벽돌 계단"],
["stone_brick_stairs","석재 벽돌 계단"],
["mycelium","균사체"],
["waterlily","연꽃잎"],
["nether_brick","네더 벽돌"],
["nether_brick_fence","네더 벽돌 울타리"],
["nether_brick_stairs","네더 벽돌 계단"],
["enchanting_table","마법부여대"],
["end_portal","엔더 포탈"],
["end_portal_frame","엔더 포탈 프레임"],
["end_stone","엔드 스톤"],
["dragon_egg","드래곤 알"],
["redstone_lamp","레드스톤 조명 (꺼짐)"],
["double_wooden_slab","더블 참나무 반 블록"],
["double_wooden_slab:1","더블 가문비나무 반 블록"],
["double_wooden_slab:2","더블 자작나무 반 블록"],
["double_wooden_slab:3","더블 정글 나무 반 블록"],
["double_wooden_slab:4","더블 아카시아 나무 반 블록"],
["double_wooden_slab:5","더블 짙은 참나무 반 블록"],
["wooden_slab","참나무 반 블록"],
["wooden_slab:1","가문비나무 반 블록"],
["wooden_slab:2","자작나무 반 블록"],
["wooden_slab:3","정글 나무 반 블록"],
["wooden_slab:4","아카시아 나무 반 블록"],
["wooden_slab:5","짙은 참나무 반 블록"],
["cocoa","코코아 열매"],
["sandstone_stairs","사암 계단"],
["emerald_ore","에메랄드 원석"],
["ender_chest","엔더 상자"],
["tripwire_hook","철사덫 갈고리"],
["emerald_block","에메랄드 블록"],
["spruce_stairs","가문비나무 계단"],
["birch_stairs","자작나무 계단"],
["jungle_stairs","정글 나무 계단"],
["command_block","명령 블록"],
["beacon","신호기"],
["cobblestone_wall","조약돌 담장"],
["cobblestone_wall:1","이끼 낀 조약돌 담장"],
["wooden_button","나무 버튼"],
["anvil","모루"],
["anvil:1","약간 손상된 모루"],
["anvil:2","심각하게 손상된 모루"],
["trapped_chest","덫 상자"],
["light_weighted_pressure_plate","무게 감압판 (경형)"],
["heavy_weighted_pressure_plate","무게 감압판 (중형)"],
["daylight_detector","햇빛 감지기"],
["redstone_block","레드스톤 블록"],
["quartz_ore","네더 석영 원석"],
["hopper","깔때기"],
["quartz_block","석영 블록"],
["quartz_block:1","조각된 석영 블록"],
["quartz_block:2","석영 기둥 블록"],
["quartz_stairs","석영 계단"],
["activator_rail","활성화 레일"],
["dropper","공급기"],
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
["log2","아카시아 나무"],
["log2:1","짙은 참나무"],
["acacia_stairs","아카시아 나무 계단"],
["dark_oak_stairs","짙은 참나무 계단"],
["slime","슬라임 블록"],
["barrier","방벽"],
["iron_trapdoor","철 다락문"],
["prismarine","프리즈마린"],
["prismarine:1","프리즈마린 벽돌"],
["prismarine:2","어두운 프리즈마린"],
[" sea_lantern","바다 랜턴"],
["hay_block","건초 더미"],
["hardened_clay","굳은 점토"],
["coal_block","석탄 블록"],
["packed_ice","단단한 얼음"],
["double_plant","해바라기"],
["double_plant:1","라일락"],
["double_plant:2","큰 잔디"],
["double_plant:3","큰 고사리"],
["double_plant:4","장미 덤불"],
["double_plant:5","모란"],
["red_sandstone","붉은 사암"],
["red_sandstone:1","조각된 붉은 사암"],
["red_sandstone:2","부드러운 붉은 사암"],
["red_sandstone_stairs","붉은 사암 계단"],
["double_stone_slab2","더블 붉은 사암 반 블록"],
["stone_slab2","붉은 사암 반 블록"],
["iron_shovel","철 삽"],
["iron_pickaxe","철 곡괭이"],
["iron_axe","철 도끼"],
["flint_and_steel","라이터"],
["apple","사과"],
["bow","활"],
["arrow","화살"],
["coal","석탄"],
["coal:1","목탄"],
["diamond","다이아몬드"],
["iron_ingot","철괴"],
["gold_ingot","금괴"],
["iron_sword","철 곰"],
["wooden_sword","나무 검"],
["wooden_shovel","나무 삽"],
["wooden_pickaxe","나무 곡괭이"],
["wooden_axe","나무 도끼"],
["stone_sword","돌 검"],
["stone_shovel","돌 삽"],
["stone_pickaxe","돌 곡괭이"],
["stone_axe","돌 도끼"],
["diamond_sword","다이아몬드 검"],
["diamond_shovel","다이아몬드 삽"],
["diamond_pickaxe","다이아몬드 곡괭이"],
["diamond_axe","다이아몬드 도끼"],
["stick","막대기"],
["bowl","그릇"],
["mushroom_stew","버섯 스튜"],
["golden_sword","금 검"],
["golden_shovel","금 삽"],
["golden_pickaxe","금 곡괭이"],
["golden_axe","금 도끼"],
["string","실"],
["feather","깃털"],
["gunpowder","화약"],
["wooden_hoe","나무 괭이"],
["stone_hoe","돌 괭이"],
["iron_hoe","철 괭이"],
["diamond_hoe","다이아몬드 괭이"],
["golden_hoe","금 괭이"],
["wheat_seeds","씨앗"],
["wheat","밀"],
["bread","빵"],
["leather_helmet","가죽 모자"],
["leather_chestplate","가죽 튜닉"],
["leather_leggings","가죽 바지"],
["leather_boots","가죽 장화"],
["chainmail_helmet","사슬 투구"],
["chainmail_chestplate","사슬 갑옷"],
["chainmail_leggings","사슬 레깅스"],
["chainmail_boots","사슬 부츠"],
["iron_helmet","철 투구"],
["iron_chestplate","철 갑옷"],
["iron_leggings","철 레깅스"],
["iron_boots","사슬 부츠"],
["diamond_helmet","다이아몬드 투구"],
["diamond_chestplate","다이아몬드 갑옷"],
["diamond_leggings","다이아몬드 레깅스"],
["diamond_boots","다이아몬드 부츠"],
["golden_helmet","금 투구"],
["golden_chestplate","금 갑옷"],
["golden_leggings","금 레깅스"],
["golden_boots","금 부츠"],
["flint","부싯돌"],
["porkchop","익히지 않은 돼지고기"],
["cooked_porkchop","구운 돼지고기"],
["painting","그림"],
["golden_apple","황금 사과"],
["golden_apple:1","마법의 황금 사과"],
["sign","표지판"],
["wooden_door","참나무 문"],
["spruce_door","가문비나무 문"],
["birch_door","자작나무 문"],
["jungle_door","정글 나무 문"],
["acacia_door","아카시아 나무 문"],
["dark_oak_door","짙은 참나무 문"],
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
["nether_wart","네더 와트"],
["potion","물병"],
["potion:16","이상한 포션"],
["potion:32","진한 포션"],
["potion:64","평범한 포션"],
["potion:8193","재생 포션 (0:45)"],
["potion:8194","신속의 포션 (3:00)"],
["potion:8195","화염 저항 포션 (3:00)"],
["potion:8196","독 포션 (0:45)"],
["potion:8197","회복 포션"],
["potion:8198","야간 투시 포션 (3:00)"],
["potion:8200","나약의 포션 (1:30)"],
["potion:8201","힘의 포션 (3:00)"],
["potion:8202","구속의 포션 (1:30)"],
["potion:8203","도약의 포션 (3:00)"],
["potion:8204","고통의 포션"],
["potion:8205","수중 호흡 포션 (3:00)"],
["potion:8206","투명화 포션 (3:00)"],
["potion:8225","재생 포션 II (0:22)"],
["potion:8226","신속의 포션 II (1:30)"],
["potion:8228","독 포션 II (0:22)"],
["potion:8229","회복 포션 II"],
["potion:8233","힘의 포션 II (1:30)"],
["potion:8235","도약 포션 II (1:30)"],
["potion:8236","고통의 포션 II"],
["potion:8257","재생 포션 (2:00)"],
["potion:8258","신속의 포션 (8:00)"],
["potion:8259","화염 저항 포션 (8:00)"],
["potion:8260","독 포션 (2:00)"],
["potion:8262","야간 투시 포션 (8:00)"],
["potion:8264","나약의 포션 (4:00)"],
["potion:8265","힘의 포션 (8:00)"],
["potion:8266","구속의 포션 (4:00)"],
["potion:8269","수중 호흡 포션 (8:00)"],
["potion:8270","투명화 포션 (8:00)"],
["potion:8289","재생 포션 II (1:00)"],
["potion:8290","신속의 포션 포션 II (4:00)"],
["potion:8292","독 포션 II (1:00)"],
["potion:8297","힘의 포션 II (4:00)"],
["potion:16385","투척용 재생 포션 (0:33)"],
["potion:16386","투척용 신속의 포션 (2:15)"],
["potion:16387","투척용 화염 저항 포션 (2:15)"],
["potion:16388","투척용 독 포션 (0:33)"],
["potion:16389","투척용 회복 포션"],
["potion:16390","투척용 야간 투시 포션 (2:15)"],
["potion:16392","투척용 나약의 포션 (1:07)"],
["potion:16393","투척용 힘의 포션 (2:15)"],
["potion:16394","투척용 구속의 포션 (1:07)"],
["potion:16396","투척용 고통의 포션"],
["potion:16397","투척용 수중 호흡 포션 (2:15)"],
["potion:16398","투척용 투명화 포션 (2:15)"],
["potion:16417","투척용 재생 포션 II (0:16)"],
["potion:16418","투척용 신속의 포션 II (1:07)"],
["potion:16420","투척용 독 포션 II (0:16)"],
["potion:16421","투척용 회복 포션 II"],
["potion:16425","투척용 힘의 포션 II (1:07)"],
["potion:16428","투척용 고통의 포션 II"],
["potion:16449","투척용 재생 포션 (1:30)"],
["potion:16450","투척용 신속의 포션 (6:00)"],
["potion:16451","투척용 화염 저항 포션 (6:00)"],
["potion:16452","투척용 독 포션 (1:30)"],
["potion:16454","투척용 야간 투시 포션 (6:00)"],
["potion:16456","투척용 나약의 포션 (3:00)"],
["potion:16457","투척용 힘의 포션 (6:00)"],
["potion:16458","투척용 구속의 포션 (3:00)"],
["potion:16461","투척용 수중 호흡 포션 (6:00)"],
["potion:16462","투척용 투명화 포션 (6:00)"],
["potion:16481","투척용 재생 포션 II (0:45)"],
["potion:16482","투척용 신속의 포션 II (3:00)"],
["potion:16484","투척용 독 포션 II (0:45)"],
["potion:16489","투척용 힘의 포션 II (3:00)"],
["potion:7","맑은 포션 (미사용)"],
["potion:15","묽은 포션 (미사용)"],
["potion:23","어설픈 포션 (미사용)"],
["potion:31","유쾌한 포션 (미사용)"],
["potion:39","매력적인 포션 (미사용)"],
["potion:47","반짝이는 포션 (미사용)"],
["potion:55","등급 포션 (미사용)"],
["potion:63","지독한 포션 (미사용)"],
["potion:16391","투척용 맑은 포션 (미사용)"],
["potion:16399","투척용 묽은 포션 (미사용)"],
["potion:16407","투척용 어설픈 포션 (미사용)"],
["potion:16415","투척용 유쾌한 포션 (미사용)"],
["potion:16423","투척용 매력적인 포션 (미사용)"],
["potion:16431","투척용 반짝이는 포션 (미사용)"],
["potion:16439","투척용 등급 포션 (미사용)"],
["potion:16447","투척용 지독한 포션 (미사용)"],
["glass_bottle","유리병"],
["spider_eye","거미 눈"],
["fermented_spider_eye","발효된 거미 눈"],
["blaze_powder","블레이즈 가루"],
["magma_cream","마그마 크림"],
["brewing_stand","양조기"],
["cauldron","가마솥"],
["ender_eye","엔더의 눈"],
["speckled_melon","반짝이는 수박"],
["spawn_egg:50","스폰 크리퍼"],
["spawn_egg:51","스폰 스켈레톤"],
["spawn_egg:52","스폰 거미"],
["spawn_egg:54","스폰 좀비"],
["spawn_egg:55","스폰 슬라임"],
["spawn_egg:56","스폰 가스트"],
["spawn_egg:57","스폰 좀비 피그맨"],
["spawn_egg:58","스폰 엔더맨"],
["spawn_egg:59","스폰 동굴 거미"],
["spawn_egg:60","스폰 좀벌레"],
["spawn_egg:61","스폰 블레이즈"],
["spawn_egg:62","스폰 마그마 큐브"],
["spawn_egg:65","스폰 박쥐"],
["spawn_egg:66","스폰 마녀"],
["spawn_egg:67","스폰 엔더 진드기"],
["spawn_egg:68","스폰 수호자"],
["spawn_egg:90","스폰 돼지"],
["spawn_egg:91","스폰 양"],
["spawn_egg:92","스폰 소"],
["spawn_egg:93","스폰 닭"],
["spawn_egg:94","스폰 오징어"],
["spawn_egg:95","스폰 늑대"],
["spawn_egg:96","스폰 버섯소"],
["spawn_egg:98","스폰 오셀롯"],
["spawn_egg:100","스폰 말"],
["spawn_egg:101","스폰 토끼"],
["spawn_egg:120","스폰 주민"],
["experience_bottle","경험치 병"],
["fire_charge","화염구"],
["writable_book","책과 깃펜"],
["written_book","쓰여진 책"],
["emerald","에메랄드"],
["item_frame","아이템 액자"],
["flower_pot","화분"],
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
["record_13","13 음반"],
["record_cat","Cat 음반"],
["record_blocks","Blocks 음반"],
["record_chirp","Chirp 음반"],
["record_far","Far 음반"],
["record_mall","Mall 음반"],
["record_mellohi","Mellohi 음반"],
["record_stal","Stal 음반"],
["record_strad","Strad 음반"],
["record_ward","Ward 음반"],
["record_11","11 음반"],
["record_wait","Wait 음반"]);

var tileIDs=new Array(["air","Air"],
["stone","Stone","SB"],
["grass","Grass Block"],
["dirt","Dirt","SB"],
["cobblestone","Cobblestone"],
["planks","Wood Planks","SB"],
["sapling","Sapling","SB"],
["bedrock","Bedrock"],
["flowing_water","Water","S"],
["water","Stationary Water","S"],
["flowing_lava","Lava","S"],
["lava","Stationary Lava","S"],
["sand","Sand","SB"],
["gravel","Gravel"],
["gold_ore","Gold Ore"],
["iron_ore","Iron Ore"],
["coal_ore","Coal Ore"],
["log","Wood","SB"],
["leaves","Leaves","SB"],
["sponge","Sponge","SB"],
["glass","Glass"],
["lapis_ore","Lapis Lazuli Ore"],
["lapis_block","Lapis Lazuli Block"],
["dispenser","Dispenser","SE"],
["sandstone","Sandstone","SB"],
["noteblock","Note Block","E"],
//["bed","Bed","S"],
["golden_rail","Powered Rail","S"],
["detector_rail","Detector Rail","S"],
["sticky_piston","Sticky Piston","S"],
["web","Cobweb"],
["tallgrass","Grass","SB"],
["deadbush","Dead Bush"],
["piston","Piston","S"],
["piston_head","Piston Extension","S"],
["wool","Wool","SB"],
//["piston_extension","Block moved by Piston","E"],
["yellow_flower","Dandelion"],
["red_flower","Poppy","SB"],
["brown_mushroom","Brown Mushroom"],
["red_mushroom","Red Mushroom"],
["gold_block","Block of Gold"],
["iron_block","Block of Iron"],
["double_stone_slab","Double Stone Slab","SB"],
["stone_slab","Stone Slab","SB"],
["brick_block","Bricks"],
["tnt","TNT"],
["bookshelf","Bookshelf"],
["mossy_cobblestone","Moss Stone"],
["obsidian","Obsidian"],
["torch","Torch","S"],
["fire","Fire","S"],
["mob_spawner","Monster Spawner","E"],
["oak_stairs","Oak Wood Stairs","S"],
["chest","Chest","SE"],
["redstone_wire","Redstone Wire","S"],
["diamond_ore","Diamond Ore"],
["diamond_block","Block of Diamond"],
["crafting_table","Crafting Table"],
["wheat","Wheat","S"],
["farmland","Farmland","S"],
["furnace","Furnace","SE"],
["lit_furnace","Burning Furnace","SE"],
["standing_sign","Standing Sign", "SE"],
["wooden_door","Oak Door","S"],
["ladder","Ladder","S"],
["rail","Rail","S"],
["stone_stairs","Cobblestone Stairs","S"],
["wall_sign","Wall Sign","SE"],
["lever","Lever","S"],
["stone_pressure_plate","Stone Pressure Plate","S"],
["iron_door","Iron Door","S"],
["wooden_pressure_plate","Wooden Pressure Plate","S"],
["redstone_ore","Redstone Ore"],
["lit_redstone_ore","Glowing Redstone Ore"],
["unlit_redstone_torch","Redstone Torch (inactive)","S"],
["redstone_torch","Redstone Torch (active)","S"],
["stone_button","Stone Button","S"],
["snow_layer","Snow Layer","SB"],
["ice", "Ice"],
["snow","Snow"],
["cactus","Cactus","S"],
["clay","Clay"],
["reeds","Sugar Cane","S"],
["jukebox","Jukebox","SE"],
["fence","Fence"],
["pumpkin","Pumpkin","S"],
["netherrack","Netherrack"],
["soul_sand","Soul Sand"],
["glowstone","Glowstone"],
["portal","Nether Portal"],
["lit_pumpkin","Jack o'Lantern","S"],
["cake","Cake","S"],
["unpowered_repeater","Redstone Repeater (inactive)","S"],
["powered_repeater","Redstone Repeater (active)","S"],
["stained_glass","Stained Glass","SB"],
["trapdoor","Trapdoor","S"],
["monster_egg","Monster Egg","SB"],
["stonebrick","Stone Bricks","SB"],
["brown_mushroom_block","Brown Mushroom (block)","S"],
["red_mushroom_block","Red Mushroom (block)","S"],
["iron_bars","Iron Bars"],
["glass_pane","Glass Pane"],
["melon_block","Melon"],
["pumpkin_stem","Pumpkin Stem","S"],
["melon_stem","Melon Stem","S"],
["vine","Vines","S"],
["fence_gate","Fence Gate","S"],
["brick_stairs","Brick Stairs","S"],
["stone_brick_stairs","Stone Brick Stairs","S"],
["mycelium","Mycelium"],
["waterlily", "Lily Pad"],
["nether_brick","Nether Brick"],
["nether_brick_fence","Nether Brick Fence"],
["nether_brick_stairs","Nether Brick Stairs","S"],
["nether_wart","Nether Wart","S"],
["enchanting_table","Enchantment Table","E"],
["brewing_stand","Brewing Stand","SE"],
["cauldron","Cauldron","S"],
["end_portal","End Portal"],//,"E"], not implmented,"E"],
["end_portal_frame","End Portal Block"],//,"E"], not implmented,"E"],
["end_stone","End Stone"],
["dragon_egg","Dragon Egg"],
["redstone_lamp","Redstone Lamp (inactive)"],
["lit_redstone_lamp","Redstone Lamp (active)"],
["double_wooden_slab","Double Wooden Slab","SB"],
["wooden_slab","Wooden Slab","SB"],
["cocoa", "Cocoa", "S"],
["sandstone_stairs","Sandstone Stairs","S"],
["emerald_ore","Emerald Ore"],
["ender_chest","Ender Chest","S"], ////,"E"], not implmented
["tripwire_hook","Tripwire Hook","S"],
["tripwire","Tripwire","S"],
["emerald_block","Block of Emerald"],
["spruce_stairs","Spruce Wood Stairs","S"],
["birch_stairs","Birch Wood Stairs","S"],
["jungle_stairs","Jungle Wood Stairs","S"],
["command_block","Command Block","E"],
["beacon","Beacon","E"],
["cobblestone_wall","Cobblestone Wall","SB"],
["flower_pot","Flower Pot","SE"],
["carrots","Carrot","S"],
["potatoes","Potato","S"],
["wooden_button Wooden","Button","S"],
["skull","Mob head","SE"],
["anvil","Anvil","SB"],
["trapped_chest","Trapped Chest","SE"],
["light_weighted_pressure_plate","Light Weighted Pressure Plate","S"],
["heavy_weighted_pressure_plate","Heavy Weighted Pressure Plate","S"],
["unpowered_comparator","Redstone Comparator (unpowered)","S"],
["powered_comparator","Redstone Comparator (powered)","S"],
["daylight_detector","Daylight Sensor"], //,"E"], not implmented
["redstone_block","Block of Redstone"],
["quartz_ore","Nether Quartz Ore"],
["hopper","Hopper","SE"],
["quartz_block","Block of Quartz","SB"],
["quartz_stairs","Quartz Stairs","S"],
["activator_rail","Activator Rail","S"],
["dropper","Dropper","SE"],
["stained_hardened_clay","Stained Clay"],
["stained_glass_pane","Stained Glass Pane","SB"],
["leaves2","Leaves (Acacia/Dark Oak)","SB"],
["log2","Wood (Acacia/Dark Oak)","SB"],
["acacia_stairs","Acacia Wood Stairs S"],
["dark_oak_stairs","Dark Oak Wood Stairs","S"],
["slime","Slime Block"],
["barrier","Barrier"],
["iron_trapdoor","Iron Trapdoor","S"],
["prismarine","Prismarine","SB"],
["sea_lantern","Sea Lantern"],
["hay_block","Hay Bale","S"],
["carpet","Carpet","SB"],
["hardened_clay","Hardened Clay"],
["coal_block","Block of Coal"],
["packed_ice","Packed Ice"],
["double_plant","Large Flowers","SB"],
["standing_banner","Standing Banner","SE"],
["wall_banner","Wall Banner","SE"],
["daylight_detector_inverted","Inverted Daylight Sensor"],//,"E"], not implmented
["red_sandstone","Red Sandstone","SB"],
["red_sandstone_stairs","Red Sandstone Stairs","S"],
["double_stone_slab2","Double Red Sandstone Slab","S"],
["stone_slab2","Red Sandstone Slab","S"],
["spruce_fence_gate","Spruce Fence Gate"],
["birch_fence_gate","Birch Fence Gate"],
["jungle_fence_gate","Jungle Fence Gate"],
["dark_oak_fence_gate","Dark Oak Fence Gate"],
["acacia_fence_gate","Acacia Fence Gate"],
["spruce_fence","Spruce Fence"],
["birch_fence","Birch Fence"],
["jungle_fence","Jungle Fence"],
["dark_oak_fence","Dark Oak Fence"],
["acacia_fence","Acacia Fence"],
["spruce_door","Spruce Door","S"],
["birch_door","Birch Door","S"],
["jungle_door","Jungle Door","S"],
["acacia_door","Acacia Door","S"],
["dark_oak_door","Dark Oak Door","S"]);

var llCommandType="멍령어 종류";
var ttCommandType="생성하고자 하는 명령어의 종류를 선택하세요.";
var llResetForm="양식 초기화";
var ttResetForm="모든 설정을 기본값으로 되돌립니다.";
var llSaveAs="새 명령어로 저장";
var ttSaveAs="현재 설정을 파생 관계 없는 새 명령어로 저장합니다.";
var llEnchantAll="인챈트 불가 아이템도 표시 (모든 아이템에 인챈트 옵션을 표시합니다.)";
var ttEnchantAll="모든 아이템에 인챈트 옵션을 사용할 수 있게 됩니다. 인챈트 옵션을 표시하거나 숨기려면 아이템을 다시 선택해야합니다.";
var llAddEntity="엔티티 추가";
var ttAddEntity="스택 맨 아래에 엔티티를 추가합니다.";
var llSummonCoords="소환 좌표";
var llRelativeCoords="상대 좌표";
var ttRelativeCoords="엔티티를 상대 좌표에 소환하려면 체크하세요. 엔티티를 절대 좌표에 소환하려면 체크를 해제하세요.";
var ttSummonX="엔티티를 소환하고자 하는 X 좌표.";
var ttSummonY="엔티티를 소환하고자 하는 Y 좌표.";
var ttSummonZ="엔티티를 소환하고자 하는 Z 좌표.";

var llSpawnCount="스폰 카운트";
var ttSpawnCount="스포너가 한번에 소환할 엔티티의 개수.";
var llSpawnRange="스폰 범위";
var ttSpawnRange="엔티티가 소환될 범위.";
var llRequiredPlayerRange="필요 플레이어 범위";
var ttRequiredPlayerRange="스포너가 엔티티 소환을 시작하기 위해 플레이어가 접근해야 하는 범위.";
var llDelay="딜레이";
var ttDelay="플레이어가 처음 감지되고부터 엔티티가 소환되기까지의 틱.";
var llMinSpawnDelay="최소 스폰 딜레이";
var ttMinSpawnDelay="첫 스폰 후, 다음 스폰까지의 최소 틱.";
var llMaxSpawnDelay="최대 스폰 딜레이";
var ttMaxSpawnDelay="첫 스폰 후, 다음 스폰까지의 최대 틱.";
var llMaxNearbyEntities="최대 인근 엔티티";
var ttMaxNearbyEntities="Checks the number of entities within the spawn range ('SpawnRange' tag). If the number of entities it detects is over the set MaxNearbyEntities number, it will not spawn more entities unless the amount of entities within the spawn range is decreased.";

var llPlayerName="플레이어 이름";
var ttPlayerName="특정 플레이어의 이름을 입력하세요.";
var llItemSelect="아이템";
var ttItemSelect="아이템을 선택하세요.";
var ttSearchFilter="검색/필터";

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
