export default function ProgressBar() {
  return (
    <div>
      <div className="w-full h-10 bg-white p-1 rounded-xl mb-3">
        <div className={`w-[50%] h-full bg-[#12B76A] rounded-md`} />
      </div>
      <p className="text-2xl text-[#101828] font-medium text-center">40%</p>
    </div>
  );
}
