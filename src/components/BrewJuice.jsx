import { juiceMenu } from '../data/brewJuiceMenu.js';

const BrewJuice = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Bilingual Title */}
      <h1 className="text-3xl pt-20 font-bold text-center text-blue-600 mb-6">
        Fresh Natural Juices / عصير طبيعي طـازج
      </h1>
      
      {/* Menu Table */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-blue-500">
              <th className="text-left pb-2 font-semibold w-2/5"></th>
              <th className="text-center pb-2 font-semibold w-1/5">Price</th>
              <th className="text-right pb-2 font-semibold w-2/5"></th>
            </tr>
          </thead>
          <tbody>
            {juiceMenu.freshJuices.map((item, index) => (
              <tr 
                key={`juice-${index}`} 
                className="border-b border-blue-500 last:border-b-0 hover:bg-blue-700 transition-colors"
              >
                <td className="py-3 text-left capitalize">{item.en}</td>
                <td className="py-3 text-center">{item.price} </td>
                <td className="py-3 text-right font-arabic">{item.ar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Bilingual Disclaimer */}
      <p className="text-center mt-6 text-sm italic text-gray-600">
        * Prices may vary depending on fruit season (up or down) /
        * قد يختلف السعر حسب موسم الفواكه، صعوداً أو نزولا
      </p>
    </div>
  );
};

export default BrewJuice;