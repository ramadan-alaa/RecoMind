import edit from "../assets/images/PencilSimpleLine.png";

const InputField = ({
  label,
  value,
  onChange,
  onEdit,
  type = "text",
  fullWidth = true,
}) => {
  return (
    <div className={`flex flex-col ${fullWidth ? "w-full" : ""}`}>
      <label className="text-white text-[20px] font-normal mb-2 block">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full h-[52px] bg-[#454A5599] text-[#B9B8B8] text-[16px] font-medium px-4 pr-[110px] rounded-lg border border-transparent focus:border-[var(--Secondary)] focus:outline-none transition-all"
        />

        <button
          onClick={onEdit}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1C2435] text-white text-[16px] font-medium px-3 py-1.5 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-all"
        >
          <img src={edit} alt="Edit" className="w-4 h-4" />
          <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

export default InputField;
