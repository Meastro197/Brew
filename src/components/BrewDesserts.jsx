import { dessertMenu } from '../data/brewDesserts.js';

const BrewMenu = () => {
  const sizeLabels = {
    cheesecakes: '(Price per piece)',
    muffins: '(Price per piece)',
    cakes: '(Price per piece)',
    tart: '(Price per piece)',
    bouleGlace: '(Price per piece)',
    softCream: '(S / M)',
    topping: '(S / M)',
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl pt-20 font-bold text-center text-blue-600 mb-6">
        Brew Café Desserts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(dessertMenu).map(([category, items]) => (
          <div key={category} className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold border-b mb-3 capitalize text-white-300 flex justify-between items-center">
              <span>{category.replace(/([A-Z])/g, ' $1')}</span>
              {sizeLabels[category] && (
                <span className="text-sm font-normal text-white-200">
                  {sizeLabels[category]}
                </span>
              )}
            </h2>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span className="capitalize">{item.title}</span>
                  <span className="text-white-300">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrewMenu;
