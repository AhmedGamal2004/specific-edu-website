import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Mail, Github, Award, Sparkles, Check } from "lucide-react";
import { TEAM_MEMBERS } from "../data/teamData";

export default function Team() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleEmailClick = (id: number, email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50 relative overflow-hidden" dir="rtl">
      {/* Background ambient glows - High-End Pulsing Orbs */}
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-[130px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-bl from-accent/20 to-purple-500/20 rounded-full blur-[150px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[40%] left-[30%] w-[450px] h-[450px] bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Header Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-accent/20 rotate-3 hover:rotate-6 transition-transform"
          >
            <Users className="text-white w-10 h-10" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-primary mb-6 font-arabic leading-tight"
          >
            فريق <span className="text-accent relative inline-block">
              المطورين
              <span className="absolute bottom-1 left-0 w-full h-2 bg-accent/10 -z-10 rounded" />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xl font-arabic max-w-2xl mx-auto"
          >
            العقول المبدعة والجهود المتميزة التي وقفت خلف بناء وتصميم هذا الصرح الرقمي التعليمي.
          </motion.p>
        </div>
      </section>

      {/* Team Members Section - Premium Glassmorphism Card Grid */}
      <section className="py-10 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-2xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30 hover:scale-[1.02] transition-all duration-500 flex flex-col items-center p-8 md:p-10 relative group overflow-hidden"
              >
                {/* Accent glow on card hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-300" />
                
                {/* Floating role badge */}
                <div className="absolute top-6 left-6 bg-accent-soft/80 backdrop-blur-sm text-accent text-xs font-bold px-3 py-1.5 rounded-full font-arabic flex items-center gap-1.5 border border-accent/10">
                  <Sparkles size={12} className="text-accent" />
                  <span>مطور مميز</span>
                </div>

                {/* Avatar/Image Area */}
                <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 mt-4">
                  {/* Glowing Border */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent to-indigo-600 rounded-full blur-[4px] opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                  <div className="absolute inset-1 bg-white rounded-full overflow-hidden z-10 border-2 border-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=2563EB&color=ffffff&size=200`;
                      }}
                    />
                  </div>
                </div>

                {/* Info Area */}
                <div className="text-center w-full z-10 flex-grow flex flex-col items-center">
                  <h3 className="text-3xl font-extrabold text-primary font-arabic mb-2 group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <span className="text-sm font-semibold text-accent/80 font-arabic bg-blue-50/80 backdrop-blur-sm px-4 py-1.5 rounded-xl mb-4 border border-blue-100/50">
                    {member.role}
                  </span>

                  <p className="text-text-muted text-base font-arabic leading-relaxed max-w-sm mb-6 text-center">
                    {member.specialty}
                  </p>

                  {/* Skills tags */}
                  <div className="w-full mb-6">
                    <h4 className="text-xs font-bold text-primary/40 uppercase tracking-wider mb-3 font-arabic text-center flex items-center justify-center gap-1.5">
                      <Award size={14} className="text-accent/60" />
                      <span>المهارات والخبرات</span>
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-white/50 backdrop-blur-sm hover:bg-accent-soft hover:text-accent border border-slate-200/60 hover:border-accent/20 text-slate-600 px-3 py-1 rounded-xl text-xs font-semibold font-arabic transition-all duration-200 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer/Contact Area */}
                <div className="w-full pt-6 mt-auto border-t border-white/60 flex justify-center gap-5 z-10">
                  {member.whatsapp && (
                    <a
                      href={`https://wa.me/${member.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/50 hover:bg-green-50 text-text-muted hover:text-green-600 border border-slate-200/60 hover:border-green-200 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                      title="اتصال واتساب"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.768 2.589-5.768 5.77 0 1.018.265 2.013.766 2.897l-.815 2.977 3.048-.8c.854.466 1.812.712 2.769.712h.003c3.182 0 5.769-2.589 5.769-5.77 0-3.18-2.587-5.769-5.769-5.769zm3.4 8.113c-.147.415-.853.79-1.18.847-.29.05-.668.082-1.084-.05-.257-.082-.584-.194-.985-.369-1.709-.744-2.812-2.479-2.896-2.592-.084-.112-.678-.9-.678-1.72 0-.822.428-1.226.581-1.393.153-.167.333-.209.444-.209.112 0 .223.002.32.008.1.005.234-.037.366.277.132.313.453 1.102.493 1.185.04.083.067.18.012.29-.055.112-.083.181-.166.277-.083.097-.175.216-.25.297-.084.09-.17.187-.073.354.097.167.433.714.93 1.156.64.57 1.18.747 1.348.83.167.083.264.069.361-.043.098-.112.417-.487.529-.654.112-.167.223-.139.376-.083.153.056.974.459 1.141.542.167.083.278.125.32.194.041.07.041.403-.106.818zM12 2C6.477 2 2 6.477 2 12c0 1.885.519 3.654 1.43 5.179L2 22l4.96-1.302A9.974 9.974 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.166-.433-4.502-1.19l-.323-.183-2.984.783.797-2.912-.202-.321A7.959 7.959 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                    </a>
                  )}
                  {member.email && (
                    <div className="relative">
                      <a
                        href={`mailto:${member.email}`}
                        onClick={() => handleEmailClick(member.id, member.email!)}
                        className="w-10 h-10 rounded-full bg-white/50 hover:bg-accent-soft text-text-muted hover:text-accent border border-slate-200/60 hover:border-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                        title="البريد الإلكتروني (اضغط للمراسلة والنسخ تلقائياً)"
                      >
                        <Mail size={18} />
                      </a>
                      <AnimatePresence>
                        {copiedId === member.id && (
                          <motion.span
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -45, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                            className="absolute left-1/2 -translate-x-1/2 bg-slate-950 text-white text-xs px-2.5 py-1.5 rounded-xl whitespace-nowrap shadow-lg flex items-center gap-1.5 z-20 pointer-events-none"
                          >
                            <Check size={12} className="text-green-400" />
                            <span>تم نسخ الإيميل!</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/50 hover:bg-accent-soft text-text-muted hover:text-accent border border-slate-200/60 hover:border-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                      title="حساب GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
