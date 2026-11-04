import React from 'react';
import { Award, Shield, FileText, HelpCircle, Mail, Info, Heart } from 'lucide-react';
import type { ActiveView } from '../../types';

interface FooterProps {
  onNavigate: (view: ActiveView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">Certify<span className="text-blue-500">HQ</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The premier open-access independent directory discovering, auditing, and indexing 100% free verified certificates, digital credentials, and financial aid pathways from Ivy League institutions and global technology leaders.
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
              <span>Curated for ambitious self-taught learners</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </div>
          </div>

          {/* Quick links to categories */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Core Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryName: 'Artificial Intelligence' })}
                  className="hover:text-white transition-colors"
                >
                  Artificial Intelligence & LLMs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryName: 'Computer Science & Code' })}
                  className="hover:text-white transition-colors"
                >
                  Computer Science & Software
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryName: 'Cybersecurity' })}
                  className="hover:text-white transition-colors"
                >
                  Cybersecurity & SOC Triage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryName: 'Cloud Computing' })}
                  className="hover:text-white transition-colors"
                >
                  AWS & Azure Cloud Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Guides and resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Tuition Waiver Blueprints
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'guide', guideSlug: 'how-to-get-harvard-cs50-certificate-free' })}
                  className="hover:text-white transition-colors text-left"
                >
                  How to Get Harvard CS50 Free
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'guide', guideSlug: 'how-to-apply-coursera-financial-aid-template' })}
                  className="hover:text-white transition-colors text-left"
                >
                  Coursera Financial Aid Template
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'guide', guideSlug: 'top-free-cybersecurity-certifications-remote-jobs' })}
                  className="hover:text-white transition-colors text-left"
                >
                  Free Cyber Defense Pathways
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'guides' })}
                  className="hover:text-blue-400 text-blue-400 transition-colors font-medium"
                >
                  Explore All Guides →
                </button>
              </li>
            </ul>
          </div>

          {/* Obligatory US Legal Pages for AdSense Compliance */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Transparency & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'legal', page: 'privacy' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-slate-400" />
                  Privacy Policy (CCPA/GDPR)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'legal', page: 'terms' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'legal', page: 'disclaimer' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                  FTC Advertising Disclosure
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'legal', page: 'about' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                  About Our Editorial Mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'legal', page: 'contact' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  Editorial Inquiries
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer and copyright */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} CertifyHQ. All rights reserved. Independent educational research directory. Trademarks (Harvard, MIT, Google, AWS, Stanford, Microsoft, IBM) belong to their respective owners.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>CCPA & GDPR Compliant</span>
            <span>•</span>
            <span>Google AdSense & High-RPM Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
