import React, { useState, useMemo } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import { Search, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface Item {
  id: string;
  name: string;
  category: string;
  value: number;
  imageUrl: string;
  demand: string;
  status: 'Stable' | 'Underpaid' | 'Overpaid';
}

interface ItemSelectModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (item: Item) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: Array<{ id: string; name: string; }>;
}

const itemDatabase: Item[] = [
  // Common Items
  {
    id: "rocket",
    name: "Rocket",
    category: "Common",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FRocket_Icon.webp&w=256&q=75",
    value: 5000,
    demand: "1",
  },
  {
    id: "spink",
    name: "Spink",
    category: "Common",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpin_Icon.webp&w=256&q=75",
    value: 60000,
    demand: "1",
  },
  {
    id: "blade",
    name: "Blade",
    category: "Common",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FBlade_Icon.webp&w=256&q=75",
    value: 50000,
    demand: "1",
  },
  {
    id: "bomb",
    name: "Bomb",
    category: "Common",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FBomb_Icon.webp&w=256&q=75",
    value: 80000,
    demand: "1",
  },
  {
    id: "smoke",
    name: "Smoke",
    category: "Common",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSmoke_Icon.webp&w=256&q=75",
    value: 100000,
    demand: "1",
  },
  {
    id: "spike",
    name: "Spike",
    category: "Common",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpike_Icon.webp&w=256&q=75",
    value: 5000,
    demand: "1",
  },
  {
    id: "spike",
    name: "Spike",
    category: "Common",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FCommon%2FSpring_Icon.webp&w=256&q=75",
    value: 5000,
    demand: "1",
  },
  // Uncommon Items
  
  {
    id: "flame",
    name: "Flame",
    category: "UnCommon",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FFlame_Icon.webp&w=256&q=75",
    value: 250000,
    demand: "1",
  },
  {
    id: 'falcon',
    name: "Falcon",
    category: "Uncommon",
    status: "Underpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FFlame_Icon.webp&w=256&q=75",
    value: 250000,
    demand: "1",
  },
  {
    id: 'dark',
    name: "Dark",
    category: "Uncommon",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FFalcon_Icon.webp&w=256&q=75",
    value: 300000,
    demand: "2",
  },
  {
    id: 'ice',
    name: "Ice",
    category: "Uncommon",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FDark_Icon.webp&w=256&q=75",
    value: 400000,
    demand: "2",
  },
  {
    id: 'diamond',
    name: "Diamond",
    category: "Uncommon",
    status: "Underpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FSand_Icon.webp&w=256&q=75",
    value: 420000,
    demand: "1",
  },
  {
    id: 'diamond',
    name: "Diamond",
    category: "Uncommon",
    status: "Underpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FIce_Icon.webp&w=256&q=75",
    value: 550000,
    demand: "1",
  },
  {
    id: 'diamond',
    name: "Diamond",
    category: "Uncommon",
    status: "Underpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FUncommon%2FDiamond_Icon.webp&w=256&q=75",
    value: 1500000,
    demand: "1",
  },
  // Rare Items
  {
    id: "rubber",
    name: "Rubber",
    category: "Rare",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FRare%2FRubber_Icon.webp&w=256&q=75",
    value: 700000,
    demand: "2",
  },
  {
    id: "Ghost",
    name: "Ghost",
    category: "Rare",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FRare%2FGhost_Icon.webp&w=256&q=75",
    value: 800000,
    demand: "2",
  },
  {
    id: "Light",
    name: "Light",
    category: "Rare",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FRare%2FLight_Icon.webp&w=256&q=75",
    value: 800000,
    demand: "2",
  },
  {
    id: "Barrier",
    name: "Barrier",
    category: "Rare",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FRare%2FBarrier_Icon.webp&w=256&q=75",
    value: 800000,
    demand: "2",
  },
  {
    id: "Light",
    name: "Light",
    category: "Rare",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FRare%2FMagma_Icon.webp&w=256&q=75",
    value: 1150000,
    demand: "2",
  },
  // Legendary Items
  {
    id: "quake",
    name: "Quake",
    category: "Legendary",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FQuake_Icon.webp&w=256&q=75",
    value: 1000000,
    demand: "1",
  },
  {
    id: "Love",
    name: "Love",
    category: "Legendary",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FLove_Icon.webp&w=256&q=75",
    value: 1500000,
    demand: "1",
  },
  {
    id: "Spider",
    name: "Spider",
    category: "Legendary",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FSpider_Icon.webp&w=256&q=75",
    value: 1500000,
    demand: "10",
  },
  {
    id: "Pain",
    name: "Pain",
    category: "Legendary",
    status: "Underpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FPain_Icon.webp&w=256&q=75",
    value: 2000000,
    demand: "10",
  },
  {
    id: "Sound",
    name: "Sound",
    category: "Legendary",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FSound_Icon.webp&w=256&q=75",
    value: 2500000,
    demand: "1",
  },
  {
    id: "Phoenix",
    name: "Phoenix",
    category: "Legendary",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FPhoenix_Icon.webp&w=256&q=75",
    value: 2750000,
    demand: "10",
  },
  {
    id: "Blizzard",
    name: "Blizzard",
    category: "Legendary",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FBlizzard_Icon.webp&w=256&q=75",
    value: 5000000,
    demand: "10",
  },
  {
    id: "Rumble",
    name: "Rumble",
    category: "Legendary",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FRumble_Icon.webp&w=256&q=75",
    value: 7000000,
    demand: "10",
  },
  {
    id: "portal",
    name: "Portal",
    category: "Legendary",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FPortal_Icon.webp&w=256&q=75",
    value: 11000000,
    demand: "10",
  },
  {
    id: "Buddha",
    name: "Buddha",
    category: "Legendary",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FBuddha_Icon.webp&w=256&q=75",
    value: 11000000,
    demand: "10",
  },

  // Mythical Items
  {
    id: 'gravity',
    name: "Gravity",
    category: "Mythical",
    status: "Underpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FGravity_Icon.webp&w=256&q=75",
    value: 2000000,
    demand: "1",
  },
  {
    id: 'shadow',
    name: "Shadow",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FShadow_Icon.webp&w=256&q=75",
    value: 6500000,
    demand: "6",
  },
  {
    id: 'venom',
    name: "Venom",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FVenom_Icon.webp&w=256&q=75",
    value: 8000000,
    demand: "7",
  },
  {
    id: 'Mammoth',
    name: "Mammoth",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FMammoth_Icon.webp&w=256&q=75",
    value: 8000000,
    demand: "7",
  },
  {
    id: 'spirit',
    name: "Spirit",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FSpirit_Icon.webp&w=256&q=75",
    value: 10000000,
    demand: "7",
  },
  {
    id: 't-rex',
    name: "T-Rex",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FT-Rex_Icon.webp&w=256&q=75",
    value: 20000000,
    demand: "8",
  },
  {
    id: 'Dough',
    name: "Dough",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FDough_Icon.webp&w=256&q=75",
    value: 30000000,
    demand: "6",
  },
  {
    id: 'Control',
    name: "Control",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FControl_Icon.webp&w=256&q=75",
    value: 40000000,
    demand: "7",
  },
  {
    id: 'Leopard',
    name: "Leopard",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FLeopard_Icon.webp&w=256&q=75",
    value: 55000000,
    demand: "7",
  },
  {
    id: 'Gas',
    name: "Gas",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FGas_Icon.webp&w=256&q=75",
    value: 85000000,
    demand: "7",
  },
  {
    id: 'Yeti',
    name: "Yeti",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FYeti_Icon.webp&w=256&q=75",
    value: 140000000,
    demand: "8",
  },
  {
    id: 'Kitsune',
    name: "Kitsune",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FKitsune_Icon.webp&w=256&q=75",
    value: 215000000,
    demand: "8",
  },
  {
    id: 'West Dragon',
    name: "West Dragon",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FWest%20Dragon_Icon.webp&w=256&q=75",
    value: 1000000000,
    demand: "8",
  },
  {
    id: 'East Dragon',
    name: "East Dragon",
    category: "Mythical",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FEast%20Dragon_Icon.webp&w=256&q=75",
    value: 860000000,
    demand: "8",
  },
  // Gamepass Items
  {
    id: 'fast-boats',
    name: "Fast Boats",
    category: "Gamepass",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FFast%20Boats_Icon.webp&w=256&q=75",
    value: 120000000,
    demand: "8",
  },
  {
    id: '2x-boss-drops',
    name: "2x Boss Drops",
    category: "Gamepass",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Boss%20Drops_Icon.webp&w=256&q=75",
    value: 120000000,
    demand: "10",
  },
  {
    id: '2x-money',
    name: "2x Money",
    category: "Gamepass",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Money_Icon.webp&w=256&q=75",
    value: 130000000,
    demand: "10",
  },
  {
    id: '2x-mastery',
    name: "+1 Fruit Storage",
    category: "Gamepass",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Mastery_Icon.webp&w=256&q=75",
    value: 150000000,
    demand: "10",
  },
  {
    id: '+1 Fruit Storage',
    name: "Fast Boats",
    category: "Gamepass",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F%2B1%20Fruit%20Storage_Icon.webp&w=256&q=75",
    value: 150000000,
    demand: "10",
  },
  {
    id: 'Legendary Scrolls',
    name: "2x Boss Drops",
    category: "Gamepass",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FLegendary%20Scrolls_Icon.webp&w=256&q=75",
    value: 190000000,
    demand: "4",
  },
  {
    id: 'Dark Blade',
    name: "2x Money",
    category: "Gamepass",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FDark%20Blade_Icon.webp&w=256&q=75",
    value: 400000000,
    demand: "10",
  },
  {
    id: 'Mythical Scrolls',
    name: "+1 Fruit Storage",
    category: "Gamepass",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FMythical%20Scrolls_Icon.webp&w=256&q=75",
    value: 400000000,
    demand: "1",
  },
  {
    id: 'Fruit Notifier',
    name: "+1 Fruit Storage",
    category: "Gamepass",
    status: "Overpaid",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FFruit%20Notifier_Icon.webp&w=256&q=75",
    value: 1215000000,
    demand: "10",
  },
  // Limited Items
  {
    id: 'dark-blade',
    name: "Dark Blade",
    category: "Limited",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FDragon%20Token_Icon.webp&w=256&q=75",
    value: 450000000,
    demand: "10",
  },
  {
    id: 'soul-guitar',
    name: "Soul Guitar",
    category: "Limited",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FPermanent%20Dragon%20Token_Icon.webp&w=256&q=75",
    value: 1000000000,
    demand: "10",
  },
  {
    id: 'soul-guitar',
    name: "Soul Guitar",
    category: "Limited",
    status: "Stable",
    imageUrl: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FChromatic%20Skin_Icon.webp&w=256&q=75",
    value: 1950000000,
    demand: "10",
  },
];

