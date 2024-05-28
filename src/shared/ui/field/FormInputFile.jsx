
const FormInputFile = ({placeholder}) => {
  return (
    <label htmlFor="file-upload" className="relative w-full h-full cursor-pointer py-[40px]">
      <input id="file-upload" type="file" className="hidden" />
      <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full border-dashed border-[3px] border-[#ebebeb] rounded-[20px] text-[#C6C6C6]">
        <span>+</span>
        <span>{placeholder}</span>
      </div>
    </label>
  )
}

export default FormInputFile
