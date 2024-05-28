import { CallIcon, ClockIcon } from "../../ui/icons/icons"

const RestaurantBriefInfo = ({ data, className }) => {
  return (
    <div className={`w-full bg-white rounded-[20px] ${className}`}>
      <div className="grid grid-cols-[133px_1fr] gap-x-[20px] gap-y-[10px] max-md:grid-cols-1">
        <img src={data.icon} alt="icon" className="w-[133px] rounded-full max-md:hidden" />
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[35px] font-[600] leading-[52.5px]">
            {data.fullName}
          </h1>
          <p className="text-[20px] leading-[30px] font-[500]">
            {data.description}
          </p>
        </div>
        <div></div>
        <div className="flex gap-[15px] flex-wrap">
          <div className="flex items-center gap-[10px] px-[40px] py-[10px] bg-gradient-to-t from-[#599AFF] to-[#4577FB] text-white rounded-[15px] text-[15px]">
            <CallIcon />
            <span>{data.call}</span>
          </div>
          <div className="flex items-center gap-[10px] px-[40px] py-[10px] bg-gradient-to-t from-[#599AFF] to-[#4577FB] text-white rounded-[15px] text-[15px]">
            <ClockIcon />
            <span>{data.workingHours}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-[repeat(3,55px)] gap-x-[10px] gap-y-[10px] mt-[50px] max-md:grid-cols-1">
        {data.services.map((service) => (
          <div key={service + Math.random()} className="flex py-[10px] px-[20px] gap-x-[10px] h-[53px] items-center shadow-[0px_4px_10px_-2px_rgba(0,0,0,.2)] rounded-[20px]">
            <img src={service.icon} alt="icon" className="w-[30px] rounded-full" />
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantBriefInfo
