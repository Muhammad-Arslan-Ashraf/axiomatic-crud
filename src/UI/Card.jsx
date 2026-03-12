import Button from "./Button";
const Card = ({ id, title, body, onDelete, onEdit }) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-5 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/60 transition-all duration-300">
        <span className="font-syne font-extrabold text-6xl text-white/5 absolute top-3 right-4 select-none">
          {id}
        </span>
        <span className="inline-flex items-center gap-1.5 self-start bg-indigo-500/10 border border-indigo-400/25 text-indigo-300 text-[0.68rem] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          Qoutes
        </span>
        <div className="flex flex-col gap-2 flex-1">
          <p className="font-syne font-semibold text-white/90 text-[0.95rem] leading-snug">
            Title: {title}
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-1"></div>
          <p className="text-white/40 text-sm font-light leading-relaxed">
            Body: {body}
          </p>
        </div>
        <div className="flex items-center justify-between pt-1">
          <Button onClick={() => onDelete(id)} onClickEdit={() => onEdit()} />{" "}
          {/* <span class="text-white/20 text-xs">2 min read</span> */}
        </div>
      </div>
    </>
  );
};

export default Card;
