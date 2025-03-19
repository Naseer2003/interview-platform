import {LoaderIcon} from "lucide-react";

function LoaderUi() {
  return (
    <div className="h-[calc(100vh-4rem-1px)] flex items-center justify-center">
        <LoaderIcon className="h-8 w-8 text-muted-foreground animate-spin" />
    </div>
  )
}

export default LoaderUi;