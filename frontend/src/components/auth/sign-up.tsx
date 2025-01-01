import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Image, Trash } from "lucide-react";
import { useCallback, useRef, useState } from "react";
const SignUp = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const inputImageRef = useRef<HTMLInputElement>(null);

  const handleUploadImageClick = useCallback(() => {
    inputImageRef.current?.click();
  }, [inputImageRef]);

  const handleFileChange = useCallback(() => {
    const imageFile = inputImageRef.current?.files?.[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.onerror = () => {
        console.error("Error reading the image file");
        setImage(null);
      };
      reader.readAsDataURL(imageFile);
    }
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Enter your Email"
          className="h-[50px]"
        />
      </div>
      <div className="space-y-2">
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Enter your Password"
          className="h-[50px]"
        />
      </div>
      <div className="space-y-2">
        <Label>Confirm Password</Label>
        <Input
          type="password"
          placeholder="Confirm your Password"
          className="h-[50px]"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Label>Upload Your Picture (Optional)</Label>
        {image !== "" && image !== null ? (
          <div className="flex items-center justify-between w-full">
            <img
              src={image as string}
              alt="profile"
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
            <Button
              variant={"destructive"}
              onClick={() => setImage(null)}
              className="h-[50px]"
            >
              <Trash />
              Remove
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleUploadImageClick}
            className="h-[50px]"
            variant={"outline"}
          >
            <Image />
            Upload
          </Button>
        )}
        <Input
          ref={inputImageRef}
          type="file"
          className="h-[50px] hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <Button className="py-5 mt-10">Sign Up</Button>
    </div>
  );
};

export default SignUp;
