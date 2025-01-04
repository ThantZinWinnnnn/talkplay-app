import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TypeRaceCreateForm = () => {
  const [name, setName] = React.useState("");
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <form
      className="flex flex-col gap-5  p-4 w-[400px]"
      onSubmit={formSubmitHandler}
    >
      <div className="space-y-3">
        <Label htmlFor="name">Name</Label>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
      </div>
      <Button type="submit" className="py-6">
        Create Game
      </Button>
    </form>
  );
};

export default TypeRaceCreateForm;
