import { memo } from "react"

type TechnologiesProps = {
  technology: string
}

const Technologies = ({ technology }: TechnologiesProps) => {
  return (
    <div className="border rounded-md text-xs font-semibold p-1">
      {technology}
    </div>
  )
}

export default memo(Technologies);