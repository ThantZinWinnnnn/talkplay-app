import { Plus } from "lucide-react";
import Layout from "../components/layout";
import { Button } from "../components/ui/button";

const ChatsPage = () => {
  return (
    <Layout>
      <main className="w-full h-full bg-slate-400 p-3 flex gap-5">
        <section className="w-2/5 p-6 rounded-md shadow-lg bg-white h-full flex flex-col gap-6">
          <header className="flex items-center justify-between h-fit">
            <h1 className="text-3xl font-semibold">Chats</h1>
            <Button>
              Group Chat <Plus />
            </Button>
          </header>
          <div className="border border-slate-500 rounded-md h-full p-3">
            <Button
              variant="secondary"
              className="w-full flex justify-start py-6"
            >
              <p className="text-left">Test User</p>
            </Button>
          </div>
        </section>
        <section className="w-3/5 border rounded-md shadow-lg bg-white h-full">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-lg font-semibold">
              Click a user to start Chatting.
            </span>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ChatsPage;