export function ItemSelectModal({ 
  open, 
  onClose, 
  onSelect,
  selectedCategory,
  onCategoryChange,
  categories,
}: ItemSelectModalProps) {
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    const categoryName = categories.find(c => c.id === selectedCategory)?.name || '';
    return itemDatabase
      .filter(item => 
        item.category === categoryName &&
        (search === '' || item.name.toLowerCase().includes(search.toLowerCase()))
      )
      .sort((a, b) => a.value - b.value);
  }, [selectedCategory, search, categories]);

  const getStatusColor = (status: Item['status']) => {
    switch (status) {
      case 'Stable': return 'bg-green-600';
      case 'Underpaid': return 'bg-red-600';
      case 'Overpaid': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-800 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-xl font-semibold text-white">
              Select Item
            </Dialog.Title>
            <Dialog.Close className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search items..."
              className="w-full rounded-lg bg-gray-700 pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Tabs.Root value={selectedCategory} onValueChange={onCategoryChange}>
            <Tabs.List className="flex space-x-2 mb-4 overflow-x-auto">
              {categories.map((category) => (
                <Tabs.Trigger
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500",
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  )}
                >
                  {category.name}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {categories.map((category) => (
              <Tabs.Content key={category.id} value={category.id}>
                <div className="grid grid-cols-4 gap-4 max-h-[400px] overflow-y-auto p-1">
                  {filteredItems.map((item) => (
                    <button
                      key={item.id}
                      className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors"
                      onClick={() => {
                        onSelect(item);
                        onClose();
                      }}
                    >
                      <div className="relative w-20 h-20 mx-auto mb-2 bg-gray-600 rounded-lg">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                        <span className={cn(
                          "absolute top-0 right-0 px-1.5 py-0.5 text-xs text-white rounded-bl-lg",
                          getStatusColor(item.status)
                        )}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-white font-medium">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.value.toLocaleString()}</p>
                      <p className="text-xs text-blue-400">Demand: {item.demand}/10</p>
                    </button>
                  ))}
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}