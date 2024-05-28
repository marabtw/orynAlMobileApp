import FormInputFile from "../../../ui/Field/FormInputFile"

const FormInputFileWrapper = ({ placeholder = "...", label = "..." }) => {
  return (
    <div className="w-full h-full flex flex-col gap-[15px]">
      <h3 className="text-[15px] font-[600] left-[22.5px]">{label}</h3>
      <FormInputFile placeholder={placeholder} />
    </div>
  )
}

export default FormInputFileWrapper
