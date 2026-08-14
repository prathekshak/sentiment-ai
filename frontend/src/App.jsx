import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, RefreshCw, AlertCircle, CheckCircle2, ShieldCheck, Zap, Globe, MessageSquareQuote } from 'lucide-react';

function App() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

 
  const quickReviews = [
    { label: "Positive", text: "The stay was absolutely wonderful and the staff was so helpful!" },
    { label: "Negative", text: "Terrible service, the room was dirty and the food was cold." },
    { label: "Sarcastic", text: "The only good thing about this place was the exit door." },
    { label: "Complex", text: "I thought it would be a super, but it was actually worst." }
  ];

  const analyzeSentiment = async (overrideText = null) => {
    const textToAnalyze = overrideText || review;
    if (!textToAnalyze.trim()) return;
    
    setLoading(true);
    try {
      const response = await axios.post(`http://127.0.0.1:8000/predict?review=${encodeURIComponent(textToAnalyze)}`);
      setResult(response.data);
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Lumina Engine Offline. Please ensure the FastAPI server is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSelect = (text) => {
    setReview(text);
    analyzeSentiment(text);
  };

  const reset = () => {
    setReview('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 font-sans selection:bg-cyan-500/30 selection:text-white">
      
      <div className="fixed inset-0 overflow-hidden -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px]" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-lg"
      >
        <div className={`absolute -inset-1 rounded-[2.5rem] blur-2xl opacity-20 transition-all duration-1000 ${
          result ? (result.sentiment === 'Positive' ? 'bg-cyan-400' : 'bg-rose-500') : 'bg-blue-600'
        }`} />

        <div className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl">
          
          <header className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent tracking-tight">
                Lumina Sentiment AI
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <p className="text-cyan-400/80 text-[10px] font-bold tracking-[0.2em] uppercase">Neural Engine Active</p>
              </div>
            </div>
            <motion.button 
              whileHover={{ rotate: 180, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={reset}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-slate-400 transition-colors border border-white/5"
            >
              <RefreshCw size={20} />
            </motion.button>
          </header>

          {/* Quick Selection Chips */}
          <div className="mb-6">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <MessageSquareQuote size={12}/> Quick Intelligence Tests
            </p>
            <div className="flex flex-wrap gap-2">
              {quickReviews.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickSelect(item.text)}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300 hover:bg-white/10 hover:border-cyan-500/50 transition-all active:scale-95"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Type or select a test review..."
                className="w-full h-40 bg-slate-950/50 border border-white/5 rounded-2xl p-5 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/30 transition-all resize-none text-lg shadow-inner"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => analyzeSentiment()}
              disabled={loading || !review}
              className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                loading ? 'bg-slate-800 text-slate-500' : 'bg-white text-slate-950 hover:bg-cyan-50'
              }`}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><RefreshCw size={18}/></motion.div>
                  <span>Inference in progress</span>
                </div>
              ) : (
                <>Process Neural Map <Send size={16} /></>
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8"
              >
                <div className={`p-1 rounded-2xl bg-gradient-to-b ${
                  result.sentiment === 'Positive' ? 'from-cyan-500/20 to-transparent' : 'from-rose-500/20 to-transparent'
                }`}>
                  <div className="bg-slate-950/40 backdrop-blur-md p-6 rounded-[calc(1.2rem)] border border-white/5">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${result.sentiment === 'Positive' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-rose-500/20 text-rose-400'}`}>
                          {result.sentiment === 'Positive' ? <CheckCircle2 size={24}/> : <AlertCircle size={24}/>}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">AI Classification</p>
                          <h3 className="text-2xl font-black text-white">{result.sentiment}</h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Confidence</p>
                        <p className="text-xl font-mono font-bold text-white">{result.confidence}</p>
                      </div>
                    </div>

                    <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: result.confidence }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className={`absolute h-full rounded-full ${
                          result.sentiment === 'Positive' 
                          ? 'bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
                          : 'bg-gradient-to-r from-rose-600 to-rose-400 shadow-[0_0_15px_rgba(251,113,133,0.4)]'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 pt-8 border-t border-white/5 flex justify-between items-center px-2">
             <div className="flex flex-col gap-1">
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">Architecture</span>
                <span className="text-white/60 text-[11px] font-medium flex items-center gap-1.5"><Zap size={10} className="text-cyan-500"/> Bi-LSTM RNN</span>
             </div>
             <div className="flex flex-col gap-1 text-center">
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">Infrastructure</span>
                <span className="text-white/60 text-[11px] font-medium flex items-center gap-1.5"><Globe size={10} className="text-cyan-500"/> FastAPI OS</span>
             </div>
             <div className="flex flex-col gap-1 text-right">
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">Security</span>
                <span className="text-white/60 text-[11px] font-medium flex items-center gap-1.5"><ShieldCheck size={10} className="text-cyan-500"/> Neural-Gate</span>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;