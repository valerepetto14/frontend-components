import React, { useEffect } from "react";

const Tabs = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab");
    const indicator = document.querySelector(".indicator");
    const panels = document.querySelectorAll(".tab-panel");

    // Inicializar el indicador con la primera pestaña
    indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indicator.style.left =
      tabs[0].getBoundingClientRect().left -
      tabs[0].parentElement.getBoundingClientRect().left +
      "px";

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabTarget = tab.getAttribute("aria-controls");

        // Actualizar el indicador
        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left =
          tab.getBoundingClientRect().left -
          tab.parentElement.getBoundingClientRect().left +
          "px";

        // Mostrar u ocultar paneles
        panels.forEach((panel) => {
          const panelId = panel.getAttribute("id");
          if (tabTarget === panelId) {
            panel.classList.remove("invisible", "opacity-0");
            panel.classList.add("visible", "opacity-100");
          } else {
            panel.classList.add("invisible", "opacity-0");
          }
        });
      });
    });
  }, []);

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <div className="max-w-3xl mx-auto px-8 sm:px-0">
        <div className="sm:w-7/12 sm:mx-auto">
          <div
            role="tablist"
            aria-label="tabs"
            className="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
          >
            <div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md"></div>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex="0"
              className="relative block h-10 px-6 tab rounded-full"
            >
              <span className="text-gray-800">First Tab</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabIndex="-1"
              className="relative block h-10 px-6 tab rounded-full"
            >
              <span className="text-gray-800">Second Tab</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-3"
              id="tab-3"
              tabIndex="-1"
              className="relative block h-10 px-6 tab rounded-full"
            >
              <span className="text-gray-800">Third Tab</span>
            </button>
          </div>
          <div className="mt-6 relative rounded-3xl bg-purple-50">
            <div
              role="tabpanel"
              id="panel-1"
              className="tab-panel p-6 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                First tab panel
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                dolores voluptate temporibus, atque ab eos, delectus at ad hic
                voluptatem veritatis iure, nulla voluptates quod nobis
                doloremque eaque! Perferendis, soluta.
              </p>
            </div>
            <div
              role="tabpanel"
              id="panel-2"
              className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Second tab panel
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                dolores voluptate temporibus, atque ab eos, delectus at ad hic
                voluptatem veritatis iure, nulla voluptates quod nobis
                doloremque eaque! Perferendis, soluta.
              </p>
            </div>
            <div
              role="tabpanel"
              id="panel-3"
              className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Third tab panel
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                dolores voluptate temporibus, atque ab eos, delectus at ad hic
                voluptatem veritatis iure, nulla voluptates quod nobis
                doloremque eaque! Perferendis, soluta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
