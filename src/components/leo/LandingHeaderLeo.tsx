'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import LeoAiLogo1 from '../../imports/LeoAiLogo1';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Solutions', href: '#agents' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'FAQ', href: '#faq' },
];

export default function LandingHeaderLeo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Header scroll efekti için 50px threshold
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Scrolled state'e göre dynamic offset
      const headerOffset = isScrolled ? 64 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] bg-[#0A0A0A]/90 dark:bg-[#0A0A0A]/90 light:bg-white/90 backdrop-blur-md border-b border-[#161616]/20 dark:border-[#161616]/20 light:border-[#E5E7EB]/50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            {isHomePage ? (
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className={`transition-all duration-300 ${
                  isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                }`}>
                  <LeoAiLogo1 />
                </div>
                <span
                  className={`text-xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] transition-all duration-300 ${
                    isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
                  }`}
                  style={{ fontFamily: '"Switzer", "Switzer Placeholder", sans-serif' }}
                >
                  Leo AI Platform
                </span>
              </a>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className={`transition-all duration-300 ${
                  isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                }`}>
                  <LeoAiLogo1 />
                </div>
                <span
                  className={`text-xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] transition-all duration-300 ${
                    isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
                  }`}
                  style={{ fontFamily: '"Switzer", "Switzer Placeholder", sans-serif' }}
                >
                  Leo AI Platform
                </span>
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              isHomePage ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] hover:text-[#70BEFA] transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={`/${item.href}`}
                  className="text-sm text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] hover:text-[#70BEFA] transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Login Link */}
            <a
              href="https://smartagent.leoai.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block text-sm text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] hover:text-[#70BEFA] transition-colors"
            >
              Login
            </a>

            {/* CTA Button */}
            {isHomePage ? (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="hidden md:inline-flex bg-transparent border border-[#70BEFA]/30 hover:bg-[#70BEFA]/10 text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] rounded-lg transition-all"
              >
                Get in touch
              </Button>
            ) : (
              <Link href="/#contact">
                <Button
                  className="hidden md:inline-flex bg-transparent border border-[#70BEFA]/30 hover:bg-[#70BEFA]/10 text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] rounded-lg transition-all"
                >
                  Get in touch
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#161616] dark:border-[#161616] light:border-[#E5E7EB] py-4">
            <div className="flex flex-col gap-4">
              {/* Mobile Navigation */}
              {navigation.map((item) => (
                isHomePage ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] hover:text-[#70BEFA] transition-colors px-2 py-2"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={`/${item.href}`}
                    className="block text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] hover:text-[#70BEFA] transition-colors px-2 py-2"
                  >
                    {item.name}
                  </Link>
                )
              ))}

              <div className="border-t border-[#161616] dark:border-[#161616] light:border-[#E5E7EB] pt-4 space-y-4">
                <a
                  href="https://smartagent.leoai.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] hover:text-[#70BEFA] transition-colors px-2"
                >
                  Login
                </a>

                {isHomePage ? (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#contact');
                    }}
                    className="w-full bg-transparent border border-[#70BEFA]/30 hover:bg-[#70BEFA]/10 text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] rounded-lg transition-all"
                  >
                    Get in touch
                  </Button>
                ) : (
                  <Link href="/#contact">
                    <Button
                      className="w-full bg-transparent border border-[#70BEFA]/30 hover:bg-[#70BEFA]/10 text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] rounded-lg transition-all"
                    >
                      Get in touch
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
