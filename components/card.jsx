import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardDemo() {
  return (
    <div className="mx-auto">
    <Card className="w-full max-w-75">
      <CardHeader>
        <div className="flex place-content-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2164/2164111.png"
            alt=""
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className=" flex place-content-center ">
          French Cuisine
        </CardTitle>
        <CardDescription className=" flex place-content-center ">
          (45 chefs available)
        </CardDescription>
      </CardContent>
    </Card>
  </div>)
}
