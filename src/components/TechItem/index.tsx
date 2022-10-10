import { TechItemType } from '../../Types/TechItem'

type TechItemProps = {
  data: TechItemType
}

const TechItem = ({ data }: TechItemProps) => {
  return (
    <div><span>{data.title.toUpperCase()}</span></div>
  )
}

export default TechItem