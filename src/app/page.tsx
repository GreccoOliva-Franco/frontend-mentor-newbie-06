import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center p-6 bg-bg">
      <Card className="max-w-sm bg-card-bg">
        <CardHeader>
          <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden rounded-md bg-card-bg-accent">
            <Image
              src={"/image-equilibrium.jpg"}
              alt="An acrylic dice standing on one vertix"
              height={400}
              width={400}
              className="size-full"
            />
            <div
              className={cn(
                "absolute top-0 left-0",
                "flex justify-center items-center size-full",
                "bg-card-bg-accent opacity-0",
                "hover:opacity-50 hover:cursor-pointer"
              )}
            >
              <Image
                src={"/icon-view.svg"}
                alt="View icon"
                height={50}
                width={50}
                className=""
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <CardTitle
            className={cn(
              "text-2xl text-card-title",
              "hover:text-card-text-accent hover:cursor-pointer"
            )}
          >
            Equilibrium #3429
          </CardTitle>
          <CardDescription className="text-md text-card-text/70">
            Our Equilibrium collection promotes balance and calm.
          </CardDescription>
          <div className="flex justify-between">
            <span className="flex items-center gap-2 text-card-text-accent font-bold">
              <Image
                src={"/icon-ethereum.svg"}
                alt="Ethereum icon"
                height={50}
                width={50}
                className="w-3"
              />{" "}
              0.041 ETH
            </span>
            <span className="flex items-center gap-2 text-card-text font-bold">
              <Image
                src={"/icon-clock.svg"}
                alt="Clock icon"
                height={50}
                width={50}
                className="aspect-square size-5"
              />
              3 days left
            </span>
          </div>
          <Separator className="bg-separator" />
          <div className="mt-1 flex items-center gap-3">
            <Image
              src={"/image-avatar.png"}
              alt="Avatar for Jules Wyvern"
              height={50}
              width={50}
              className="size-8 outline outline-white rounded-full"
            />
            <span className="text-card-text">
              Creation of{" "}
              <span
                className={cn(
                  "text-card-title",
                  "hover:text-card-text-accent hover:cursor-pointer"
                )}
              >
                Jules Wyvern
              </span>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
