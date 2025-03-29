import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ItemSelectModal } from './ItemSelectModal';
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

interface TradeSlot {
  items: (Item | null)[];
  totalValue: number;
  totalPrice: number;
}

export function TradeCalculator() {
  const [yourTrade, setYourTrade] = useState<TradeSlot>({
    items: [null, null, null, null],
    totalValue: 0,
    totalPrice: 0,
  });

  const [theirTrade, setTheirTrade] = useState<TradeSlot>({
    items: [null, null, null, null],
    totalValue: 0,
    totalPrice: 0,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<{ side: 'you' | 'them'; index: number } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('common');

  const categories = [
    { id: 'common', name: 'Common' },
    { id: 'uncommon', name: 'Uncommon' },
    { id: 'rare', name: 'Rare' },
    { id: 'legendary', name: 'Legendary' },
    { id: 'mythical', name: 'Mythical' },
    { id: 'gamepass', name: 'Gamepass' },
    { id: 'limited', name: 'Limited' },
  ];

  const handleItemSelect = (item: Item) => {
    if (!activeSlot) return;

    const { side, index } = activeSlot;
    const tradeSlot = side === 'you' ? yourTrade : theirTrade;
    const setTradeSlot = side === 'you' ? setYourTrade : setTheirTrade;

    const newItems = [...tradeSlot.items];
    newItems[index] = item;

    const totalValue = newItems.reduce((sum, item) => sum + (item?.value || 0), 0);

    setTradeSlot({
      items: newItems,
      totalValue,
      totalPrice: totalValue,
    });
  };

  const EmptySlot = ({ onClick }: { onClick: () => void }) => (
    <div
      onClick={onClick}
      className="w-full h-32 md:w-32 md:h-32 bg-blue-800/30 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-800/40 transition-colors"
    >
      <Plus className="w-8 h-8 text-blue-400" />
    </div>
  );

  const FilledSlot = ({ item, onRemove }: { item: Item; onRemove: () => void }) => (
    <div className="w-full h-32 md:w-32 md:h-32 bg-gray-700 rounded-lg p-2 relative group">
      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain" />
      <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
        <span className="text-white text-sm">{item.value.toLocaleString()}</span>
        <button
          onClick={onRemove}
          className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );

  const TradeSection = ({
    side,
    tradeSlot,
    setTradeSlot,
  }: {
    side: 'you' | 'them';
    tradeSlot: TradeSlot;
    setTradeSlot: React.Dispatch<React.SetStateAction<TradeSlot>>;
  }) => {
    const handleRemoveItem = (index: number) => {
      const newItems = [...tradeSlot.items];
      newItems[index] = null;
      const totalValue = newItems.reduce((sum, item) => sum + (item?.value || 0), 0);
      setTradeSlot({
        items: newItems,
        totalValue,
        totalPrice: totalValue,
      });
    };

    return (
      <div className="flex-1">
        <h2 className="text-white text-xl font-semibold mb-4">{side === 'you' ? 'You' : 'Them'}</h2>
        <div className="grid grid-cols-2 gap-4">
          {tradeSlot.items.map((item, index) =>
            item ? (
              <FilledSlot key={index} item={item} onRemove={() => handleRemoveItem(index)} />
            ) : (
              <EmptySlot
                key={index}
                onClick={() => {
                  setActiveSlot({ side, index });
                  setModalOpen(true);
                }}
              />
            )
          )}
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-white">
            <span>PRICE:</span>
            <span className="text-blue-400">${tradeSlot.totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-white">
            <span>VALUE:</span>
            <span className="text-white">{tradeSlot.totalValue.toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  };

  const valueDifference = yourTrade.totalValue - theirTrade.totalValue;
  const tradeStatus =
    Math.abs(valueDifference) < 100000
      ? 'Fair'
      : valueDifference > 0
      ? 'You are overpaying'
      : 'They are overpaying';
  const statusColor =
    Math.abs(valueDifference) < 100000 ? 'text-green-500' : 'text-red-500';

  return (
    <>
      <div className="bg-gray-800/50 p-4 md:p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <TradeSection side="you" tradeSlot={yourTrade} setTradeSlot={setYourTrade} />
          <div className="flex flex-col items-center justify-center">
            <div className={cn('text-lg font-semibold mb-2', statusColor)}>
              {tradeStatus}
            </div>
            <div className="text-gray-400 text-sm">
              Difference: {Math.abs(valueDifference).toLocaleString()}
            </div>
          </div>
          <TradeSection side="them" tradeSlot={theirTrade} setTradeSlot={setTheirTrade} />
        </div>
      </div>

      <ItemSelectModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setActiveSlot(null);
        }}
        onSelect={handleItemSelect}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
    </>
  );
}
