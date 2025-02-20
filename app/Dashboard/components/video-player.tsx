import { Play, Pause, SkipBack, SkipForward, Maximize, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function VideoPlayer() {
  return (
    <div className="bg-blue-900 rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 bg-blue-800">
        {/* Video placeholder */}
        <div className="flex items-center justify-center h-full text-white text-2xl">فيديو الدرس</div>
      </div>
      <div className="bg-blue-900 p-4">
        <div className="flex items-center justify-between text-white mb-2">
          <div className="flex space-x-2 space-x-reverse">
            <Button size="sm" variant="ghost">
              <Play className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Pause className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Volume2 className="h-4 w-4" />
            <Slider defaultValue={[50]} max={100} step={1} className="w-24" />
            <Button size="sm" variant="ghost">
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Slider defaultValue={[0]} max={100} step={1} />
      </div>
    </div>
  )
}

