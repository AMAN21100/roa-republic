import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { ImagePlaceholder } from '../components/imagePlaceholder';
import { DiveDeeper } from '../components/DiveDeeper';

interface FeedbackProps {
  setCurrentTab: (tab: string) => void;
}

export const FeedbackView: React.FC<FeedbackProps> = ({ setCurrentTab }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mqakkngl', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setErrorMessage('Failed to send transmission. Please try again.');
      }
    } catch {
      setErrorMessage('Network connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16">
      
      {/* Heading */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-widest text-red-600">Athlete Voice</span>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Feedback & Support
        </h1>
        <p className="text-xs md:text-sm text-[#888888]">
          Share website issues, regional tournament suggestions, or platform ideas with the ROA core team.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto rounded-2xl bg-[#080808] border border-[#222222] p-6 md:p-10">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-red-600 mx-auto" />
            <h2 className="text-2xl font-bold uppercase text-white">Transmission Received</h2>
            <p className="text-[#888888] text-sm">Thank you for helping us sharpen the ROA platform.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 rounded bg-[#181818] border border-[#262626] text-white text-xs uppercase font-bold hover:bg-red-600 transition-colors"
            >
              Submit Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-white mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  name="NAME" 
                  required 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded bg-[#111111] border border-[#262626] text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-white mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  name="EMAIL" 
                  required 
                  placeholder="athlete@domain.com"
                  className="w-full px-4 py-3 rounded bg-[#111111] border border-[#262626] text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-white mb-2">
                Issue You Faced in Our Website
              </label>
              <input 
                type="text" 
                name="ISSUE" 
                required 
                placeholder="Describe any bug, broken button, or navigation difficulty"
                className="w-full px-4 py-3 rounded bg-[#111111] border border-[#262626] text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-white mb-2">
                How Can We Make This Website Better?
              </label>
              <textarea 
                name="SUGGESTION" 
                rows={3}
                required 
                placeholder="New sport categories, local tournament tracking, UI feedback..."
                className="w-full px-4 py-3 rounded bg-[#111111] border border-[#262626] text-white text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-white mb-2">
                Where Did You First Hear About Us?
              </label>
              <input 
                type="text" 
                name="SOURCE" 
                required 
                placeholder="Social media, academy, tournament, friend..."
                className="w-full px-4 py-3 rounded bg-[#111111] border border-[#262626] text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>

            {errorMessage && (
              <p className="text-xs text-red-500 font-bold tracking-wide">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded bg-red-600 hover:bg-red-700 disabled:bg-red-900 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Transmitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Submit Feedback
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Banner */}
      <div className="w-full overflow-hidden rounded-xl border border-[#222222]">
        <ImagePlaceholder src="/images/5.png" label="Banner (5.png)" aspect="aspect-[21/9]" />
      </div>

      {/* Dive Deeper */}
      <DiveDeeper setCurrentTab={setCurrentTab} />

    </div>
  );
};