import CanvasBord from "@/components/canvas-form/canvas-board";
import CanvasSidebar from "@/components/canvas-form/canvas-sidebar";
import React from "react";

const CanvasPage = () => {
  return (
    <main className="py-10">
      <h1 className="text-center uppercase text-2xl font-semibold">
        Canvas Drawing
      </h1>
      <section className="flex gap-10 justify-center mt-10">
        <CanvasSidebar />
        <CanvasBord />
      </section>
    </main>
  );
};

export default CanvasPage;
