import React, { useState, useEffect } from 'react';
import { X, Phone, PhoneOff, Mic, MicOff, Shield, Radio, Volume2, Mail } from 'lucide-react';
import { triggerZadarmaCall, hangupZadarmaCall } from '../utils/callTrigger';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  const [seconds, setSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [callState, setCallState] = useState<'connecting' | 'connected' | 'ended'>('connecting');

  useEffect(() => {
    if (!isOpen) {
      setSeconds(0);
      setCallState('connecting');
      return;
    }

    // Trigger Zadarma WebRTC call
    triggerZadarmaCall();
    setCallState('connecting');

    // Simulate transition to active call state
    const connectTimer = setTimeout(() => {
      setCallState('connected');
    }, 2500);

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(connectTimer);
      clearInterval(timer);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleHangup = () => {
    setCallState('ended');
    hangupZadarmaCall();
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#0F101A] border border-white/15 rounded-3xl p-7 sm:p-8 shadow-2xl text-white overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
            <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>24/7 SRE VOICE LINE</span>
          </div>
          <button
            onClick={handleHangup}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Central Calling Graphic */}
        <div className="flex flex-col items-center justify-center text-center my-6 relative z-10">
          <div className="relative flex items-center justify-center mb-6">
            {/* Concentric pulse rings */}
            <div className="absolute w-32 h-32 rounded-full bg-[#00DDBA]/20 animate-ping opacity-60" />
            <div className="absolute w-24 h-24 rounded-full bg-emerald-500/30 animate-pulse" />
            
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#00DDBA] to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Phone className="w-9 h-9 text-neutral-950 animate-bounce" />
            </div>
          </div>

          <h3 className="text-xl font-bold font-sans tracking-tight text-white mb-1">
            Code17 On-Call Desk
          </h3>
          <p className="text-xs font-mono text-neutral-400 mb-3">
            WebRTC Encrypted Line &bull; SIP #413063
          </p>

          <div className="text-2xl font-mono font-black text-emerald-400 tracking-wider">
            {formatTime(seconds)}
          </div>

          <div className="mt-2 text-xs text-neutral-400 flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {callState === 'connecting' ? 'Connecting live audio stream...' : 'Microphone connected with Lead SRE'}
            </span>
          </div>
        </div>

        {/* Control Action Buttons */}
        <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/10 relative z-10">
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isMuted
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'bg-white/10 text-neutral-300 hover:text-white hover:bg-white/15'
            }`}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          {/* End Call Button */}
          <button
            type="button"
            onClick={handleHangup}
            className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-rose-600/30 hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <PhoneOff className="w-4 h-4" />
            <span>End Call</span>
          </button>
        </div>

        {/* Bottom Fallback Notice */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 font-mono relative z-10">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Encrypted Voice Stream
          </span>
          <a
            href="mailto:contact@code17.tech"
            className="text-[#00DDBA] hover:underline flex items-center gap-1"
          >
            <Mail className="w-3 h-3" />
            contact@code17.tech
          </a>
        </div>
      </div>
    </div>
  );
};
