import React from "react";

const TechnicalSpecs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-gray-800 font-montserrat">
          Технические размеры кружки
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 flex justify-center">
            <img
              src="https://cdn.poehali.dev/files/6d2dc429-fb85-4ef9-8815-b8f49dec81ea.jpg"
              alt="Технические размеры кружки"
              className="max-w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex-1">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-montserrat">
                Характеристики
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-gray-800 font-medium">
                    Диаметр с полями:
                  </span>
                  <span className="text-gray-800 font-bold">85 мм</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-gray-800 font-medium">
                    Диаметр без полей:
                  </span>
                  <span className="text-gray-800 font-bold">95 мм</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-gray-800 font-medium">Высота:</span>
                  <span className="text-gray-800 font-bold">до 200 мм</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-800 font-medium">
                    Область печати:
                  </span>
                  <span className="text-gray-800 font-bold">200×95 мм</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;
