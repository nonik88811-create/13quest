import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioAmbienceProps {
  onLabel: string;
  offLabel: string;
}

export const AudioAmbience: React.FC<AudioAmbienceProps> = ({ onLabel, offLabel }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const heartbeatTimerRef = useRef<number | null>(null);

  const startSound = () => {
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtxClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master gain node
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Dark low drone
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(55, ctx.currentTime); // Low A

      // Lowpass filter for muffled dark horror rumble
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, ctx.currentTime);

      osc.connect(filter);
      filter.connect(masterGain);
      osc.start();
      oscillatorRef.current = osc;

      // Heartbeat pulse synthesizer loop
      const triggerHeartbeat = () => {
        if (!audioCtxRef.current) return;
        const now = audioCtxRef.current.currentTime;
        const hbOsc = audioCtxRef.current.createOscillator();
        const hbGain = audioCtxRef.current.createGain();

        hbOsc.type = 'sine';
        hbOsc.frequency.setValueAtTime(45, now);
        hbOsc.frequency.exponentialRampToValueAtTime(30, now + 0.12);

        hbGain.gain.setValueAtTime(0, now);
        hbGain.gain.linearRampToValueAtTime(0.18, now + 0.03);
        hbGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

        hbOsc.connect(hbGain);
        hbGain.connect(ctx.destination);
        hbOsc.start(now);
        hbOsc.stop(now + 0.18);

        // Second beat (lub-dub)
        setTimeout(() => {
          if (!audioCtxRef.current) return;
          const now2 = audioCtxRef.current.currentTime;
          const hbOsc2 = audioCtxRef.current.createOscillator();
          const hbGain2 = audioCtxRef.current.createGain();

          hbOsc2.type = 'sine';
          hbOsc2.frequency.setValueAtTime(40, now2);
          hbGain2.gain.setValueAtTime(0, now2);
          hbGain2.gain.linearRampToValueAtTime(0.12, now2 + 0.03);
          hbGain2.gain.exponentialRampToValueAtTime(0.001, now2 + 0.18);

          hbOsc2.connect(hbGain2);
          hbGain2.connect(ctx.destination);
          hbOsc2.start(now2);
          hbOsc2.stop(now2 + 0.2);
        }, 140);
      };

      heartbeatTimerRef.current = window.setInterval(triggerHeartbeat, 1800);
      setIsPlaying(true);
    } catch {
      // AudioContext not allowed or unsupported
      setIsPlaying(false);
    }
  };

  const stopSound = () => {
    if (heartbeatTimerRef.current) {
      clearInterval(heartbeatTimerRef.current);
      heartbeatTimerRef.current = null;
    }
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch {}
      oscillatorRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      try {
        audioCtxRef.current.suspend();
      } catch {}
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSound();
    } else {
      startSound();
    }
  };

  useEffect(() => {
    return () => {
      stopSound();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? onLabel : offLabel}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
        isPlaying
          ? 'bg-red-950/80 text-red-300 border-red-700/80 shadow-[0_0_15px_rgba(220,38,38,0.5)]'
          : 'bg-neutral-900/80 text-neutral-400 border-neutral-800 hover:text-neutral-200 hover:border-neutral-700'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-red-500 animate-pulse" />
          <span className="hidden sm:inline">{onLabel}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{offLabel}</span>
        </>
      )}
    </button>
  );
};
